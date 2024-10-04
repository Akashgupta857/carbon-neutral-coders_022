import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Resumebuilding from './components/Resumebuilding';
import HomePageroute from './components/HomePageroute';
import TempCompo1 from "./components/templates/TempCompo1";
import Login from "./components/Login"
import Register from "./components/Register"
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageroute/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/resumebuilding" element={<Resumebuilding/>}/>
        <Route path="template" element={<TempCompo1/>}/>

      </Routes>
    </BrowserRouter>
  )
};

export default App;
