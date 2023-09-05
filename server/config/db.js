import mongoose from "mongoose";

const connectDB = async () => {
  const res = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  });
  if (res) {
    console.log("Connected successfully..");
  }
};

export default connectDB;
