import React from 'react';
import person1 from './images/logo3.jpeg'

const TestimonialsSection = () => {
  return (
    <div className="p-6 mb-8" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-4 text-blue-800">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonials content goes here */}
        <div className="p-4 flex flex-col md:flex-row items-center">
              <div className="mr-4 mb-4 md:mb-0">
                <img src={person1} alt="Person 1" className="w-25 h-24 rounded-full mr-4" />
              </div>
              <div>
                <p className="text-gray-800">"Taking the mental health assessment test was a turning point for me. It helped me understand my emotions better and take positive steps towards healing."</p>
                <p className="text-gray-800 mt-2">- John Doe</p>
              </div>
            </div>
            <div className="p-4 flex flex-col md:flex-row items-center">
              <div className="mr-4 mb-4 md:mb-0">
                <img src={person2} alt="Person 2" className="w-25 h-24 rounded-full mr-4" />
              </div>
              <div>
                <p className="text-gray-800">"I highly recommend the mental health assessment test to anyone seeking clarity and guidance. It's easy to use and provides valuable insights."</p>
                <p className="text-gray-800 mt-2">- Jane Smith</p>
              </div>
            </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
