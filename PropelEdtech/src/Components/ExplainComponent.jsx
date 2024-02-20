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
              The Perfect Harmony of Live Interaction and Recorded Wisdom
            </h4>

            
            <div class="accordion" id="accordionExample1">
  <div class="accordion-item accordion-item-1">
    <h2 class="accordion-header" id="headingOne1">
      <button class="accordion-button accordion-button-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-item-1">
    <h2 class="accordion-header" id="headingTwo2">
      <button class="accordion-button accordion-button-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-item-1">
    <h2 class="accordion-header" id="headingThree3">
      <button class="accordion-button accordion-button-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree3" class="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
            
          </div>
          <div className="journey-card journey-card-2">
            <img src={teacher} className="journey-card-img"></img>
            <h4 className="journey-card-heading">
              The Perfect Harmony of Live Interaction and Recorded Wisdom
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
                      Mastery Manifestation
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
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
                      Skill Sculpting
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
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
                      Expertise Expedition
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
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-card journey-card-3">
            <img src={teacher} className="journey-card-img"></img>
            <h4 className="journey-card-heading">
              The Perfect Harmony of Live Interaction and Recorded Wisdom
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
                      Mastery Manifestation
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
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
                      Skill Sculpting
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
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
                      Expertise Expedition
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
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
