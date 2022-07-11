import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home, User, Login, Register }  from './modules/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
