import express from 'express'
import ProductController from '../Controllers'

const router = express.Router()

router.post('/', async (req, res, next) => await new ProductController(req, res, next).getProduct())

export default router
