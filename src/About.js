import React from "react";
import "./About.css";
import aboutImg from "./img/wie_ben_ik.jpg";
import CV from "./doc/CV.docx";

function About() {
    // Up to Top Btn
    window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0)
    })
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Over mij</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Mijn naam is Michael Steili en ik ben 24 jaar. Ik heb recent
                mijn opleiding applicatieontwikkelaar niveau 4 afgerond.
                Momenteel werk ik parttime als postbode.
              </p>
              <div className="about__button d__flex align__items__center no__mobile">
                <a href={CV} download="CV.docx" rel="noopener noreferrer" target="_blank">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="https://www.linkedin.com/in/michael-steili-2795321b8/" rel="noopener noreferrer" target="_blank">
                  <button className="about btn pointer">
                    LinkedIn
                  </button>
                </a>
              </div>
              <div className="about__button mobile__only">
                <div class="mobile__button">
                <a href={CV} download="CV.docx" rel="noopener noreferrer" target="_blank">
                  <button className="about btn pointer">Download CV</button>
                </a>
                </div>
                <div class="mobile__button">
                <a href="https://www.linkedin.com/in/michael-steili-2795321b8/" rel="noopener noreferrer" target="_blank">
                  <button className="about btn pointer">
                    LinkedIn
                  </button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Back to top button */}
      <div className="up__to__top__btn">
          <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
