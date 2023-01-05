import React from 'react';
import './Contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
const Contact = () => {
  return (
    <section id="contact" className="contact-container container">
      <div className="title-content">
        <h2>Kontakt</h2>
        <p>Ihre Meinung ist wichtig</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <article className="email">
            <AiOutlineMail />
            <h4>E-mail</h4>
            <h5>info@krawatte.de</h5>
          </article>
          <article className="whatsapp">
            <AiOutlineWhatsApp />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=+4917656832471">
              Nachrichten Senden
            </a>
          </article>
        </div>
        <div className="form">
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Deine Email"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
