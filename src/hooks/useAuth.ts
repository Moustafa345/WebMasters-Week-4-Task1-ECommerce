
import { User } from '@/types/dataTypes';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }

    // Listen for changes to `currentUser` from localStorage
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem('currentUser');
      setCurrentUser(updatedUser ? JSON.parse(updatedUser) : null);
    };
    
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const register = (userData: User) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const userExists = users.some(
      (user: User) => user.emailOrPhone === userData.emailOrPhone
    );
    
    if (userExists) {
      throw new Error('User already exists');
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(userData));
    setCurrentUser(userData);

    // Dispatch event to notify components
    window.dispatchEvent(new Event('storage'));
    
    return true;
  };

  const login = (emailOrPhone: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: User) => u.emailOrPhone === emailOrPhone && u.password === password
    );

    if (!user) {
      throw new Error('Invalid credentials');
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);

    window.dispatchEvent(new Event('storage'));

    return true;
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);

    window.dispatchEvent(new Event('storage'));

    navigate('/login');
  };

  return { currentUser, register, login, logout };
};
