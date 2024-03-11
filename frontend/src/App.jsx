import {useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from './Appbar';
// import './App.css'
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import Addcourse from './Addcourse';
import Edit from './Edit';
import { RecoilRoot } from 'recoil';

function App() {

  return (
  <><div><RecoilRoot>
    <Appbar/>
  <BrowserRouter>
  <Routes>
    <Route path="/addcourse" element={<Addcourse />}></Route>
    <Route exact={false} path="/Edit/:courseId" element={<Edit />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/home" element={<Home/>}></Route>
  </Routes>
  </BrowserRouter></RecoilRoot>
  </div>
  </>  
  );
}

export default App;
