import { User } from "../models/user.js";


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if(users.length==0)return res.status(404).json({message:"no users found",statusCode:404})
       return res.status(200).json({data:users});
    } catch (error) {
        console.log(error)
       return res.status(500).json({ error: "Error fetching users" });
    }
};

const getUserByID = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User Not Found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user" });
    }
};


const createUser = async (req, res) => {
    try {
        const {firstName,lastName,email}=req.body
        if(!firstName|| !lastName || !email)return res.status(400).json({message:"please provide all feilds",statusCode:400})
            console.log(firstName, lastName,email)
            const ifUserExist = await User.findOne({email})
            console.log("Harshuuuuuuuuuuuuuu")
           if(ifUserExist)return  res.status(403).json({message:"user already exist with this email",statusCode:403})

        const newUser = await  User.create({
            firstName,
            lastName,
            email
        })
        if(!newUser)return  res.status(500).json({message:"internal server error",statusCode:500})
        res.status(201).json({data:newUser,statusCode:201,message:"successfully created"});
    } catch (error) {
        console.log("error",error)
        if (error.name === "ValidationError") {
            return res.status(400).json({ error: error.message });

        }
        res.status(500).json({ error: "Error creating user" });
    }
};

const updateUser = async (req, res) => {
    try {
      const { firstName ,lastName, email } = req.body;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { firstName, lastName, email },
        { new: true, runValidators: true }
      );
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json({message : "user updated Sucessfully"});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User Not Found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting user" });
    }
};

// Exporting all functions as an object
export default {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser,
};
