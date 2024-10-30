import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <>
      {/* Heading */}
      <div className="container mt-5 md:mt-8 lg:mt-10 px-4">
        <div className="flex ml-2 md:ml-8 text-xs md:text-sm">
          <span className="text-[#8f8f8f]">Home</span>
          <span className="mx-1 md:mx-2">/</span>
          <span className='font-medium'>404 Error</span>
        </div>
      </div>
      
      {/* Not Found */}
      <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-white text-center px-4">
        <h1 className="text-4xl md:text-7xl lg:text-[110px] font-medium mb-4">404 Not Found</h1>
        <p className="text-base md:text-lg font-normal mb-10 md:mb-20">
          Your visited page not found. You may go home page.
        </p>
        <button
          className="bg-[#DB4444] text-white px-4 py-2 md:px-6 md:py-3 w-48 md:w-64 h-12 md:h-14 rounded hover:bg-red-700"
          onClick={handleBackToHome}
        >
          Back to home page
        </button>
      </div>
    </>
  );
};

export default NotFoundPage;
