import React, { useState, useEffect } from 'react';
import { CLUB_INFO, DEPARTMENTS } from './constants';
import DepartmentCard from './components/DepartmentCard';
import DepartmentModal from './components/DepartmentModal';
import AiChat from './components/AiChat';
import { Department } from './types';
import { ChevronRight, Facebook, Instagram, Mail, MapPin, Code2, Flower2, Calendar, Users, Award, ChevronDown } from 'lucide-react';

const JsClubLogo = () => (
  <div className="w-16 h-16 md:w-15 md:h-15 rounded-full from-brand-600 to-brand-700 flex items-center justify-center shadow-brand-500/30 overflow-hidden">
    <img
      src="/public/logo/logo.png"
      alt="JS-club Logo"
      className="w-full h-full object-cover rounded-full"
    />
  </div>

);

const HERO_IMAGES: string[] = [
  "public/carousel/img1.jpg",
  "public/carousel/img2.jpg",
  "public/carousel/img3.jpg",
  "public/carousel/img4.jpg",
  "public/carousel/img5.jpg",
  "public/carousel/img6.jpg",
  "public/carousel/img7.jpg",
  "public/carousel/img8.jpg",
  "public/carousel/img9.jpg",
  "public/carousel/img10.jpg",
  "public/carousel/img11.jpg",
  "public/carousel/img12.jpg",
  "public/carousel/img13.jpg",
  "public/carousel/img14.jpg",
];

