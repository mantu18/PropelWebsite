import { motion } from "framer-motion";
import astro2 from "../assets/images/astro2.png";
import logo from "../assets/images/propel-logo.png";
import AnimatedButton from "./AnimatedButton";
import "../assets/css/LandingComponent.css";
import nasa from "../assets/images/nasa.gif"
import interstellar from "../assets/images/interstellar.mp4";

export default function LandingComponent() {
  return (
    <>
      <div className="landing-container bg-child">
      {/* <div className="bg-gif">
        
        <video className="interstellar" src={interstellar} autoPlay loop muted width="100%" height="auto"></video>
        </div> */}
        <motion.div
        initial={{y:50}}
        animate={{ y: 0 }}
        transition={{duration:1}}
        className="logo-container">Propel</motion.div>
        <motion.div
        initial={{y:100}}
        animate={{ y: 0 }}
        transition={{duration:2}}
         className="landing-title">Mentoring Experts in<br></br> <span className="content">AI, AR and MERN</span></motion.div>
        <motion.div 
        initial={{y:100}}
        animate={{y:0}}
        transition={{duration:2}}
        className="landing-subtitle">
            At Propel, renowned for excellence, we've transformed countless careers. With expertise in AI, AR, VR, and MERN stack, our courses, crafted by industry leaders, offer hands-on experience. Empowering learners with personalized mentorship, we don't just teach – we shape futures. 
        </motion.div>
        <motion.div
        initial={{y:100}}
        animate={{y:0}}
        transition={{duration:2}}
         className="animated-button-container">
            <AnimatedButton />
        </motion.div>
      </div>
    </>
  );
}

{
  /* <img
             initial={{y:-250, scale:0.25,opacity:0}}
             animate={{y:-50,  type: "spring", stiffness:350, scale:0.75, opacity:1 }}
             transition={{duration:1.5}}
              src={logo} alt="Logo" className='landingImg'></img> */
}

{
  /* <h1 className='landing-h1'
               initial={{y:50,opacity:0.25}} 
               animate={{y:0,opacity:1}}
               transition={{duration:1.5}}
               >Propel your career</h1> */
}
{
  /* <div 
              initial={{y:50,opacity:0.25}} 
              animate={{y:0,opacity:1}}
              transition={{duration:1.5}}
              className='landing-sub'>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aliquid distinctio dolores nesciunt error accusantium, laudantium corrupti omnis accusamus hic, sed autem vero consectetur fugit aliquam aperiam labore quo temporibus.
               </p> 
              </div> */
}
{
  /* <div
              initial={{y:50,opacity:0.25}} 
              animate={{y:0,opacity:1}}
              transition={{duration:1.5}}
               className='landing-butttoncontainer'>
              <button className='glow' id='landing-button-1'><p id='button-text' >Launch</p></button>
              <button className='glow'><p id='landing-button-2' >Apply</p></button>
              <AnimatedButton></AnimatedButton>
              <AnimatedButton></AnimatedButton>
              </div> */
}
