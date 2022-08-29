import express from 'express';
import { protect, admin } from '../middleware/auth.js';
import {
  getUserProfile,
  signin,
  signup,
  getUsers,
  getUsersLength,
} from '../controllers/users.js';

const router = express.Router();

router.get('/',protect,admin, getUsers)
router.get('/userslength', getUsersLength);
router.get('/profile',protect, getUserProfile)
router.post('/signin', signin)
router.post('/signup', signup)

 
export default router; 