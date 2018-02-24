import * as express from "express"
import * as path from "path"
import { Request, Response, Application } from 'express'
import routes from './routes/index'
const app:Application = express()

app.use(express.static(path.join(__dirname, '../client')));
app.use('/', routes)

app.listen(3000, () => console.log('PORT 3000! RUNING!'))