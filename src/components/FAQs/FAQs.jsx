import React from 'react';
import './FAQs.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import data from '../../data';

const FAQs = () => {
  return (
    <section id="faq" className="FAQ-container container">
      <h2>Frequently Asked Questions</h2>

      <div className="content">
        <div className="question open">
          <div className="icon">
            <AiOutlineMinus />
          </div>
          <div className="detail">
            <h4>Aus welchen Materialien sind die Krawatten hergestellt?</h4>
            <p className='open'>Alle Krawatten werden aus Stoffresten hergestellt.</p>
          </div>
        </div>

        <div className="closed-question">
          {data.faq.map((faq) => (
            <div key={faq.number} className="question">
              <div className="icon">
                <AiOutlinePlus />
              </div>
              <div className="detail">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
