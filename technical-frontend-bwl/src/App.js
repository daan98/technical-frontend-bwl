import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { createUsers, getUsers, updateUser } from './actions/UserActions';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';

function App() {
  const userDispatch = useDispatch();
  const updateUserDispatch = useDispatch();
  const createUserDispatch = useDispatch();  

  useEffect( () => {
    userDispatch(getUsers());
    updateUserDispatch(updateUser());
    createUserDispatch(createUsers());
  }, [userDispatch, updateUserDispatch, createUserDispatch]);

  return (
    <div>
      
      <Routes>
        <Route path="/usuario" element={<User/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/registro" element={<Register/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
