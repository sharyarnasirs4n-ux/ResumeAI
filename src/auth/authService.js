import axios from "axios";


const API = axios.create({

    baseURL: "http://localhost:8000"

});



API.interceptors.request.use((config)=>{


    const token = localStorage.getItem("token");


    if(token){

        config.headers.Authorization =
        `Bearer ${token}`;

    }


    return config;


});






export const registerUser = async(data)=>{


    const response = await API.post(
        "/register",
        data
    );


    return response.data;


};







export const loginUser = async(data)=>{


    const response = await API.post(
        "/login",
        data
    );


    if(response.data.access_token){


        localStorage.setItem(
            "token",
            response.data.access_token
        );


    }


    return response.data;


};







export const getMe = async()=>{


    const response = await API.get(
        "/me"
    );


    return response.data;


};







export const googleLogin = async(credential)=>{


    const response = await API.post(

        "/google-login",

        {
            token: credential
        }

    );



    if(response.data.access_token){


        localStorage.setItem(
            "token",
            response.data.access_token
        );


    }



    return response.data;


};







export const logoutUser = ()=>{


    localStorage.removeItem("token");


};





export default API;