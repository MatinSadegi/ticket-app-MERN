import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    nationalCode: {type: Number, required: true},
    studentNumber: {type: Number, required: true},
    password: {type:String, required:true },
})

const User = mongoose.model('User', userSchema);
export default User;