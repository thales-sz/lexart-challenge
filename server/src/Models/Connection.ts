import mongoose from 'mongoose'
import 'dotenv/config'

const MONGO_URL = process.env.MONGO_URL ?? 'mongodb+srv://dev:H4XubxdHDz9wfAkX@lexart-db.6iqadqd.mongodb.net/?retryWrites=true&w=majority'

const connectToDatabase = async (
  mongoDatabaseURI = MONGO_URL
): Promise<typeof mongoose> => await mongoose.connect(mongoDatabaseURI)

export default connectToDatabase
