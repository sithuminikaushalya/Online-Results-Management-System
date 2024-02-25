import React from 'react';
import "./Topics.css";
import {questionmark,
  uni,
  students} from "./assests";

const Topics = () => {
  const columnData = [
    {
      topic: "What can I study?",
      paragraph: "We offer 30 undergraduate courses covering more than 65 subject areas, so you'll be sure to find a course that suits your interests.",
      image: questionmark,
      buttonText: "Find out more"
    },
    {
      topic: "Where will I study?",
      paragraph: "Cambridge has 29 undergraduate Colleges that provide students with a place to work, rest and play, and somewhere to call home.",
      image: uni,
      buttonText: "Find out more"
    },
    {
      topic: "How do I join?",
      paragraph: "The Cambridge application process is slightly different to other universities and starts a bit earlier too. Follow our step-by-step guide.",
      image: students,
      buttonText: "Find out more"
    }
  ];

  return (
    <div className="topics-container">
      {columnData.map((topic, index) => (
        <div key={index} className="column">
          <h2>{topic.topic}</h2>
          <img src={topic.image} alt={topic.topic} />
          <p>{topic.paragraph}</p>
          <button>{topic.buttonText}</button>
        </div>
      ))}
    </div>
  );
}

export default Topics;
