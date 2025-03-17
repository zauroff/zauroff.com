import { motion } from "framer-motion"
import ProjectItemCard from "./project-item-card"


export default function Projects() {

    return (
        <motion.div 
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{opacity:0, y: -10}}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: .5 }}
        className="flex flex-col md:py-20 py-8 overflow-hidden min-h-screen"
        >

            <h2 className="pt-24 md:text-5xl text-3xl font-black">work</h2>
            <ProjectItemCard 
                title="North Street Creative"
                subtitle="Software Engineer Intern"
                infoTitle="June 2024 - July 2024, Oct 2024 - Feb 2025"
                infoSubtitle="Typescript, Next.JS, GraphQL, SASS"
                dropdownText={`- Reengineered the company website using Next.js and Typescript, improving performance by 20%

                    - Integrated a headless CMS with GraphQL and Apollo, enabling dynamic content fetching and decoupling site hosting from the CMS for faster load times

                    - Created a new headless CMS website product, enabling the company to offer clients a flexible and scalable solution for content management and website development

                    - Translated Figma designs into fully responsive, interactive web experiences, collaborating closely with designers to ensure pixel-perfect implementation for client projects`}
            />

            <ProjectItemCard 
                title="RF CUNY - STEMKasa"
                subtitle="Software Engineer Intern"
                infoTitle="July 2024 - August 2024"
                infoSubtitle="Python, Flask, MongoDB, Postman, OpenAI"
                dropdownText={`-Led a team of three interns to develop a Python microservice using Flask for OpenAI-powered chatbot interactions,
                        integrating with a MongoDB database managed by another microservice
                        
                        - Collaborated with intern teams working on separate LLM microservices (Gemini, Mistral, Claude), ensuring seamless
                        interoperability for a unified multi-model AI experience
                        
                        - Developed a React-based text-to-speech and speech-to-text component, enabling voice interactions with the chatbot
                        through our microservice
                        
                        - Integrated the microservice and speech components into the frontend, delivering an MVP that allows students to create
                        custom quizzes, flashcards, and tutor chatbots based on teacher-uploaded course materials`}
                />

            <h2 className="mt-12 pt-6 md:text-5xl text-3xl font-black">projects</h2>

            <ProjectItemCard
                title="what's for lunch"
                subtitle="ai powered lunch recommendations"
                infoTitle="whatsforlunch.nyc"
                infoSubtitle="Next.JS, Supabase, Python, Docker, Figma"
            />

            <ProjectItemCard
                title="IMC Prosperity"
                subtitle="Global Algorithmic Trading Competition"
                infoTitle="prosperity.imc.com"
                infoSubtitle="Python, Numpy"
            />

            <ProjectItemCard
                title="portfolio"
                subtitle="this website"
                infoTitle="zauroff.com"
                infoSubtitle="Next.JS, Figma"
            />

            <ProjectItemCard
                title="study room reservation bot"
                subtitle="reserves baruch college study rooms"
                infoTitle="gatekeeping for now"
                infoSubtitle="Python, Selenium"
            />

           
            

        </motion.div>
    )
};