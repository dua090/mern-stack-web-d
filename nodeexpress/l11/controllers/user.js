export const register =(req, res) => {
    const obj = req.body;
    console.log(obj);
    //save data in database
    res.status(200).json({
        status: "true",
        message: "register succesfully",
    });
}
export const login =(req, res) => {
    const {email,password} = req.body;
    console.log(email,password);
    //save data in database
    res.status(200).json({
        status: "true",
        message: "login succesfully",
    });
}