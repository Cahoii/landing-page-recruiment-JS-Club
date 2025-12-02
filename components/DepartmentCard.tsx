import React from 'react';
import { Department } from '../types';
import { PenTool, Camera, Users, Handshake, CheckCircle } from 'lucide-react';

interface DepartmentCardProps {
  dept: Department;
}

const iconMap: Record<string, React.ReactNode> = {
  'PenTool': <PenTool className="w-8 h-8" />,
  'Camera': <Camera className="w-8 h-8" />,
  'Users': <Users className="w-8 h-8" />,
  'Handshake': <Handshake className="w-8 h-8" />,
};

const DepartmentCard: React.FC<DepartmentCardProps> = ({ dept }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
      <div className="p-6 bg-brand-50 border-b border-brand-100 flex items-center gap-4">
        <div className="p-3 bg-brand-600 text-white rounded-lg shadow-md">
          {iconMap[dept.iconName] || <Users />}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{dept.name}</h3>
      </div>
      
      <div className="p-6 flex-grow flex flex-col gap-4">
        <p className="text-gray-600 italic">{dept.description}</p>
        
        <div>
          <h4 className="font-semibold text-brand-700 mb-2 flex items-center gap-2">
            Công việc chính
          </h4>
          <ul className="space-y-2">
            {dept.tasks.map((task, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-1 text-brand-500 shrink-0">•</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-brand-700 mb-2 flex items-center gap-2">
            Yêu cầu
          </h4>
          <ul className="space-y-2">
            {dept.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
        <button className="text-brand-600 font-semibold hover:text-brand-800 text-sm uppercase tracking-wider transition-colors">
          Ứng tuyển ngay &rarr;
        </button>
      </div>
    </div>
  );
};

export default DepartmentCard;