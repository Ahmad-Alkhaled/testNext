import mongoose , { Schema, model } from 'mongoose'; 

const tasks = new Schema(
    {
      taskText:String
    },
    { timestamps: true }

  );
  const Tasks = mongoose.models.tasks || mongoose.model('tasks', tasks);


  const DB =  'mongodb+srv://Ahmad:Ahmad@cluster0.yq3mcc1.mongodb.net/?retryWrites=true&w=majority';
  const dbConnection = ()=>{
    mongoose.connect(DB);
  } 

  export { Tasks , dbConnection } 