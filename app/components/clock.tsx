import dynamic from "next/dynamic";


const Clock = dynamic(() => import('react-live-clock'), {ssr:false});

export default function ClockComponent(){
    return (
        <Clock 
        format={'HH:mm:ss'} 
        ticking={true} 
        className=" text-l md:text-xl"
        style={{
            fontFamily: "Owners",
            fontWeight: 600,
        }}/>
    );
};

// font-family: "owners", sans-serif;
// font-weight: 400;
// font-style: normal;