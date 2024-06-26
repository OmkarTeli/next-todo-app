import React from "react";
import TaskCard from "./TaskCard";
import axios from "axios";
const getData = async () => {
   //    const res = await fetch("http://localhost:3000/api/v1/todo", {
   //       method: "GET",
   //       headers: {
   //          "Content-Type": "application/json",
   //       },
   //    });
   //    const tasks = await res.json();
   const { data } = await axios.get("http://localhost:3000/api/v1/todo");
   console.log(data);
   return data;
};
const TaskContainer = async () => {
   const allTasks = await getData();
   //    console.log(allTasks);
   return (
      <div className="flex flex-col justify-center items-center">
         {/* <h1>{allTasks.message}</h1> */}
         {allTasks.data.map((task, index) => (
            <TaskCard
               key={index}
               id={task.id}
               title={task.title}
               description={task.description}
            />
         ))}
      </div>
   );
};

export default TaskContainer;
