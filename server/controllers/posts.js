import PostMessage from '../models/postMessage.js';
//Get All Post
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json({ postMessages });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//Get Post By Id
export const getPostById = async (req, res) => {
  try {
    const postMessages = await PostMessage.findById(req.params.id);
    res.status(200).json({ postMessages });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//Create Post
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    createdAt: new Date().toISOString(),
  });
  await newPost.save();
  res.status(201).json(newPost);
};
