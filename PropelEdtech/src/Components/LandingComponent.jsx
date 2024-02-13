import {motion} from 'framer-motion'
import astro2 from '../assets/images/astro2.png'
import logo from '../assets/images/propel-logo.png'
export default function LandingComponent(){
    return(
        <motion.div  className="landing-container">
             <motion.img
             initial={{x:0,y:25, scale:0.25,opacity:0.5}}
             animate={{y:-180, x:-50, type: "spring", stiffness:350, scale:0.75, opacity:1 }}
             transition={{delay:1,duration:3}}
              src={logo} alt="Logo" className='landingImg'></motion.img>

              <h1>Propel your career</h1>
              <button className='glow'><p id='button-text' >Launch</p></button>
              <button className='glow'><p id='button-text' >Apply Now</p></button>

        </motion.div>
    );
}