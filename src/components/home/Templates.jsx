import Container from "../common/Container";
import AnimatedSection from "../common/AnimatedSection";
import Button from "../common/Button";

import { TEMPLATES_REGISTRY } from "../../components/builder/templates";


const featuredTemplates = [

  "modern",
  "executive",
  "ats_tech",
  "creative_portfolio",
  "editorial_serif"

];


function Templates() {


  return (
    <AnimatedSection>
    <section id="templates" className="py-24 bg-gray-50">


      <Container>


        <div className="text-center mb-16">


          <h2 className="
            text-5xl
            font-bold
            text-gray-900
          ">

            Professional Resume Templates

          </h2>


          <p className="
            text-gray-500
            mt-4
            text-lg
          ">

            Choose from recruiter-approved designs
            built for every career.

          </p>


        </div>





        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
        ">


          {
            featuredTemplates.map((templateId)=>{


              const template =
              TEMPLATES_REGISTRY[templateId];


              const TemplateComponent =
              template.component;



              return (

                <div

                  key={templateId}

                  className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  overflow-hidden
                  hover:-translate-y-2
                  transition
                  duration-300
                  "

                >




                  <div className="
                    h-[420px]
                    overflow-hidden
                    bg-white
                    border-b
                  ">


                    <div
                      className="
                      scale-[0.45]
                      origin-top
                      pointer-events-none
                      "
                    >


                      <TemplateComponent

                        resume={{

                          name:"Alex Johnson",

                          title:"Software Engineer",

                          summary:
                          "Experienced developer building scalable applications.",

                          experience:[
                            {
                              company:"Tech Company",
                              role:"Software Engineer"
                            }
                          ],

                          education:[],

                        }}


                        skillsList={[
                          "React",
                          "Python",
                          "AWS",
                          "Machine Learning"
                        ]}


                        projectsList={[
                          {
                            name:"AI Resume Builder"
                          }
                        ]}

                      />


                    </div>


                  </div>








                  <div className="p-6">


                    <h3 className="
                      text-2xl
                      font-semibold
                    ">

                      {template.name}

                    </h3>



                    <p className="
                      text-gray-500
                      mt-2
                    ">

                      {template.description}

                    </p>



                  </div>


                </div>


              )


            })
          }


        </div>






        <div className="text-center mt-14">


          <Button

            text="View All Templates"

            to="/builder"

          />


        </div>




      </Container>


    </section>
    </AnimatedSection>


  );


}



export default Templates;