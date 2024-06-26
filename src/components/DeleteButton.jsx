"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const DeleteButton = (props) => {
   const router = useRouter();
   const handleDeleteTask = async () => {
      const confirmed = confirm("Do You Want To Delete Task..?");
      if (confirmed) {
         const res = await fetch(
            `http://localhost:3000/api/v1/todo?id=${props.id}`,
            {
               method: "DELETE",
            }
         );
         if (res.ok) {
            router.refresh();
         }
      }
   };
   return (
      <button onClick={handleDeleteTask}>
         <HiOutlineTrash size={24} className="text-red-600" />
      </button>
   );
};

export default DeleteButton;
