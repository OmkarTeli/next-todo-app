import CreateTask from "@/components/CreateTask";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
   return (
      <>
         <Header />
         <CreateTask />
         <Footer />
      </>
   );
}
