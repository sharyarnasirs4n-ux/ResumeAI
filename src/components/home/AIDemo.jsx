import { motion } from "framer-motion";
import Container from "../common/Container";

function AIDemo() {


  return (

    <section className="py-24 bg-gray-50">


      <Container>


        <div className="text-center mb-16">


          <h2 className="
          text-5xl
          font-bold
          text-gray-900
          ">

            Improve Your Resume With AI

          </h2>


          <p className="
          text-gray-500
          mt-4
          text-lg
          ">

            Transform simple descriptions into
            professional achievement-focused content.

          </p>


        </div>





        <div className="
        grid
        lg:grid-cols-3
        gap-8
        items-center
        ">





          {/* BEFORE */}


          <motion.div

          initial={{
            opacity:0,
            x:-30
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.5
          }}

          className="
          bg-white
          rounded-3xl
          shadow-lg
          p-8
          border
          "

          >


            <span className="
            text-red-500
            font-semibold
            ">

              Before

            </span>



            <h3 className="
            text-xl
            font-bold
            mt-5
            ">

              Basic Experience

            </h3>



            <p className="
            text-gray-600
            mt-4
            leading-7
            ">

              Worked on a website and fixed
              frontend issues.

            </p>


          </motion.div>










          <motion.div

          animate={{
            y:[0,-8,0]
          }}

          transition={{
            duration:2,
            repeat:Infinity
          }}

          className="
          bg-blue-600
          text-white
          rounded-3xl
          p-10
          text-center
          shadow-xl
          "

          >


            <div className="
            text-5xl
            mb-5
            ">

              🤖

            </div>



            <h3 className="
            text-2xl
            font-bold
            ">

              AI Enhancement

            </h3>



            <p className="
            mt-4
            text-blue-100
            ">

              Analyzing skills,
              keywords and achievements...

            </p>


            <div className="
            mt-6
            bg-white/20
            rounded-full
            h-3
            overflow-hidden
            ">


              <motion.div

              animate={{
                width:["20%","90%","20%"]
              }}

              transition={{
                duration:3,
                repeat:Infinity
              }}

              className="
              bg-white
              h-full
              rounded-full
              "

              />

            </div>



          </motion.div>










          <motion.div

          initial={{
            opacity:0,
            x:30
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.5
          }}

          className="
          bg-white
          rounded-3xl
          shadow-lg
          p-8
          border
          "

          >


            <span className="
            text-green-600
            font-semibold
            ">

              After AI

            </span>




            <h3 className="
            text-xl
            font-bold
            mt-5
            ">

              Professional Result

            </h3>



            <p className="
            text-gray-600
            mt-4
            leading-7
            ">

              Developed responsive web applications
              using modern technologies, improving
              performance and user experience.

            </p>



          </motion.div>





        </div>



      </Container>


    </section>

  );

}


export default AIDemo;