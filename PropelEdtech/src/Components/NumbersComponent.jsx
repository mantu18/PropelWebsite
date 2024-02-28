import '../assets/css/Number.css';
import hike from '../assets/images/hike.png';
import network from '../assets/images/network.png';
import knowledge from '../assets/images/knowledge.png';
export default function NumbersComponent(){
    return(
        <>
            <div className="numbers-container bg-child">
            <h2 className='display-2 mx-5'>Accelerate your learning with our outcome based mentorship</h2>
            <h3 className='mx-5 mt-5 mb-3 h1'>10X your learning speed and save <bold>3 years</bold>of your career with our proven mentorship program eliminating trial and error</h3>
            <div className="">
                <div className="row">
                <div className="col-md-4 ">
                    <img src={hike} alt="" className='numbers-icon' />
                    <div className="vstack">
                        <h5 className='text-center h3'>90% Average Salary Hike</h5>
                        <p className='h5 mx-3 mt-4'>Mentees who enhanced their skills experienced an average salary increase of 90%, with some seeing boosts as high as 400%</p>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <img src={network} alt="" className='network-icon' />
                    <div className="vstack">
                        <h5 className='text-center h3'>Access to exclusive network</h5>
                        <p className='h5 mx-3 mt-4'>Whether your aspirations lean towards securing a lucrative career or establishing your own billion-dollar enterprise, our network is equipped to support your journey.</p>
                    </div>
                </div>

                <div className="col-md-4 ">
                    <img src={knowledge} alt="" className='knowledge-icon' />
                    <div className="vstack">
                        <h5 className='text-center h3'>94% increased industry insights</h5>
                        <p className='h5 mx-3 mt-4'>Students who recieve our mentorship are 94% more informed about industry trends and best practices</p>
                    </div>
                </div>
                
                </div>
                
            </div>
            </div>
            
        </>
    );
}