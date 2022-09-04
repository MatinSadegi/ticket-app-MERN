import Answer from '../models/answer.js';
//Create Answer
export const createAnswer = async (req, res) => {
  const answer = req.body;
  const newAnswer = new Answer({
    ...answer,
    createdAt: new Date().toISOString(),
  });
  await newAnswer.save();
  res.status(201).json(newAnswer);
};
//Get Answer
export const getAnswer = async (req,res) => {
    try {
        const currentAnswer = await Answer.findOne(req.body);
        res.status(201).json(currentAnswer);
    } catch (error) {
        console.log(error)
    }
}
  