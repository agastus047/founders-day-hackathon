import React, { useState } from "react";

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  const faqData = [
    {
      id: 1,
      question: "Can I Submit Past Projects?",
      answer: "We highly recommend submitting projects that you constructed on-site during hackathon's 36 hours.",
    },
    {
      id: 2,
      question: "Is there a theme for this hackathon?",
      // answer: "Yes, the theme will be released when registrations starts",
      answer: "Yes, the theme is Smart and Sustainable Designs for Agriculture,Food and Rural Development.",
    },
    {
      id: 3,
      question: "How many prizes can a team acquire?",
      answer: "A team can only acquire one prize, including the main prizes and the specific tracks.",
    },
    {
      id: 4,
      question: "Will judgement be separate for hardware and software?",
      answer: "No, we value the idea and product that can have the most significant impact and best adhere to the theme.",
    },
    {
      id: 5,
      question: "What are the criteria for participation?",
      answer: "The participant must be a student and a non working professional.",
    },
    {
      id: 6,
      question: "Should I be physically present for hackathon?",
      answer: "It is mandatory to be physically present at the venue for the hacakathon.",
    },
    {
      id: 7,
      question: "How many team members are allowed?",
      answer: "There should be a minimum of 2-4 per team.",
    },
    {
      id: 8,
      question: "Is this hackathon only for students of TKM?",
      answer: "No, this hacakathon is open to all students.",
    },
    {
      id: 9,
      question: "Is there a registration fee?",
      answer: "The registration is completely free of cost.",
    },
    {
      id: 10,
      question: "Will there be shortlisting for the offline hackathon?",
      answer: "Yes, 20 teams will be selected based on the abstract submitted.",
    },
    {
      id: 11,
      question: "Does my project have to include all three domains-agriculture, food, and rural development?",
      answer: "Any or all of these domains can be chosen for the project idea.",
    },
    {
      id: 12,
      question: "Must all team members be from TKM College to qualify for the Innovation by TKM track?",
      answer: "Yes, they must be either from any institute of Group of TKM Colleges. ",
    },
    {
      id: 13,
      question: "Are there any facilities for hardware development?",
      answer: "The Idea Lab will remain open for the entire duration of the hackathon, allowing participants to utilize available equipment and machinery.",
    },
  ];

  return (
    <div data-aos="fade" className="bg-black">
      <div className="p-5 bg-light-blue">
        <div className="flex justify-center items-start my-2">
          <div className="w-full sm:w-10/12 md:w-128 my-1">
            <h2 className="text-5xl text-center mb-4 font-semibold text-white mb-2">
              FAQ
            </h2>
            <ul className="flex flex-col gap-2 mt-8">
              {faqData.map((faqItem) => (
                <li key={faqItem.id} className="my-2 shadow-lg bg-black border border-gradient-animation p-4 rounded-xl">
                  <h2
                    onClick={() => handleClick(faqItem.id)}
                    className="flex flex-row justify-between items-center  p-3 cursor-pointer"
                  >
                    <span className="text-xl md:text-2xl text-white">
                      {faqItem.question}
                    </span>
                    <svg
                      className={`fill-current text-white h-6 w-6 transform transition-transform duration-500 ${
                        openId === faqItem.id ? "rotate-180" : "rotate-0"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                  </h2>
                  <div
                    className={`overflow-hidden transition-opacity ${
                      openId === faqItem.id ? "opacity-100" : "opacity-0"
                    } ${
                      openId === faqItem.id
                        ? "max-h-screen p-3 text-white"
                        : "max-h-0 p-0 text-transparent"
                    } duration-300`}
                  >
                    <p>{faqItem.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
