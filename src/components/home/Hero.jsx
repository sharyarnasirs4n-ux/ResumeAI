import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white py-24 overflow-hidden">

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">



          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="
              inline-block
              bg-blue-100
              text-blue-600
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
            ">
              🤖 AI Powered Resume Builder
            </span>


            <h1 className="
              text-5xl
              lg:text-6xl
              font-bold
              mt-6
              leading-tight
              text-gray-900
            ">

              Create a Resume That Gets You

              <span className="text-blue-600">
                {" "}More Interviews
              </span>

            </h1>


            <p className="
              text-gray-600
              mt-6
              text-lg
              leading-8
              max-w-xl
            ">

              Build ATS-friendly resumes with AI assistance,
              professional templates, and instant PDF export.
              Create your perfect resume in minutes.

            </p>



            <div className="flex flex-wrap gap-4 mt-10">

              <Button
                text="Create Resume Free"
                to="/builder"
              />


              <button
              
                className="
                border
                border-gray-300
                px-6
                py-3
                rounded-xl
                font-medium
                hover:bg-gray-100
                transition
                "
                to="/builder"
              >
                View Templates
              </button>

            </div>




            <div className="
              flex
              flex-wrap
              gap-10
              mt-12
            ">


              <div>

                <h2 className="text-3xl font-bold">
                  25K+
                </h2>

                <p className="text-gray-500">
                  Resumes Created
                </p>

              </div>



              <div>

                <h2 className="text-3xl font-bold">
                  95%
                </h2>

                <p className="text-gray-500">
                  ATS Compatible
                </p>

              </div>



              <div>

                <h2 className="text-3xl font-bold">
                  4.9★
                </h2>

                <p className="text-gray-500">
                  User Rating
                </p>

              </div>


            </div>


          </motion.div>







          <motion.div

            initial={{
              opacity:0,
              x:40
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.7
            }}

            className="relative"

          >
            <motion.div

              animate={{
                y:[0,-10,0]
              }}

              transition={{
                duration:3,
                repeat:Infinity
              }}

              className="
              absolute
              -top-6
              -left-6
              bg-white
              shadow-xl
              rounded-2xl
              px-5
              py-3
              z-10
              "

            >

              🤖 AI Improved

            </motion.div>



            <motion.div

              animate={{
                y:[0,10,0]
              }}

              transition={{
                duration:3,
                repeat:Infinity
              }}

              className="
              absolute
              -bottom-6
              -right-6
              bg-white
              shadow-xl
              rounded-2xl
              px-5
              py-3
              z-10
              "

            >

              ✅ ATS Score 95%

            </motion.div>




            <div className="
              bg-white
              rounded-3xl
              shadow-2xl
              p-8
              border
            ">


              <div className="flex items-center gap-4">


                <div className="
                  w-16
                  h-16
                  rounded-full
                  bg-blue-100
                ">


                </div>


                <div>

                  <h3 className="
                    text-xl
                    font-bold
                  ">
                    Alex Johnson
                  </h3>


                  <p className="text-gray-500">
                    Software Engineer
                  </p>


                </div>


              </div>





              <div className="mt-8 space-y-5">


                <div>

                  <h4 className="
                    text-blue-600
                    font-semibold
                  ">
                    Professional Summary
                  </h4>


                  <p className="
                    text-sm
                    text-gray-600
                    mt-2
                  ">

                    Full-stack developer experienced in
                    building scalable web applications
                    using modern technologies.

                  </p>


                </div>





                <hr />



                <div>

                  <h4 className="
                    text-blue-600
                    font-semibold
                  ">
                    Experience
                  </h4>


                  <p className="
                    text-sm
                    text-gray-600
                    mt-2
                  ">

                    Developed responsive applications
                    improving user experience by 30%.

                  </p>


                </div>





                <hr />



                <div>

                  <h4 className="
                    text-blue-600
                    font-semibold
                  ">
                    Skills
                  </h4>


                  <div className="
                    flex
                    flex-wrap
                    gap-2
                    mt-3
                  ">


                    {
                      [
                        "React",
                        "Python",
                        "AWS",
                        "AI"
                      ].map(skill=>(

                        <span
                          key={skill}
                          className="
                          bg-gray-100
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          "
                        >

                          {skill}

                        </span>

                      ))
                    }


                  </div>


                </div>



              </div>


            </div>


          </motion.div>


        </div>


      </Container>


    </section>
  );
}


export default Hero;