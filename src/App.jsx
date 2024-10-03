import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Resumebuilding from './components/Resumebuilding';
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resumebuilding/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
