import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as lusca from "lusca";
import * as dotenv from "dotenv";
import * as path from "path";
import * as expressValidator from "express-validator";


// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });

// Controllers (route handlers)
import * as homeController from "./controllers/home";
import * as apiController from "./controllers/api";
import * as contactController from "./controllers/contact";


// API keys and Passport configuration

// Create Express server
const app = express();

// Connect to MongoDB

  // process.exit();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/contact", contactController.getContact);
app.post("/contact", contactController.postContact);

/**
 * API examples routes.
 */
app.get("/api", apiController.getApi);

/**
 * OAuth authentication routes. (Sign in)
 */

module.exports = app;