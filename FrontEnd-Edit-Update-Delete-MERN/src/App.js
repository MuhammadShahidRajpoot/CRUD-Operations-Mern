import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UserDetail from './Pages/UserDetail';
import UpdateUser from './Pages/UpdateUser';


function App() {
  return (
    <div className="App">        

        <BrowserRouter>
            <Navbar />
                <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/users' element={<UserDetail />} />
                        <Route path='/updateuser/:id' element={<UpdateUser />} />
                </Routes>          
        </BrowserRouter>
        

    </div>
  );
}

export default App;
