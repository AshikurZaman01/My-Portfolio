import Links from "./Links";

const Header = () => {

   const navLinks = [
      { id: 1, name: "Home", path: "/" },
      { id: 2, name: "Projects", path: "/projects" },
      { id: 3, name: "About", path: "/about" },
      { id: 4, name: "Contact", path: "/contact" },
   ];

   return (
      <header className="fixed top-5 left-0 w-full flex justify-center z-50 ">

         <nav className="px-5 py-2 border border-white/20 rounded-full bg-white/10 backdrop-blur-md shadow-lg">

            <ul className="flex gap-3">
               {
                  navLinks.map((item) => (
                     <Links key={item.id} items={item} />
                  ))
               }
            </ul>

         </nav>

      </header>
   );
};

export default Header;
