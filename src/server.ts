import * as express from "express"
import * as path from "path"

const app:any = express()


app.use('/', express.static('../client'))

app.get('/', (req:any, res:any) => {
    res.send('Hello World2222')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))