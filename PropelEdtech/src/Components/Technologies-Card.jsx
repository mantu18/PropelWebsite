"use client";
import rea from '../assets/images/react.webp'
import ml from '../assets/images/ml.jpeg'
import arvr from '../assets/images/ar vr.jpeg'
import {motion} from 'framer-motion'
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
export default function TechnologyCard(){
    const ref =useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["0 1","1.33 1"]
    })
   
    return(
        <motion.div
        ref={ref}
        style={{
            scale:scrollYProgress,
            opacity:scrollYProgress
        }}
         
        initial={{y:-25}}
        animate={{y:0}}
         className="tech-card" >
            <div className="tech-1"><img src={rea}alt="" className='tech-img'/></div>
            <div className="tech-1"><img src={ml} alt="" className='tech-img'/></div>
            <div className="tech-1"><img src={arvr} alt="" className='tech-img' /></div>
        </motion.div>
    );
}