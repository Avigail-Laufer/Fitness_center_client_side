import logo from './logo.svg';
import './App.css';
import HomeTraining from './components/homeTraining';
import PersonalArea from './components/PersonalArea';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import AddTraining from './components/AddTraining';


function App() {
  return (



    <BrowserRouter>
      <>
        <nav class="navbar navbar-dark bg-dark" >
          <Link to="/Login">private area</Link>


          <Link to="/HomeTraining">our trainings</Link>

          <Link to="/ContactUs">sign in</Link>


          <Link to="/AddTraining">To add a training</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/PersonalArea/:id" element={<PersonalArea />}></Route>
          <Route path="/ContactUs/:id "element={<ContactUs />}></Route>
          <Route path="/homeTraining" element={<HomeTraining />}></Route>
          <Route path="/AddTraining" element={<AddTraining />}></Route>
        </Routes>
      </>
    </BrowserRouter>


  );


}

export default App;
