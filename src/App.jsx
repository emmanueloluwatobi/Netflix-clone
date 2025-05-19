import React, { useEffect } from 'react'
import Home from './pages/Home/Home';
import { Routes , Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login' 
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/Navbar/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Logged In");
        navigate("/");
      }else{
        console.log("Logout Out");
        navigate('/Netflix-clone/login');
      }
    })
  }, [])

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path='/Netflix-clone' element={<Home/>}/>
        <Route path='/Netflix-clone/login' element={<Login/>}/>
        <Route path='/Netflix-clone/player/:id' element={<Player/>} />
      </Routes>
    </div>
  )
}

export default App