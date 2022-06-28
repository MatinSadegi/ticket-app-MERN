import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Main from './components/Pages/Main';
import Form from './components/Pages/Form';
import Questions from './components/Pages/Questions';

function App() {
  return (
    <BrowserRouter>
      <div className='p-0 m-0 box-border font-yekan'>
        <Routes>
          <Route path='auth' element={<Auth />} />
          <Route path='/' element={<Home />}>
            <Route path='' element={<Main />} />
            <Route path='questions' element={<Questions />} />
            <Route path='form' element={<Form />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
