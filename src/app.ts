import express from 'express'
import { urlencoded, json } from 'express'
import http from 'http'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import compression from 'compression'
// import path from 'path'
import { NODE_ENV } from './config'
import { message } from './routes/api'

const createApp = () => {
  //   CREATE EXPRESS APP SERVER
  const app = express();

  //  CREATE HTTP SERVER
  const server = http.createServer(app);

  //  ENCODE URL
  app.use(urlencoded({ extended: true }));

  //  COOKIE PARSER
  app.use(cookieParser());

  //  COMPRESS FILES
  app.use(compression());

  //  CROSS BROWER
  app.use(cors());

  //  SECURE HEADERS
  app.use(helmet());

  //  FOR REVERSED PROXY USERS
  app.enable('trust proxy');

  //  LIMIT THE AMOUNT OF THE REQUEST OF API
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
  });

  //  REGISTER API
  //  app.use('/api/', register);

  // MESSAGES API
  app.use('/api/message/', json({ strict: true, type: 'application/json' }), apiLimiter, message);

  //  SERVE STATIC FILES
  // if(NODE_ENV && NODE_ENV === 'production') {
  //   app.use(express.static(path.join(__dirname, '../public')));

  //   app.get('/*', function (req, res) {
  //     res.sendFile(path.join(__dirname, '../public', 'index.html'))
  //   });
  // }

  return { server };
};

export default createApp;
