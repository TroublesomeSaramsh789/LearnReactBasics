import React from "react";
// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Login from "./pages/login";
import NavBar from './components/Navbar/NavBar';
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = () => {
  return (
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
