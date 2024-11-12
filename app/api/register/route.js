import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req){
    try {
        const {email, password, confirmPassword} = await req.json();

        console.log("Email :" , email);
        console.log("Password :" , password);
        console.log("Confirm Password :" , confirmPassword); 

        const hashedPasswrord = await bcrypt.hash(password, 12);
        const hashedconfirmPassword = await bcrypt.hash(confirmPassword, 12);
         
        await connectToDatabase();
        await User.create({email, password:hashedPasswrord, confirmPassword:hashedconfirmPassword}); 
        return NextResponse.json({message : "User registered successfully"}, {status: 201});
    } catch (error) {

        return NextResponse.json({message : "Something went wrong. Please try again."}, {status: 500});
        
    }
}