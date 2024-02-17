import '../assets/css/UspComponent.css'
import {motion} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// import computer-icon  from "../assets/images/computer-icon"
import fullstack from '../assets/images/fullstack.png'

export default function UspComponent(){
    const {ref:myRef,inView:uspVisible} = useInView();
    console.log('uspVisible', uspVisible);
    return(
        <>
        <div ref={myRef} className="usp-container">
            <h2>Why Choose Us?</h2>
            
                    <div className='usp left'> 
                        <div className="uspImg ">
                         <img className='uspImage' src={fullstack}></img>
                        </div>
                        <div  className="usp-description">
                            <h4>100% Placement assistance</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut laboriosam asperiores qui delectus molestiae eveniet voluptas praesentium, sed officia a! Fugit consectetur distinctio provident maiores, reprehenderit maxime adipisci ratione asperiores!</p>
                            </div>
                    </div>
                
                    <div className="usp right">
                        <div className="usp-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis adipisci nisi cupiditate autem harum ut qui aut vero excepturi facilis aperiam, modi dolores quia? Expedita consectetur reiciendis temporibus voluptas ducimus?
                        </div>
                        <div className="uspImg">
                        <img className='uspImage' src={fullstack}></img>
                        </div>
                    </div>
                    <div className="usp left">
                        <div className="uspImg">
                        <img className='uspImage' src={fullstack}></img>
                        </div>
                        <div  className="usp-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, mollitia? Dolores nostrum quod natus odio sit sunt rerum sed eius magnam nulla animi nesciunt architecto maxime, impedit facilis veritatis excepturi.
                        </div>
                    </div>
                    <div className="usp right">
                        <div className="usp-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis adipisci nisi cupiditate autem harum ut qui aut vero excepturi facilis aperiam, modi dolores quia? Expedita consectetur reiciendis temporibus voluptas ducimus?
                        </div>
                        <div className="uspImg">
                        <img className='uspImage' src={fullstack}></img>
                        </div>
                    </div>
        </div>
        </>
    );
}