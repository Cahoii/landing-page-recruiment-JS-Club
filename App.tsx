import React, { useState, useEffect, useRef } from 'react';
import { CLUB_INFO, DEPARTMENTS, TIMELINE, BENEFITS, FAQS } from './constants';
import DepartmentCard from './components/DepartmentCard';
import DepartmentModal from './components/DepartmentModal';
import AiChat from './components/AiChat';
import { Department } from './types';
import { ChevronRight, ChevronDown, Atom, Shield, Zap, Shirt, GraduationCap, Users, Network, HelpCircle, MapPin, Mail, Minus, Plus, Calendar, ArrowRight } from 'lucide-react';
// --- Custom Hooks & Components ---

const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (containerRef.current) observer.unobserve(containerRef.current);
      }
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible] as const;
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, direction = 'up' }) => {
  const [ref, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  const getTranslateClass = () => {
    switch (direction) {
      case 'left': return '-translate-x-10';
      case 'right': return 'translate-x-10';
      case 'up': 
      default: return 'translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getTranslateClass()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- New Branding Components ---

const ElementumLogo = () => (
  <svg viewBox="0 0 100 100" className="h-16 w-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    {/* Benzene Ring / Hexagon */}
    <path 
      d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" 
      fill="none" 
      stroke="url(#glow)" 
      strokeWidth="3"
      filter="url(#neon-glow)"
    />
    
    {/* Inner Connections */}
    <path d="M50 10 L50 35" stroke="#0e7490" strokeWidth="2" />
    <path d="M85 70 L63 58" stroke="#0e7490" strokeWidth="2" />
    <path d="M15 70 L37 58" stroke="#0e7490" strokeWidth="2" />
    
    {/* Central Core */}
    <circle cx="50" cy="50" r="10" fill="#020617" stroke="#22d3ee" strokeWidth="2" />
    <text x="50" y="54" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold">JS</text>
  </svg>
);

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center slide-up-fade font-mono">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Orbits */}
        <div className="absolute w-full h-full border border-brand-500/30 rounded-full animate-spin-slow"></div>
        <div className="absolute w-[80%] h-[80%] border border-brand-400/30 rounded-full animate-[spin_6s_linear_infinite_reverse]"></div>
        <div className="absolute w-[120%] h-12 border border-brand-500/20 rounded-[100%] animate-spin-slow"></div>
        
        {/* Electron */}
        <div className="absolute w-full h-full animate-spin-slow">
           <div className="w-3 h-3 bg-brand-400 rounded-full shadow-[0_0_15px_#22d3ee] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5"></div>
        </div>

        {/* Core */}
        <div className="relative z-10 text-4xl font-black text-white tracking-widest animate-pulse">
          LAB
        </div>
      </div>
      
      <div className="mt-8 text-brand-500 font-mono tracking-[0.2em] text-sm animate-pulse">
        INITIALIZING ELEMENTUM CORE...
      </div>
    </div>
  );
};

// --- Lab HUD Component ---
const LabHUD = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none select-none overflow-hidden hidden md:block">
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', 
          backgroundSize: '100px 100px' 
        }}
      ></div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full h-8 border-b border-brand-500/10 bg-slate-950/20 backdrop-blur-[1px] flex items-center justify-between px-6 font-mono text-[10px] tracking-widest text-brand-500/60">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_8px_#06b6d4]"></span>
            <span>SYSTEM: ONLINE</span>
          </div>
          <span className="opacity-50">CPU.CORE: 32%</span>
          <span className="opacity-50">MEM: 64TB</span>
        </div>
        <div className="flex items-center gap-6">
           <span>{time.toLocaleTimeString()}</span>
           <span>ZONE: FPT-HOLA</span>
           <span>ENC: AES-256</span>
        </div>
      </div>

      {/* Corner Brackets */}
      {/* Top Left */}
      <div className="absolute top-20 left-6 w-8 h-8 border-t border-l border-brand-500/30"></div>
      {/* Top Right */}
      <div className="absolute top-20 right-6 w-8 h-8 border-t border-r border-brand-500/30"></div>
      {/* Bottom Left */}
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-brand-500/30"></div>
      {/* Bottom Right */}
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-brand-500/30"></div>
      
      {/* Side Data Streams */}
      <div className="absolute top-1/3 right-6 flex flex-col gap-1 items-end opacity-30">
        {[...Array(5)].map((_, i) => (
           <div key={i} className="h-[1px] bg-brand-500" style={{ width: Math.random() * 40 + 10 + 'px' }}></div>
        ))}
      </div>
      <div className="absolute bottom-1/3 left-6 flex flex-col gap-1 items-start opacity-30">
        {[...Array(5)].map((_, i) => (
           <div key={i} className="h-[1px] bg-brand-500" style={{ width: Math.random() * 40 + 10 + 'px' }}></div>
        ))}
      </div>
    </div>
  );
};

