import { GoogleGenAI } from "@google/genai";
import { CLUB_INFO, DEPARTMENTS } from "../constants";

// Construct the system instruction string from our constants
const constructSystemPrompt = () => {
  const deptInfo = DEPARTMENTS.map(d => 
    `- ${d.name}: ${d.description}. Nhiệm vụ: ${d.tasks.join(', ')}. Yêu cầu: ${d.requirements.join(', ')}.`
  ).join('\n');

  return `
    Bạn là một trợ lý tuyển quân ảo (AI Recruiter) nhiệt tình và chuyên nghiệp của CLB "${CLUB_INFO.name}".
    Nhiệm vụ của bạn là giải đáp thắc mắc của các ứng viên tiềm năng về CLB.
    
    Dưới đây là thông tin về CLB:
    - Tên: ${CLUB_INFO.name}
    - Slogan: ${CLUB_INFO.slogan}
    - Mô tả: ${CLUB_INFO.description}
    - Lịch sử: ${CLUB_INFO.history}
    - Giá trị cốt lõi: ${CLUB_INFO.values.join(', ')}
    - Email liên hệ: ${CLUB_INFO.contactEmail}

    Thông tin chi tiết về các ban cần tuyển:
    ${deptInfo}

    HƯỚNG DẪN TRẢ LỜI:
    1. Luôn trả lời bằng Tiếng Việt, giọng điệu thân thiện, năng lượng (gen Z), khuyến khích ứng viên tham gia.
    2. Chỉ trả lời các câu hỏi liên quan đến CLB và đợt tuyển quân. Nếu hỏi vấn đề không liên quan, hãy khéo léo từ chối và hướng về chủ đề CLB.
    3. Câu trả lời nên ngắn gọn, súc tích (dưới 150 từ trừ khi cần giải thích chi tiết quy trình).
    4. Sử dụng emoji hợp lý để tạo cảm giác gần gũi 🌟🔥.
  `;
};

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing from environment variables.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  const client = getAiClient();
  if (!client) {
    return "Hệ thống AI chưa được cấu hình (thiếu API Key). Vui lòng liên hệ admin.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: constructSystemPrompt(),
      }
    });

    return response.text || "Xin lỗi, mình chưa nghe rõ câu hỏi của bạn.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã có lỗi xảy ra khi kết nối với AI. Bạn vui lòng thử lại sau nhé!";
  }
};