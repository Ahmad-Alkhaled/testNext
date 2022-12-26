import mongoose , { Schema, model } from 'mongoose'; 

const tasks = new Schema(
    {
      taskText:String
    },
    { timestamps: true }

  );
  const Tasks = mongoose.models.tasks || mongoose.model('tasks', tasks);


  const DB =  'mongodb://127.0.0.1:27017/testNextJS';
  const dbConnection = ()=>{
    mongoose.connect(DB);
  } 

  export { Tasks , dbConnection } 