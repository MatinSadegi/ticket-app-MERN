import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';
//SignIn
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res
        .status(404)
        .json({ message: 'جیمیل وارد شده قبلا ثبت شده است' });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'رمز عبور اشتباه است' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'test',
      { expiresIn: '1h' }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
}; 

//SignUp
export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  console.log(req.body)
  try {
    const existingUser = await User.findOne({ email });
    if ((firstName.trim == '')) {
      return res.status(400).json({ message: 'نام وارد نشده است' });
    }
    if ((lastName.trim == '')) {
      return res.status(400).json({ message: 'نام خانوادگی وارد نشده است' });
    }
    if (password.length < 5) {
      return res
        .status(400)
        .json({ message: 'رمز عبور باید حداقل 6 کاراکتر داشته باشد' });
    }
    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'جیمیل وارد شده قبلا ثبت شده است' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '1h',
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
