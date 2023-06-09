import 'dotenv/config'
import { App } from './app'
import connectToDatabase from './Models/Connection'

const PORT = process.env.PORT ?? 3001
const MONGO_URL = process.env.MONGO_URL ?? 'string'

connectToDatabase(MONGO_URL)
  .then(() => {
    new App().start(PORT)
  })
  .catch((error: Error) => {
    console.log('Connection with database generated an error:\r\n')
    console.error(error)
    console.log('\r\nServer initialization cancelled')
    process.exit(0)
  })
