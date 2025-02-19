import { Link } from "react-router-dom";
import ProjectResults from "./ProjectResults";
import Button from "../../../Utils/AnimatedButton/Button";
import ProjectImg from "./ProjectImg";
import grainImage from "../../../assets/assets/images/grain.jpg"


const Project = ({ project }) => {

   const { company, year, title, results, image, githubLink, liveLink } = project || {};


   return (
      <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute  after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 p-8 md:pt-12 md:px-10 after:pointer-events-none">


         <div className="absolute inset-0 -z-10 opacity-5"
            style={{
               backgroundImage: `url(${grainImage})`
            }}>

         </div>

         <div className="lg:grid lg:grid-cols-2">
            <div>

               <div className="bg-gradient-to-r from-emerald-300  to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{company}</span>
                  <span>&bull;</span>
                  <span>{year}</span>
               </div>


               <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl">{title}</h3>
               <hr className="border-t-2 border-white/5 mt-4 mb-4 md:mt-5" />

               <ProjectResults results={results} />


               <div className="flex flex-col md:flex-row gap-x-4">
                  <Link to={githubLink} target="_blank">
                     <Button text="Visit Github Link"></Button>
                  </Link>

                  <Link to={liveLink} target="_blank">
                     <Button text="Visit Live Link"></Button>
                  </Link>
               </div>
            </div>


            <ProjectImg title={title} image={image} />
         </div>

      </div >
   );
};

export default Project;
