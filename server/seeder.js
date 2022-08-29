import dotenv from 'dotenv';
import connectDB from './config/db.js';
import employees from './data/employeesData.js';
import Employee from './models/employee.js';

dotenv.config();
connectDB();

const importData = async() => {
  try {
  await Employee.deleteMany();
   await Employee.insertMany(employees);
    console.log('Data Imported');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  } 
};
const destroyData = async () => {
  try {
    await Employee.deleteMany();
    console.log('Data Destroyed');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
 
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
