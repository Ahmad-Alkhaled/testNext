import { Tasks , dbConnection } from './model/taaskMoldel'

const Delete = async (req , res )=>{
     if(req.method === 'DELETE')
    {
        const AllTasks = await  Tasks.deleteOne({ _id : req.query.id })
        res.status(200).json({ success:true , massage: `One task with-id: ${req.query.id}  deleted successfully` });
    }  

};

export default Delete