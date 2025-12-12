import React from 'react';
import { Department } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface DepartmentCardProps {
  dept: Department;
  onClick: (dept: Department) => void;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ dept, onClick }) => {
  return (
    <div 
      onClick={() => onClick(dept)}
      className="group relative w-full aspect-square bg-lab-card border border-slate-700/50 hover:border-brand-500 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
    >
      {/* Background Image Effect (Subtle) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-500"
        style={{ backgroundImage: `url(${dept.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/80 to-slate-950"></div>

      {/* Periodic Table Layout */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between font-mono">
        {/* Top: Atomic Number & Mass */}
        <div className="flex justify-between items-start text-brand-300/60 group-hover:text-brand-400 transition-colors">
          <span className="text-xl font-bold">{dept.atomicNumber}</span>
          <span className="text-xs tracking-wider">{dept.atomicMass}</span>
        </div>

        {/* Center: Symbol */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h2 className="text-7xl md:text-8xl font-black text-brand-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            {dept.symbol}
          </h2>
        </div>

        {/* Bottom: Name & Element Name */}
        <div className="z-10 mt-auto">
          <h3 className="text-brand-200 font-bold text-lg uppercase tracking-wider mb-1 group-hover:text-brand-400">
            {dept.elementName}
          </h3>
          <p className="text-slate-400 text-xs md:text-sm font-sans truncate group-hover:text-white transition-colors">
            {dept.name}
          </p>
        </div>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-500/0 group-hover:border-brand-500/100 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-500/0 group-hover:border-brand-500/100 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-500/0 group-hover:border-brand-500/100 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-500/0 group-hover:border-brand-500/100 transition-all duration-300"></div>

      {/* Hover Reveal Action */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <ArrowUpRight className="text-brand-400 w-6 h-6" />
      </div>
    </div>
  );
};

export default DepartmentCard;