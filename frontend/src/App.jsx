import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Fee from './Fee'
import All from './All'
import Admin from './Admin'
function App() {
    const [data,setData]=React.useState(localStorage.getItem('token'));
    const setHeader = (token) => {
        localStorage.setItem('token', token);
        setData(token);
    }
  return (
    <>
        <Routes>
          {data && <Route path="/" element={<Home />}/> }  
          {data && <Route path="/access1" element={<Fee />}/>}
          {data && <Route path="/access2" element={<All />}/>}
          {data && <Route path="/access3" element={<Admin />}/> }
          {!data &&  <Route path="/" element={<Login header={setHeader} />}/>}
          {!data &&  <Route path="/signup" element={<Signup />}/>}
        </Routes>
    </>
  )
}

export default App
