"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted', { username, password });
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-1/2 flex items-center bg-brightpurple justify-center px-6 lg:px-16 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
          <span className="font-black text-3xl tracking-[-0.05em]">overtheseas</span>
          <span className="text-sm font-bold text-gray-400 tracking-[-0.05em]" >.students portfolio</span>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-left">Přihlášení</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Přihlašovací jméno" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4 relative">
                <input 
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Heslo" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {passwordVisible ? '👁️' : '🫣'}
                </button>
              </div>  
              <Link href="/">
              <button 
                type="submit" 
                className="w-full bg-purpleots text-white py-2 rounded-md hover:bg-secondary transition duration-300"
              >
                Vstoupit
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>

      {/* Pictures animace*/}
      <div className="hidden lg:block lg:w-1/2 relative bg-white overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-60 h-60 rounded-full"
          animate={{
            rotate: [0, 4, 0],
            scale: [1.4, 1.05, 1.4]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
            <Image
            src="/toronto-city.png" 
            alt="Toronto City" 
            layout="fill" 
            objectFit="cover" 
          />
          </motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 w-60 h-60 rounded-tr-full"
          animate={{
            rotate: [0, -4, 0],
            scale: [1.4, 1.05, 1.4]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
         >
            <Image
            src="/schoolbus.png" 
            alt="School Bus" 
            layout="fill" 
            objectFit="cover" 
          />
          </motion.div> 

          <motion.div 
          className="absolute top-20 left-20 w-60 h-60 rounded-tr-full"
          animate={{
            rotate: [0, -4, 0],
            scale: [1.4, 1.05, 1.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
         >
            <Image
            src="/palms.png" 
            alt="Palms" 
            layout="fill" 
            objectFit="cover" 
          />
          </motion.div> 

          <motion.div 
          className="absolute bottom-40 right-40 w-60 h-60 rounded-tr-full"
          animate={{
            rotate: [0, -4, 0],
            scale: [1.4, 1.05, 1.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
         >
            <Image
            src="/goldengate.png" 
            alt="goldengate" 
            layout="fill" 
            objectFit="cover" 
          />
          </motion.div> 

      </div>
    </div>
  );
};

export default LoginPage;