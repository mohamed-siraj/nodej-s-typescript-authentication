import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path: `.env.${process.env.NODE_ENV}`});
import route from './routes';

/** 
 * server configuration 
 */
const app = express();
/**
 * route connect
 */
app.use(route);

app.listen(process.env.PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${process.env.PORT}`);
});