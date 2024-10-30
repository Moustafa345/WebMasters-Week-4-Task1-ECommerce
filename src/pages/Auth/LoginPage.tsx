import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth'; 

 const LoginPage: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      login(emailOrPhone, password);
      navigate('/'); 
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="md:w-1/2 flex items-center justify-center md:my-20 py-8">
        <img
          src="/images/signup-page.png"
          alt="Shopping cart with smartphone"
          className="w-full h-auto max-w-sm md:max-w-full"
        />
      </div>

      {/* Right side - Login form */}
      <div className="md:w-1/2 w-full bg-white flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Login to your account</h1>
          <p className="text-gray-600 mb-6 md:mb-8">Enter your credentials below</p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full px-3 py-2 border-b border-b-gray-300 focus:outline-none"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border-b border-b-gray-300 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                type="submit"
                className="lg:w-36 lg:h-14 bg-[#DB4444] rounded-md text-white py-3 px-8 hover:bg-red-600 transition duration-300"
              >
                Login
              </button>
              <Link to='#' className='text-[#DB4444] md:text-sm lg:text-base font-normal'>
                Forgot Password?
              </Link>
            </div>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;