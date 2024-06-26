import connectDB from "@/config/connectDB";
import { NextResponse } from "next/server";
import TodoModel from "@/models/TodoModel";

//GET TODO
export async function GET(req) {
   try {
      await connectDB();
      const response = await TodoModel.find();
      return NextResponse.json(
         { data: response },
         {
            status: 200,
         }
      );
   } catch (error) {
      console.log("error--->", error);
      return NextResponse.json(
         { mesasg: "Something went wrong" },
         {
            status: 400,
         }
      );
   }
}

//CREATE TODO || POST
export async function POST(req) {
   const body = await req.json();
   try {
      await connectDB();
      const response = await TodoModel.create(body);
      return NextResponse.json(
         { message: response, message2: "todo created successfully" },
         {
            status: 201,
         }
      );
   } catch (error) {
      console.log("error--->", error);
      return NextResponse.json(
         { mesasg: "Something went wrong in creating todo" },
         {
            status: 400,
         }
      );
   }
}

//DELETE TODO || DELETE
export async function DELETE(req) {
   const id = req.nextUrl.searchParams.get("id");
   try {
      await connectDB();
      const result = await TodoModel.findByIdAndDelete(id);

      if (!result) {
         return NextResponse.json(
            { message: "Todo not found" },
            {
               status: 404,
            }
         );
      }
      return NextResponse.json(
         { message: "Todo deleted successfully" },
         {
            status: 200,
         }
      );
   } catch (error) {
      console.log("error--->", error);
      return NextResponse.json(
         { message: "Something went wrong in deleting todo" },
         {
            status: 400,
         }
      );
   }
}
