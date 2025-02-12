/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React, { useState } from 'react'; // Combine React and useState import
import { Fade } from 'react-awesome-reveal';

export default function Service({ data }) {
  const [selectedService, setSelectedService] = useState(null); // Track selected service
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

  const handleCardClick = (service) => {
    setSelectedService(service); // Set selected service
    setIsModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedService(null); // Reset selected service
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Our Service
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            We are ready to scale up your business with our great service.
          </p>
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item) => (
            <Fade direction={item.animation} key={item.title} triggerOnce>
              <div 
                onClick={() => handleCardClick(item)} 
                role="button" 
                tabIndex={0} // Make it focusable
                onKeyDown={(e) => e.key === 'Enter' && handleCardClick(item)} // Handle Enter key
                className="cursor-pointer"
              >
                <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                  <img 
                    src={item.imageUrl} 
                    alt="Service" 
                    className="w-full rounded-t-2xl" 
                  />
                  <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      {/* Modal for displaying service description */}
      {isModalOpen && selectedService && ( // Check if modal should be open
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 mx-4 sm:max-w-md">
            <h2 className="text-theme-blue text-xl font-bold mb-2">
              {selectedService.title}
            </h2>
            <p className="text-gray-600">
              {selectedService.description}
            </p> {/* Display service description */}
            <button 
              type="button" // Specify button type
              onClick={handleCloseModal} 
              className="mt-4 text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
