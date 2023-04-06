import mongoose from 'mongoose'
import 'dotenv/config'

const MONGO_DB_URL = process.env.MONGO_URL ?? 'mongodb://localhost:27017/lexartdb'

const connectToDatabase = async (
  mongoDatabaseURI = MONGO_DB_URL
): Promise<typeof mongoose> => await mongoose.connect(mongoDatabaseURI)

export default connectToDatabase
