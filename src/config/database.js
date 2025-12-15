import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongodb is connected ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("mongodb connection failed", error.message);
        process.exit(1);
    }
}

export default connectDB