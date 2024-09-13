import express  from 'express'
import { tekiskyAbout, tekiskyHome, tekiskyRegister, tekiskyRegisterPost, tekiskyService } from '../controller/tekiskyController.js'

const tekiskyRoutes = express.Router()

tekiskyRoutes.get('/home', tekiskyHome)
tekiskyRoutes.get('/about',tekiskyAbout)
tekiskyRoutes.get('/service',tekiskyService)
tekiskyRoutes.get('/register',tekiskyRegister)
tekiskyRoutes.post('/register',tekiskyRegisterPost)


export default tekiskyRoutes