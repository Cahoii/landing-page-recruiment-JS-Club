import { ClubInfo, Department } from './types';

export const CLUB_INFO: ClubInfo = {
  name: "Japanese Software Engineer Club (JS-Club)",
  slogan: "Khơi nguồn đam mê, Dẫn lối thành công",
  description: "JS-Club là môi trường năng động dành cho sinh viên đam mê phát triển kỹ năng lãnh đạo, tổ chức sự kiện và kết nối cộng đồng. Chúng tôi tạo ra các sân chơi bổ ích để các bạn trẻ thử thách bản thân.",
  history: "Được thành lập từ năm 2018, JS-Club đã tổ chức thành công hơn 50 sự kiện lớn nhỏ, thu hút hàng ngàn sinh viên tham gia.",
  values: ["Sáng tạo", "Trách nhiệm", "Đoàn kết", "Tiên phong"],
  contactEmail: "tuyendung@flc.edu.vn",
  foundedYear: 2018
};
export const DEPARTMENTS: Department[] = [
  {
    id: "chuyen-mon",
    name: "Ban Chuyên Môn",
    description: "Phát triển năng lực chuyên môn cho thành viên thông qua workshop, dự án thực hành và mentoring.",
    iconName: "Code",
    tasks: [
      "Tổ chức workshop, tech talk và buổi training nội bộ.",
      "Thiết kế và triển khai dự án mẫu, bài tập thực hành.",
      "Hỗ trợ code review, mentoring cho các thành viên mới.",
      "Xây dựng tài liệu học tập, chuẩn hóa quy trình kỹ thuật."
    ],
    requirements: [
      "Có nền tảng lập trình cơ bản (ưu tiên JavaScript/TypeScript).",
      "Ham học hỏi, chịu khó nghiên cứu và truyền đạt.",
      "Kỹ năng làm việc nhóm và giải quyết vấn đề.",
      "Tinh thần trách nhiệm khi đảm nhận nhiệm vụ."
    ]
  },
  {
    id: "van-hoa",
    name: "Ban Văn Hóa",
    description: "Duy trì văn hóa CLB, tổ chức hoạt động gắn kết và phát triển cộng đồng thân thiện, tích cực.",
    iconName: "Users",
    tasks: [
      "Tổ chức các hoạt động bonding, team building và sự kiện nội bộ.",
      "Quản lý chương trình chào đón, onboarding thành viên mới.",
      "Xây dựng quy tắc ứng xử, truyền thông nội bộ và duy trì tinh thần đội nhóm.",
      "Hỗ trợ tổ chức các dịp lễ, kỷ niệm của CLB."
    ],
    requirements: [
      "Kỹ năng giao tiếp tốt, thân thiện và tận tâm.",
      "Khả năng tổ chức sự kiện, lên kế hoạch và phối hợp.",
      "Nhạy cảm văn hóa, biết lắng nghe và xử lý mâu thuẫn.",
      "Sáng tạo trong ý tưởng gắn kết thành viên."
    ]
  },
  {
    id: "doi-ngoai",
    name: "Ban Đối Ngoại",
    description: "Xây dựng mối quan hệ với doanh nghiệp, nhà tài trợ và các đối tác nhằm hỗ trợ hoạt động CLB.",
    iconName: "Handshake",
    tasks: [
      "Tìm kiếm, tiếp cận và đàm phán với nhà tài trợ, đối tác.",
      "Chuẩn bị hồ sơ, proposal và báo cáo tài trợ.",
      "Thiết lập hợp tác với các CLB, tổ chức khác và đơn vị truyền thông.",
      "Hỗ trợ công tác hậu cần khi có đối tác tham gia sự kiện."
    ],
    requirements: [
      "Tự tin giao tiếp, có kỹ năng đàm phán và thuyết phục.",
      "Kỹ năng viết email/chào hàng chuyên nghiệp.",
      "Tinh thần chủ động, chịu được áp lực khi cần.",
      "Có mối quan hệ hoặc kinh nghiệm liên hệ đối tác là lợi thế."
    ]
  },
  {
    id: "truyen-thong",
    name: "Ban Truyền Thông",
    description: "Quản lý hình ảnh và thông điệp CLB trên kênh truyền thông; sáng tạo nội dung và sản xuất media.",
    iconName: "Camera",
    tasks: [
      "Lên kế hoạch nội dung và đăng bài trên Fanpage, Group, Instagram...",
      "Thiết kế poster, banner; quay, dựng và biên tập video sự kiện.",
      "Chụp ảnh sự kiện, quản lý kho hình ảnh và nhãn hiệu CLB.",
      "Theo dõi hiệu quả truyền thông và tối ưu nội dung."
    ],
    requirements: [
      "Kỹ năng viết content, thiết kế cơ bản (Ps, Ai) hoặc dựng video (Pr, CapCut).",
      "Gu thẩm mỹ, sáng tạo và nắm bắt xu hướng mạng xã hội.",
      "Cẩn thận, đúng deadline và khả năng làm việc độc lập.",
      "Kinh nghiệm quản lý mạng xã hội là một plus."
    ]
  }
];