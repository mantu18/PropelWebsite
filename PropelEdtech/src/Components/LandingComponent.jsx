import {motion} from 'framer-motion'
import astro2 from '../assets/images/astro2.png'
import logo from '../assets/images/propel-logo.png'
export default function LandingComponent(){
    return(
        <motion.div
       
         className="landing-container">
             <motion.img
             initial={{y:-250, scale:0.25,opacity:0}}
             animate={{y:-50,  type: "spring", stiffness:350, scale:0.75, opacity:1 }}
             transition={{duration:1.5}}
              src={logo} alt="Logo" className='landingImg'></motion.img>

              <motion.h1
               initial={{y:50,opacity:0.25}} 
               animate={{y:0,opacity:1}}
               transition={{duration:1.5}}>Propel your career</motion.h1>
              <div className='landing-sub'>

              </div>
              <div className='landing-butttoncontainer'>
              <button className='glow'><p id='button-text' >Launch</p></button>
              <button className='glow'><p id='button-text' >Apply</p></button>
              </div>
        </motion.div>
    );
}