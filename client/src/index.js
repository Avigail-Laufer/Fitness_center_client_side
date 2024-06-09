import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeTraining from './components/homeTraining';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersonalArea from './components/PersonalArea';
import { StateProvider } from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StateProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//  <BrowserRouter>
//   <Routes>
//       <Route path="/" element={<HomeTraining />}></Route>
//       <Route path="/Login" element={<Login />}></Route>
//       <Route path="/ContactUs" element={<ContactUs />}></Route>
//       <Route path="/PersonalArea/:username" element={<PersonalArea />}></Route>
//    </Routes>
// </BrowserRouter> 
