import { useState } from 'react';
import { Login } from './sign-up/Login';
import { Signup } from './sign-up/SignUp';
import { CreateAcc } from './sign-up/CreatAccBtn';
import { BrowserRouter, Router, Routes, Route } from "react-router";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Signup' element={<CreateAcc/>}/>
      </Routes>
  );
}

export default App;
