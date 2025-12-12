import React, { useEffect } from 'react';
import { Department } from '../types';
import { X, TestTubes, Atom, ScanSearch, FileText, FlaskConical } from 'lucide-react';

interface DepartmentModalProps {
  dept: Department | null;
  onClose: () => void;
}

const DepartmentModal: React.FC<DepartmentModalProps> = ({ dept, onClose }) => {
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (dept) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, [dept]);

  if (!dept) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-lab-bg border border-brand-500/30 rounded-none shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20" 
             style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 text-brand-400 hover:text-white hover:bg-brand-500/20 transition-all border border-transparent hover:border-brand-500"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left: Element Visualization */}
        <div className="w-full md:w-5/12 relative bg-slate-900 border-r border-brand-500/30 flex flex-col">
          <div className="h-1/2 md:h-2/3 relative overflow-hidden group">
            <img 
              src={dept.imageUrl} 
              alt={dept.name} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            
            {/* Big Symbol Overlay */}
            <div className="absolute bottom-4 left-6">
               <h1 className="text-9xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent leading-none select-none">
                 {dept.symbol}
               </h1>
            </div>
          </div>

          <div className="flex-1 p-6 md:p-8 flex flex-col justify-end font-mono">
            <div className="mb-2 text-brand-400 text-sm tracking-widest uppercase">Nguyên tố</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{dept.elementName}</h2>
            <div className="text-slate-400 text-sm">{dept.name}</div>
            <div className="mt-4 flex gap-4 text-xs text-brand-300/70 border-t border-slate-800 pt-4">
              <div>
                <span className="block opacity-50">Atomic No.</span>
                <span className="text-lg">{dept.atomicNumber}</span>
              </div>
              <div>
                <span className="block opacity-50">Atomic Mass</span>
                <span className="text-lg">{dept.atomicMass}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Data Analysis */}
        <div className="w-full md:w-7/12 relative overflow-y-auto custom-scrollbar bg-slate-950/50">
          <div className="p-8 md:p-12 space-y-8">
            
            {/* Description Section */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-brand-400 font-mono text-sm tracking-widest border-b border-brand-500/20 pb-2">
                <FlaskConical className="w-4 h-4" />
                PHÂN TÍCH ĐỊNH TÍNH
              </div>
              <p className="text-lg text-slate-300 leading-relaxed font-light italic">
                "{dept.description}"
              </p>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                {dept.roleDescription}
              </p>
            </div>

            {/* Tasks Section */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-brand-400 font-mono text-sm tracking-widest border-b border-brand-500/20 pb-2">
                <TestTubes className="w-4 h-4" />
                PHẢN ỨNG THỰC NGHIỆM (TASKS)
              </div>
              <ul className="grid gap-3">
                {dept.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 group">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-brand-500 rounded-full shadow-[0_0_5px_#06b6d4]"></span>
                    <span className="text-sm md:text-base group-hover:text-brand-200 transition-colors">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements Section */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-brand-400 font-mono text-sm tracking-widest border-b border-brand-500/20 pb-2">
                <ScanSearch className="w-4 h-4" />
                ĐIỀU KIỆN KÍCH HOẠT (REQUIREMENTS)
              </div>
              <ul className="space-y-3">
                {dept.requirements.map((req, idx) => (
                  <li key={idx} className="bg-slate-900/50 border border-slate-800 p-3 flex items-center gap-3 hover:border-brand-500/50 transition-colors">
                    <Atom className="w-5 h-5 text-brand-500" />
                    <span className="text-sm text-slate-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Action */}
            <div className="pt-8">
              <button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-mono font-bold py-4 px-6 uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center gap-3 group">
                <FileText className="w-5 h-5" />
                Mở rương XPRIMIV - Nộp đơn ngay
                <span className="w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentModal;