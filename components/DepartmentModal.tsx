import React from 'react';
import { Department } from '../types';
import { X, CheckCircle, Target, Briefcase, Zap, ArrowRight } from 'lucide-react';

interface DepartmentModalProps {
  dept: Department | null;
  onClose: () => void;
}

const DepartmentModal: React.FC<DepartmentModalProps> = ({ dept, onClose }) => {
  if (!dept) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300 flex flex-col md:flex-row overflow-hidden">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 text-white rounded-full md:hidden"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Image & Title */}
        <div className="w-full md:w-5/12 relative min-h-[250px] md:min-h-full">
          <img 
            src={dept.imageUrl} 
            alt={dept.name} 
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="inline-block px-3 py-1 bg-brand-500/20 backdrop-blur border border-brand-400/30 rounded-full text-xs font-bold uppercase tracking-widest mb-3 text-brand-100">
              Department
            </span>
            <h2 className="text-4xl font-black mb-2 leading-tight">{dept.name}</h2>
            <div className="w-16 h-1.5 bg-brand-500 rounded-full"></div>
          </div>
        </div>

        {/* Right Side: Info */}
        <div className="w-full md:w-7/12 p-8 md:p-10 relative bg-white">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 hidden md:flex p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-8">
            <p className="text-xl text-gray-600 italic font-medium leading-relaxed">
              "{dept.description}"
            </p>
          </div>

          <div className="space-y-8">
            {/* Nhiệm vụ */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Mô tả công việc</h3>
              </div>
              <ul className="grid gap-3">
                {dept.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100 group hover:border-brand-200 transition-colors">
                    <Target className="w-5 h-5 text-brand-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Yêu cầu */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 rounded-lg text-gray-700">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">Yêu cầu ứng viên</h3>
              </div>
              <div className="space-y-3">
                {dept.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700 border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-end">
             <button className="w-full md:w-auto bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 transform hover:-translate-y-1 flex items-center justify-center gap-2">
               <span>Ứng tuyển ngay</span>
               <ArrowRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentModal;