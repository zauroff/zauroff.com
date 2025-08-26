import { ShaderMaterial, Vector2 } from "three"

export default class RefractionMaterial extends ShaderMaterial {
  constructor(options: {
    envMap?: any,
    backfaceMap?: any,
    resolution?: Vector2,
    time?: number
  } = {}) {
    super({
      vertexShader: `
        varying vec3 worldNormal;
        varying vec3 viewDirection;
        void main() {
          vec4 transformedNormal = vec4(normal, 0.);
          vec4 transformedPosition = vec4(position, 1.0);
          #ifdef USE_INSTANCING
            transformedNormal = instanceMatrix * transformedNormal;
            transformedPosition = instanceMatrix * transformedPosition;
          #endif
          worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;
          viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);
          gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D envMap;
        uniform sampler2D backfaceMap;
        uniform vec2 resolution;
        uniform float time;
        varying vec3 worldNormal;
        varying vec3 viewDirection;
        
        float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {
          return pow(1.05 + dot(viewDirection, worldNormal), 100.0);
        }
        
        // Random function for glitch effect
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }
        
        // Noise function for glitch distortion
        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }
        
        void main() {
          vec2 uv = gl_FragCoord.xy / resolution;
          
          // Glitch effect parameters
          float glitchTime = time * 0.3;
          float glitchIntensity = 0.015;
          float glitchFrequency = 8.0;
          
          // Create stronger glitch distortion with both horizontal and vertical components
          float horizontalGlitch = noise(vec2(uv.y * glitchFrequency, glitchTime)) * 2.0 - 1.0;
          float verticalGlitch = noise(vec2(uv.x * glitchFrequency * 0.7, glitchTime * 1.3)) * 2.0 - 1.0;
          
          horizontalGlitch *= step(0.85, random(vec2(glitchTime, uv.y * 50.0))) * glitchIntensity;
          verticalGlitch *= step(0.88, random(vec2(glitchTime * 1.1, uv.x * 30.0))) * glitchIntensity * 0.8;
          
          vec2 glitchOffset = vec2(horizontalGlitch, verticalGlitch);
          
          vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;
          vec3 refractedDir = refract(viewDirection, normal, 1.0/1.5);
          
          // Much stronger chromatic aberration with distinct vertical separation
          float chromaticStrength = 0.008 + sin(time * 1.5) * 0.003;
          
          // Red channel - shifted up and slightly left
          vec2 redOffset = vec2(-chromaticStrength * 0.3, chromaticStrength * 1.2) + glitchOffset;
          
          // Blue channel - shifted up and right
          vec2 blueOffset = vec2(chromaticStrength * 0.5, chromaticStrength * 0.8) + glitchOffset * 0.9;
          
          // Sample the environment map with different offsets for each channel
          vec4 redSample = texture2D(envMap, uv + refractedDir.xy + redOffset);
          vec4 blueSample = texture2D(envMap, uv + refractedDir.xy + blueOffset);
          
          // Create true chromatic aberration by using only the specific color channel from each sample
          float redChannel = redSample.r * 1.1;
          float blueChannel = blueSample.b * 0.9;
          
          
          
          // Subtle color grading to enhance the effect
          finalColor = pow(finalColor, vec3(0.9)); // Slight gamma adjustment
          finalColor *= 1.1; // Brightness boost
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      uniforms: {
        envMap: { value: options.envMap || null },
        backfaceMap: { value: options.backfaceMap || null },
        resolution: { value: options.resolution || new Vector2(1280, 720) },
        time: { value: options.time || 0 }
      },
      transparent: true
    })
  }

  updateTime(time: number) {
    this.uniforms.time.value = time;
  }
}
