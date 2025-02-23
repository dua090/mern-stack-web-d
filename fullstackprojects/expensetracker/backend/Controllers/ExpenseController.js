const UserModel =  require("../Models/User");
const addExpenses=async (req,res)=>{
    const { _id }=req.user;  
    const body = req.body;

    try {
      const userData=  await UserModel.findByIdAndUpdate(
            _id,//userid
            { $push: {expenses:body}},
            {new:true}

        )
        res.status(200).json({
            message:"Expense Added Successfully",
            success:true,
            data: userData?.expenses
        })
        
    } catch (err) {
        return res.status(500).json({
            message: "Error Occured",
            error: err,
            success:false
        })
        
    }
}

const fetchExpenses=async (req,res)=>{
    const { _id }=req.user;  
    const body = req.body;

    try {
      const userData=  await UserModel.findById(_id).select('expenses');
        res.status(200).json({
            message:"fetched expenses Successfully",
            success:true,
            data: userData?.expenses
        })
        
    } catch (err) {
        return res.status(500).json({
            message: "Error Occured",
            error: err,
            success:false
        })
        
    }
}
   
const deleteExpenses = async (req, res) => {
    const { _id } = req.user;
    const {expenseId} = req.params.expenseId;
    try {
        const userData = await UserModel.findByIdAndUpdate(
            _id,
            { $pull: { expenses: { _id: expenseId } } },
            { new: true } // For Returning the updated documents
        )
        res.status(200)
            .json({
                message: "Expense Deleted successfully",
                success: true,
                data: userData?.expenses
            })
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err,
            success: false
        })
    }
}
module.exports={
    addExpenses,
    fetchExpenses,
    deleteExpenses
}
//37.49