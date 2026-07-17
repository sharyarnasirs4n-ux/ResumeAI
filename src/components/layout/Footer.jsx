import Container from "../common/Container";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";


function Footer() {


  return (


    <footer className="
      bg-gray-950
      text-white
      py-16
    ">


      <Container>


        <div className="
          grid
          md:grid-cols-4
          gap-10
        ">






          <div>


            <h2 className="
              text-3xl
              font-bold
            ">

              Resume
              <span className="text-blue-500">
                AI
              </span>


            </h2>



            <p className="
              mt-4
              text-gray-400
              leading-7
            ">


              Create professional,
              ATS-friendly resumes
              with the power of AI.


            </p>



            <div className="
              flex
              gap-4
              mt-6
            ">


              <a
              href="#"
              className="
              text-gray-400
              hover:text-white
              transition
              "
              >

                <FaGithub size={22}/>

              </a>



              <a
              href="#"
              className="
              text-gray-400
              hover:text-white
              transition
              "
              >

                <FaLinkedin size={22}/>

              </a>



              <a
              href="#"
              className="
              text-gray-400
              hover:text-white
              transition
              "
              >

                <FaTwitter size={22}/>

              </a>


            </div>



          </div>










          <div>


            <h3 className="
              font-semibold
              text-lg
              mb-5
            ">

              Product

            </h3>


            <ul className="
              space-y-3
              text-gray-400
            ">


              <li className="hover:text-white cursor-pointer">

                Features

              </li>


              <li className="hover:text-white cursor-pointer">

                Templates

              </li>


              <li className="hover:text-white cursor-pointer">

                AI Resume Writer

              </li>


              <li className="hover:text-white cursor-pointer">

                ATS Checker

              </li>


            </ul>


          </div>










          <div>


            <h3 className="
              font-semibold
              text-lg
              mb-5
            ">

              Resources

            </h3>



            <ul className="
              space-y-3
              text-gray-400
            ">


              <li className="hover:text-white cursor-pointer">

                Resume Tips

              </li>


              <li className="hover:text-white cursor-pointer">

                Career Guide

              </li>


              <li className="hover:text-white cursor-pointer">

                FAQ

              </li>


              <li className="hover:text-white cursor-pointer">

                Support

              </li>


            </ul>


          </div>










          <div>


            <h3 className="
              font-semibold
              text-lg
              mb-5
            ">

              Company

            </h3>


            <ul className="
              space-y-3
              text-gray-400
            ">


              <li className="hover:text-white cursor-pointer">

                About

              </li>


              <li className="hover:text-white cursor-pointer">

                Privacy

              </li>


              <li className="hover:text-white cursor-pointer">

                Terms

              </li>


              <li className="hover:text-white cursor-pointer">

                Contact

              </li>


            </ul>


          </div>




        </div>










        <div className="
          border-t
          border-gray-800
          mt-12
          pt-8
          text-center
          text-gray-500
        ">


          © {new Date().getFullYear()} ResumeAI.
          All rights reserved.


        </div>




      </Container>


    </footer>


  );


}


export default Footer;