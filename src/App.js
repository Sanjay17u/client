import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './auth/Login/Login.js'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './auth/Signup/Signup.js';
import MainLayout from './MainLayout.js';
import ForgotPassword from './auth/ForgotPassword/ForgotPassword.js';
import ResetPassword from './auth/ResetPassword/ResetPassword.js';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={ <MainLayout/> }/>   
          <Route path='/Login' element={ <Login/> }/>   
          <Route path='/Signup' element={ <Signup/> }/>   
          <Route path='/forgot-password' element={ <ForgotPassword/> }/>   
          <Route path='/reset-password' element={ <ResetPassword/> }/>   
      </Routes>
    </BrowserRouter>
  )
}

export default App;
