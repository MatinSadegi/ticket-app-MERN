import express from 'express';

import { getPosts, createPost, getPostById } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', createPost);

export default router;    