import logo from './logo.svg';
import './App.css';

import PersonalArea from './components/PersonalArea';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import HomeTraining from './components/homeTraining';
import TypeMember from './components/TypeMember';
import DeleteTraining from './components/DeleteTraining';
import CheckSign from './components/CheckSign';
import Comments from './components/Comments';


function App() {
  return (



    <BrowserRouter>
      <>
        <nav class="navbar navbar-dark bg-dark" >
          <Link to="/CheckSign">private area</Link>


          <Link to="/HomeTraining">our trainings</Link>

          <Link to="/ContactUs">sign in</Link>


          <Link to="/Comments">Comments</Link>
        </nav>
        <Routes>
          <Route path="/CheckSign" element={<CheckSign />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/PersonalArea" element={<PersonalArea />}></Route>
          <Route path="/PersonalArea/:id" element={<PersonalArea />}></Route>
          <Route path="/DeleteTraining/:id" element={<DeleteTraining />}></Route>
          <Route path="/ContactUs/:id " element={<ContactUs />}></Route>
          <Route path="/homeTraining" element={<HomeTraining />}></Route>
          <Route path="/Comments" element={<Comments />}></Route>
          <Route path="/TypeMember/:id/:firstName/:lastName/:email/:fhone" element={<TypeMember />}></Route>
        </Routes>
      </>
    </BrowserRouter>


  );


}

export default App;
