import { 
  FaUserEdit,
  FaPalette,
  FaRobot,
  FaDownload
} from "react-icons/fa";
import AnimatedSection from "../common/AnimatedSection";
import Container from "../common/Container";


const steps = [

  {
    icon:<FaUserEdit size={28}/>,
    title:"Enter Your Details",
    description:
    "Add your experience, skills, education and career information."
  },


  {
    icon:<FaPalette size={28}/>,
    title:"Choose A Template",
    description:
    "Select from professional templates designed for recruiters."
  },


  {
    icon:<FaRobot size={28}/>,
    title:"Improve With AI",
    description:
    "Let AI enhance your content and optimize your resume."
  },


  {
    icon:<FaDownload size={28}/>,
    title:"Download PDF",
    description:
    "Export your finished resume and start applying."
  }


];



function HowItWorks(){


return (
  <AnimatedSection>

<section className="py-24">


<Container>


<div className="
text-center
mb-16
">


<h2 className="
text-5xl
font-bold
text-gray-900
">

How It Works

</h2>


<p className="
text-gray-500
mt-4
text-lg
">

Create your professional resume in four simple steps.

</p>


</div>





<div className="
grid
md:grid-cols-4
gap-10
relative
">





{

steps.map((step,index)=>(


<div

key={index}

className="
text-center
relative
"

>




<div className="
relative
mx-auto
w-20
h-20
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
shadow-lg
">


{step.icon}



</div>





<div className="
absolute
top-10
left-[60%]
hidden
md:block
w-full
h-[2px]
bg-blue-100
"
style={{
display:index===steps.length-1
?"none"
:"block"
}}
>

</div>







<h3 className="
text-xl
font-bold
mt-8
">


{step.title}


</h3>



<p className="
text-gray-500
mt-3
leading-7
px-3
">


{step.description}


</p>




</div>


))


}



</div>



</Container>


</section>
</AnimatedSection>

);


}


export default HowItWorks;