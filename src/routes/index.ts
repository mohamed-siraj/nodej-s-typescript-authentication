import {Request, Response, Router} from 'express';
const route = Router();

/**
 * check server
 */
route.get(`/`, (req : Request, res : Response) => {
    res.send(`server working...........`);
});

export default route;