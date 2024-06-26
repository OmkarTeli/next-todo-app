import connectDB from "@/config/connectDB";
import TodoModel from "@/models/TodoModel";
import { NextResponse } from "next/server";
export async function PUT(req, { params }) {
   const { id } = params;
   const { title, description } = await req.json();
   try {
      await connectDB();
      const task = await TodoModel.findByIdAndUpdate(id, {
         title,
         description,
      });

      if (!task) {
         return NextResponse.json(
            { message: "task not found" },
            {
               status: 404,
            }
         );
      }
      return NextResponse.json(
         { message: "task updated successfully" },
         {
            status: 200,
         }
      );
   } catch (error) {
      console.log("error--->", error);
      return NextResponse.json(
         { message: "Something went wrong in updating todo" },
         {
            status: 400,
         }
      );
   }
}

//GET SINGLE TODO
export async function GET(req, { params }) {
   const { id } = params;

   try {
      await connectDB();
      const singleTask = await TodoModel.findOne({ _id: id });
      return NextResponse.json(
         { data: singleTask },
         {
            status: 200,
         }
      );
   } catch (error) {
      console.log("error--->", error);
      return NextResponse.json(
         { mesasg: "Something went wrong in getting single task" },
         {
            status: 400,
         }
      );
   }
}
