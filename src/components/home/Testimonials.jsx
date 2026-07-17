import Container from "../common/Container";
import AnimatedSection from "../common/AnimatedSection";

const testimonials = [

  {
    name:"Sarah Williams",
    role:"Software Developer",
    company:"Tech Industry",
    image:"https://i.pravatar.cc/100?img=47",
    text:
    "The AI suggestions helped me turn my basic experience into a much stronger resume. The templates look very professional.",
  },


  {
    name:"Ahmed Khan",
    role:"Cloud Engineer",
    company:"Technology",
    image:"https://i.pravatar.cc/100?img=12",
    text:
    "Creating a clean ATS-friendly resume was extremely fast. I liked how easy it was to customize different templates.",
  },


  {
    name:"Emily Johnson",
    role:"Marketing Specialist",
    company:"Digital Marketing",
    image:"https://i.pravatar.cc/100?img=32",
    text:
    "The AI writing assistant saved me hours. I was able to create a polished resume without worrying about formatting.",
  },


];



function Testimonials(){


return (
<AnimatedSection>
<section id="testimonials" className="py-24 bg-gray-50">


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

Loved By Job Seekers

</h2>


<p className="
text-gray-500
mt-4
text-lg
">

See how professionals create better resumes faster.

</p>


</div>







<div className="
grid
md:grid-cols-3
gap-8
">



{

testimonials.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-3xl
p-8
shadow-lg
hover:-translate-y-2
hover:shadow-xl
transition
duration-300
"


>





<div className="
text-yellow-400
text-xl
mb-5
">

★★★★★

</div>







<p className="
text-gray-600
leading-7
">

"{item.text}"

</p>







<div className="
flex
items-center
gap-4
mt-8
">


<img

src={item.image}

alt={item.name}

className="
w-14
h-14
rounded-full
object-cover
"

/>



<div>


<h3 className="
font-bold
text-gray-900
">

{item.name}

</h3>



<p className="
text-sm
text-gray-500
">

{item.role}

</p>



<p className="
text-sm
text-blue-600
">

{item.company}

</p>



</div>



</div>





</div>



))


}



</div>






</Container>


</section>
</AnimatedSection>

);


}


export default Testimonials;