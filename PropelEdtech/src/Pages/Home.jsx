import AnimatedButton from "../Components/AnimatedButton";
import ExplainComponent from "../Components/ExplainComponent";
import GlowingCard from "../Components/GlowingCard";
import LandingCards from "../Components/LandingCard";
import LandingComponent from "../Components/LandingComponent";
import { ScrollAnimationComponent } from "../Components/ScrollAnimationComponent";
import TechnologyCard from "../Components/TechnologyCard";
import Testimonial from "../Components/Testimonial";
import UspComponent from "../Components/UspComponent";
import nasa from "../assets/images/nasa.gif"
import '../assets/css/Home.css';
import NavbarComponent from '../Components/NavbarComponent';
// import { RightScrollComponent } from "../Components/RightScrollComponent";
// import astro from '../assets/images/astro.webmp'

export default function Home(){
    return(
        <>
        <div className="bg">
        <NavbarComponent></NavbarComponent>
        <LandingComponent></LandingComponent>
        
      <TechnologyCard></TechnologyCard>
      {/* <NavbarComponent></NavbarComponent> */}
      <ExplainComponent></ExplainComponent>
      <GlowingCard></GlowingCard>
      <LandingCards></LandingCards>
      
      
      </div>
      <UspComponent></UspComponent>
      
      
     
      
      <Testimonial></Testimonial>
        </>
    );

}