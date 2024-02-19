import CourseCards from "../Components/CourseCards";
import Curriculum from "../Components/Curriculum";
import Display from "../Components/Display"
import ComparisionComponent from "../Components/ComparisionComponent"
import FeeComponent from "../Components/FeeComponent"
import Certified from "../Components/CertifiedPage"
import Certification from "../Components/Certificate"

export default function Coursepage(){
    return(
        <>
        <div className="CoursePage">
        <CourseCards></CourseCards>
        <Curriculum></Curriculum>
        <Certification></Certification>
        <Certified></Certified>
        <FeeComponent></FeeComponent>
        <ComparisionComponent></ComparisionComponent>
        </div>
        </>
    );
}