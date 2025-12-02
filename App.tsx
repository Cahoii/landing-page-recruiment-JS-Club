import React, { useState } from 'react';
import { CLUB_INFO, DEPARTMENTS } from './constants';
import DepartmentCard from './components/DepartmentCard';
import AiChat from './components/AiChat';
import { ChevronRight, Facebook, Instagram, Mail, MapPin } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-extrabold text-2xl bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">
                JS-Club
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
              <a href="#about" className="hover:text-brand-600 transition-colors">Về chúng tôi</a>
              <a href="#departments" className="hover:text-brand-600 transition-colors">Các Ban</a>
              <a href="#contact" className="hover:text-brand-600 transition-colors">Liên hệ</a>
              <a href="#apply" className="px-5 py-2.5 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
                Ứng tuyển ngay
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 -z-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/50 to-transparent -z-10 clip-path-slant" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Đợt tuyển quân mùa xuân 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Trở thành một phần của <br />
            <span className="text-brand-600">{CLUB_INFO.name}</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
            {CLUB_INFO.slogan}. {CLUB_INFO.description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#apply" className="px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center justify-center gap-2">
              Đăng ký ngay
              <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#about" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-100 to-indigo-100 rounded-2xl -z-10 rotate-3"></div>
              <img 
                src="https://picsum.photos/600/400" 
                alt="Club Activity" 
                className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-12 h-1 bg-brand-600 block"></span>
                Về Chúng Tôi
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {CLUB_INFO.history}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h3>
              <div className="grid grid-cols-2 gap-4">
                {CLUB_INFO.values.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <span className="font-medium text-gray-800">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Các Ban Chuyên Môn</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tìm kiếm vị trí phù hợp với đam mê và kỹ năng của bạn
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {DEPARTMENTS.map((dept) => (
              <DepartmentCard key={dept.id} dept={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Application Section */}
      <section id="apply" className="py-24 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
           </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Bạn đã sẵn sàng gia nhập {CLUB_INFO.name}?</h2>
          <p className="text-xl text-brand-100 mb-10">
            Đừng bỏ lỡ cơ hội phát triển bản thân và có những kỷ niệm đẹp thời sinh viên.
            Hạn chót đăng ký: <span className="font-bold text-white">30/10/2025</span>
          </p>
          <button className="px-10 py-5 bg-white text-brand-900 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
            Điền đơn đăng ký ngay
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{CLUB_INFO.name}</h3>
              <p className="text-gray-400 mb-4">{CLUB_INFO.slogan}</p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-brand-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-brand-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Liên hệ</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-500" />
                  <a href={`mailto:${CLUB_INFO.contactEmail}`} className="hover:text-white">{CLUB_INFO.contactEmail}</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-500" />
                  <span>Đại học X, Quận Y, TP.HCM</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Lưu ý</h4>
              <p className="text-sm text-gray-400">
                Đơn đăng ký sẽ đóng tự động khi hết hạn. Mọi thắc mắc vui lòng sử dụng công cụ Chat AI ở góc phải màn hình hoặc gửi email cho chúng tôi.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {CLUB_INFO.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <AiChat />
    </div>
  );
};

export default App;