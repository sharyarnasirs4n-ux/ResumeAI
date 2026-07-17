import { useAuth } from "../auth/AuthContext";
import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";


function Profile(){


    const {user, logout} = useAuth();

    const navigate = useNavigate();



    const handleLogout = ()=>{

        logout();

        navigate("/login");

    };



    if(!user){

        return null;

    }



    const firstName =
    user.full_name?.split(" ")[0] || "there";



    return (
        <>
        <Navbar/>

<section className="
min-h-screen
bg-gradient-to-b
from-blue-50
via-white
to-white
py-16
px-6
">



<div className="
max-w-6xl
mx-auto
">





<div className="
mb-10
">


<h1 className="
text-4xl
font-bold
text-gray-900
">

👋 Welcome back, {firstName}!

</h1>


<p className="
text-gray-500
mt-3
text-lg
">

Continue building your professional resume with AI assistance.

</p>


</div>












<div className="
grid
lg:grid-cols-3
gap-8
">









<div className="
bg-white
rounded-3xl
shadow-xl
border
p-8
">


<div className="
flex
flex-col
items-center
text-center
">


{

user.profile_picture ? (

<img

src={user.profile_picture}

className="
w-24
h-24
rounded-full
object-cover
border-4
border-blue-100
"

/>

)

:

(

<div

className="
w-24
h-24
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
text-4xl
font-bold
"

>

{

user.full_name
?.charAt(0)
?.toUpperCase()

}

</div>

)

}




<h2 className="
text-2xl
font-bold
mt-5
">

{user.full_name}

</h2>



<p className="
text-gray-500
mt-2
">

{user.email}

</p>



</div>





<div className="
mt-8
space-y-4
">



<div className="
bg-gray-50
rounded-xl
p-4
flex
justify-between
">

<span className="text-gray-500">

Account

</span>


<span className="
font-semibold
text-blue-600
">

{
user.google_id
?
"Google"
:
"Email"
}

</span>


</div>






<div className="
bg-gray-50
rounded-xl
p-4
flex
justify-between
">


<span className="text-gray-500">

Status

</span>


<span className="
font-semibold
text-green-600
">

Active

</span>


</div>



</div>



<button

onClick={handleLogout}

className="
mt-8
w-full
py-3
rounded-xl
bg-red-50
text-red-600
font-semibold
hover:bg-red-100
transition
"

>

Logout

</button>



</div>












<div className="
lg:col-span-2
space-y-8
">








<div className="
bg-white
rounded-3xl
shadow-xl
border
p-8
">


<h2 className="
text-2xl
font-bold
text-gray-900
">

Your Resume

</h2>


<p className="
text-gray-500
mt-2
">

Create an ATS-friendly resume powered by AI.

</p>



<div className="
flex
flex-wrap
gap-4
mt-6
">


<button

onClick={()=>navigate("/builder")}

className="
bg-blue-600
text-white
px-6
py-3
rounded-xl
font-semibold
hover:bg-blue-700
transition
"

>

Create Resume

</button>




<button

onClick={()=>navigate("/builder")}

className="
border
border-gray-300
px-6
py-3
rounded-xl
font-semibold
hover:bg-gray-50
transition
"

>

Continue Editing

</button>



</div>


</div>












<div className="
grid
md:grid-cols-3
gap-6
">



<div className="
bg-white
rounded-3xl
border
shadow-sm
p-6
">


<h3 className="
text-3xl
font-bold
text-blue-600
">

0

</h3>


<p className="
text-gray-500
mt-2
">

Resumes Created

</p>


</div>






<div className="
bg-white
rounded-3xl
border
shadow-sm
p-6
">


<h3 className="
text-3xl
font-bold
text-blue-600
">

95%

</h3>


<p className="
text-gray-500
mt-2
">

ATS Score Target

</p>


</div>






<div className="
bg-white
rounded-3xl
border
shadow-sm
p-6
">


<h3 className="
text-3xl
font-bold
text-blue-600
">

AI

</h3>


<p className="
text-gray-500
mt-2
">

Resume Assistant

</p>


</div>



</div>






</div>




</div>




</div>


</section>
</>

    );

}


export default Profile;