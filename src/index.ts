import {RoutingControllersOptions, useExpressServer} from 'routing-controllers';
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import {ConverterController} from './controllers/converter.controller';
import {HttpErrorMiddleware} from './middlewares/http-error.middleware';

dotenv.config();
const serverOptions: RoutingControllersOptions = {
  controllers: [ConverterController],
  classTransformer: true,
  validation: true,
  defaultErrorHandler: false,
  middlewares: [HttpErrorMiddleware],
  development: true,
};
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
}));
useExpressServer(app, serverOptions);

const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
