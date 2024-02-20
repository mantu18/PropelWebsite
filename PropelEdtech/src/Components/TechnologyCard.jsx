"use client";
import rea from '../assets/images/react.webp'
import ml from '../assets/images/ml.jpeg'
import arvr from '../assets/images/ar vr.jpeg'
import {motion, useTransform} from 'framer-motion'
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import '../assets/css/TechnologyCard.css'
export default function TechnologyCard(){
    const ref =useRef(null);
    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["0 1","1.33 1"],
    });
    const scaleprogress = useTransform(scrollYProgress,[0,1],[0.7,1]);
    const opacityprogress = useTransform(scrollYProgress,[0,1],[0.6,1]);

   
    return(
        <>
        {/* <h1 className='tech-card-title'>We specialize in AI, MERN stack, AR/VR</h1> */}
        <div
        
         
        
         className="tech-card bg-child" >
            
            {/* <div className="tech-1"><img src={rea}alt="" className='tech-img'/><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quisquam expedita est recusandae laborum atque cumque possimus ab accusantium, voluptatem, pariatur alias voluptatum necessitatibus cum distinctio? Atque cum placeat possimus?</p></div>
            <div className="tech-1"><img src={ml} alt="" className='tech-img'/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas asperiores a at, ut dolorem, nesciunt reiciendis maiores ea voluptatum error earum commodi odit cum saepe sit eaque exercitationem omnis!</div>
            <div className="tech-1"><img src={arvr} alt="" className='tech-img' />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo alias! Facere a eveniet esse repudiandae nobis eius, nisi soluta pariatur consectetur totam deleniti dolorum velit dicta autem, labore non.</div>
         */}
         <div class="colourful-container">
  <div class="div-transform">
    <div class="card-color card-1-color">
      <h2>Programming</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        voluptas vero ipsa, nisi facilis possimus nam! Perferendis cum error
        a? Alias numquam, ea quia unde at facere eaque sint voluptatibus
        voluptatem aliquam.
      </p>
      <h4>Read More ➡</h4>
    </div>
    <div class="card-color card-2-color">
      <h2>Design</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        voluptas vero ipsa, nisi facilis possimus nam! Perferendis cum error
        a? Alias numquam, ea quia unde at facere eaque sint voluptatibus
        voluptatem aliquam.
      </p>
      <h4>Read More ➡</h4>
    </div>
    <div class="card-color card-3-color">
      <h2>Business</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        voluptas vero ipsa, nisi facilis possimus nam! Perferendis cum error
        a? Alias numquam, ea quia unde at facere eaque sint voluptatibus
        voluptatem aliquam.
      </p>
      <h4>Read More ➡</h4>
    </div>
  </div>
</div>
        </div>
        </>
    );
}