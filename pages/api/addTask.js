import { Tasks , dbConnection } from './model/taaskMoldel'

const add = async (req , res )=>{
      dbConnection();
      if (method === "OPTIONS") {
        return res.status(200).send("ok")
      }
try{
    if(req.method === 'POST'){
       
       
        const newTask = await new Tasks({
            taskText:req.body.taskText
        })
        await newTask.save();
        res.status(200).json({message:' new task added successfully :)'});
    }else if (req.method === 'GET')
    {
       
        const AllTasks = await  Tasks.find()
        res.status(200).json({ success:true , data: AllTasks});
    }else if (req.method === 'DELETE')
    {
      
        console.log(req.params);
        const AllTasks = await  Tasks.deleteOne({ _id : req.body.id })
        res.status(200).json({ success:true , massage: `One task with-id: ${req.body.id}  deleted successfully` });
    }
}catch(err){
console.log(err.massage);

}
   
  

};

export default add