import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  nationalCode: Number,
  studentNumber: Number,
  educationCenter: String,
  field: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;