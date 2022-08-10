import React from "react";
import "./Website.css";
import Website1 from "./img/mylocalshop_mobile.jpg";
import Website2 from "./img/bgo.jpg";
import Website3 from "./img/witsenmarine.jpg";
import Website4 from "./img/scch.jpg";
import Website5 from "./img/zwembad.jpg";
import Website6 from "./img/repaircafe.jpg";

function Website() {
  return (
    <div className="website component__space" id="Project">
      <div className="heading">
        <h1 className="heading">Projecten</h1>
        <p className="heading p__color">Dit zijn een paar projecten</p>
        <p className="heading p__color">waar ik trots op ben!</p>
      </div>

      <div className="container">
        <div className="row">

          <div className="col__3">
            <div className="project__box cursor relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Website1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="website__meta absolute">
                <h5 className="project__text">MyLocalShop (Website offline)</h5>
                <h4 className="project__text">
                  Van WordPress naar maatwerk website!
                </h4>
                <a href="https://www.facebook.com/MylocalshopNL" target="_blank" rel="noreferrer" className="website project__btn btn">
                  Bekijk de Facebook pagina
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box cursor relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Website2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="website__meta absolute">
                <h5 className="project__text">Bewonersvereniging Rijk der Duizend Eilanden</h5>
                <h4 className="project__text">
                  Een website voor de bewonersvereniging Rijk der Duizend Eilanden.
                </h4>
                <a href="https://bgolangedijk.nl/" target="_blank" rel="noreferrer" className="website project__btn btn">
                  Bekijk de website
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box cursor relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Website3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="website__meta absolute">
                <h5 className="project__text">Witsen Marine</h5>
                <h4 className="project__text">
                  Een website voor de boten en aanhangers van Witse Marine.
                </h4>
                <a href="https://witsenmarine.nl/" target="_blank" rel="noreferrer" className="website project__btn btn">
                  Bekijk de website
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box cursor relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Website4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="website__meta absolute">
                <h5 className="project__text">Patiëntenvereniging SCCH</h5>
                <h4 className="project__text">
                  Een website voor de patiëntenvereniging SCCH.
                </h4>
                <a href="https://scch.nl/" target="_blank" rel="noreferrer" className="website project__btn btn">
                  Bekijk de website
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box cursor relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Website5} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="website__meta absolute">
                <h5 className="project__text">Social Leisure Zwembaden</h5>
                <h4 className="project__text">
                  Meerdere websites voor de zwembaden van Social Leisure.
                </h4>
                <a href="https://www.schagenactief.nl/zwemmen/" rel="noreferrer" target="_blank" className="website project__btn btn">
                  Bekijk de verschillende zwembaden
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box cursor relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Website6} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="website__meta absolute">
                <h5 className="project__text">Repair Café</h5>
                <h4 className="project__text">
                  Een website in meerdere talen.
                </h4>
                <a href="https://www.repaircafe.org/en/" target="_blank" rel="noreferrer" className="website project__btn btn">
                  Bekijk de website
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Website;
