import '../assets/css/LandingCards.css'
import { VscWorkspaceTrusted } from "react-icons/vsc";
 
export default function LandingCards(){
    return(
        <>
        <div className="landing-card-container bg-child">
            <div className="landing-card">
            <VscWorkspaceTrusted size={50} />
                <h3>100% placement Assistance</h3>
            </div>
            <div className="landing-card"></div>
            <div className="landing-card"></div>
        </div>
        </>
    );
}