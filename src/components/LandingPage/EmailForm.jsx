'use client';

import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your email submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center mx-auto">
      <div className="w-[792px] h-[72px] rounded-[100px] border border-[#FFFDF9] backdrop-blur-[32px] bg-gradient-to-b from-white/10 to-white/8 flex overflow-hidden">
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent text-white placeholder-gray-400 w-[257px] h-[40px] mt-[16px] ml-[32px] font-montserrat font-normal text-[22px] leading-[180%] capitalize focus:outline-none"
          required
        />
        <button 
          type="submit" 
          className="w-[189px] h-[58px] rounded-[50px] mt-[6.99px] ml-[596px] absolute py-[18px] px-[32px] gap-[14.93px] bg-[#FFFDF9] hover:bg-[#F5F3EF] text-black font-medium"
        >
          Get Free Trial
        </button>
      </div>
    </form>
  );
};

export default EmailForm;