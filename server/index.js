import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
//Routes
import postsRoutes from './Routes/posts.js';
import usersRoutes from './Routes/users.js';
import employeesRoutes from './Routes/employees.js';
import answersRoutes from './Routes/answers.js';

const app = express();
dotenv.config();
connectDB()

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/answer', answersRoutes);
app.use('/posts', postsRoutes);
app.use('/user', usersRoutes); 
app.use('/employees', employeesRoutes);
app.use('/', (req,res) =>{ 
  res.send("Hello to ticket app API")   
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running on port: ${PORT}`))

   