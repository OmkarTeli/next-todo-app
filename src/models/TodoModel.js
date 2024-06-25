import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
});

const TodoModel = mongoose.models.todos || mongoose.model("todos", todoSchema);
export default TodoModel;
