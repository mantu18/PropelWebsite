import React, { useRef } from 'react';
// import './styles.css'; // Import your CSS file

function CustomScroll() {
  const containerRef = useRef(null);

  const scrollContainer = (amount) => {
    
    document.getElementsByClassName("scrollable-nav")[0].scrollLeft+=amount
    
  };

  return (
    <>
    <div className="scroll-nav-container">
    <button className="scroll-button scroll-left" onClick={() => scrollContainer(-50)}>
        &#10094;
      </button>
      
    <div className="scrollable-nav" ref={containerRef} >
    
      
      <div className="inner"  >
        <a href="#cirriculum"><div className="y77">Cirriculum</div></a>
        <a href="#certificate"><div className="y77">Certificate</div></a>
        <a href="#certificate"><div className="y77">Projects</div></a>
        <a href="#certificate"><div className="y77">Compare</div></a>
        <a href="#certificate"><div className="y77">Fee</div></a>
        <a href="#certificate"><div className="y77">Fee</div></a>
        <a href="#certificate"><div className="y77">Fee</div></a>
        <a href="#certificate"><div className="y77">Fee</div></a>
        <a href="#certificate"><div className="y77">Fee</div></a>
      </div>
    </div>
    <button className="scroll-button scroll-right" onClick={() => scrollContainer(50)}>
        &#10095;
      </button>
    </div>
    </>
  );
}

export default CustomScroll;
