import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';

function App() {
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