const App: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <JsClubLogo />
              </div>
              <div className={`flex flex-col transition-colors ${scrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
                <span className="font-bold text-xl leading-none tracking-tight">JS-club</span>
                <span className="text-[10px] opacity-90 font-bold tracking-[0.2em] uppercase">ClubRecruit</span>
              </div>
            </div>
            
            <div className={`hidden md:flex items-center space-x-8 text-sm font-bold tracking-wide transition-colors ${scrolled ? 'text-gray-600' : 'text-white'}`}>
              <a href="#about" className="hover:text-brand-500 transition-colors drop-shadow-sm">VỀ CHÚNG TÔI</a>
              <a href="#departments" className="hover:text-brand-500 transition-colors drop-shadow-sm">CÁC BAN</a>
              <a href="#contact" className="hover:text-brand-500 transition-colors drop-shadow-sm">LIÊN HỆ</a>
              <a href="#apply" className="px-6 py-2.5 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/40 transform hover:-translate-y-0.5 border border-brand-500">
                ỨNG TUYỂN NGAY
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Carousel */}
        {HERO_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
          </div>
        ))}

        {/* Static Gradients over carousel */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay"></div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                idx === currentHeroIndex ? 'bg-brand-500' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center pt-20">
          <div className="md:w-3/5 text-center md:text-left space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/20 backdrop-blur-md border border-brand-500/30 text-white text-sm font-bold shadow-lg ring-1 ring-brand-500/50">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_10px_#f43f5e]"></span>
              Tuyển thành viên Gen 10
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
              CODE YOUR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 filter drop-shadow-lg">FUTURE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 font-medium max-w-xl mx-auto md:mx-0 leading-relaxed drop-shadow-md">
              {CLUB_INFO.description} Nơi hội tụ của những kỹ sư phần mềm tài năng với tinh thần kỷ luật Nhật Bản.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a href="#departments" className="px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-500/40 transform hover:-translate-y-1 flex items-center justify-center gap-2 border border-brand-500">
                Khám phá các Ban <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#about" className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center shadow-lg">
                Tìm hiểu thêm
              </a>
            </div>
          </div>

          {/* Decorative Right Side */}
          <div className="md:w-2/5 hidden md:block relative h-full">
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[10rem] font-black text-white/5 writing-vertical-rl pointer-events-none select-none mix-blend-overlay" style={{ writingMode: 'vertical-rl' }}>
              エンジニア
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-20">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {[
          { icon: Calendar, label: "Thành lập", value: "2014" },
          { icon: Users, label: "Thành viên", value: "500+" },
          { icon: Code2, label: "Dự án", value: "100+" },
          { icon: Award, label: "Giải thưởng", value: "50+" },
        ].map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center text-center group">
            <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mb-3 group-hover:scale-110 transition-transform">
              <stat.icon className="w-6 h-6" />
            </div>
            <span className="text-3xl font-black text-gray-900">{stat.value}</span>
            <span className="text-sm text-gray-500 uppercase font-bold tracking-wide mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* About Section with Tech Grid Background */}
      <section id="about" className="py-24 relative overflow-hidden tech-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-600 font-bold tracking-widest text-sm uppercase block mb-3">Về chúng tôi</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Tinh thần Samurai <br/> trong kỷ nguyên số
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {CLUB_INFO.history} Chúng tôi không chỉ dạy code, chúng tôi rèn luyện tư duy và thái độ làm việc chuyên nghiệp chuẩn Nhật Bản.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-100 rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Team working" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-brand-600 text-white flex items-center justify-center text-sm">01</span>
                Giá trị cốt lõi
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CLUB_INFO.values.map((val, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                    <span className="font-bold text-gray-800">{val}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 italic border-l-4 border-brand-200 pl-4 py-2">
                "{CLUB_INFO.slogan}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-24 bg-gray-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Cơ cấu <span className="text-brand-500">Tổ chức</span>
              </h2>
              <div className="h-1 w-24 bg-brand-600 rounded-full"></div>
            </div>
            <p className="text-gray-400 max-w-lg text-right md:text-lg">
              Đa dạng vị trí, thống nhất mục tiêu. Tìm vị trí phù hợp nhất với tài năng của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEPARTMENTS.map((dept) => (
              <DepartmentCard 
                key={dept.id} 
                dept={dept} 
                onClick={setSelectedDept} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-600 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Sẵn sàng trở thành <br/> một phần của <span className="text-brand-200">huyền thoại?</span>
              </h2>
              <p className="text-brand-100 text-lg mb-8 font-medium">
                Đừng bỏ lỡ cơ hội phát triển bản thân và kết nối với mạng lưới cựu thành viên thành đạt trên khắp thế giới.
              </p>
              <div className="inline-flex items-center gap-2 text-white/80 bg-brand-700/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Đang mở đơn tuyển thành viên Gen 10
              </div>
            </div>

            <div className="relative z-10 shrink-0">
               <button className="bg-white text-brand-700 font-black text-xl px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2">
                 Ứng tuyển ngay <ChevronRight className="w-6 h-6" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              {/* Footer Logo */}
              <div className="mb-6">
                <JsClubLogo />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Japanese Software Engineer Club. <br/> Since 2014.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 shadow-sm hover:bg-brand-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 shadow-sm hover:bg-brand-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
               <h4 className="font-bold text-gray-900 mb-6">Liên kết</h4>
               <ul className="space-y-3 text-sm text-gray-600">
                 <li><a href="#" className="hover:text-brand-600 transition-colors">Trang chủ</a></li>
                 <li><a href="#about" className="hover:text-brand-600 transition-colors">Giới thiệu</a></li>
                 <li><a href="#departments" className="hover:text-brand-600 transition-colors">Cơ cấu tổ chức</a></li>
                 <li><a href="#apply" className="hover:text-brand-600 transition-colors">Tuyển dụng</a></li>
               </ul>
            </div>

            <div>
               <h4 className="font-bold text-gray-900 mb-6">Liên hệ</h4>
               <ul className="space-y-3 text-sm text-gray-600">
                 <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-600" />
                    {CLUB_INFO.contactEmail}
                 </li>
                 <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-600 mt-1" />
                    Đại học Công Nghệ - ĐHQGHN
                 </li>
               </ul>
            </div>

             <div>
               <h4 className="font-bold text-gray-900 mb-6">Bản tin</h4>
               <p className="text-sm text-gray-500 mb-4">Đăng ký nhận thông tin tuyển quân mới nhất.</p>
               <div className="flex">
                  <input type="email" placeholder="Email của bạn" className="bg-white border border-gray-200 rounded-l-lg px-4 py-2 text-sm outline-none focus:border-brand-500 w-full" />
                  <button className="bg-brand-600 text-white px-4 py-2 rounded-r-lg hover:bg-brand-700 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
               </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2024 JS-club. All rights reserved.</p>
            <div className="flex items-center gap-1 mt-2 md:mt-0">
               Made with <span className="text-brand-600">♥</span> and <Code2 className="w-4 h-4 text-brand-600" />
            </div>
          </div>
        </div>
      </footer>

      {/* Components */}
      <AiChat />
      <DepartmentModal 
        dept={selectedDept} 
        onClose={() => setSelectedDept(null)} 
      />
    </div>
  );
};

export default App;