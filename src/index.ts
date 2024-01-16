import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path: `.env.${process.env.NODE_ENV}`});
import route from './routes';

/**
 * database connection
 */
mongoose.connect(`${process.env.DATABASE_URI}`).then(()=> {
    console.log('DB connected......');
}).catch(() => {
    console.log('DB is not connect......');
});

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