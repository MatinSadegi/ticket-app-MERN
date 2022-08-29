import express from 'express';

import { createAnswer, getAnswer } from '../controllers/answers.js';

const router = express.Router();

router.post('/', createAnswer);
router.post('/currentAnswer', getAnswer);


export default router;
  