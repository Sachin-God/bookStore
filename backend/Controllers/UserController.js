import User from '../Models/User.js';
import bcrypt from 'bcrypt';
import Contact from '../Models/contacts.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Using a lower salt round for performance

        // Create and save the user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        console.log("User registered successfully.");
        res.status(201).json({ message: "Registration successful."});
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "An error occurred during registration." });
    }
};

export const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(401).json({
                message: "No Existing User! Register First"
            })
        } else {
            const comparedPass = await bcrypt.compare(password, existingUser.password);
            if (comparedPass) {
                return res.status(200).json({
                    message: "Login Successful",
                    user:{
                        _id:existingUser._id,
                        name: existingUser.name,
                        email:existingUser.email
                    }
                })
            } else {
                return res.status(401).json({
                    message:"Incorrect Credentials"
                })
            }
        }
    } catch (error) {
        console.log('Login Error : '+ error);
        return res.status(500).json({ message: "An error occurred during Login." });
    }
}

export const ContactUs = async (req, res) => {
    try {
        const { name, email, description } = req.body;
        const newRes = new Contact({ name, email, description });
        await newRes.save();

        console.log("Contacted successfully.");
        res.status(201).json({ message: "Contacted successfully." });
    } catch (error) {
        console.log(error);
    }
}