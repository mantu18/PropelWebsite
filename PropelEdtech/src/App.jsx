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
import Certified from "./Components/CertifiedPage";
import StickyScrollableNav from "./Components/StickyScrollableNav";
import LandingComponent from "./Components/LandingComponent";
import TechnologyCard from "./Components/TechnologyCard";
import UspComponent from "./Components/UspComponent";
import {createBrowserRouter, RouterProvider} from'react-router-dom';
import Home from "./Pages/Home";
import Coursepage from "./Pages/CoursePage";

const router = createBrowserRouter([
{path: '/', element: <Home></Home>},
{path: '/course', element: <Coursepage></Coursepage>}
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
 {/* <BreadcrumbComponent></BreadcrumbComponent>
      <CourseCards></CourseCards>
      <BgImage></BgImage>
      <ScrollableNavbar></ScrollableNavbar>
      <Curriculum></Curriculum>
      <StickyScrollableNav></StickyScrollableNav>
    
      <FeeComponent></FeeComponent>
      <Tabcertificate></Tabcertificate>
      <ComparisionComponent></ComparisionComponent> */}