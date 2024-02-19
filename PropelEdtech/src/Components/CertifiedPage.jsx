import { IoRocketSharp } from "react-icons/io5";
import certificate from "../assets/images/certificate.png";
import '../assets/css/Certificate.css';
export default function Certified() {
  return (
    <>
      <div className="page-1">
        <p>FULL-STACK DEVELOPMENT BOOTCAMP CERTIFICATION</p>
      </div>
      <div className="page-2">
        <h4>Your Full-Stack Development Certificate Awaits</h4>
      </div>
      <div className="page-3">
        <div className="cert-image-1">
          <div className="d-flex">
            <div><IoRocketSharp size={40} /></div>
            <div className="">
            <h2>Industry-Acclaimed Certification</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, molestiae esse? Earum quas amet, sed minus quos accusantium sit non velit hic, perferendis eveniet dignissimos maiores distinctio ex sint molestiae!</p>
            </div>
          </div>
          <div className="d-flex">
            <div><IoRocketSharp size={40} /></div>
            <div className="">
            <h2>Industry-Acclaimed Certification</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, molestiae esse? Earum quas amet, sed minus quos accusantium sit non velit hic, perferendis eveniet dignissimos maiores distinctio ex sint molestiae!</p>
            </div>
          </div>
        </div>
        <div  className="cert-info">
          <img src={certificate} id="certificate-img" alt="" />
        </div>
      </div>
    </>
  );
}
