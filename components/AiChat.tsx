import React, { useState, useRef, useEffect } from 'react';
import { Send, Cpu, X, Terminal, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

// Component để render message với markdown support
const MessageContent: React.FC<{ text: string }> = ({ text }) => {
  // Parse markdown-like formatting
  const formatText = (content: string) => {
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*.*?\*\*)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(content)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }
      
      // Add bold text
      const boldText = match[0].slice(2, -2);
      parts.push(
        <strong key={match.index} className="text-brand-300 font-bold">
          {boldText}
        </strong>
      );
      
      lastIndex = regex.lastIndex;
    }
    
    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : content;
  };

  // Split by line breaks and format each line
  const lines = text.split('\n');
  
  return (
    <div className="space-y-2">
      {lines.map((line, idx) => {
        const trimmedLine = line.trim();
        
        // Check for bullet points (phải là * hoặc - KHÔNG có ** ngay sau)
        if ((trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) && !trimmedLine.startsWith('**')) {
          return (
            <div key={idx} className="flex items-start gap-2 ml-2">
              <span className="text-brand-500 mt-1 shrink-0">▸</span>
              <span>{formatText(line.replace(/^[\*\-]\s*/, ''))}</span>
            </div>
          );
        }
        
        // Check for numbered lists
        if (/^\d+\.\s/.test(trimmedLine)) {
          return (
            <div key={idx} className="flex items-start gap-2 ml-2">
              <span className="text-brand-500 font-mono">{trimmedLine.match(/^\d+\./)?.[0]}</span>
              <span>{formatText(line.replace(/^\d+\.\s*/, ''))}</span>
            </div>
          );
        }

        // Regular line (bao gồm cả dòng có **)
        return trimmedLine ? (
          <p key={idx} className="leading-relaxed">
            {formatText(line)}
          </p>
        ) : (
          <div key={idx} className="h-2" />
        );
      })}
    </div>
  );
};

const AiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `**Chào mừng đến với Elementum Lab System.** 🧪

Tôi có thể giúp bạn:
* Tìm hiểu về các **Nguyên Tố** (Ban)
* Tra cứu **Lộ trình tuyển quân**
* Giải đáp **Câu hỏi thường gặp**

Hãy nhập câu hỏi của bạn!`,
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const aiResponseText = await sendMessageToGemini(input);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: aiResponseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-slate-900/90 text-brand-400 p-4 shadow-[0_0_15px_#06b6d4] hover:shadow-[0_0_25px_#06b6d4] hover:scale-105 transition-all duration-300 flex items-center gap-3 group border border-brand-500/50 backdrop-blur-md"
        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
      >
        <div className="relative">
          <Terminal className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-400 rounded-full animate-ping"></span>
        </div>
        <span className="font-mono font-bold pr-2 hidden group-hover:block transition-all duration-300">
          SYSTEM ACCESS
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[95vw] md:w-[450px] h-[650px] max-h-[85vh] bg-slate-950/95 backdrop-blur-xl border border-brand-500/30 flex flex-col shadow-[0_0_40px_rgba(6,182,212,0.2)] font-mono animate-in slide-in-from-bottom-10 fade-in duration-300">
      
      {/* Sci-Fi Corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-500"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-500"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-500"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-500"></div>

      {/* Header */}
      <div className="bg-slate-900/80 p-4 flex justify-between items-center border-b border-brand-500/30">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-brand-500/10 border border-brand-500/50 rounded-sm">
            <Cpu className="w-5 h-5 text-brand-400 animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold text-brand-400 text-sm tracking-widest uppercase">Lab Assistant</h3>
            <p className="text-[10px] text-brand-300/60 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Status: ONLINE
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-slate-500 hover:text-brand-400 hover:bg-brand-500/10 p-1 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent scrollbar-thin scrollbar-thumb-brand-900 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
              msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            {msg.role === 'model' && (
              <div className="w-8 h-8 mt-1 rounded-sm bg-gradient-to-br from-brand-900/50 to-purple-900/50 border border-brand-500/30 flex items-center justify-center shrink-0 text-brand-400">
                <Sparkles className="w-4 h-4" />
              </div>
            )}
            
            <div
              className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-gradient-to-br from-brand-900/40 to-brand-800/40 border border-brand-500/50 text-brand-50 rounded-tl-lg rounded-bl-lg rounded-br-lg'
                  : 'bg-slate-900/50 text-slate-200 border border-slate-700/50 rounded-tr-lg rounded-br-lg rounded-bl-lg backdrop-blur-sm'
              }`}
            >
              <MessageContent text={msg.text} />
              
              {/* Timestamp */}
              <div className={`text-[10px] mt-2 pt-2 border-t ${
                msg.role === 'user' 
                  ? 'border-brand-500/20 text-brand-300/50' 
                  : 'border-slate-700/30 text-slate-500'
              }`}>
                {msg.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>

            {msg.role === 'user' && (
              <div className="w-8 h-8 mt-1 rounded-sm bg-brand-600 border border-brand-400 flex items-center justify-center shrink-0 text-white font-bold text-xs">
                YOU
              </div>
            )}
          </div>
        ))}
        
        {loading && (
          <div className="flex items-start gap-3 animate-in fade-in duration-300">
            <div className="w-8 h-8 mt-1 rounded-sm bg-gradient-to-br from-brand-900/50 to-purple-900/50 border border-brand-500/30 flex items-center justify-center text-brand-400">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            <div className="bg-slate-900/50 border border-slate-700/50 p-4 rounded-tr-lg rounded-br-lg rounded-bl-lg">
              <div className="flex items-center gap-2 text-brand-400 text-xs">
                <Cpu className="w-3 h-3 animate-spin" />
                <span className="animate-pulse">Đang phân tích dữ liệu</span>
                <span className="flex gap-1">
                  <span className="w-1 h-1 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1 h-1 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1 h-1 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-slate-900/80 border-t border-brand-500/30 backdrop-blur-sm">
        <div className="flex items-center gap-2 bg-slate-950 border border-brand-500/30 px-3 py-2.5 transition-all focus-within:border-brand-500 focus-within:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <span className="text-brand-500 font-bold animate-pulse">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Nhập câu hỏi của bạn..."
            className="flex-1 bg-transparent border-none outline-none text-sm text-brand-100 placeholder-slate-600 font-mono"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="text-brand-500 hover:text-brand-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="text-[10px] text-slate-600 mt-2 text-center font-mono">
          Press <kbd className="px-1 py-0.5 bg-slate-800 border border-slate-700 rounded text-brand-400">Enter</kbd> to send
        </div>
      </div>
    </div>
  );
};

export default AiChat;