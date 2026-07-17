import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";

import { FaBars, FaTimes } from "react-icons/fa";

import { useAuth } from "../../auth/AuthContext";


function Navbar() {


  const [open, setOpen] = useState(false);


  const { user, logout } = useAuth();


  const navigate = useNavigate();



  const closeMenu = () => {

    setOpen(false);

  };



  const handleLogout = () => {

    logout();

    navigate("/");

    closeMenu();

  };



  const goToSection = (section)=>{


    if(window.location.pathname !== "/"){

      navigate(`/#${section}`);

    }
    else{

      document
      .getElementById(section)
      ?.scrollIntoView({
        behavior:"smooth"
      });

    }


    closeMenu();

  };





  return (

<nav
className="
sticky
top-0
z-50
bg-white/80
backdrop-blur-lg
border-b
"
>


<Container>


<div
className="
flex
justify-between
items-center
h-20
"
>





<Link

to="/"

onClick={closeMenu}

className="
flex
items-center
gap-2
"

>


<div

className="
w-10
h-10
rounded-xl
bg-blue-600
text-white
flex
items-center
justify-center
font-bold
text-xl
"

>

R

</div>



<h1

className="
text-2xl
font-bold
text-gray-900
"

>

Resume

<span className="text-blue-600">

AI

</span>


</h1>


</Link>










<ul

className="
hidden
md:flex
items-center
gap-10
text-gray-600
font-medium
"

>


<li>

<button

onClick={()=>goToSection("features")}

className="
hover:text-blue-600
transition
"

>

Features

</button>

</li>




<li>

<button

onClick={()=>goToSection("templates")}

className="
hover:text-blue-600
transition
"

>

Templates

</button>

</li>




<li>

<button

onClick={()=>goToSection("testimonials")}

className="
hover:text-blue-600
transition
"

>

Reviews

</button>

</li>




<li>

<button

onClick={()=>goToSection("faq")}

className="
hover:text-blue-600
transition
"

>

FAQ

</button>

</li>



</ul>









<div

className="
hidden
md:flex
items-center
gap-3
"

>



{
user ? (

<>


<Link

to="/builder"

className="
px-5
py-2.5
rounded-xl
bg-blue-600
text-white
font-semibold
hover:bg-blue-700
transition
"

>

Builder

</Link>





<Link

to="/profile"

className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-gray-100
hover:bg-gray-200
transition
"

>



{
user.profile_picture ? (

<img

src={user.profile_picture}

className="
w-8
h-8
rounded-full
object-cover
"

/>

)

:

(

<div

className="
w-8
h-8
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
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




<span className="
font-semibold
text-gray-800
">

{
user.full_name?.split(" ")[0]
}

</span>



</Link>





<button

onClick={handleLogout}

className="
px-5
py-2.5
rounded-xl
border
border-red-200
text-red-600
hover:bg-red-50
font-semibold
transition
"

>

Logout

</button>



</>


)

:

(

<>

<Link

to="/login"

className="
px-5
py-2.5
rounded-xl
border
border-gray-200
hover:bg-gray-50
font-semibold
transition
"

>

Login

</Link>




<Link

to="/register"

className="
px-5
py-2.5
rounded-xl
bg-blue-600
text-white
font-semibold
hover:bg-blue-700
transition
"

>

Register

</Link>



</>

)

}





{
!user && (

<Button

text="Create Resume Free"

to="/builder"

/>

)
}



</div>
        





<button

className="
md:hidden
text-gray-700
text-xl
"

onClick={()=>setOpen(!open)}

>


{
open
?
<FaTimes/>
:
<FaBars/>
}


</button>



</div>










{

open && (


<div

className="
md:hidden
pb-6
space-y-5
"

>



<button

onClick={()=>goToSection("features")}

className="
block
text-gray-600
hover:text-blue-600
"

>

Features

</button>





<button

onClick={()=>goToSection("templates")}

className="
block
text-gray-600
hover:text-blue-600
"

>

Templates

</button>





<button

onClick={()=>goToSection("testimonials")}

className="
block
text-gray-600
hover:text-blue-600
"

>

Reviews

</button>





<button

onClick={()=>goToSection("faq")}

className="
block
text-gray-600
hover:text-blue-600
"

>

FAQ

</button>







{

user ? (

<>


<Link

to="/builder"

onClick={closeMenu}

className="
block
text-blue-600
font-semibold
"

>

Builder

</Link>






<Link

to="/profile"

onClick={closeMenu}

className="
flex
items-center
gap-3
text-blue-600
font-semibold
"

>



{

user.profile_picture ? (

<img

src={user.profile_picture}

className="
w-8
h-8
rounded-full
"

 />

)

:

(

<div

className="
w-8
h-8
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
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



Profile

</Link>






<button

onClick={handleLogout}

className="
text-red-600
font-semibold
"

>

Logout

</button>



</>


)

:

(

<>


<Link

to="/login"

onClick={closeMenu}

className="
block
text-blue-600
font-semibold
"

>

Login

</Link>





<Link

to="/register"

onClick={closeMenu}

className="
block
text-blue-600
font-semibold
"

>

Register

</Link>



</>

)

}





{
!user && (

<Button

text="Create Resume Free"

to="/builder"

/>

)
}




</div>


)

}




</Container>


</nav>


);


}


export default Navbar;