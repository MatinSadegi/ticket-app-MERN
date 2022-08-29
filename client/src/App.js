import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Main from './pages/Home/Main'; 
import Form from './pages/CreateTicket/Form';
import Questions from './pages/Tickets/Questions';
import EmployeesList from './pages/Admin/EmployeesList/Employees';
import Admin from './pages/Admin/Admin';
import PermissionsList from './pages/Admin/Permissions/PermissionsList';
import StudentsList from './pages/Admin/StudentsList/StudentsList';
import CurrentCard from './pages/Ticket&Answer/CurrentCard';

function App() {
  return (
    <BrowserRouter>
      <div className='p-0 m-0 box-border font-yekan relative '>
        <Routes>
          <Route path='auth' element={<Auth />} />
          <Route path='/' element={<Home />}>
            <Route index element={<Main />} />
            <Route path='questions' element={<Questions />} />
            <Route path='questions/:id' element={<CurrentCard />} />
            <Route path='form' element={<Form />} />
          </Route>
          <Route path='/admin' element={<Admin />}>
            <Route index element={<EmployeesList />} />
            <Route path='permissions' element={<PermissionsList />} />
            <Route path='students' element={<StudentsList />} />
          </Route>
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
