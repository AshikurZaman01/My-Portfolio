import checkIcon from '../../../assets/assets/icons/check-circle.svg'

const ProjectResults = ({ results }) => {

   return (
      <ul className="space-y-2">
         {
            results.map((result, index) => (
               <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                  <img src={checkIcon} className="size-5 md:size-6 invert opacity-50" alt="Check" />
                  <span>{result.title}</span>
               </li>
            ))
         }
      </ul>
   );
};

export default ProjectResults;
