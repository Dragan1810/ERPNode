import * as express from 'express'
import { Router, Request, Response } from 'express'
const userController = require('../controllers/userController')
//const { catchErrors } = require('../handlers/errorHandlers')
const router:Router = express.Router()

router.get('/', (req:Request, res:Response) => {
    res.sendFile('index.html', {
        root: 'client'
    })
})

export default router