import express from "express";
import bodyParser from "body-parser";
import compression from 'compression';
import cors from "cors";

import routes from "./api/routes/routes"

// Initialize the Express App
const app = express();

// Set up a whitelist and check against it - CORS
var whitelist = ['http://localhost:3000'];

var corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

routes(app);

const server = app.listen(5000, () => {
    console.log("app running on port", server.address().port);
});