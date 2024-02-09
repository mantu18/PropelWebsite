import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarComponent";
import BreadcrumbComponent from "./Components/BreadcrumbComponent";
import CourseCards from "./Components/CourseCards";
import Activity from "./Components/Activity";
import Content from "./Components/content";
import BgImage from "./Components/background-image";
//import { Tabs } from "react-bootstrap";
import Tabcomponent from './Components/Tabcomponent'
import Curriculum from "./Components/curriculum";
import Display from "./Components/Display";
import Certification from "./Components/Certificate";
import Tabcertificate from "./Components/CertTab";
import AnchorLink from "react-anchor-link-smooth-scroll";
import FeeComponent from "./Components/FeeComponent";
import ComparisionComponent from "./Components/ComparisionComponent";
import ScrollableNavbar from './Components/ScrollableNavbar'
import SlickNavbar from "./Components/SlickNavbar";

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <BreadcrumbComponent></BreadcrumbComponent>
      <CourseCards></CourseCards>
      <ScrollableNavbar></ScrollableNavbar>
      {/* <div className="qwe">
          <a href="#cirriculum">
          <div className="y77">Cirriculum</div>
          </a>
          <a href="#certificate">
          <div className="y77">Certificate</div>
          </a>
          <a href="#certificate">
          <div className="y77">Projects</div>
          </a>
          <a href="#certificate">
          <div className="y77">Compare</div>
          </a>
          <a href="#certificate">
          <div className="y77">Fee</div>
          </a>
      </div> */}
      {/* <Tabcomponent></Tabcomponent> */}
      {/* <SlickNavbar></SlickNavbar> */}
      <Curriculum></Curriculum>
      {/* <Display></Display> */}
      {/* <Certification></Certification> */}
      <FeeComponent></FeeComponent>
      <Tabcertificate></Tabcertificate>
      <ComparisionComponent></ComparisionComponent>
      <BgImage></BgImage>
      <BgImage></BgImage>
      <BgImage></BgImage>
      <BgImage></BgImage>
      <BgImage></BgImage>
      
    </>
  );
}

export default App;
