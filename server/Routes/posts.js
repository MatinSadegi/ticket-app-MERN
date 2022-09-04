import express from 'express';

import { getPosts, createPost, getPostById } from '../controllers/posts.js';

const router = express.Router();

router.route('/').get(getPosts).post(createPost);
router.get('/:id', getPostById);

export default router;
