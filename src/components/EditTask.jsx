import React from "react";

const EditTask = () => {
   return (
      <div>
         <form className="relative w-1/2 mx-auto my-8 mb-5 bg-white p-4 rounded-md">
            <input
               name="title"
               //    onChange={handleChange}
               //    value={task.title}
               placeholder="Title"
               // className="w-full"
               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-yellow-400"
            />
            <textarea
               name="description"
               //    onChange={handleChange}
               //    value={task.description}
               placeholder="Description..."
               className="w-full mt-4 border-b-2 border-gray-300 focus:outline-none focus:border-yellow-400"
               // rows={expanded ? 3 : 1}
            />
            {/* <button onClick={handleSubmit}>Add</button> */}
            <button
               //    onClick={handleSubmit}
               className="bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 relative left-72"
            >
               Edit
            </button>
         </form>
      </div>
   );
};

export default EditTask;
