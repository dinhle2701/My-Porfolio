import React, { useState } from 'react';

const WorkExp = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle state to open/close
  };

  const educationData = [
    {
      id: 4,
      title: "AWS First Cloud Journey",
      date: "May 2025 - August 2025",
      position: "Cloud Developer",
      description: ""
    },
    {
      id: 3,
      title: "The Rolling Scope School (RSSchool)",
      date: "December 2024 - Now 2025",
      position: "Cloud Developer / DevOps / Frontend",
      description: ""
    },
    {
      id: 2,
      title: "Cybersoft Academy",
      date: "March 2023 - June 2023",
      position: "Fullstack Intern",
      description: "- Participate in developing projects as a Fullstack\n - Test and deploy an application to a production environment\n"
    },
    {
      id: 1,
      title: "Sharework Corporation",
      date: "October 2024 - December 2024",
      position: "Backend Java Intern",
      description: "- Học Spring Boot\n- Làm việc với MySQL\n- Tạo REST API"
    },
  ]

  return (
    <div className='work'>
      <div className="accordion" id="accordionExample">
        {educationData.map((data, index) => (
          <div key={index} className="accordion-item mb-1 border border-gray-300 rounded">
            <h2 className="accordion-header">
              <div
                onClick={() => toggleAccordion(index)}
                className={`
                        accordion-button w-full p-4 border-0 
                        flex items-center cursor-pointer transition-colors duration-800 ${openIndex === index ? 'bg-blue-200' : 'bg-gray-200'
                  }`}
                aria-expanded={openIndex === index}
              >
                <span className='w-80 text-center'>
                  <i className='text-sky-700 font-bold'>{data.date}</i>
                </span>
                <p className="ml-4 text-left font-bold">{data.title} <br />
                  <i className='text-sm font-normal'>{data.position}</i>
                </p>
              </div>
            </h2>

            <div
              className={`accordion-collapse transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="accordion-body p-4 bg-gray-100 text-left ps-24 whitespace-pre-line">
                <a href="">{data.description || "No description provided."}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
