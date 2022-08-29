import express from 'express';
import { protect,admin } from '../middleware/auth.js';

import {
  employeesSignIn,
  getEmployeesProfile,
  getEmployees,
  updateEmployee,
  getEmployeeById,
} from '../controllers/employees.js';


const router = express.Router();

router.get('/', protect,admin,getEmployees)
router.get('/employeesProfile', protect, getEmployeesProfile);
router.post('/employeesSignIn', employeesSignIn);
router
  .route('/:id')
  .get(protect, admin, getEmployeeById)
  .patch(protect, admin, updateEmployee);

 
export default router;
