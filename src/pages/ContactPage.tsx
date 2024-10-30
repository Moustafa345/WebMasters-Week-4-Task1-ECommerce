import React, { useState } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

      // Handle input change for form fields
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
    
        // Update formData with the new value for the given input name
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
    };
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   // In case if there is a real api so i can handle form submission logic
  };

  return (
    <div>
      {/* Heading */}
      <div className="container mt-7 md:mt-10 lg:mt-20">
        <div className="flex ml-8 text-sm">
          <span className="text-[#8f8f8f]">Home</span>
          <span className="mx-2">/</span>
          <span className='font-medium'>Contact</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 shadow-[0px_1px_13px_rgba(0,0,0,0.05)] rounded w-full lg:w-[400px] p-7">
            {/* Call To Us Section */}
            <div className="space-y-4 lg:border-b lg:border-b-gray-400 pb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                  <BsTelephone className="h-5 w-5 text-white"/>
                </div>
                <h2 className="font-semibold">Call To Us</h2>
              </div>
              <div className="pl-15">
                <p className="text-sm">We are available 24/7, 7 days a week.</p>
                <p className="font-normal mt-2 text-sm">Phone: +88016111112222</p>
              </div>
            </div>

            {/* Write To US Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                  <FaRegEnvelope className="h-5 w-5 text-white"/>
                </div>
                <h2 className="font-semibold">Write To Us</h2>
              </div>
              <div className="pl-15">
                <p className="text-sm">Fill out our form and we will contact you within 24 hours.</p>
                <p className="font-normal my-2 text-sm">Emails: customer@exclusive.com</p>
                <p className="font-normal text-sm">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-6 flex-grow shadow-[0px_1px_13px_rgba(0,0,0,0.05)] rounded">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:border-[#DB4444] focus:ring-1 focus:ring-[#DB4444] outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:border-[#DB4444] focus:ring-1 focus:ring-[#DB4444] outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:border-[#DB4444] focus:ring-1 focus:ring-[#DB4444] outline-none"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:border-[#DB4444] focus:ring-1 focus:ring-[#DB4444] outline-none resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white px-8 py-3 rounded hover:bg-red-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
