import '../assets/css/UspComponent.css'
import {motion} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// import computer-icon  from "../assets/images/computer-icon"
import fullstack from '../assets/images/fullstack.png'
import ScrollAnimationComponent from '../Components/ScrollAnimationComponent'

export default function UspComponent(){
    const {ref:myRef,inView:uspVisible} = useInView();
    console.log('uspVisible', uspVisible);
    return(
        <>
        <div ref={myRef} className="usp-container">
            <h2>Why Choose Us?</h2>
            
            <ScrollAnimationComponent name={"Feature1"} direction2={"-100%"} ></ScrollAnimationComponent>
      <ScrollAnimationComponent name={"Feature2"} direction2={"100%"} ></ScrollAnimationComponent>
      <ScrollAnimationComponent name={"Feature1"} direction2={"-100%"} ></ScrollAnimationComponent>
      <ScrollAnimationComponent name={"Feature2"} direction2={"100%"} ></ScrollAnimationComponent>
      
        </div>
        </>
    );
}