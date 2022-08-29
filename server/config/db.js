import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${connected.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB
   