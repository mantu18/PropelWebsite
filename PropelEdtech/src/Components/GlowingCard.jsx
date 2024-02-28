import '../assets/css/GlowingCard.css'
export default function GlowingCard(){
    return(
        <>
        <div className="glowing-container bg-child">
        <div className="glowing-card">
            <div className="glowing-content">
                <div className="glowing-point">
                    <div className="glowing-point-box">
                        <div className='glowing-point-box-number'>9.7 out of 10</div>
                        <div className='glowing-point-box-description'>Average satisfaction rating of prev batches</div>
                    </div>
                </div>
                <div className="glowing-point">
                <div className="glowing-point-box">
                        <div className='glowing-point-box-number'>88%+</div>
                        <div className='glowing-point-box-description'>Placement ratio</div>
                    </div>
                </div>
                <div className="glowing-point">
                <div className="glowing-point-box">
                        <div className='glowing-point-box-number'>USD 120000</div>
                        <div className='glowing-point-box-description'>Highest Package</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        </>
    );
}