import Container from "../common/Container";
import AnimatedSection from "../common/AnimatedSection";
import {
  FaRobot,
  FaFilePdf,
  FaPalette,
  FaBolt,
  FaChartLine,
  FaShieldAlt,
  FaMagic,
  FaEdit
} from "react-icons/fa";


const features = [

  {
    icon:<FaRobot size={32}/>,
    title:"AI Resume Writing",
    description:
    "Improve your summary, experience and bullet points with AI-powered suggestions."
  },


  {
    icon:<FaPalette size={32}/>,
    title:"Professional Templates",
    description:
    "Choose from modern, creative, executive and ATS-friendly resume designs."
  },


  {
    icon:<FaFilePdf size={32}/>,
    title:"Instant PDF Export",
    description:
    "Download your polished resume as a high-quality PDF anytime."
  },


  {
    icon:<FaBolt size={32}/>,
    title:"Create in Minutes",
    description:
    "Build a complete professional resume without wasting hours formatting."
  },


  {
    icon:<FaChartLine size={32}/>,
    title:"ATS Optimization",
    description:
    "Create resumes designed to pass modern applicant tracking systems."
  },


  {
    icon:<FaMagic size={32}/>,
    title:"AI Bullet Generator",
    description:
    "Turn simple job descriptions into powerful achievement-focused points."
  },


  {
    icon:<FaEdit size={32}/>,
    title:"Easy Editing",
    description:
    "Update sections, switch templates and customize your resume anytime."
  },


  {
    icon:<FaShieldAlt size={32}/>,
    title:"Privacy Focused",
    description:
    "Your personal information stays protected while creating your resume."
  }


];



function Features(){


return(
  <AnimatedSection>

<section id="features" className="py-24">


<Container>


<div className="text-center mb-16">


<h2 className="
text-5xl
font-bold
text-gray-900
">

Everything You Need To Build A Winning Resume

</h2>


<p className="
text-gray-500
mt-5
text-lg
max-w-2xl
mx-auto
">

AI-powered tools and professional templates
to help you create resumes recruiters notice.

</p>


</div>





<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
">


{

features.map((feature,index)=>(


<div

key={index}

className="
bg-white
rounded-3xl
p-8
shadow-lg
border
hover:-translate-y-2
hover:shadow-xl
transition
duration-300
"


>


<div className="
w-16
h-16
rounded-2xl
bg-blue-100
text-blue-600
flex
items-center
justify-center
">


{feature.icon}


</div>



<h3 className="
text-xl
font-bold
mt-6
">


{feature.title}


</h3>




<p className="
text-gray-500
mt-3
leading-7
">


{feature.description}


</p>



</div>



))


}



</div>



</Container>


</section>
</AnimatedSection>

)


}


export default Features;