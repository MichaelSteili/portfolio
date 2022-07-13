import React from "react";
import "./Contact.css";
import contactImg from "./img/contact.jpg";

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Neem mij in dienst!</h1>
              <p className="hire__text white">
                Ik ben opzoek naar een bedrijf waar ik mijzelf kan ontwikkelen. Neem contact met mij op via telefoon:
              </p>
              <p className="hire__text white">
                <strong>0640280002</strong> of email{" "}
                <strong><a class="email" href="mailto:michaelsteili@hotmail.com">michaelsteili@hotmail.com</a></strong>
              </p>
            </div>
            <div className="input__box">
              <form action="https://formspree.io/f/mgeddknv" method="POST">
                <input
                  type="text"
                  name="Naam"
                  className="contact name"
                  placeholder="Uw naam/bedrijf*"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  className="contact email"
                  placeholder="Uw Email*"
                  required
                />
                <input
                  type="tel"
                  name="Telefoonnummer"
                  className="contact telefoon"
                  placeholder="Uw Telefoonnummer"
                />
                <input
                  type="text"
                  name="Onderwerp"
                  className="contact subject"
                  placeholder="Onderwerp*"
                  required
                />
                <textarea
                  id="message"
                  name="Bericht"
                  placeholder="Schrijf je bericht*"
                  required
                ></textarea>
                <button className="btn contact pointer" type="submit">
                  Verstuur
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col__2 no__mobile">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
