import Container from "../common/Container";
import AnimatedSection from "../common/AnimatedSection";

const faqs = [

  {
    question:"Is the resume builder free?",
    answer:
    "Yes, you can create a professional resume for free. You can add your information, choose templates and generate your resume."
  },


  {
    question:"Does the AI assistant improve my resume?",
    answer:
    "Yes. The AI assistant helps improve summaries, experience descriptions and bullet points to make your content more professional."
  },


  {
    question:"Are the resumes ATS friendly?",
    answer:
    "Yes. Our templates are designed with clean layouts and readable structures to work better with Applicant Tracking Systems."
  },


  {
    question:"Can I download my resume as a PDF?",
    answer:
    "Yes. After creating your resume, you can export it as a professional PDF file ready for applications."
  },


  {
    question:"Can I change templates after creating my resume?",
    answer:
    "Yes. You can switch between different professional templates without losing your information."
  },


  {
    question:"Can I edit my resume later?",
    answer:
    "Yes. Your resume can be updated whenever you need to add new skills, projects or experience."
  },


  {
    question:"Is my personal information safe?",
    answer:
    "We focus on protecting your resume data and only use your information to provide resume-building features."
  },


  {
    question:"Can I create different resumes for different jobs?",
    answer:
    "Yes. Creating multiple versions helps you customize your resume for different roles and industries."
  }

];



function FAQ(){


return (
<AnimatedSection>
<section id="faq"  className="py-24">


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

Frequently Asked Questions

</h2>


<p className="
text-gray-500
mt-4
text-lg
">

Everything you need to know about creating your resume.

</p>


</div>






<div className="
max-w-4xl
mx-auto
space-y-5
">



{

faqs.map((faq,index)=>(


<details

key={index}

className="
group
bg-white
border
rounded-2xl
p-6
shadow-sm
hover:shadow-md
transition
"


>


<summary className="
cursor-pointer
list-none
font-semibold
text-lg
flex
justify-between
items-center
">


{faq.question}



<span className="
text-blue-600
text-2xl
group-open:rotate-45
transition
">

+

</span>



</summary>




<p className="
mt-5
text-gray-600
leading-7
">

{faq.answer}

</p>




</details>



))


}



</div>




</Container>


</section>
</AnimatedSection>

);


}


export default FAQ;