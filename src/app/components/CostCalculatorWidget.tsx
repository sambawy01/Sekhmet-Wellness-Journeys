import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Plane, Building, Sun } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
export const CostCalculatorWidget = () => {
  const { t, direction } = useLanguage();
  const [selectedProcedure, setSelectedProcedure] = useState('Dental Implants');
  const [selectedCountry, setSelectedCountry] = useState('UK');
  const [savings, setSavings] = useState(0);
  const [animateSavings, setAnimateSavings] = useState(false);

  // Simplified pricing data
  const prices = {
    'Dental Implants': { Egypt: 450, UK: 2500, US: 3500, UAE: 2200, Saudi: 2000, Germany: 2400, France: 2100 },
    'Hollywood Smile': { Egypt: 3500, UK: 12000, US: 18000, UAE: 10000, Saudi: 9000, Germany: 11000, France: 10500 },
    'LASIK': { Egypt: 400, UK: 2000, US: 2500, UAE: 1800, Saudi: 1700, Germany: 2200, France: 2000 },
    'Hair Transplant': { Egypt: 1200, UK: 6000, US: 9000, UAE: 4500, Saudi: 4000, Germany: 5500, France: 5000 },
  };

  const calculateSavings = () => {
    // @ts-ignore
    const egyptPrice = prices[selectedProcedure].Egypt;
    // @ts-ignore
    const countryPrice = prices[selectedProcedure][selectedCountry];
    const savedAmount = countryPrice - egyptPrice;
    const percentage = Math.round((savedAmount / countryPrice) * 100);
    
    return { egyptPrice, countryPrice, savedAmount, percentage };
  };

  const { egyptPrice, countryPrice, savedAmount, percentage } = calculateSavings();

  useEffect(() => {
    setAnimateSavings(true);
    const timer = setTimeout(() => setAnimateSavings(false), 500);
    return () => clearTimeout(timer);
  }, [selectedProcedure, selectedCountry]);

  return (
    <div className="w-full max-w-[400px] bg-[#F9F7F2] rounded-xl shadow-lg border-l-4 border-[#C5A059] p-6 overflow-hidden relative">
       {/* Background decorative elements */}
       <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A059] opacity-5 rounded-bl-full -mr-4 -mt-4"></div>

      <h3 className="text-lg font-bold text-[#0F1923] mb-4 font-sans relative z-10">
        Calculate Your Savings
      </h3>

      <div className="space-y-4 relative z-10">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Procedure</label>
          <select 
            value={selectedProcedure}
            onChange={(e) => setSelectedProcedure(e.target.value)}
            className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-[#0F1923] font-medium focus:border-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059] cursor-pointer"
          >
            {Object.keys(prices).map(proc => (
              <option key={proc} value={proc}>{proc}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Compare with</label>
          <select 
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-[#0F1923] font-medium focus:border-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059] cursor-pointer"
          >
            <option value="UK">United Kingdom</option>
            <option value="US">United States</option>
            <option value="UAE">United Arab Emirates</option>
            <option value="Saudi">Saudi Arabia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
          </select>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-sm text-gray-500">In Egypt</span>
            <span className="font-mono text-2xl font-bold text-[#115E59]">${egyptPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-baseline mb-4">
            <span className="text-sm text-gray-500">In {selectedCountry}</span>
            <span className="font-mono text-lg text-gray-400 line-through decoration-red-400 decoration-2">${countryPrice.toLocaleString()}</span>
          </div>
          
          <motion.div 
            key={`${selectedProcedure}-${selectedCountry}`}
            initial={{ scale: 0.95, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#C84B31]/10 p-3 rounded-lg text-center border border-[#C84B31]/20"
          >
            <div className="text-sm text-[#C84B31] font-semibold mb-1">t("calculator.youSave")</div>
            <div className="font-mono text-2xl font-bold text-[#C84B31]">
              ${savedAmount.toLocaleString()} ({percentage}%)
            </div>
          </motion.div>
        </div>

        <div className="mt-4 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
          <p className="text-[13px] text-gray-500 mb-2 font-medium">This savings covers:</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center">
              <Plane size={16} className="text-[#115E59] mb-1" />
              <span className="text-[10px] text-gray-600 leading-tight">Return Flights</span>
            </div>
            <div className="flex flex-col items-center border-l border-gray-100">
              <Building size={16} className="text-[#115E59] mb-1" />
              <span className="text-[10px] text-gray-600 leading-tight">5-Star Hotel</span>
            </div>
            <div className="flex flex-col items-center border-l border-gray-100">
              <Sun size={16} className="text-[#115E59] mb-1" />
              <span className="text-[10px] text-gray-600 leading-tight">Pyramids Tour</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#C5A059] text-white font-bold py-3 rounded-lg hover:bg-[#B08D4B] transition-colors shadow-md flex items-center justify-center gap-2 mt-2">
          Get Your Exact Quote <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
