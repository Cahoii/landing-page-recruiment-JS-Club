export interface Department {
  id: string;
  name: string;
  description: string;
  iconName: string; // We will map this to Lucide icons
  tasks: string[];
  requirements: string[];
}

export interface ClubInfo {
  name: string;
  slogan: string;
  description: string;
  history: string;
  values: string[];
  contactEmail: string;
  foundedYear: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}