import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function verify(req, res, next: NextFunction) {
    const token = req.header('auth-token');
    if (!token) return res.status(403).send('Acces Denied');

    try {
        const verified : any = jwt.verify(token, process.env.TOKEN_SECRET);
        
        let expire : number = verified.date+300000;
        if (expire < Date.now()) {
            return res.status(403).send("Error: Acces Denied: Expired token!");
        }
        console.log(expire + " " + Date.now())
        req.user = verified;
        next();
    } catch (error) {
        console.error(error);
        res.status(403).send("Error: Acces Denied");
    }
}