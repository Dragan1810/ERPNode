import * as express from "express"
import * as path from "path"
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'
import * as dotenv from 'dotenv'
import * as mongoose from 'mongoose'
import * as mongo from "connect-mongo";
import * as expressValidator from 'express-validator'
import * as session from 'express-session'
import { Request, Response, Application } from 'express'
import routes from './routes/index'

const MongoStore = mongo(session)

const app:Application = express()

dotenv.config({ path: "../.env" });
// Mongo
//const mongoUrl:string = process.env.MONGOLAB_URI;

(<any>mongoose).Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/node-boilerplate')
    .then(() => { /** ready to use.The `mongoose.connect()` promise resolves to undefined. */ },)
    .catch(err => { console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
  });

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, '../client')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(expressValidator())
// dokumentacija za sessije
app.use(session({
  name: "kolacic",
  resave: true,
  saveUninitialized: true,
  secret: "secret123",
  store: new MongoStore({
    url: "mongodb://127.0.0.1/node-boilerplate",
    autoReconnect: true
  })

//app.use(passport.initialize());
//app.use(passport.session());
}));
app.use('/', routes)

app.listen(3000, () => console.log('PORT 3000! RUNING!'))