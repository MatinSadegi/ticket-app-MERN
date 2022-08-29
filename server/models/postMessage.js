import mongoose from 'mongoose';
const {Schema} = mongoose;

const postSchema = Schema({
  tag: { type: String, required: true },
  subject: { type: String, required: true },
  ticketText: { type: String, required: true },
  ticketNumber: { type: Number, required: true },
  answered: { type: Boolean, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage; 