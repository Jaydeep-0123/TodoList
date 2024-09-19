import './App.css';
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Navbar from './Componenets/Navbar';
import Login from './Componenets/Login';
import Signup from './Componenets/Signup';
import Home from './Componenets/Home';
import Addtask from './Componenets/Addtask';
function App() {
  return (
    <div className="App">

<BrowserRouter>
       <Navbar></Navbar>
      <Routes> 
      <Route path='/'  element={<Login/>}/>
        <Route path='/Login'  element={<Login/>}/>
         <Route path='/Signup' element={<Signup/>}/> 
         <Route path='/Home' element={<Home/>}/> 
         <Route path='/todolist' element={<Addtask/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
