import AnimatedButton from "../Components/AnimatedButton";
import ExplainComponent from "../Components/ExplainComponent";
import GlowingCard from "../Components/GlowingCard";
import LandingCards from "../Components/LandingCard";
import LandingComponent from "../Components/LandingComponent";
import TechnologyCard from "../Components/TechnologyCard";
import Testimonial from "../Components/Testimonial";
import UspComponent from "../Components/UspComponent";
import nasa from "../assets/images/nasa.gif"

export default function Home(){
    return(
        <>
        <div className="bg">
        
        <LandingComponent></LandingComponent>
        
      <TechnologyCard></TechnologyCard>
      {/* <NavbarComponent></NavbarComponent> */}
      <ExplainComponent></ExplainComponent>
      <GlowingCard></GlowingCard>
      <LandingCards></LandingCards>
      <UspComponent></UspComponent>
      <Testimonial></Testimonial>
      
      </div>
        </>
    );

}