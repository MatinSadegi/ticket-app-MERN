import axios from 'axios';
const API = axios.create({
  baseURL: 'https://tiket-app.onrender.com',
});
// const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('employeeProfile')){
        req.headers['Authorization'] = `Bearer ${
          JSON.parse(localStorage.getItem('employeeProfile')).token
        }`;
    }
    return req;
})

//Answer
export const createAnswer = (answer,id) => API.post('/answer',{answer,id})
export const getAnswer = (id) => API.post('/answer/currentAnswer', id);
//Posts
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const getPostById = (id) => API.get(`/posts/${id}`);
//Users
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const getUsersLength = () => API.get('/user/userslength');
//Employees
export const employeeSignIn = (formData) =>
  API.post('/employees/employeesSignIn', formData);
export const getEmployees = () => API.get('/employees');
export const getUsers = () => API.get('/user');
export const getEmployeeById = (id) => API.get(`/employees/${id}`);
export const updateEmployee = (id, updatedEmployee) =>
  API.patch(`/employees/${id}`, updatedEmployee);
