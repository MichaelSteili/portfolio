import React from "react";
import "./Werk.css";
import Werk1 from "./img/meo.jpg";
import Werk2 from "./img/mylocalshop.jpg";
import Werk3 from "./img/horizon.jpg";
import Werk4 from "./img/blosse.jpg";
import Werk5 from "./img/postnl.jpg";
import Werk6 from "./img/spotta.jpg";

function Werk() {
  return (
    <>
      <div className="project component__space" id="Werk">
        <div className="heading">
          <h1 className="heading">Werkervaring</h1>
          <p className="heading p__color">Bij deze bedrijven ben ik werkzaam (geweest)</p>
          <p className="heading p__color">of heb ik stage gelopen</p>
        </div>
        <div className="container">
          <div className="row">

            <div className="col__3">
              <div className="project__box cursor relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Werk1} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                    <h5 className="project__text">Stage (Applicatie Ontwikkelaar)</h5>
                    <h4 className="project__text">MEO</h4>
                    <a href="https://wijzijnmeo.nl/" target="_blank" className="project__btn">Bekijk bedrijf</a>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="project__box cursor relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Werk2} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                    <h5 className="project__text">Stage (Applicatie Ontwikkelaar)</h5>
                    <h4 className="project__text">MyLocalShop (Website offline)</h4>
                    <a href="https://www.facebook.com/MylocalshopNL/" target="_blank" className="project__btn">Bekijk bedrijf</a>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="project__box cursor relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Werk3} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                    <h5 className="project__text">Stage (Medewerker Beheer ICT)</h5>
                    <h4 className="project__text">Horizon College Hoorn</h4>
                    <a href="https://www.horizoncollege.nl/locaties/hoorn" target="_blank" className="project__btn">Bekijk bedrijf</a>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="project__box cursor relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Werk4} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                    <h5 className="project__text">Stage (Medewerker Beheer ICT)</h5>
                    <h4 className="project__text">Blosse</h4>
                    <a href="https://www.blosse.nl/" target="_blank" className="project__btn">Bekijk bedrijf</a>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="project__box cursor relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Werk5} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                    <h5 className="project__text">Werk (2015 - Heden)</h5>
                    <h4 className="project__text">PostNL</h4>
                    <a href="https://www.postnl.nl/" target="_blank" className="project__btn">Bekijk bedrijf</a>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="project__box cursor relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Werk6} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                    <h5 className="project__text">Werk (2011 - 2017)</h5>
                    <h4 className="project__text">Spotta</h4>
                    <a href="https://spotta.nl/" target="_blank" className="project__btn">Bekijk bedrijf</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Werk;