const HERO_BG = "https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"; // Tech particles

const App: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlayKey, setAutoPlayKey] = useState(0); // Key để reset interval

  // Danh sách ảnh trong carousel (thêm tên file ảnh của bạn vào đây)
  const carouselImages = [
    '/carousel/1.jpg',
    '/carousel/2.jpg',
    '/carousel/3.jpg',
    '/carousel/4.jpg',
    '/carousel/5.jpg',
    '/carousel/6.jpg',
    '/carousel/7.jpg',
    '/carousel/8.jpg',
    '/carousel/9.jpg',
    '/carousel/10.jpg',
    '/carousel/11.jpg',
    '/carousel/12.jpg',
    '/carousel/13.jpg',
    '/carousel/14.jpg',
  ];
  
  // Auto-play carousel với reset khi user tương tác
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Chuyển ảnh mỗi 5 giây

    return () => clearInterval(interval);
  }, [carouselImages.length, autoPlayKey]); // Thêm autoPlayKey vào dependencies

  // Handle Scroll and Loading Logic
  useEffect(() => {
    // Lock scroll on initial load to prevent double scrollbar with Preloader
    document.body.style.overflow = 'hidden';

    // Timer matches the CSS animation sequence: 2.5s delay + 0.8s duration
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Only unlock scroll if no modal is open
      if (!selectedDept) {
        document.body.style.overflow = '';
      }
    }, 3400); // 3.4s to be safe

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [selectedDept]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else if (!selectedDept) {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading, selectedDept]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Shirt': return <Shirt className="w-8 h-8 text-brand-400" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-brand-400" />;
      case 'Users': return <Users className="w-8 h-8 text-brand-400" />;
      case 'Network': return <Network className="w-8 h-8 text-brand-400" />;
      default: return <Atom className="w-8 h-8 text-brand-400" />;
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setAutoPlayKey(prev => prev + 1); // Reset timer
  };

  // Hàm lấy tên file từ đường dẫn (không có extension)
  const getImageName = (path: string) => {
    const fileName = path.split('/').pop() || 'unknown';
    return fileName.replace(/\.[^/.]+$/, ''); // Xóa extension
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-brand-500 selection:text-white overflow-y-hidden">
      
      {/* Global Interface Effects */}
      <div className="scanlines"></div>
      <div className="vignette"></div>
      <LabHUD />

      {/* Conditionally render Preloader to remove it from DOM after animation */}
      {isLoading && <Preloader />}
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-slate-950/80 backdrop-blur-md border-brand-500/20 py-2' : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 cursor-pointer group">
              <ElementumLogo />
              <div className="flex flex-col">
                <span className="font-mono font-bold text-lg leading-none tracking-tight text-white group-hover:text-brand-400 transition-colors">
                  ELEMENTUM
                </span>
                <span className="text-[10px] text-brand-500 font-bold tracking-[0.3em] uppercase">
                  LABORATORY
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-mono font-bold tracking-wide text-slate-300">
              <a href="#about" className="hover:text-brand-400 transition-colors">CONCEPT</a>
              <a href="#elements" className="hover:text-brand-400 transition-colors">ELEMENTS</a>
              <a href="#timeline" className="hover:text-brand-400 transition-colors">TIMELINE</a>
              <a href="#apply" className="px-6 py-2 bg-brand-600/20 border border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-white transition-all skew-x-[-10deg]">
                <span className="skew-x-[10deg] inline-block">JOIN THE LAB</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 lab-bg opacity-30"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          
          {/* Orbiting Objects Container */}
          <div className="relative inline-block">
            
            {/* Main Title */}
            <Reveal>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-4 font-mono">
                SUBSNOVAX
              </h1>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-500"></div>
              <p className="text-brand-400 uppercase tracking-[0.3em] text-xs md:text-sm font-mono font-bold">
                Japanese Software Engineer Club
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-500"></div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
              Khám phá các "nguyên tố" công nghệ tại <span className="text-brand-400 font-bold">Elementum Laboratory</span>.
              Nơi hóa học phần mềm tạo ra những phản ứng đột phá.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#elements" 
                className="group relative px-8 py-4 bg-brand-600 text-white font-mono font-bold tracking-wider overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all clip-path-polygon"
              >
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE ELEMENTS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a 
                href="#timeline" 
                className="group px-8 py-4 border-2 border-brand-500 text-brand-400 font-mono font-bold tracking-wider hover:bg-brand-500/10 transition-all"
              >
                <span className="flex items-center gap-2">
                  VIEW TIMELINE
                  <Calendar className="w-5 h-5" />
                </span>
              </a>
            </div>
          </Reveal>

          {/* Scroll Indicator */}
          <Reveal delay={800}>
            <div className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-brand-500 text-xs font-mono tracking-widest">SCROLL</span>
              <ChevronDown className="text-brand-500 w-6 h-6" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Bar / Lab Metrics */}
      <div className="border-y border-brand-500/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-500/10">
          {[
            { label: "FOUNDED", value: "2014", sub: "10+ Years" },
            { label: "MEMBERS", value: "100+", sub: "Active/Sem" },
            { label: "ACHIEVEMENT", value: "10x", sub: "Excellent Club" },
            { label: "GOLDEN TOAD", value: "Top 1", sub: "FPT University" },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 text-center group hover:bg-brand-900/10 transition-colors">
              <div className="text-xs text-brand-500 font-mono mb-1 tracking-widest opacity-70">{stat.label}</div>
              <div className="text-3xl font-black text-white font-mono group-hover:text-brand-400 transition-colors">{stat.value}</div>
              <div className="text-[10px] text-slate-500 uppercase">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section with Carousel */}
      <section id="about" className="py-24 relative overflow-hidden lab-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction='left'>
              <div className="relative group">
                {/* Image Frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-purple-600 rounded-sm opacity-30 group-hover:opacity-60 blur transition-opacity duration-500"></div>
                <div className="relative border border-brand-500/30 bg-slate-900 p-2">
                  
                  {/* Carousel Container */}
                  <div className="relative w-full aspect-video overflow-hidden">
                    {/* Images */}
                    {carouselImages.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt={`Lab Image ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${
                          idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                        style={{
                          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out, filter 0.7s'
                        }}
                      />
                    ))}

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {carouselImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToImage(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentImageIndex 
                              ? 'bg-brand-500 w-8' 
                              : 'bg-slate-600 hover:bg-slate-400'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Overlay Data */}
                  <div className="absolute top-4 right-4 text-xs font-mono text-brand-400 bg-black/70 px-3 py-2 border border-brand-500/50 backdrop-blur-sm z-10">
                    IMG: {getImageName(carouselImages[currentImageIndex]).toUpperCase()}
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800/50 z-10">
                    <div 
                      className="h-full bg-brand-500 transition-all duration-300"
                      style={{ width: `${((currentImageIndex + 1) / carouselImages.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal direction='right'>
              <div>
                <div className="flex items-center gap-2 text-brand-500 font-mono font-bold mb-4">
                  <Atom className="w-5 h-5 animate-spin-slow" />
                  <span>HỒ SƠ THỰC THỂ (PROFILE)</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                  Elementum <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500">Lab</span>
                </h2>
                
                <div className="space-y-6 text-slate-300 font-light text-lg leading-relaxed border-l-2 border-brand-500/30 pl-6">
                  <p>
                    <strong className="text-white">JS Club (Japanese Software Engineers Club)</strong> thành lập từ 02/2014. Hơn 1 thập kỷ phát triển, JS không chỉ là nơi hội tụ các Coder xịn sò mà còn là gia đình thứ 2 của những người yêu văn hóa Nhật Bản.
                  </p>
                  <p>
                    {CLUB_INFO.story}
                  </p>
                  <p className="italic text-brand-400">
                    "Chúng ta không tìm kiếm người tuân theo công thức cũ, mà là những nhà kiến tạo Nova."
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 border border-slate-800 p-4 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-brand-500" />
                    <div>
                      <div className="font-bold text-white text-sm">XPRIMIV CHEST</div>
                      <div className="text-xs text-slate-500">Thử thách tối thượng</div>
                    </div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-4 flex items-center gap-3">
                    <Zap className="w-8 h-8 text-yellow-500" />
                    <div>
                      <div className="font-bold text-white text-sm">NOVA ENERGY</div>
                      <div className="text-xs text-slate-500">Năng lượng đột phá</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 bg-slate-950 relative border-t border-slate-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <span className="text-brand-500 font-mono text-sm tracking-widest uppercase mb-2 block">Process Protocol</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                  Lộ Trình <span className="text-brand-500">Phản Ứng</span>
                </h2>
              </div>
            </Reveal>

            <div className="relative">
              {/* Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-brand-500/0 via-brand-500/50 to-brand-500/0 hidden md:block"></div>
              
              <div className="space-y-12 md:space-y-24">
                {TIMELINE.map((event, idx) => (
                  <Reveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'}>
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Text */}
                      <div className={`flex-1 text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="inline-block bg-brand-900/30 border border-brand-500/30 px-3 py-1 rounded-sm text-brand-400 font-mono text-sm mb-2">
                          {event.date}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-slate-400 max-w-md mx-auto md:mx-0">{event.description}</p>
                      </div>

                      {/* Node */}
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-slate-950 border-2 border-brand-500 rounded-full flex items-center justify-center shadow-[0_0_20px_#06b6d4]">
                           <span className="font-mono font-bold text-white">{idx + 1}</span>
                        </div>
                      </div>

                      {/* Spacer for layout balance */}
                      <div className="flex-1 hidden md:block"></div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
         </div>
      </section>

      {/* Departments / Elements Grid */}
      <section id="elements" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Bảng Tuần Hoàn <span className="text-brand-500">JS</span>
              </h2>
              <p className="text-slate-400 font-mono max-w-xl mx-auto">
                Chọn nguyên tố cộng hưởng với tần số của bạn để bắt đầu quá trình tổng hợp.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {DEPARTMENTS.map((dept, index) => (
              <Reveal key={dept.id} delay={index * 150}>
                <DepartmentCard 
                  dept={dept} 
                  onClick={setSelectedDept} 
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lab-bg relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
                Quyền Lợi <span className="text-brand-400">Đặc Thù</span>
              </h2>
              <p className="text-slate-400">Trang bị cần thiết cho các Nhà kiến tạo Nova</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <Reveal key={idx} delay={idx * 100} direction='up'>
                <div className="bg-slate-900/50 border border-slate-800 p-6 hover:border-brand-500/50 transition-all hover:-translate-y-2">
                  <div className="w-14 h-14 bg-brand-900/20 rounded-full flex items-center justify-center mb-4 border border-brand-500/20">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <Reveal>
             <div className="text-center mb-12">
               <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 rounded-full border border-slate-800 mb-4">
                 <HelpCircle className="text-brand-500" />
               </div>
               <h2 className="text-3xl font-bold text-white uppercase">Dữ Liệu Mở (FAQ)</h2>
             </div>
           </Reveal>

           <div className="space-y-4">
             {FAQS.map((faq, idx) => (
               <Reveal key={idx} delay={idx * 50}>
                 <div className="border border-slate-800 bg-slate-900/30 rounded-lg overflow-hidden">
                   <button 
                     onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                     className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-900 transition-colors"
                   >
                     <span className="font-bold text-slate-200">{faq.question}</span>
                     {openFaqIndex === idx ? <Minus className="text-brand-500" /> : <Plus className="text-slate-500" />}
                   </button>
                   {openFaqIndex === idx && (
                     <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 bg-slate-900/50">
                       {faq.answer}
                     </div>
                   )}
                 </div>
               </Reveal>
             ))}
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 font-mono">
        <Reveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
              <div className="flex flex-col gap-4 max-w-sm">
                <div className="flex items-center gap-3">
                  <ElementumLogo />
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-widest">ELEMENTUM</h4>
                    <p className="text-xs text-brand-500">LABORATORY</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm">
                  Phiên bản nâng cấp của JS Club - Nơi ươm mầm tài năng công nghệ và văn hóa Nhật Bản tại Đại học FPT.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                 <h4 className="text-white font-bold uppercase tracking-wider border-b border-brand-500/30 pb-2 inline-block w-max">Liên Hệ</h4>
                 <ul className="space-y-3 text-sm text-slate-400">
                   <li className="flex items-start gap-3">
                     <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                     <span>{CLUB_INFO.contactAddress}</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                     <a href={`mailto:${CLUB_INFO.contactEmail}`} className="hover:text-white transition-colors">{CLUB_INFO.contactEmail}</a>
                   </li>
                 </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold uppercase tracking-wider border-b border-brand-500/30 pb-2 inline-block w-max">Liên kết</h4>
                <div className="flex flex-col gap-2 text-sm text-slate-400">
                  <a href="#" className="hover:text-brand-400 transition-colors">Facebook Fanpage</a>
                  <a href="#" className="hover:text-brand-400 transition-colors">Tiktok Channel</a>
                  <a href="#" className="hover:text-brand-400 transition-colors">Instagram</a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-600">
              <p>SYSTEM STATUS: STABLE | {new Date().getFullYear()} © JS-CLUB. ALL RIGHTS RESERVED.</p>
              <p className="mt-2">INITIATED BY GEN 10 RECRUITMENT PROTOCOL</p>
            </div>
          </div>
        </Reveal>
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