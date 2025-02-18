import { Link } from "react-router-dom";
import Project from "./Project";

const Projects = () => {

   const projectss = [
      {
         id: 1,
         company: 'Company 1',
         year: '2024',
         title: 'Project 1',
         results: [
            { title: 'Project 1 Result 1' },
            { title: 'Project 1 Result 2' },
            { title: 'Project 1 Result 3' }
         ],
         liveLink: 'https://www.google.com',
         githubLink: 'https://www.github.com',
         image: 'https://img.freepik.com/free-photo/still-life-business-roles-with-various-mechanism-pieces_23-2149352652.jpg?uid=R101607069&ga=GA1.1.1399524707.1729683193&semt=ais_authors_boost'
      },
      {
         id: 2,
         company: 'Company 2',
         year: '2024',
         title: 'Project 2',
         results: [
            { title: 'Project 2 Result 1' },
            { title: 'Project 2 Result 2' },
            { title: 'Project 2 Result 3' }
         ],
         liveLink: 'https://www.google.com',
         githubLink: 'https://www.github.com',
         image: 'https://img.freepik.com/free-photo/office-workers-using-finance-graphs_23-2150408665.jpg?uid=R101607069&ga=GA1.1.1399524707.1729683193&semt=ais_authors_boost'
      },
      {
         id: 3,
         company: 'Company 3',
         year: '2024',
         title: 'Project 3',
         results: [
            { title: 'Project 3 Result 1' },
            { title: 'Project 3 Result 2' },
            { title: 'Project 3 Result 3' }
         ],
         liveLink: 'https://www.google.com',
         githubLink: 'https://www.github.com',
         image: 'https://img.freepik.com/premium-photo/group-businesspeople-stacking-their-hands-wooden-desk_23-2147839946.jpg?uid=R101607069&ga=GA1.1.1399524707.1729683193&semt=ais_authors_boost'
      }
   ];

   return (
      <div className="container mx-auto">


         <div>
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">Real-World Results</p>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
            <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">See how I transformed concepts into engaging digital experiences.</p>
         </div>

         <div className="flex flex-col mt-10 md:mt-20 gap-20">
            {
               projectss.map((project) => (
                  <Project key={project.id} project={project} />
               ))
            }
         </div>


      </div>
   );
};

export default Projects;
