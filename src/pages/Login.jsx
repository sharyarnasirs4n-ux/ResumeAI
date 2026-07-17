import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import { googleLogin } from "../auth/authService";
import { loginUser } from "../auth/authService";
import { useAuth } from "../auth/AuthContext";


function Login(){

    const navigate = useNavigate();

    const {login} = useAuth();


    const [form,setForm] = useState({
        email:"",
        password:""
    });


    const [error,setError] = useState("");



    const handleChange=(e)=>{

        setForm({
            ...form,
            [e.target.name]:e.target.value
        });

    };



    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            const data = await loginUser(form);


            login(data.access_token);


            navigate("/profile");


        }catch(err){

            setError(
                "Invalid email or password"
            );

        }

    };




    return(

<section className="
min-h-screen
bg-gradient-to-b
from-blue-50
via-white
to-white
flex
items-center
justify-center
px-6
">


<div className="
bg-white
shadow-xl
rounded-3xl
border
p-10
w-full
max-w-md
">


<h1 className="
text-3xl
font-bold
text-gray-900
text-center
">

Welcome Back

</h1>


<p className="
text-gray-500
text-center
mt-3
">

Login to continue building your resume

</p>



{
error && (

<p className="
mt-5
text-red-500
text-center
">

{error}

</p>

)
}




<form
onSubmit={handleSubmit}
className="
mt-8
space-y-5
">


<input

name="email"

type="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

className="
w-full
px-4
py-3
border
rounded-xl
outline-none
focus:ring-2
focus:ring-blue-500
"

/>



<input

name="password"

type="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

className="
w-full
px-4
py-3
border
rounded-xl
outline-none
focus:ring-2
focus:ring-blue-500
"

/>



<button

className="
w-full
bg-blue-600
hover:bg-blue-700
text-white
py-3
rounded-xl
font-semibold
transition
shadow-lg
"

>

Login

</button>
<div className="mt-5">

<GoogleLogin

onSuccess={async(response)=>{

const data = await googleLogin(
response.credential
);

login(data.access_token);

navigate("/profile");

}}

onError={()=>{

alert("Google Login Failed");

}}

/>

</div>



</form>



<p className="
text-center
text-gray-500
mt-6
">

Don't have an account?

{" "}

<Link
to="/register"
className="
text-blue-600
font-semibold
"
>
Create one
</Link>


</p>


</div>


</section>

    );

}


export default Login;