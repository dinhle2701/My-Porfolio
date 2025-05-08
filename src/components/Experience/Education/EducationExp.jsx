import React, { useState } from 'react';
import { PiCertificate } from "react-icons/pi";

const EducationExp = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle state to open/close
  };

  const educationData = [
    {
      id: 4,
      title: "AWS Cloud Developer",
      placement: "The Rolling Scope School (RSSchool)",
      date: "February 2025 - April 2025",
      cert: "https://drive.google.com/file/d/1t5LTR-leTvrTs3hxVMrRLiREwRHIm_mG/view?usp=sharing"
    },
    {
      id: 3,
      title: "Back-End Java Developer",
      placement: "Cybersoft Academy",
      date: "October 2023 - January 2024",
      cert: "https://drive.google.com/file/d/1OKAIRIgDo1RsbeIRo2TcQEJBnqyu1_Hx/view?usp=sharing"
    },
    {
      id: 2,
      title: "Back-End NodeJS Developer",
      placement: "Cybersoft Academy",
      date: "March 2023 - June 2023",
      cert: "https://drive.google.com/file/d/1zUGNgd3dmpECnUjFb3k-FAkjpLMDOU_t/view?usp=sharing"
    },
    {
      id: 1,
      title: "Industrial University of Ho Chi Minh City (IUH)",
      date: "2020 - 2025",
    },
  ]
  return (
    <div className="education">
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
                  <i className='text-sm font-normal'>{data.placement}</i>
                </p>
              </div>
            </h2>

            <div
              className={`accordion-collapse transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              {data.cert && (
                <div className="accordion-body p-4 bg-gray-100 text-center">
                  <PiCertificate className="inline text-3xl me-3" />
                  <a
                    href={data.cert}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    My Certification
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationExp;
