const express=require('express');
const {register,login,fee1,all2,admin3,getall,updateaccess}=require('../controller/userController');
const auth=require('../middleware/auth');
const userRouter=express.Router();



userRouter.post("/login",login);
userRouter.post("/register",register);
userRouter.get("/fee1",auth,fee1);
userRouter.get("/all2",auth,all2);
userRouter.get("/admin3",auth,admin3);
userRouter.get("/getall",auth,getall);
userRouter.post("/updateaccess",auth,updateaccess);
//userRouter.post("/update",updateone);

module.exports=userRouter;