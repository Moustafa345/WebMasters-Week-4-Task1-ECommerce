import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth'; 

 const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      register({ name, emailOrPhone, password });
      navigate('/'); 
    } catch (err) {
      setError('Registration failed');
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

      {/* Right side - Sign up form */}
      <div className="md:w-1/2 w-full bg-white flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Create an account</h1>
          <p className="text-gray-600 mb-6 md:mb-8">Enter your details below</p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border-b border-b-gray-300 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            <button
              type="submit"
              className="w-full bg-[#DB4444] rounded-md text-white py-3 md:py-4 hover:bg-red-600 transition duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="mt-4">
            <button className="w-full border text-gray-700 py-3 md:py-4 rounded-md flex items-center justify-center hover:bg-gray-50 transition duration-300">
              <img className="w-5 h-5 mr-2" src="images/google-icon.png" alt="google-icon" />
              Sign up with Google
            </button>
          </div>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;