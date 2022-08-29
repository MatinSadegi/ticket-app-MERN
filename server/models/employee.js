import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  nationalCode: { type: Number, required: true },
  permissions: { type: [String], required: true },
  admin: { type: Boolean, required: true },
  password: { type: String, required: true },
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;  