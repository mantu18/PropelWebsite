import React, { useRef } from 'react';
// import './styles.css'; // Import your CSS file

function CurriculumNav() {
  const containerRef = useRef(null);

  const scrollContainer = (amount) => {
    
    document.getElementsByClassName("scrollable-nav")[0].scrollLeft+=amount
    
  };

  return (
    <>
    <div className="scroll-nav-container sticky">
    <button className="scroll-button scroll-left" onClick={() => scrollContainer(-50)}>
        &#10094;
      </button>
      
    <div className="scrollable-nav" ref={containerRef} >
    
      
      <div className="inner"  >
        <a href="#module1"><div className="y77">Module 1</div></a>
        <a href="#module2"><div className="y77">Module 2</div></a>
        <a href="#module3"><div className="y77">Module 3</div></a>
        <a href="#module4"><div className="y77">Module 4</div></a>
        <a href="#module5"><div className="y77">Module 5</div></a>
        
      </div>
    </div>
    <button className="scroll-button scroll-right" onClick={() => scrollContainer(50)}>
        &#10095;
      </button>
    </div>
    </>
  );
}

export default CurriculumNav;
