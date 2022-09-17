import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import {Switch, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addUser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
