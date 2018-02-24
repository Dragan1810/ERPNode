import * as express from 'express'
import { Request, Response, NextFunction } from 'express'
import { default as User } from '../models/UserModel'

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
export const PostRegister = async (req:Request, res:Response, next:NextFunction) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    await user.save()
    next()
}