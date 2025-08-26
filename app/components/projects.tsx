import { motion } from "framer-motion";
import ProjectItemCard from "./project-item-card";
import ChromaticText from "./chromatic-text";
export default function Projects() {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:py-20 py-8 overflow-hidden min-h-screen"
    >
      <h2 className="pt-24 md:text-5xl text-3xl font-black">work</h2>
      <ProjectItemCard
        title="Digitalocean"
        subtitle="Software Engineer Intern"
        infoTitle="June 2025 - Aug 2025"
        infoSubtitle="DBaas Team"
        dropdownText="brought advanced database settings to the ui, allowing users to have more granular control over their databases"
      />
      <ProjectItemCard
        title="North Street Creative"
        subtitle="Software Engineer Intern"
        infoTitle="June 2024 - Feb 2025"
        infoSubtitle="Typescript, Next.JS, GraphQL, SASS"
        dropdownText={`re-engineered company's website using next.js, integrating wordpress as a headless cms`}
      />

      <ProjectItemCard
        title="RF CUNY - STEMKasa"
        subtitle="Software Engineer Intern"
        infoTitle="July 2024 - August 2024"
        infoSubtitle="Python, Flask, MongoDB, Postman, OpenAI"
        dropdownText={`created an mvp for edtech startup`}
      />

      <h2 className="mt-12 pt-6 md:text-5xl text-3xl font-black">projects</h2>

      <ProjectItemCard
        title="Scheduler Builder RMP"
        subtitle="Chrome Extension that shows RMP ratings on CUNY's Scheduler Builder"
        infoTitle="Chrome Store"
        infoSubtitle="Javascript"
        SubtitleLink="https://chromewebstore.google.com/detail/schedule-builder-rmp/mjkpehpjpihlakneahlgloncecoboimk?hl=en-US"
      />

      <ProjectItemCard
        title="what's for lunch"
        subtitle="ai powered lunch recommendations"
        infoTitle="whatsforlunch.nyc"
        infoSubtitle="Next.JS, Supabase, Python, Docker, Figma"
        SubtitleLink="https://whatsforlunch.nyc"
      />

      <ProjectItemCard
        title="IMC Prosperity"
        subtitle="Global Algorithmic Trading Competition"
        infoTitle="prosperity.imc.com"
        infoSubtitle="Python, Numpy"
        SubtitleLink="https://prosperity.imc.com"
      />

      <ProjectItemCard
        title="portfolio"
        subtitle="this website"
        infoTitle="zauroff.com"
        infoSubtitle="Next.JS, Figma, ThreeJS"
        SubtitleLink="https://zauroff.com"
      />

      <ProjectItemCard
        title="study room reservation bot"
        subtitle="reserves baruch college study rooms"
        infoTitle="gatekeeping for now"
        infoSubtitle="Python, Selenium"
      />
    </motion.div>
  );
}
