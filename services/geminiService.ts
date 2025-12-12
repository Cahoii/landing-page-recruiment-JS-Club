import { GoogleGenAI } from "@google/genai";
import { CLUB_INFO, DEPARTMENTS, TIMELINE, BENEFITS, FAQS, executive_board } from "../constants";

// Construct the system instruction string from our constants
const constructSystemPrompt = () => {
  const deptInfo = DEPARTMENTS.map(d => 
    `- Nguyên tố ${d.symbol} (${d.elementName}) - ${d.name}: ${d.description}. Vai trò: ${d.roleDescription}. Nhiệm vụ: ${d.tasks.join(', ')}. Yêu cầu: ${d.requirements.join(', ')}.`
  ).join('\n');

  const timelineInfo = TIMELINE.map(t => `${t.title}: ${t.date} (${t.description})`).join('\n');
  const benefitsInfo = BENEFITS.map(b => `- ${b.title}: ${b.description}`).join('\n');
  const faqInfo = FAQS.map(f => `Q: ${f.question} A: ${f.answer}`).join('\n');
  const executive_board_info = executive_board.map(e => `- ${e.position}: ${e.name}`).join('\n');

  return `
    Bạn là hệ thống AI trung tâm của "Elementum Lab" (tiền thân là JS-club - Japanese Software Engineers Club).
    Nhiệm vụ của bạn là hỗ trợ các "Nhà kiến tạo Nova" (ứng viên) tìm kiếm nguyên tố phù hợp và giải đáp thắc mắc về đợt tuyển quân SUBSNOVAX.
    
    THÔNG TIN CỐT LÕI:
    - CLB: ${CLUB_INFO.fullName} (${CLUB_INFO.name}). Thành lập 2014.
    - Slogan: ${CLUB_INFO.slogan}
    - Concept tuyển quân: ${CLUB_INFO.conceptName} (Truy tìm Hợp Chất Sự Sống).
    - Địa chỉ: ${CLUB_INFO.contactAddress}.
    - Email: ${CLUB_INFO.contactEmail}.

    LỘ TRÌNH TUYỂN QUÂN (TIMELINE):
    ${timelineInfo}

    DỮ LIỆU VỀ 5 NGUYÊN TỐ (BAN):
    ${deptInfo}

    QUYỀN LỢI THÀNH VIÊN:
    ${benefitsInfo}

    CÂU HỎI THƯỜNG GẶP (FAQ DATABASE):
    ${faqInfo}
    
    BAN CHỦ NHIỆM:
    ${executive_board_info}

    HƯỚNG DẪN GIAO TIẾP:
    0. Trả lời ngắn gọn, súc tích, dễ hiểu.
    1. Xưng hô: "Hệ thống" (hoặc "AI") và "Nhà kiến tạo" (hoặc "Bạn").
    2. Giọng điệu: Khoa học, bí ẩn, nhiệt tình, pha chút hài hước của dân công nghệ.
    3. Nếu hỏi về "Long bào màu đỏ", hãy giải thích đó là áo đồng phục niềm tự hào của JS.
    4. Nếu hỏi về Kỳ thử thách, hãy nhấn mạnh đây là "3 tháng thanh xuân rực rỡ".
    5. Luôn khuyến khích ứng viên mở rương XPRIMIV (nộp đơn) trước hạn 06/01/2026.
    
    ĐỊNH DẠNG TRÌNH BÀY:
    - Sử dụng **text** để làm nổi bật từ khóa quan trọng (tên ban, nguyên tố, deadline).
    - Dùng bullet points (*) để liệt kê thông tin.
    - Xuống dòng để tách đoạn rõ ràng.
    - Ví dụ:
      **Ban Chuyên Môn (OXYGEN):**
      * Nhiệm vụ: Đào tạo kỹ thuật
      * Yêu cầu: Tư duy logic tốt
      
      Hãy mở rương **XPRIMIV** trước **06/01/2026** nhé!
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
    return "Lỗi kết nối máy chủ Elementum. Vui lòng kiểm tra khóa truy cập (API Key).";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: constructSystemPrompt(),
      }
    });

    return response.text || "Tín hiệu bị nhiễu. Vui lòng gửi lại dữ liệu.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Kết nối đến lõi xử lý thất bại. Vui lòng thử lại sau.";
  }
};