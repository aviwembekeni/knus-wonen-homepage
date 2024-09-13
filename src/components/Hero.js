import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[560px] bg-gray-100">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute h-[766px] w-[712px] right-[-498px] top-[22px] bg-gradient-to-l from-[rgba(53,188,231,0.8)] to-[rgba(191,226,125,0.8)] mix-blend-multiply transform rotate-[30deg]"></div>
        <div className="absolute h-[451px] w-[370px] left-[-40px] top-[-133px] bg-gradient-to-b from-[rgba(255,210,1,0.8)] to-[rgba(255,107,56,0.8)] mix-blend-multiply transform rotate-[45deg]"></div>
        <div className="absolute h-[514px] w-[1088px] left-[206px] top-[391px] bg-gradient-to-br from-[rgba(143,88,183,0.8)] to-[rgba(251,129,182,0.8)] mix-blend-multiply transform rotate-[6.84deg]"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welkom bij KnusWonen
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Ontdek de perfecte huurwoning die bij u past. Bij KnusWonen streven we
          ernaar om iedereen een fijn thuis te bieden.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300">
          Bekijk ons woningaanbod
        </button>
      </div>

      {/* Quick links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Waarmee kunnen we je helpen?
        </h2>
        <div className="flex justify-between space-x-4">
          <QuickLink icon={<RepairIcon />} text="Reparatie melden" />
          <QuickLink icon={<PaymentIcon />} text="Huur betalen" />
          <QuickLink icon={<ContactIcon />} text="Contact" />
        </div>
      </div>
    </div>
  );
};

const QuickLink = ({ icon, text }) => (
  <div className="flex-1 bg-white rounded-xl shadow-md p-4 flex items-center space-x-3">
    {icon}
    <span className="font-semibold text-gray-800">{text}</span>
  </div>
);

const RepairIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      stroke="#4A5568"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaymentIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zM3 10h18"
      stroke="#4A5568"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      stroke="#4A5568"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Hero;
