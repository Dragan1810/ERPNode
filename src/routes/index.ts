import * as express from 'express'
import { Router } from 'express'
import * as UserController from '../controllers/userController'
//const { catchErrors } = require('../handlers/errorHandlers')
const router:Router = express.Router()

router.get('/', UserController.Login)

router.get('/register', UserController.Registar)

export default router