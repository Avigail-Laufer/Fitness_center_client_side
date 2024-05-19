import logo from './logo.svg';
import './App.css';
import HomeTraining from './components/homeTraining';
import PersonalArea from './components/PersonalArea';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
   
      
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/PersonalArea/:username" element={<PersonalArea />}></Route>
        </Routes>
    </BrowserRouter> 
  
  
);

  
}

export default App;
