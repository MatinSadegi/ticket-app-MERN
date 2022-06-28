import PostMessage from '../models/postMessage.js';
import User from '../models/user.js';


export const getPosts = async(req,res) =>{
    try{
        const postMessages = await PostMessage.find();
        const users = await User.find();
        
        res.status(200).json({postMessages,users});
         
    }catch(error){
        res.status(404).json({message:error.message});
    }
}
export const createPost = async(req,res) =>{
    const post = req.body;
    const newPost = new PostMessage({...post, createdAt: new Date().toISOString()})
    const { title, studentNumber, nationalCode } = req.body;
    
    try {
        if(studentNumber.length === null ){
            return res.status(400).json({message:"شماره دانشجویی را وارد کنید"})
        }else if(studentNumber.length !== 9){
            return res.status(400).json({message:"شماره دانشجویی وارد شده صحیح نمی باشد"})
        }
        if(nationalCode.length === null ){
            return res.status(400).json({message:"شماره ملی را وارد کنید"})
        }
        else if (nationalCode.length !== 10) {
            return res.status(400).json({ message: 'کد ملی وارد شده صحیح نمی باشد' });
        }
        await newPost.save();
        console.log(post);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message})
        console.log(newPost);
    }
}