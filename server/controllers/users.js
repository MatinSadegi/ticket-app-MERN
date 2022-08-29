import bcrypt from 'bcryptjs';

import generateToken from '../utils/generateToken.js';

import User from '../models/user.js';

//SignIn
export const signin = async (req, res) => {
  const { nationalCode, password } = req.body;
  try {
    const existingUser = await User.findOne({ nationalCode });
    if (!existingUser)
      return res
        .status(404)
        .json({ message: 'این کد ملی در سیستم ثبت نشده است' });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'رمز عبور اشتباه است' });

  
    res.status(200).json({ existingUser, token:generateToken(existingUser._id) });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
}; 

//SignUp
export const signup = async (req, res) => {
  const { nationalCode,studentNumber, password, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ nationalCode });
    
    if ((firstName.trim == '')) {
      return res.status(400).json({ message: 'نام وارد نشده است' });
    }
    console.log(firstName);
    if ((lastName.trim == '')) {
      return res.status(400).json({ message: 'نام خانوادگی وارد نشده است' });
    }
    if (studentNumber.trim == '') {
      return res.status(400).json({ message: 'شماره دانشجویی وارد نشده است' });
    }
    if (nationalCode.trim == '') {
      return res.status(400).json({ message: 'کد ملی وارد نشده است' });
    }
  
    if (password.length < 5) {
      return res
        .status(400)
        .json({ message: 'رمز عبور باید حداقل 6 کاراکتر داشته باشد' });
    }
    if (existingUser) {
      return res
        .status(400)
        .json({ message: ' این کد ملی قبلا در سیستم ثبت شده است ' });
    }
      console.log(existingUser);
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      nationalCode,
      studentNumber,
      password: hashedPassword,
    });


    
    res.status(200).json({ user, token:generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' });
  }
};

//Get All Users
export const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};
//Get Users Length  
export const getUsersLength = async (req, res) => {
  const users = await User.length
  res.json(users);
};  


//Get User Profile
export const getUserProfile = async (req,res) => {
  const user = await User.findById(req.user._id)
  if(user){
    res.json({
      user,
      firstName:user.firstName,
      lastName:user.lastName,
      nationalCode:user.nationalCode,
      studentNumber:user.studentNumber
    });
  }else{
    res.status(404)
    throw new Error("User not found");
  }
}
