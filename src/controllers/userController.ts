import * as express from 'express'
import { Request, Response, NextFunction } from 'express'
import { default as User } from '../models/UserModel'
import { body, validationResult } from 'express-validator/check';
import { sanitizeBody } from 'express-validator/filter';

export const Login = (req:Request, res:Response) => {
    res.sendFile('index.html', {
        root: 'client'
    })
}

export const Register = (req:Request, res:Response) => {
    res.sendFile('register.html', {
        root: 'client'
    })
}
export const ValidateRegister = async (req:Request, res:Response, next:NextFunction) => {
    body('email', 'That Email is not valid!').not().isEmpty().isEmail()
    sanitizeBody('email', 'That Email is not valid!').trim().normalizeEmail().toString()
    body('password').not().isEmpty()
    sanitizeBody('password').trim().toString()

    const result = validationResult(req)
    if(!result.isEmpty()) return
    next()
}
export const PostRegister = async (req:Request, res:Response, next:NextFunction) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    User.findOne({ email: req.body.email })

    user.save(err => {
        if(err) return
    })
    res.redirect('/home')
}
export const Home = (req:Request, res:Response) => {
    res.sendFile('home.html', {
        root: 'client'
    })
}