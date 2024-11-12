import mongoose, { mongo } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to database")
          
        
    } catch (error) {
        console.log("Error connecting to database")
        console.log(error)
        
    }
}