import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";

import {registerUser} from "../auth/authService";


function Register(){


const navigate=useNavigate();


const [form,setForm]=useState({

full_name:"",
email:"",
password:""

});


const [error,setError]=useState("");



const handleChange=(e)=>{

setForm({
...form,
[e.target.name]:e.target.value
})

}




const handleSubmit=async(e)=>{

e.preventDefault();


try{

await registerUser(form);


navigate("/login");


}
catch(err){

setError(
"Email already exists"
)

}


}




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
text-center
">

Create Account

</h1>


<p className="
text-gray-500
text-center
mt-3
">

Start building AI resumes

</p>



{
error &&

<p className="
text-red-500
text-center
mt-5
">

{error}

</p>

}




<form
onSubmit={handleSubmit}
className="
mt-8
space-y-5
">


<input

name="full_name"

placeholder="Full Name"

onChange={handleChange}

className="
w-full
px-4
py-3
border
rounded-xl
"

/>



<input

name="email"

placeholder="Email"

type="email"

onChange={handleChange}

className="
w-full
px-4
py-3
border
rounded-xl
"

/>



<input

name="password"

placeholder="Password"

type="password"

onChange={handleChange}

className="
w-full
px-4
py-3
border
rounded-xl
"

/>



<button

className="
w-full
bg-blue-600
text-white
py-3
rounded-xl
font-semibold
hover:bg-blue-700
"

>

Create Account

</button>


</form>



<p className="
text-center
mt-6
text-gray-500
">

Already have account?

<Link
to="/login"
className="
text-blue-600
font-semibold
"
>
 Login
</Link>


</p>



</div>


</section>

)


}


export default Register;