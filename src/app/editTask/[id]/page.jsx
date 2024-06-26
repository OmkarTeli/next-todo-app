import React from "react";
import EditTask from "@/components/EditTask";

const getTask = async (id) => {
   try {
      const res = await fetch(`http://localhost:3000/api/v1/todo/${id}`, {
         cache: "no-store",
      });
      if (!res.ok) {
         throw new Error("Failed to fetch topic");
      }
      return res.json();
   } catch (error) {
      console.log(error);
   }
};

const EditTaskPage = async ({ params }) => {
   const { id } = params;
   const { data } = await getTask(id);
   const { title, description } = data;
   console.log("id->", id);
   return (
      <>
         <EditTask id={id} title={title} description={description} />
      </>
   );
};

export default EditTaskPage;
