import mongoose from 'mongoose';
const { Schema } = mongoose;

const answerSchema = Schema({
  id: { type: Schema.Types.ObjectId},
  answer: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Answer = mongoose.model('Answer', answerSchema);
export default Answer; 