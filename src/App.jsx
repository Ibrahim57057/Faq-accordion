import React, { useState } from "react";
import ReactDom from "react-dom";
import "./App.css";

const faqData = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium challenges. The free tier gives you access to a large number of challenges to practice your skills.",
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use your completed Frontend Mentor projects in your portfolio. We encourage you to showcase your work and share it with the community.",
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "You can get help by joining our Slack community, asking questions in our Discord server, or checking out our solutions section.",
  },
];

export default function App() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="app">
      <div className="card">
        {/* Header */}
        <div className="card-header">
          <img src="/images/icon-star.svg" alt="star" />
          <h1>FAQs</h1>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqData.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              id={faq.id}
              openId={openId}
              setOpenId={setOpenId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer, id, openId, setOpenId }) {
  const isOpen = id === openId;

  function handleClick() {
    setOpenId(isOpen ? null : id);
  }

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={handleClick}>
        <p>{question}</p>
        <img src={isOpen ?"/images/icon-minus.svg" : "/images/icon-plus.svg"} alt="open" />
      </div>

      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}
