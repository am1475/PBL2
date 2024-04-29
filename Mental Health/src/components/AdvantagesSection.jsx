import React from 'react';

const AdvantagesSection = () => {
  return (
    <div className=" bg-blue-100 p-6 mb-8 flex flex-col md:flex-row items-center" data-aos="fade-up">
      <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Advantages of Our Test</h2>
        <p className="text-lg mb-4 text-gray-800">Our free mental health assessment test offers several advantages:</p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Personalized insights into your mental well-being</li>
          <li className="mb-2">Recommendations tailored to your individual needs</li>
          <li className="mb-2">Accessible and convenient, take the test from anywhere</li>
          <li className="mb-2">Secure and confidential</li>
        </ul>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-md transition duration-300">Go to Test</button>
        </div>
      </div>
      <img src={image1} alt="" className="md:w-1/2 md:pl-4 w-full md:w-auto h-auto" />
    </div>
  );
}

export default AdvantagesSection;
