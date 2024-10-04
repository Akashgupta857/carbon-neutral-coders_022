import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Resumebuilding from './components/Resumebuilding';
import HomePageroute from './components/HomePageroute';
import axios from 'axios';
import TempCompo1 from "./components/templates/TempCompo1"
import { DataContext } from './components/Context/DataContext';
import { useContext ,useEffect} from 'react';
const App = () => {
  const {data,SetData}=useContext(DataContext)

  function fetchData(){
    axios.get("https://resumebuilder-3edd6-default-rtdb.firebaseio.com/resumedata.json")
            .then((res)=>{
                
                SetData(Object.entries(res.data))
                
                
            }).catch((err)=>{
              console.log(err)
            })
  }
  
   useEffect(()=>{
    fetchData()
   },[1])
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageroute/>}/>
        <Route path="/resumebuilding" element={<Resumebuilding/>}/>
        <Route path="template" element={<TempCompo1 fetchData={fetchData}/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
