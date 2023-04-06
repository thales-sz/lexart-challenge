import mongoose from 'mongoose'
import 'dotenv/config'

const MONGO_DB_URL = 'mongodb://localhost:27017/lexartdb'

const connectToDatabase = async (
  mongoDatabaseURI = process.env.MONGO_URI ||
    MONGO_DB_URL
) => await mongoose.connect(mongoDatabaseURI)

export default connectToDatabase
