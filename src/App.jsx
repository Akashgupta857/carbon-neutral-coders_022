import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Resumebuilding from './components/Resumebuilding';
import HomePageroute from './components/HomePageroute';
import TempCompo1 from "./components/templates/TempCompo1";
import Login from "./components/Login"
import Register from "./components/Register"
import Pricing from './components/Price';
import ArticlesGrid from './components/CareerBlog';
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageroute/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/resumebuilding" element={<Resumebuilding/>}/>
        <Route path="template" element={<TempCompo1/>}/>
        <Route path="/careerblog" element={<ArticlesGrid/>}/>
        <Route path="/pricing" element={<Pricing/>}/>


      </Routes>
    </BrowserRouter>
  )
};

export default App;
