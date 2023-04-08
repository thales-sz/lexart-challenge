import mongoose from 'mongoose'

const connectToDatabase = async (mongoDatabaseURI: string): Promise<typeof mongoose> => await mongoose.connect(mongoDatabaseURI)

export default connectToDatabase
