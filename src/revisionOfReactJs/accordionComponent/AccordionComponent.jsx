import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "What is a component?",
      answer: "Components are reusable pieces of UI in React."
    },
    {
      question: "What is state in React?",
      answer: "State is a built-in object to store dynamic data in a component."
    },
    {
      question: "What is Props in React?",
      answer: "Props is known as Properties. There work is to recieve a data Parent component to child component."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2>Accordion Example</h2>
      {data.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", marginBottom: "10px", borderRadius: "5px" }}>
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              padding: "10px",
              background: "#f0f0f0",
              cursor: "pointer",
              fontWeight: "bold",
              color:'red'
            }}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div style={{ padding: "10px", background: "#fff" }}>{item.answer}</div>
          )}
        </div>
      ))}
    </div> 
  );
};

export default Accordion;
