import {Button} from 'react-bootstrap';
// import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
// import  {faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { FaShareAlt } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import fullstack from '../assets/images/fullstack.png'


import './CourseCards.css'
export default function CourseCards(){
    return(
        <div className='cards-container'>
            <div className="info-card lh-1">
                <div className='button-row'>
                <Button variant="primary">Immersive Learning</Button>{' '}
                <Button variant="primary">Popular</Button>{' '}

            <FaShareAlt id="share-icon"/>
                </div>
                <div className="course-name">
                <h6>FULL-STACK DEVELOPMENT BOOTCAMP</h6>
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
                        <button >apply now</button>
                        
                        <button >Download Syllabus</button>
                        
                    </div>
                    
                
                    
                    </div>
                    
                </div>
            
            </div>
            
            <div className="img-card">
                <img className='courseImg' src={fullstack}></img>
            </div>
        </div>
    );
}