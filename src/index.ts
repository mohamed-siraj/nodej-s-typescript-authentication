import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import Route from './routes';

/**
 * server configuration
 */ 
const app = express();
/**
 * route connect
 */
app.use(Route);

app.listen(process.env.PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${process.env.PORT}`);
});