const User=require("../model/userSchema.js");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const register=async(req,res)=>{

    // 1)check if user already exist
    // 2) hash the password
    // 3) create a new user
    // 4) generate token
    // 5) send response

    try{
        const {user,pass}=req.body;
        
        console.log(req.body,user,pass);
        const finduser=await User.findOne({user:user});
        if(finduser)
        {
            return res.status(400).json({message:"user already exist"});
        }
        else{
            const hash=await bcrypt.hash(pass,7);
            const newuser=await User.create({user:user,pass:hash});

            const token=jwt.sign({id:newuser._id,user:newuser.user},process.env.JWT_SECRET);
            res.status(200).json({message:"user created",token:token});
        }
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({message:"internal server error"});
    }
}

const login=async(req,res)=>{

    // 1)check if user already exist
    // 2) compare the password
    // 3) generate token
    // 4) send response

    try{
        const {user,pass}=req.body;
        console.log(req.body);
        const finduser=await User.findOne({user:user});
        if(finduser)
        {
            const match=await bcrypt.compare(pass,finduser.pass);
            if(match){
                const token=jwt.sign({id:finduser._id,user:finduser.user},process.env.JWT_SECRET);
                res.status(200).json({message:"user logged in",token:token});
            }
            else{
                return res.status(401).json({message:"invalid credentials"});
            }
        }
        else{
            
            return res.status(404).json({message:"no such user exist"});
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
}
const fee1=async(req,res)=>{
    const data=req.user;
    const data1=await User.findOne({_id:data.id});
    if(!data1)
    {
        return res.status(404).json({message:"no such user exist"});
    }
    else{
        res.status(200).json(data1.access1);
    }
}
const all2=async(req,res)=>{
    const data=req.user;
    const data1=await User.findOne({_id:data.id});
    if(!data1)
    {
        return res.status(404).json({message:"no such user exist"});
    }
    else{
        res.status(200).json(data1.access2);
    }
}
const admin3=async(req,res)=>{
    const data=req.user;
    const data1=await User.findOne({_id:data.id});
    if(!data1)
    {
        return res.status(404).json({message:"no such user exist"});
    }
    else{
        res.status(200).json(data1.access3);
    }
}
const getall=async(req,res)=>{
    const data=req.user;
    const data1=await User.findOne({_id:data.id});
    if(!data1)
    {
        return res.status(404).json({message:"no such user exist"});
    }
    else if(data1.access3==false){
        res.status(400).json({message:"no access"});
    }
    else{
        const data2=await User.find();
        res.status(200).json(data2);
    }
}
const updateaccess=async(req,res)=>{
    const data=req.user;
    const data1=await User.findOne({_id:data.id});
    if(!data1)
    {
        return res.status(404).json({message:"no such user exist"});
    }
    else if(data1.access3==false){
        res.status(400).json({message:"no access"});
    }
    else{
        const data2=await User.updateOne({user:req.body.user},{access1:req.body.access1,access2:req.body.access2,access3:req.body.access3});
        res.status(200).json(data2);
    }
}

module.exports={register,login,fee1,all2,admin3,getall,updateaccess};