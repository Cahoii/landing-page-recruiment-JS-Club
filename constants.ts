import { ClubInfo, Department } from './types';

export const CLUB_INFO: ClubInfo = {
  name: "Future Leaders Club (JS-Club)",
  slogan: "Khơi nguồn đam mê, Dẫn lối thành công",
  description: "JS-Club là môi trường năng động dành cho sinh viên đam mê phát triển kỹ năng lãnh đạo, tổ chức sự kiện và kết nối cộng đồng. Chúng tôi tạo ra các sân chơi bổ ích để các bạn trẻ thử thách bản thân.",
  history: "Được thành lập từ năm 2018, JS-Club đã tổ chức thành công hơn 50 sự kiện lớn nhỏ, thu hút hàng ngàn sinh viên tham gia.",
  values: ["Sáng tạo", "Trách nhiệm", "Đoàn kết", "Tiên phong"],
  contactEmail: "tuyendung@flc.edu.vn",
  foundedYear: 2018
};

export const DEPARTMENTS: Department[] = [
  {
    id: "content",
    name: "Ban Nội Dung",
    description: "Bộ não của mọi sự kiện, nơi ý tưởng được hình thành và trau chuốt.",
    iconName: "PenTool",
    tasks: [
      "Lên ý tưởng, concept cho các sự kiện của CLB.",
      "Viết bài truyền thông cho Fanpage.",
      "Xây dựng kịch bản MC, kịch bản chương trình."
    ],
    requirements: [
      "Yêu thích viết lách, sáng tạo.",
      "Tư duy logic, khả năng brainstorm tốt.",
      "Có kinh nghiệm viết content là một lợi thế."
    ]
  },
  {
    id: "media",
    name: "Ban Truyền Thông & Kỹ Thuật",
    description: "Nơi những ý tưởng được hiện thực hóa qua hình ảnh và video sống động.",
    iconName: "Camera",
    tasks: [
      "Thiết kế ấn phẩm (poster, banner) cho sự kiện.",
      "Chụp ảnh, quay dựng video recap.",
      "Quản lý hình ảnh thương hiệu của CLB trên mạng xã hội."
    ],
    requirements: [
      "Biết sử dụng cơ bản Ps, Ai, Pr hoặc CapCut.",
      "Có gu thẩm mỹ tốt.",
      "Chủ động, có trách nhiệm với deadline."
    ]
  },
  {
    id: "hr",
    name: "Ban Nhân Sự",
    description: "Trái tim của CLB, nơi gắn kết các thành viên và xây dựng văn hóa.",
    iconName: "Users",
    tasks: [
      "Quản lý hồ sơ thành viên, điểm danh.",
      "Tổ chức bonding, training nội bộ.",
      "Giải quyết các vấn đề nội bộ, đảm bảo sự đoàn kết."
    ],
    requirements: [
      "Giao tiếp tốt, thấu hiểu tâm lý.",
      "Bảo mật thông tin tốt.",
      "Công tư phân minh, nhiệt tình."
    ]
  },
  {
    id: "er",
    name: "Ban Đối Ngoại",
    description: "Gương mặt đại diện, mang về nguồn lực tài chính và đối tác cho CLB.",
    iconName: "Handshake",
    tasks: [
      "Soạn hồ sơ mời tài trợ.",
      "Liên hệ, đàm phán với các nhà tài trợ, bảo trợ truyền thông.",
      "Giữ mối quan hệ với các CLB bạn và khách mời."
    ],
    requirements: [
      "Tự tin, giao tiếp khéo léo.",
      "Có khả năng thuyết phục và xử lý tình huống.",
      "Chịu được áp lực cao."
    ]
  }
];