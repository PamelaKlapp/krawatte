import React from 'react';
import './FAQs.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const FAQs = () => {
  return (
    <div id='FAQ' className="FAQ-container container">
      <h2>Frequently Asked Questions</h2>

      <div className="content">
        <div className="question open">
          <div className="icon">
            <AiOutlineMinus />
          </div>
          <div className="detail">
            <h4>Aus welchen Materialien sind die Krawatten hergestellt?</h4>
            <p>Alle Krawatten werden aus Stoffresten hergestellt.</p>
          </div>
        </div>

        <div className="question">
          <div className="icon">
            <AiOutlinePlus />
          </div>
          <div className="detail">
            <h4>Wo werden die Krawatten hergestellt?</h4>
            <p>
              Die Krawatten werden von chilenischen Näherinnen handgefertigt.
            </p>
          </div>
        </div>

        <div className="question">
          <div className="icon">
            <AiOutlinePlus />
          </div>
          <div className="detail">
            <h4>Sind alle Designs einzigartig?</h4>
            <p>
              Wir sind sehr stolz darauf, sagen zu können: Ja, jeder Entwurf ist
              einzigartig.
            </p>
          </div>
        </div>

        <div className="question">
          <div className="icon">
            <AiOutlinePlus />
          </div>
          <div className="detail">
            <h4>Liefern Sie auch außerhalb Chiles?</h4>
            <p>Ja, wir versenden weltweit.</p>
          </div>
        </div>

        <div className="question">
          <div className="icon">
            <AiOutlinePlus />
          </div>
          <div className="detail">
            <h4>Wie lange dauert der Versand?</h4>
            <p>
              Der Versand dauert:
              <br />
              Innerhalb Chiles: zwischen 2-4 Arbeitstagen.
              <br />
              Außerhalb Chiles: zwischen 1-3 Wochen.
            </p>
          </div>
        </div>

        <div className="question">
          <div className="icon">
            <AiOutlinePlus />
          </div>
          <div className="detail">
            <h4>Welche Zahlungsmöglichkeiten gibt es?</h4>
            <p>Im Moment können Sie nur mit PayPal bezahlen.</p>
          </div>
        </div>

        <div className="question">
          <div className="icon">
            <AiOutlinePlus />
          </div>
          <div className="detail">
            <h4>Ist es möglich, das Produkt zurückzusenden?</h4>
            <p>Ja, aber Sie müssen die Versandkosten selbst tragen.</p>
          </div>
        </div>

        <div className="question">
          <div className="icon">
            <AiOutlinePlus />
          </div>
          <div className="detail">
            <h4>Wie kann man sie am besten waschen?</h4>
            <p>Wir empfehlen, sie von Hand in lauwarmem Wasser zu waschen.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
