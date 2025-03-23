import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUserForSidebar= async(req,res)=>{
try {
    const loggedInUserId=req.user._id;
    const filteredUsers= await User.find({_id:{$ne:loggedInUserId}}).select("-password");

    res.status(200).json(filteredUsers)
} catch (error) {
    console.error("Error is getusersForsidebar:",error.message);
    res.status(500).json({error:"Internal server error"})
}

}
export const getMessages=async(req,res)=>{
    try {
        const {id:userTochatID} =req.params
        const myId=req.user._id;

        const messages =await Message.find({
            $or: [
                { sender: myId, receiver: userTochatID },
                { sender: userTochatID, receiver: myId },
            ]
        })
        res.status(200).json(messages)
    } catch (error) {
        console.error("Error is getmessages:",error.message);
        res.status(500).json({error:"Internal server error"})
        
    }
}
export const sendMessage=async(req,res)=>{
    try {
        const {text,image}=req.body;
        const {id:receiverId} =req.params;
        const{senderId}=req.user._id;

        let imageUrl;
        if(image){
            //Upload base64 image to cloudinary
            const uploadResponse =await cloudinary.uploader.upload(image);
            imageUrl=uploadResponse.secure_url;
    }
    const newMessage=new Message
    ({
        senderId,
        receiverId,
        text,
        imageUrl:imageUrl,
    })
    await newMessage.save();

    // todo :realtime functianlity =>socket.io
    res.status(201).json({message:"Message sent successfully"})
    } catch (error) {
        console.error("Error is sendmessage:",error.message);
        res.status(500).json({error:"Internal server error"})
        
    }
}