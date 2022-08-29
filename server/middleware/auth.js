import jwt from "jsonwebtoken";
import User from "../models/user.js";
import Employee from "../models/employee.js";


export const protect = async(req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {

            token = req.headers.authorization.split(' ')[1]
            const decodedData = jwt.verify(token, process.env.JWT_SECRET)
            req.employee = await Employee.findById(decodedData.id)
            req.user = await User.findById(decodedData.id)
            next()
        } catch (error) {
            console.error(error);
            res.status(401)
            throw new Error('Not authorized');
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
    
} 

export const admin = (req,res,next) => {
    if(req.employee && req.employee.admin){
        next()
    }else{
        res.status(401)
        throw new Error('not authorized as an admin')
    }
}
 
