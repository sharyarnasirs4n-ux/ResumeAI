import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import AIDemo from "../components/home/AIDemo";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import Templates from "../components/home/Templates";
import HowItWorks from "../components/home/HowItWorks";
import Footer from "../components/layout/Footer";
import CTA from "../components/home/CTA";
import FAQ from "../components/home/FAQ";
function Home() {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Features/>
   <AIDemo/>
   <Templates/>
   <HowItWorks/>
   <Testimonials/>
   <FAQ/>
   <CTA/>
   <Footer/>
  
  </>

)
}

export default Home;