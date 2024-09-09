

interface WorkComponentProps {
  logoLink: string;              // URL or local file path
  backgroundColor : string;
  workHref : string;
}

export default function WorkComponent({ logoLink, backgroundColor, workHref   }: WorkComponentProps) {
    return (
        <div 
            className=" flex justify-center items-center w-screen h-[50vh]"
            style={{ backgroundColor: `#${backgroundColor}` }}>

          <a href={`work/${workHref}`}>
            <img src={logoLink} alt="Logo" className="w-[200px] md:w-[400px] h-auto hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      );
    }
