import mongoose from 'mongoose'
import 'dotenv/config'

const { MONGO_URL } = process.env

const connectToDatabase = async (
  mongoDatabaseURI = MONGO_URL
): Promise<typeof mongoose> => await mongoose.connect(mongoDatabaseURI)

export default connectToDatabase
