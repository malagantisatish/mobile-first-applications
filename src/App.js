import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./component/Login"
import Home from "./component/Home"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
