import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'; 
import Resumebuilding from './components/Resumebuilding';
import HomePageroute from './components/HomePageroute';
import TempCompo1 from "./components/templates/TempCompo1";
import Login from "./components/Login"
import { useContext } from 'react';
import Register from "./components/Register"
import { DataContext } from './components/Context/DataContext';
import {useState, useEffect} from "react"
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';
import { auth } from './firebase';
import Pricing from "./components/Price"
import ArticlesGrid from './components/CareerBlog';
const App = () => {
  const [user, setUser] = useState(null);
  const {data,SetData}=useContext(DataContext)

  function fetchData(){
    axios.get("https://resumebuilder-3edd6-default-rtdb.firebaseio.com/resumedata.json")
            .then((res)=>{
                
                SetData(Object.entries(res.data))
                
                
            }).catch((err)=>{
              console.log(err)
            })
  }
  
  //  useEffect(()=>{
  //   
  //  },[1])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      fetchData()
    });
    return () => unsubscribe();
  }, []);
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageroute/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/resumebuilding" element={<Resumebuilding/>}/>
        <Route path="/template" element={<TempCompo1/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/dashboard" element={user ? <Resumebuilding /> : <Navigate to="/login" />} />
        <Route path="/careerblog" element={<ArticlesGrid/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
