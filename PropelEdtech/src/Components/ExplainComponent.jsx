import '../assets/css/Explain.css';
import teacher from '../assets/images/teacher.png';
export default function ExplainComponent(){
    return(
        <>
        <div className="explain-container bg-child">
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
                                <h4>Weekly schedule</h4>
                                <div className="explain-scroll-content-steps-details-part">
                                    <div className="explain-scroll-content-steps-details-part1">Day 1-4:</div>
                                    <div className="explain-scroll-content-steps-details-part2">MASTERY MANIFESTATION</div>
                                    <div className="explain-scroll-content-steps-details-part3">We lay the foundation for your success by providing you with an arsenal of detailed resources. From enlightening videos to insightful blogs and meticulously crafted notes, we leave no stone unturned in equipping you with the essential knowledge needed to thrive in your chosen field.</div>
                                </div>
                                <div className="explain-scroll-content-steps-details-part">
                                    <div className="explain-scroll-content-steps-details-part1">Day 5:</div>
                                    <div className="explain-scroll-content-steps-details-part2">Skill Sculpting</div>
                                    <div className="explain-scroll-content-steps-details-part3">it's time to refine your skills through our Skill Sculpting session on day five. Here, we delve deeper into the concepts covered, offering invaluable opportunities to revise and clarify any doubts you may have. Our dedicated instructors are committed to sculpting your skills to perfection, ensuring that you grasp every nuance with confidence and clarity.</div>
                                </div>
                                <div className="explain-scroll-content-steps-details-part">
                                    <div className="explain-scroll-content-steps-details-part1">Day 6-7:</div>
                                    <div className="explain-scroll-content-steps-details-part2">Expertise Expedition</div>
                                    <div className="explain-scroll-content-steps-details-part3">This exhilarating phase is where theory meets practice, as you dive headfirst into live projects that mirror real-world scenarios. Guided by seasoned professionals, you'll apply your newfound knowledge and skills to solve practical challenges, gaining invaluable hands-on experience that sets you apart in the competitive market.</div>
                                </div>
                            </div>
                            </div>
                            
                            
                            
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
                                <h4>Weekly schedule</h4>
                                <div className="explain-scroll-content-steps-details-part">
                                    <div className="explain-scroll-content-steps-details-part1">Day 1-4:</div>
                                    <div className="explain-scroll-content-steps-details-part2">MASTERY MANIFESTATION</div>
                                    <div className="explain-scroll-content-steps-details-part3">We lay the foundation for your success by providing you with an arsenal of detailed resources. From enlightening videos to insightful blogs and meticulously crafted notes, we leave no stone unturned in equipping you with the essential knowledge needed to thrive in your chosen field.</div>
                                </div>
                                <div className="explain-scroll-content-steps-details-part">
                                    <div className="explain-scroll-content-steps-details-part1">Day 5:</div>
                                    <div className="explain-scroll-content-steps-details-part2">Skill Sculpting</div>
                                    <div className="explain-scroll-content-steps-details-part3">it's time to refine your skills through our Skill Sculpting session on day five. Here, we delve deeper into the concepts covered, offering invaluable opportunities to revise and clarify any doubts you may have. Our dedicated instructors are committed to sculpting your skills to perfection, ensuring that you grasp every nuance with confidence and clarity.</div>
                                </div>
                                <div className="explain-scroll-content-steps-details-part">
                                    <div className="explain-scroll-content-steps-details-part1">Day 6-7:</div>
                                    <div className="explain-scroll-content-steps-details-part2">Expertise Expedition</div>
                                    <div className="explain-scroll-content-steps-details-part3">This exhilarating phase is where theory meets practice, as you dive headfirst into live projects that mirror real-world scenarios. Guided by seasoned professionals, you'll apply your newfound knowledge and skills to solve practical challenges, gaining invaluable hands-on experience that sets you apart in the competitive market.</div>
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