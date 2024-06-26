import React from "react";

const TaskCard = (props) => {
   return (
      <div className="note bg-white rounded-lg shadow-md p-5 w-96 m-4 float-left">
         <h1 className="text-xl text-yellow-500 font-bold mb-1.5">
            {props.title}
         </h1>
         <p className="text-lg mb-2.5 whitespace-pre-wrap break-words">
            {props.description}
         </p>
         <button className="relative float-right mr-2.5 text-yellow-500 border-none w-9 h-9 cursor-pointer focus:outline-none">
            Delete
         </button>
      </div>
   );
};

export default TaskCard;
