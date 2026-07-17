import Container from "../common/Container";
import AnimatedSection from "../common/AnimatedSection";
import Button from "../common/Button";

import {
  FaCheckCircle
} from "react-icons/fa";


function CTA() {


  const benefits = [

    "AI powered resume improvement",

    "Professional ATS-friendly templates",

    "Instant PDF download"

  ];



  return (

<AnimatedSection>
    <section className="
      py-28
      relative
      overflow-hidden
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      text-white
    ">





      <div className="
        absolute
        -top-20
        -left-20
        w-72
        h-72
        bg-white/10
        rounded-full
      "/>



      <div className="
        absolute
        -bottom-20
        -right-20
        w-96
        h-96
        bg-white/10
        rounded-full
      "/>





      <Container>



        <div className="
          relative
          text-center
          max-w-4xl
          mx-auto
        ">



          <h2 className="
            text-5xl
            lg:text-6xl
            font-bold
            leading-tight
          ">


            Build Your Resume.
            <br/>

            Get Ready For Your Next Opportunity.


          </h2>





          <p className="
            mt-6
            text-lg
            text-blue-100
            max-w-2xl
            mx-auto
            leading-8
          ">


            Create a professional resume in minutes
            with AI assistance, beautiful templates
            and recruiter-friendly formatting.


          </p>










          <div className="
            flex
            flex-wrap
            justify-center
            gap-6
            mt-10
          ">



            {
              benefits.map((item,index)=>(


                <div

                key={index}

                className="
                  flex
                  items-center
                  gap-2
                  text-blue-50
                "

                >

                  <FaCheckCircle/>


                  <span>

                    {item}

                  </span>


                </div>


              ))
            }



          </div>








          <div className="
            mt-12
          ">


            <Button

              text="Create Resume Free"

              to="/builder"

            />


          </div>





        </div>




      </Container>



    </section>
    </AnimatedSection>


  );

}


export default CTA;