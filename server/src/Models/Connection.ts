import mongoose from 'mongoose'
import 'dotenv/config'

const connectToDatabase = async (mongoDatabaseURI: string): Promise<typeof mongoose> => {
  console.log(mongoDatabaseURI)
  return await mongoose.connect(mongoDatabaseURI)
}

export default connectToDatabase
