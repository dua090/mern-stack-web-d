import User from '../models/user.js';
import bcrypt from 'bcrypt';
export const register =async(req,res)=>{
    try{
        const {fullName,email,password} = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const user= await User.findOne({email});
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" });
        } 
        const hashepassword = await bcrypt.hash(password,10);
        await User.create({fullName,email,password:hashepassword});
        return res.status(200).json({ success: true, message: "User registered successfully" });

        //save data in database
    }catch(err){
        return res.status(500).json({ success: false, message: err.message });
    
    }

} 