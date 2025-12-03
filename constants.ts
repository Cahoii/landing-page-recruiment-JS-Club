import { ClubInfo, Department } from './types';

export const CLUB_INFO: ClubInfo = {
  name: "JS-club",
  slogan: "一期一会 - Nhất kỳ nhất hội",
  description: "JS-club là ngôi nhà chung cho các bạn sinh viên đam mê Công nghệ thông tin và văn hóa Nhật Bản. Chúng tôi đào tạo kỹ sư cầu nối (BrSE) tương lai, kết hợp giữa tư duy lập trình sắc bén và tinh thần kỷ luật Nhật Bản.",
  history: "Thành lập năm 2014, JS-club đã đào tạo hàng trăm kỹ sư chất lượng cao, hiện đang làm việc tại các công ty công nghệ lớn của Nhật Bản và Việt Nam.",
  values: ["Kỷ Luật", "Sáng Tạo", "Chia Sẻ", "Chuyên Nghiệp"],
  contactEmail: "jsclub.fpt@gmail.com",
  foundedYear: 2014
};

export const DEPARTMENTS: Department[] = [
  {
    id: "chuyen-mon",
    name: "Ban Chuyên Môn",
    description: "Linh hồn công nghệ của CLB, nơi đào tạo các 'chiến thần' code và tiếng Nhật.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tasks: [
      "Tổ chức các lớp học Lập trình (Web, AI, Mobile) và Tiếng Nhật chuyên ngành.",
      "Xây dựng các dự án phần mềm thực tế (Outsourcing & Product).",
      "Nghiên cứu công nghệ mới và chia sẻ kiến thức (Seminar)."
    ],
    requirements: [
      "Có tư duy logic tốt, đam mê công nghệ.",
      "Có kiến thức nền tảng về C++, Java, Python hoặc JS.",
      "Ưu tiên ứng viên có định hướng trở thành BrSE."
    ]
  },
  {
    id: "van-hoa",
    name: "Ban Văn Hóa",
    description: "Nơi gìn giữ và lan tỏa bản sắc văn hóa Nhật Bản cũng như tinh thần JS.",
    imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tasks: [
      "Tổ chức các lễ hội văn hóa Nhật Bản (Oshougatsu, Tanabata...).",
      "Tổ chức teambuilding, bonding gắn kết thành viên.",
      "Chuẩn bị các tiết mục văn nghệ (hát, nhảy Yosakoi)."
    ],
    requirements: [
      "Yêu thích văn hóa Nhật Bản.",
      "Năng động, hòa đồng, có khiếu văn nghệ là lợi thế.",
      "Khéo tay, tỉ mỉ (làm đồ handmade, trang trí)."
    ]
  },
  {
    id: "noi-dung",
    name: "Ban Nội Dung",
    description: "Bộ não sáng tạo, người thổi hồn vào từng bài viết và sự kiện.",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tasks: [
      "Lên ý tưởng (idea) và viết kịch bản cho các sự kiện.",
      "Sáng tạo nội dung (Content) cho Fanpage, TikTok.",
      "Biên tập tài liệu truyền thông nội bộ."
    ],
    requirements: [
      "Khả năng viết lách tốt, ngôn từ phong phú.",
      "Có tư duy sáng tạo, bắt trend nhanh.",
      "Thích kể chuyện (Storytelling)."
    ]
  },
  {
    id: "truyen-thong",
    name: "Ban Truyền Thông",
    description: "Gương mặt đại diện, mang hình ảnh JS-club vươn xa.",
    imageUrl: "https://images.unsplash.com/photo-1515168816837-397c96d546d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tasks: [
      "Chụp ảnh, quay phim tại các sự kiện (Photographer/Cameraman).",
      "Thiết kế ấn phẩm đồ họa (Design) 2D/3D.",
      "Dựng video (Video Editor) highlight sự kiện."
    ],
    requirements: [
      "Biết sử dụng Adobe Suite (Ps, Ai, Pr) hoặc Canva/Capcut.",
      "Có gu thẩm mỹ tốt.",
      "Chịu khó, sẵn sàng tác nghiệp mọi lúc mọi nơi."
    ]
  },
  {
    id: "doi-ngoai",
    name: "Ban Đối Ngoại",
    description: "Cầu nối vững chắc giữa CLB với doanh nghiệp và các tổ chức khác.",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tasks: [
      "Tìm kiếm và đàm phán với Nhà tài trợ (Sponsorship).",
      "Mời diễn giả (Guest Speaker) cho các buổi Talkshow.",
      "Giữ liên lạc với các cựu thành viên (Alumni)."
    ],
    requirements: [
      "Giao tiếp tự tin, khéo léo.",
      "Có khả năng đàm phán, thuyết phục.",
      "Tiếng Anh hoặc Tiếng Nhật giao tiếp là lợi thế lớn."
    ]
  }
];