import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

const TaskCard = (props) => {
   return (
      <div className="note bg-white rounded-lg shadow-md p-5 w-1/2 m-4 float-left">
         <h1 className="text-2xl text-yellow-500 font-bold mb-1.5">
            {props.title}
         </h1>
         <p className="text-lg mb-2.5 whitespace-pre-wrap break-words">
            {props.description}
         </p>
         <div className="flex flex-row gap-[590px]">
            {/* <button className="relative float-right mr-2.5 text-yellow-500 border-none w-9 h-9 cursor-pointer focus:outline-none">
               Delete
            </button> */}
            <Link href={"/editTask/1"}>
               <HiPencilAlt size={24} className="text-green-600" />
            </Link>
            <DeleteButton />
         </div>
      </div>
   );
};

export default TaskCard;
