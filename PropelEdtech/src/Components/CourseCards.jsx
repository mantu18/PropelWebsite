import {Button} from 'react-bootstrap';
// import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
// import  {faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { FaShareAlt } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import fullstack from '../assets/images/fullstack.png'
import {motion} from 'framer-motion'; 


import './CourseCards.css'
export default function CourseCards(){
    return(
        <motion.div className='cards-container' 
        // initial={{y:-500}}
        //     animate={{y:0, type: "spring", stiffness:1350 }}
        //     transition={{duration:2}}
            >
            <div className="info-card lh-1">
                <div className='button-row'>
                <Button variant="primary">Immersive Learning</Button>{' '}
                <Button variant="primary">Popular</Button>{' '}

            <FaShareAlt id="share-icon"/>
                </div>
                <div className="course-name">
                <motion.h6
                >FULL-STACK DEVELOPMENT BOOTCAMP</motion.h6>
                <h3>The most trusted way to become an</h3>
                <h1>Expert Full-Stack Developer</h1>
                <div className='points-container'>
                    <div className='point'>
                        <IoRocketSharp />
                        <h5>Land your dream tech job</h5>
                    </div>
                
                    <div className='point'>
                        <IoRocketSharp />
                        <h5>hello</h5>
                    </div>
                    <div className='point'>
                        <IoRocketSharp />
                        <h5>hello</h5>
                    </div>
                    <div className='point'>
                        <IoRocketSharp />
                        <h5>hello</h5>
                    </div>
                    <div className='point'>
                        <IoRocketSharp />
                        <h5>hello</h5>
                    </div>
                    <div className='btn-1'>
                        <motion.button 
                        whileHover={{scale:1.5, textShadow:"0px 0px 800px rgb(0,0,0)",boxShadow:"0px 0px 800px rgb(0,0,0)" }}
                        transition={{type:'spring', stiffness:600,delay:0.5}}
                        >apply now</motion.button>
                        
                        <button >Download Syllabus</button>
                        
                    </div>
                    </div>
                    
                </div>
            
            </div>
            
            <div className="img-card">
                <img className='courseImg' src={fullstack}></img>
            </div>
        </motion.div>
    );
}


