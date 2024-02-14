import LandingComponent from "../Components/LandingComponent";
import TechnologyCard from "../Components/TechnologyCard";
import UspComponent from "../Components/UspComponent";
export default function Home(){
    return(
        <>
        <div className="bg">
        <LandingComponent></LandingComponent>
      <TechnologyCard></TechnologyCard>
      {/* <NavbarComponent></NavbarComponent> */}
      <UspComponent></UspComponent>
      </div>
        </>
    );

}