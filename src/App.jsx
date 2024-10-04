import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Resumebuilding from './components/Resumebuilding';
import HomePageroute from './components/HomePageroute';
import TempCompo1 from "./components/templates/TempCompo1";
import Login from "./components/Login"
import Register from "./components/Register"
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
        <Route path="template" element={<TempCompo1/>}/>
        <Route path="/dashboard" element={user ? <Resumebuilding /> : <Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  )
};

export default App;
