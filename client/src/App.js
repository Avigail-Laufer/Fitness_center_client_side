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
import PhotoCollage from './components/Home';
import CreditCardForm from './components/CreditCardForm';
import SuccessPage from './components/SuccessPage ';
import GymRulesPage from './components/GymRulesPage';


function App() {
  return (



    <BrowserRouter>
      <>
      <nav  className="navbar navbar-dark custom-navbar">
          <Link class="nav-tab" to="/CheckSign">private area</Link>
          <Link class="nav-tab" to="/HomeTraining">our trainings</Link>
          <Link class="nav-tab" to="/GymRulesPage">sign in</Link>
          <Link class="nav-tab" to="/Comments">Comments</Link>
          <a class="nav-tab" href='#s1'>about us</a>
        </nav>
        <Routes>
          <Route path="/CreditCardForm" element={<CreditCardForm/>}></Route>
          <Route path="/GymRulesPage" element={<GymRulesPage/>}></Route>
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
          <Route path="/SuccessPage" element={<SuccessPage />}></Route>
          <Route path="/:id/:firstName/:lastName/:email/:fhone/:TypeMember" element={<CreditCardForm />}></Route>
        </Routes>
      </>
    </BrowserRouter>


  );


}

export default App;
