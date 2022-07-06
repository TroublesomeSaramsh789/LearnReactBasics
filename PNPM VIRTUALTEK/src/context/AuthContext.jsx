import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [profile, setProfile] = useState();
    const [loading, setLoading] = useState(false);
    const [userType, setUserType] = useState(localStorage.getItem("userType") || null);
    const [userName, setUserName] = useState(localStorage.getItem("userName") || null);



    useEffect(() => {
        console.log("\nAUTH DATA", {
            isAuth: isAuthenticated,
            profile: profile,
            loading: loading,
            userType,
            userName
        })
    }, [isAuthenticated, profile, userType,userName])

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            profile,
            setIsAuthenticated,
            setProfile,
            loading,
            setLoading,
            userType,
            userName,
            setUserType,
            setUserName


        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;