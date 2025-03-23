import jwt from "jsonwebtoken"
export const generateToken =(userID,res)=>{
    const token =jwt.sign({userID},process.env.JWT_SECRET,
    {
        expiresIn: '7d'
    }
    )
    res.cookie("jwt",token,{
        maxAge:7*24*60*1000,//MS
        httpOnly:true, // prevent xss attack cross-site scripting attcks
        sameSite:"strict",//csrf attcks cross-site request forgery attcks
        secure:process.env.NODE_ENV !=="development", // only send over https

    })
    return token;
}