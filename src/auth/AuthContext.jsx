import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";


import {getMe} from "./authService";


const AuthContext=createContext();



export function AuthProvider({children}){


    const [user,setUser]=useState(null);

    const [token,setToken]=useState(
        localStorage.getItem("token")
    );


    useEffect(()=>{


        if(token){

            getMe(token)
            .then(data=>{
                setUser(data);
            })
            .catch(()=>{

                logout();

            });

        }


    },[token]);



    const login=(token)=>{

        localStorage.setItem(
            "token",
            token
        );

        setToken(token);

    };



    const logout=()=>{

        localStorage.removeItem(
            "token"
        );

        setToken(null);
        setUser(null);

    };


    return(

        <AuthContext.Provider
        value={{
            user,
            token,
            login,
            logout
        }}
        >

        {children}

        </AuthContext.Provider>

    )

}



export function useAuth(){

    return useContext(AuthContext);

}