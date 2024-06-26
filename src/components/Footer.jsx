import React from "react";

const Footer = () => {
   const year = new Date().getFullYear();
   return (
      <footer className="flex justify-center text-center h-10 w-full bg-yellow-100 absolute bottom-0 -left-px">
         <p>By Omkar Teli - Copyright {year}</p>
      </footer>
   );
};

export default Footer;
