import express, {Request, Response, NextFunction} from 'express';
import jwt  from 'jsonwebtoken';

export interface AuthRequest extends Request{
    user?:any;
}


export default function authMiddleware(req:AuthRequest,res:Response,next:NextFunction){
    const header = req.headers.authorization;
    if(!header){
        return res.status(401).json({message: "Unauthorized"});
    }
    const token = header.split(" ")[1];
    try {
        const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message: "Unauthorized - invalid token"});
    }
}