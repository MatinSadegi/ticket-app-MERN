import bcrypt from 'bcryptjs';
import Employee from '../models/employee.js';
import generateToken from '../utils/generateToken.js';

//Employees Sign In
export const employeesSignIn = async (req, res) => {
  const { nationalCode, password } = req.body
  try {
    const existingUser = await Employee.findOne({ nationalCode });
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: 'این کد ملی در سیستم ثبت نشده است' });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'رمز عبور اشتباه است' });
    }

    res
      .status(200)
      .json({ employee: existingUser, token: generateToken(existingUser._id) });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
//Employees Profile
export const getEmployeesProfile = async (req, res) => {
  const employee = await Employee.findById(req.employee._id);
  if (employee) {
    res.json({
      firstName: employee.firstName,
      lastName: employee.lastName,
      nationalCode: employee.nationalCod,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  } 
};
//Get All Employees
export const getEmployees = async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
};

//Get Employee By Id
export const getEmployeeById  = async (req,res) => {
  const employee = await Employee.findById(req.params.id);
  if(employee){
    res.json(employee)
  }else{
    res.status(404)
    throw new Error ('Employee not found')
  }
}
 
//Put Employee Permissions
export const updateEmployee = async (req, res) => {
  const filter = {_id: req.params.id}
  const update = {permissions: req.body}
  const updatedEmployee = await Employee.findByIdAndUpdate(filter, update, {
    new: true,
  });
  res.json(updatedEmployee)
};

  