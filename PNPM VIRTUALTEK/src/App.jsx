import React, { useContext, useEffect } from "react";

import "./main.css";
import "./App.scss";
import CustomRoutes from "./routing/Routing";
import CheckAuth from "./utils/checkAuth";
import { AuthContext } from "./context/AuthContext";

import Navbar from "./components/navbar/Navbar";

function App() {
  const { setIsAuthenticated, setProfile, setLoading, setUserType,
setUserName } =
    useContext(AuthContext);

  useEffect(() => {
    CheckAuth({
      setIsAuthenticated, setProfile, setLoading, setUserType,
      setUserName })
  },[])

  return (
    <main className="main-content">
      <Navbar />
      <CustomRoutes />
    </main>
  );
}

export default App;