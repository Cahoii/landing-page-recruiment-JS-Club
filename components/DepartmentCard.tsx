import React from 'react';
import { Department } from '../types';
import { ArrowRight } from 'lucide-react';

interface DepartmentCardProps {
  dept: Department;
  onClick: (dept: Department) => void;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ dept, onClick }) => {
  return (
    <div 
      onClick={() => onClick(dept)}
      className="group relative h-[480px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gray-900"
    >
      {/* Background Image with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${dept.imageUrl})` }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

      {/* Decorative Number/Id */}
      <div className="absolute top-6 right-6 font-black text-6xl text-white/5 font-sans pointer-events-none select-none">
        {dept.id.slice(0, 2).toUpperCase()}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
          <div className="w-12 h-1 bg-brand-500 mb-4 rounded-full origin-left transition-all duration-500 group-hover:w-20" />
          
          <h3 className="text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
            {dept.name}
          </h3>
          
          <p className="text-gray-200 text-sm md:text-base line-clamp-2 opacity-90 mb-4 font-light leading-relaxed">
            {dept.description}
          </p>
        </div>

        {/* Button appears on hover */}
        <div className="flex items-center text-white font-bold text-sm tracking-wider uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <span className="bg-brand-600 px-4 py-2 rounded-full flex items-center gap-2 group-hover:bg-brand-500 transition-colors">
            Khám phá <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;