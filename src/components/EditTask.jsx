"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditTask = (props) => {
   const router = useRouter();
   const [newTask, setNewTask] = useState({
      title: props.title,
      description: props.description,
   });

   const handleNewChange = (event) => {
      const { name, value } = event.target;
      setNewTask((prevNote) => {
         return {
            ...prevNote,
            [name]: value,
         };
      });
      console.log(newTask);
   };

   const handleNewSubmit = async (event) => {
      event.preventDefault();
      try {
         const res = await fetch(
            `http://localhost:3000/api/v1/todo/${props.id}`,
            {
               method: "PUT",
               headers: {
                  "Content-type": "application/json",
               },
               body: JSON.stringify(newTask),
            }
         );
         if (!res.ok) {
            throw new Error("Failed to update topic");
         }
         router.refresh();
         router.push("/");
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div>
         <form className="relative w-1/2 mx-auto my-8 mb-5 bg-white p-4 rounded-md">
            <input
               name="title"
               onChange={handleNewChange}
               value={newTask.title}
               placeholder="Title"
               // className="w-full"
               className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-yellow-400"
            />
            <textarea
               name="description"
               onChange={handleNewChange}
               value={newTask.description}
               placeholder="Description..."
               className="w-full mt-4 border-b-2 border-gray-300 focus:outline-none focus:border-yellow-400"
               // rows={expanded ? 3 : 1}
            />
            {/* <button onClick={handleSubmit}>Add</button> */}
            <button
               onClick={handleNewSubmit}
               className="bg-yellow-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 relative left-72"
            >
               Edit
            </button>
         </form>
      </div>
   );
};

export default EditTask;
