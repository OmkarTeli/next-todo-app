import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const DeleteButton = () => {
   return (
      <button>
         <HiOutlineTrash size={24} className="text-red-600" />
      </button>
   );
};

export default DeleteButton;
