import React from 'react';

const CustomizedTimeline = () => {
  const events = [
    {
      date: "15 December 2023",
      title: "Abstract Submission",
      description: "Description of event 1.",
    },
    {
      date: "15 January 2023",
      title: "Announcement for Shortlisting 20 Teams",
      description: "Description of event 2.",
    },
  ];

  return (
    <div className="flex justify-center mt-10 mb-10 container mx-auto p-4">
      <div className="relative">
        <div className="border-r-2 border-blue-500 absolute h-full left-4 top-4"></div>
        {events.map((event, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center mb-2">
              <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
              </div>
              <div className="ml-4 text-xl text-white transition duration-300 ease-in transform hover:scale-105">{event.date}</div>
            </div>
            <div className="ml-12">
              <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 ">{event.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizedTimeline;
