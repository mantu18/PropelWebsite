import '../assets/css/Explain.css';
import teacher from '../assets/images/teacher.png';
export default function ExplainComponent(){
    return(
        <>
        <div className="explain-container">
            <h1>How we make you market ready</h1>
            <div className="explain-video-scroll-container">
                <div className="explain-scroll-container">
                    {/* <div className="explain-scroll-content"> */}
                    <div className="explain-fixed-process">
                    <h3>Our 3 step process</h3>
                    </div>
                    
                        <div className="explain-scroll-content-steps">
                            <div className='explain-scroll-content-steps-heading'>
                            <h4>The Perfect Harmony of Live Interaction and Recorded Wisdom</h4>
                            </div>
                            <div className="explain-scroll-content-steps-image-details-container">

                            <img src={teacher} width={400} height={400}></img>
                            <div className="explain-scroll-content-steps-details">
                                {/* <p>Day 1-4: MATERY MANIFESTATION</p>
                                <p>Day 5: Skill Sculpting</p>
                                <p>Day 6-7: Expertise Expedition</p> */}
                                <div className="explain-scroll-content-steps-details-part">
                                    <div className="explain-scroll-content-steps-details-part1">Day 1-4:</div>
                                    <div className="explain-scroll-content-steps-details-part2">MASTERY MANIFESTATION</div>
                                    <div className="explain-scroll-content-steps-details-part3">MASTERY MANIFESTATION</div>
                                </div>
                                <div className="explain-scroll-content-steps-details-part">
                                    <div className="explain-scroll-content-steps-details-part1">Day 5:</div>
                                    <div className="explain-scroll-content-steps-details-part2">Skill Sculpting</div>
                                </div>
                                <div className="explain-scroll-content-steps-details-part">
                                    <div className="explain-scroll-content-steps-details-part1">Day 6-7:</div>
                                    <div className="explain-scroll-content-steps-details-part2">Expertise Expedition</div>
                                    <div className="explain-scroll-content-steps-details-part3"></div>
                                </div>
                            </div>
                            </div>
                            
                            
                            
                        </div>
                        <div className="explain-scroll-content-steps"></div>
                    {/* </div> */}
                </div>
                {/* <div className="explain-video-container">

                </div> */}
            </div>
        </div>
        </>
    );
}