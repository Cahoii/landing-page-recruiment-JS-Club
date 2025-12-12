export interface Department {
  id: string;
  name: string; // Tên ban (vd: Ban Chuyên Môn)
  elementName: string; // Tên nguyên tố (vd: Oxi)
  symbol: string; // Ký hiệu hóa học (vd: O)
  atomicNumber: number; // Số hiệu nguyên tử
  atomicMass: string; // Khối lượng nguyên tử (giả lập)
  description: string;
  roleDescription: string; // Mô tả vai trò trong hợp chất
  imageUrl: string; 
  tasks: string[];
  requirements: string[];
}

export interface ClubInfo {
  name: string;
  fullName: string;
  conceptName: string; // SUBSNOVAX
  slogan: string;
  description: string;
  story: string; // Cốt truyện Elementum Lab
  history: string; // Lịch sử thực tế
  values: string[];
  contactEmail: string;
  contactAddress: string;
  foundedYear: number;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}