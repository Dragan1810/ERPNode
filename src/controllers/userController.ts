import * as express from 'express'
import { Request, Response } from 'express'

export const Login = (req:Request, res:Response) => {
    res.sendFile('index.html', {
        root: 'client'
    })
}

export const Registar = (req:Request, res:Response) => {
    res.sendFile('register.html', {
        root: 'client'
    })
}