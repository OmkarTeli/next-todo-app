// import React from "react";

// const Footer = () => {
//    const year = new Date().getFullYear();
//    return (
//       <footer className="flex justify-center text-center h-10 w-full bg-yellow-100 absolute bottom-0 -left-px">
//          <p>By Omkar Teli - Copyright {year}</p>
//       </footer>
//    );
// };

// export default Footer;
import React from "react";

const Footer = () => {
   const year = new Date().getFullYear();
   return (
      <footer className="bg-yellow-100 w-full h-10 flex items-center justify-center fixed bottom-0">
         <p className="text-center w-full">By Omkar Teli - Copyright {year}</p>
      </footer>
   );
};

export default Footer;
