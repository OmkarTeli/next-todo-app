import CreateTask from "@/components/CreateTask";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TaskContainer from "@/components/TaskContainer";
import Image from "next/image";

export default function Home() {
   return (
      <div className="flex flex-col min-h-screen">
         <main className="flex-grow">
            <CreateTask />
            <TaskContainer />
         </main>
         <Footer />
      </div>
   );
}
