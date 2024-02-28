import "../assets/css/Explain.css";
import teacher from "../assets/images/teacher.png";
export default function ExplainComponent() {
  return (
    <>
      <div className="explain-container bg-child">
        <h1>How we make you market ready</h1>
        <div className="explain-fixed-process">
          <h3>Our 3 step process</h3>
        </div>

        <div className="journey-card-container">
          <div className="journey-card journey-card-1">
            <img src={teacher} className="journey-card-img"></img>
            <h4 className="journey-card-heading">
              Foundation
            </h4>

            
            <div class="accordion" id="accordionExample1">
  <div class="accordion-item accordion-item-1">
    <h2 class="accordion-header" id="headingOne1">
      <button class="accordion-button accordion-button-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
        Live Project Implementation
      </button>
    </h2>
    <div id="collapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>At Propel we foucus on project based learning.</strong>Our Industry expert mentors will help you create amazing projects through live classes and instantly resolve your queries.
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-item-1">
    <h2 class="accordion-header" id="headingTwo2">
      <button class="accordion-button accordion-button-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
        Interactive classes & doubt clearning
      </button>
    </h2>
    <div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>A special focus on interactive learning, revision, doubt clearing and exclusive interaction with pioneers of industry so you get the latest updates</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-item-1">
    <h2 class="accordion-header" id="headingThree3">
      <button class="accordion-button accordion-button-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
        Study materials
      </button>
    </h2>
    <div id="collapseThree3" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>We leave no stone unturned when it comes to preparing you for your career. we provide Detailed informative videos, blogs, notes so that you can learn the details at your own pace</strong>
      </div>
    </div>
  </div>
</div>
            
          </div>
          <div className="journey-card journey-card-2">
            <img src={teacher} className="journey-card-img"></img>
            <h4 className="journey-card-heading">
             Skill Sculpting
            </h4>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item accordion-item-2">
                <h2 class="accordion-header" id="headingOne4">
                  <button
                    class="accordion-button accordion-button-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne4"
                    aria-expanded="true"
                    aria-controls="collapseOne4"
                  >
                    <span className="accordion-button-text">
                      {" "}
                      Progressive Assignments
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne4"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne4"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>Progressive assignments help you strengthen core concepts and progressively improve your knowledge</strong>Solutions are provided to guide you improve learning pace
                    
                  </div>
                </div>
              </div>
              <div class="accordion-item accordion-item-2">
                <h2 class="accordion-header" id="headingTwo5">
                  <button
                    class="accordion-button accordion-button-2 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo5"
                    aria-expanded="false"
                    aria-controls="collapseTwo5"
                  >
                    <span className="accordion-button-text">
                      {" "}
                      Hands-on Assignments
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseTwo5"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo5"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>Hands-on assignments improves your applied knowledge and imporove your problem solving skills.</strong>{" "}
                    
                  </div>
                </div>
              </div>
              <div class="accordion-item accordion-item-2">
                <h2 class="accordion-header" id="headingThree6">
                  <button
                    class="accordion-button accordion-button-2 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree6"
                    aria-expanded="false"
                    aria-controls="collapseThree6"
                  >
                    <span className="accordion-button-text">
                      Mini Projects
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseThree6"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree6"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>Mini projects will help you apply all the things you learnt and boost your resume.</strong> It
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-card journey-card-3">
            <img src={teacher} className="journey-card-img"></img>
            <h4 className="journey-card-heading">
            Expertise Expedition
            </h4>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item accordion-item-3">
                <h2 class="accordion-header" id="headingOne7">
                  <button
                    class="accordion-button accordion-button-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne7"
                    aria-expanded="true"
                    aria-controls="collapseOne7"
                  >
                    <span className="accordion-button-text">
                      {" "}
                      Knowledge Transfer
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne7"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne7"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>Senior developers will guide you to be prepared to contribute for live projects</strong>
                   
                  </div>
                </div>
              </div>
              <div class="accordion-item accordion-item-3">
                <h2 class="accordion-header" id="headingTwo8">
                  <button
                    class="accordion-button accordion-button-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo8"
                    aria-expanded="false"
                    aria-controls="collapseTwo8"
                  >
                    <span className="accordion-button-text">
                      {" "}
                      Code Contribution
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseTwo8"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo8"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>Code contribution to live projects under the guidance of seniors</strong>{" "}
                    
                  </div>
                </div>
              </div>
              <div class="accordion-item accordion-item-3">
                <h2 class="accordion-header" id="headingThree9">
                  <button
                    class="accordion-button accordion-button-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree9"
                    aria-expanded="false"
                    aria-controls="collapseThree9"
                  >
                    <span className="accordion-button-text">
                      Code Review
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseThree9"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree9"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>Get most valuable insights that help you improve your quality of work and guidance about industry standards</strong>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
