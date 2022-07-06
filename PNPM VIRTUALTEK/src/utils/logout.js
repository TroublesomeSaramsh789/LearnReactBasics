import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { deleteBearerToken } from "./auth";
import { AuthContext } from "../context/AuthContext";
import { successmessage } from "./message";

export default function Logout(){
    const authContext = useContext(AuthContext)
    deleteBearerToken()
    authContext.setIsAuthenticated(false)
    authContext.setProfile(null)
    authContext.setUserType(null);
    authContext.setUserName("");
    localStorage.clear();
    window.history.replaceState({}, document.title)
    successmessage("Successfully Logout")
    return (
            <Navigate to="/login" />
    )
}