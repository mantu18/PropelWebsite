import {useState } from "react";

export default function Curriculum(){
    const [module, setModule] = useState(1);
    function handleClick(n){
        setModule(n);
    }

    const arr = [
        {
            title: "0System Design, Algorithms and Mastery of Agile and Scrum",
            description: "The art of system design involves defining the architecture, moving parts, and interfaces for a product and is a critical skill,especially during SDE interviews. This module would help you master this art and be prepared to face interviews with confidence."
        },
        {
            title: "1System Design, Algorithms and Mastery of Agile and Scrum",
            description: "The art of system design involves defining the architecture, moving parts, and interfaces for a product and is a critical skill,especially during SDE interviews. This module would help you master this art and be prepared to face interviews with confidence."
        },
        {
            title: "2System Design, Algorithms and Mastery of Agile and Scrum",
            description: "The art of system design involves defining the architecture, moving parts, and interfaces for a product and is a critical skill,especially during SDE interviews. This module would help you master this art and be prepared to face interviews with confidence."
        },
        {
            title: "3System Design, Algorithms and Mastery of Agile and Scrum",
            description: "The art of system design involves defining the architecture, moving parts, and interfaces for a product and is a critical skill,especially during SDE interviews. This module would help you master this art and be prepared to face interviews with confidence."
        },
        {
            title: "4System Design, Algorithms and Mastery of Agile and Scrum",
            description: "The art of system design involves defining the architecture, moving parts, and interfaces for a product and is a critical skill,especially during SDE interviews. This module would help you master this art and be prepared to face interviews with confidence."
        },
        {
            title: "5System Design, Algorithms and Mastery of Agile and Scrum",
            description: "The art of system design involves defining the architecture, moving parts, and interfaces for a product and is a critical skill,especially during SDE interviews. This module would help you master this art and be prepared to face interviews with confidence."
        },
        {
            title: "6System Design, Algorithms and Mastery of Agile and Scrum",
            description: "The art of system design involves defining the architecture, moving parts, and interfaces for a product and is a critical skill,especially during SDE interviews. This module would help you master this art and be prepared to face interviews with confidence."
        },
        {
            title: "7System Design, Algorithms and Mastery of Agile and Scrum",
            description: "The art of system design involves defining the architecture, moving parts, and interfaces for a product and is a critical skill,especially during SDE interviews. This module would help you master this art and be prepared to face interviews with confidence."
        }
    ]

    return(
        <>
        <div className="clm-1">
            <h4>FULL-STACK DEVELOPMENT BOOTCAMP CURRICULUM</h4>
        </div>
        <div className="clm-2">
            <h1><b>Learn with a</b></h1>
        </div>
        <div className="clm-2">
            <h2>World-Class Curriculum</h2>
        </div>
        <div className="clm-3">
             <div className={`cnt-1 ${module===1?'activeModule':null}`} onClick={()=>handleClick(1)}>
                <p>Module-1</p>   
             </div>
             <div className={`cnt-1 ${module===2?'activeModule':null}`} onClick={()=>handleClick(2)}>
                <p>Module-2</p>   
             </div>
             <div className={`cnt-1 ${module===3?'activeModule':null}`} onClick={()=>handleClick(3)}>
                <p>Module-3</p>   
             </div>
             <div className={`cnt-1 ${module===4?'activeModule':null}`} onClick={()=>handleClick(4)}>
                <p>Module-4</p>   
             </div>
             <div className={`cnt-1 ${module===5?'activeModule':null}`} onClick={()=>handleClick(5)}>
                <p>Module-5</p>   
             </div>
             <div className={`cnt-1 ${module===6?'activeModule':null}`} onClick={()=>handleClick(6)}>
                <p>Module-6</p>   
             </div>
                 
        </div>
        <div className="display-items" id="cirriculum">
            <div className="disp-1">
             <h5>{arr[module].title}</h5>
             </div>
             <div className="disp-2">
                <h6>{arr[module].description}</h6>
             </div>
        </div>
        </>
    );
}