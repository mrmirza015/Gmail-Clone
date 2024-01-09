import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const DBConnection = async () => {

  const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gmail-clone.v9rjec0.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGODB_URL, { useNewURLParser: true });
    console.log("Database Connected Successfully");

  } catch (error) {
    console.error('Error while connecting with database ', error.message);
  }
}

export default DBConnection;




