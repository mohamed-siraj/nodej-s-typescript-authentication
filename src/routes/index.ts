import {Request, Response, Router} from 'express';
import authenticationRoute from './authentication.route';
import userRoute from './user.route';
const route = Router();

/**
 * check server
 */
route.get(`/`, (req : Request, res : Response) => {
    res.send(`server working...........`);
});

/**
 * routes connect
 */
route.use(authenticationRoute);
route.use(userRoute);

export default route;