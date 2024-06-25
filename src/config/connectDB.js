import mongoose from "mongoose";

export default async () => {
   try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Database Connected Successfully....");
   } catch (error) {
      console.log("Error in database connection--", error);
   }
};
