import { ClubInfo, Department, TimelineEvent, Benefit, FAQItem } from './types';

export const CLUB_INFO: ClubInfo = {
  name: "JS-club",
  fullName: "Japanese Software Engineers Club",
  conceptName: "SUBSNOVAX",
  slogan: "Code Your Future - Create The Nova",
  description: "JS-club biến đổi thành Elementum Lab - nơi các Nhà kiến tạo Nova sử dụng chất liệu (Substance) và ẩn số (X) để tạo ra năng lượng đột phá.",
  history: "Thành lập 02/2014, JS Club (Japanese Software Engineers Club) ban đầu kết nối sinh viên chuyên ngành hẹp JS. Sau hơn 10 năm, CLB mở rộng cho đam mê CNTT & Tiếng Nhật, quy tụ ~100 thành viên mỗi kỳ. Đạt danh hiệu 'Câu lạc bộ xuất sắc' 10 kỳ liên tiếp và là nơi hội tụ nhiều Cóc Vàng nhất ĐH FPT.",
  story: "Sâu trong lòng đất, nơi ánh sáng không thể chạm đến, tồn tại Elementum Lab. Nhà Hóa học tài ba đã kích hoạt 5 buồng Nguyên Tố: Oxi, Đồng, Silic, Vàng và Carbon để tìm kiếm 'Hợp Chất Sự Sống'. Ứng viên (Nhà kiến tạo Nova) phải chọn nguyên tố phù hợp, mở chiếc rương XPRIMIV và tạo ra phản ứng Nova bùng nổ.",
  values: ["Học hết sức - Chơi hết mình", "Kỷ Luật", "Sáng Tạo", "Gắn Kết"],
  contactEmail: "jsclub.fpt@gmail.com",
  contactAddress: "Đại học FPT, Khu Công nghệ cao Hòa Lạc, KM 29 Đại lộ Thăng Long, Hà Nội",
  foundedYear: 2014
};

export const DEPARTMENTS: Department[] = [
  {
    id: "chuyen-mon",
    name: "Ban Chuyên Môn",
    elementName: "OXYGEN",
    symbol: "O",
    atomicNumber: 8,
    atomicMass: "15.999",
    description: "Sự sống, khởi đầu và khả năng 'thổi bùng' mọi tiềm năng.",
    roleDescription: "Như Oxi duy trì sự sống, Ban Chuyên Môn duy trì kỹ năng cốt lõi của CLB. Đây là nơi đào tạo các team thi đấu (Codefest, Hackathon), tổ chức lớp training và xây dựng nội dung học thuật cho sự kiện.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tasks: [
      "Nghiên cứu công nghệ, thuật toán, lập trình.",
      "Tổ chức training camp, tech talk, workshop.",
      "Xây dựng đề bài cho các cuộc thi (Coding Inspiration, Algorithm Arena)."
    ],
    requirements: [
      "Tư duy logic sắc bén.",
      "Đam mê công nghệ (không yêu cầu trình độ cao ban đầu).",
      "Khả năng tự học và chia sẻ kiến thức."
    ]
  },
  {
    id: "van-hoa",
    name: "Ban Văn Hóa",
    elementName: "COPPER",
    symbol: "Cu",
    atomicNumber: 29,
    atomicMass: "63.546",
    description: "Linh hồn của JS, nhịp đập kết nối và độ bền bỉ.",
    roleDescription: "Đồng dẫn điện tốt - Văn Hóa dẫn dắt cảm xúc. Là lực lượng nòng cốt chạy sự kiện, teambuilding, duy trì sự gắn kết như một gia đình và phát triển nét văn hóa đặc trưng của 'Xứ sở mặt trời mọc'.",
    imageUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tasks: [
      "Tổ chức sự kiện nội bộ: Teambuilding, Birthday, Du lịch.",
      "Biểu diễn văn nghệ (Hát, Nhảy Yosakoi, Kịch).",
      "Kết nối các thành viên, giữ lửa cho CLB."
    ],
    requirements: [
      "Năng lượng tích cực, nhiệt huyết 'quẩy tới bến'.",
      "Yêu thích văn hóa Nhật Bản là lợi thế.",
      "Hòa đồng, trách nhiệm."
    ]
  },
  {
    id: "truyen-thong",
    name: "Ban Truyền Thông",
    elementName: "SILICON",
    symbol: "Si",
    atomicNumber: 14,
    atomicMass: "28.085",
    description: "Nguyên tố của tín hiệu, biến dữ liệu thành thông điệp.",
    roleDescription: "Như những con chip Silicon xử lý thông tin, Ban Truyền Thông biến sự kiện thành hình ảnh, biến bài viết khô khan thành cảm xúc. Họ lan tỏa hình ảnh CLB ra khắp thế giới qua 3 mảng: Content, Design, Media.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tasks: [
      "Viết bài (Content Creator) bắt trend.",
      "Thiết kế ấn phẩm (Poster, Banner) sáng tạo.",
      "Quay chụp (Media), dựng video highlight sự kiện."
    ],
    requirements: [
      "Sáng tạo không giới hạn.",
      "Có gu thẩm mỹ và tư duy hình ảnh.",
      "Biết sử dụng công cụ (Ps, Ai, Pr, Capcut) là lợi thế lớn."
    ]
  },
  {
    id: "doi-ngoai",
    name: "Ban Đối Ngoại",
    elementName: "GOLD",
    symbol: "Au",
    atomicNumber: 79,
    atomicMass: "196.97",
    description: "Giá trị, ánh sáng uy tín và kết nối chiến lược.",
    roleDescription: "Vàng quý giá và không bị ăn mòn. Ban Đối Ngoại mang hình ảnh uy tín của JS ra bên ngoài, kết nối với doanh nghiệp, nhà tài trợ và các CLB khác. Họ mở rộng mạng lưới quan hệ và đem về nguồn lực cho CLB.",
    imageUrl: "https://images.unsplash.com/photo-1626301637764-f6eb07129532?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tasks: [
      "Đàm phán tài trợ, mời diễn giả (Guest Speakers).",
      "Giao lưu, kết nối với các CLB trường bạn (NEU, HUST...).",
      "Xây dựng hồ sơ năng lực, quan hệ công chúng."
    ],
    requirements: [
      "Giao tiếp tự tin, khéo léo, đĩnh đạc.",
      "Năng động, thích mở rộng quan hệ.",
      "Tư duy chiến lược và giải quyết vấn đề."
    ]
  },
  {
    id: "noi-dung",
    name: "Ban Nội Dung",
    elementName: "CARBON",
    symbol: "C",
    atomicNumber: 6,
    atomicMass: "12.011",
    description: "Nguyên tố tạo hình, kiến trúc sư của ý tưởng.",
    roleDescription: "Carbon biến đổi từ than đen thành kim cương. Ban Nội Dung lên ý tưởng concept, kịch bản chi tiết (Agenda) cho mọi sự kiện. Họ là bộ não đứng sau sự thành công của các chương trình, phối hợp chặt chẽ với các ban khác.",
    imageUrl: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tasks: [
      "Lên ý tưởng (Brainstorming) concept sự kiện.",
      "Viết kịch bản chương trình, kịch bản MC.",
      "Quản lý timeline và điều phối chương trình."
    ],
    requirements: [
      "Tư duy logic tốt kết hợp sự sáng tạo bay bổng.",
      "Khả năng viết lách và sắp xếp công việc.",
      "Tinh thần trách nhiệm cao."
    ]
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    date: "26/12/2025 - 06/01/2026",
    title: "VÒNG MỞ ĐƠN",
    description: "Cổng không gian Elementum mở ra. Các Nhà kiến tạo gửi tín hiệu gia nhập (điền form đăng ký)."
  },
  {
    date: "07/01/2026",
    title: "VÒNG TEST CHUYÊN MÔN (Ban Chuyên Môn)",
    description: "Thử thách đầu tiên để kiểm tra tần số và năng lượng của Nhà kiến tạo qua bài test Logic Code và Toán tư duy."
  },
  {
    date: "10/01/2026 - 11/01/2026",
    title: "VÒNG PHỎNG VẤN",
    description: "Đối thoại trực tiếp với Hội đồng Nguyên Tố để chứng minh sự phù hợp về tần số và năng lượng."
  },
  {
    date: "15/01/2026 - 05/04/2026",
    title: "VÒNG THỬ THÁCH (CHALLENGE)",
    description: "3 tháng 'Thanh xuân rực rỡ'. Thực hiện nhiệm vụ nhóm, mở rương XPRIMIV và tạo ra sản phẩm thực tế (Sự kiện hoặc Phần mềm)."
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: "Long Bào Màu Đỏ",
    description: "Khoác lên mình chiếc áo đồng phục đỏ huyền thoại - biểu tượng tự hào của thành viên JS Club.",
    icon: "Shirt"
  },
  {
    title: "Mentorship",
    description: "Được dẫn dắt bởi các Senpai 'Cóc Vàng', 'Pro Player' trong ngành từ kiến thức lập trình đến kỹ năng sống.",
    icon: "Users"
  },
  {
    title: "Đào tạo Miễn phí",
    description: "Tham gia các lớp học lập trình (C, Java, Web...), tiếng Nhật và kỹ năng mềm chất lượng cao.",
    icon: "GraduationCap"
  },
  {
    title: "Mạng lưới Connection",
    description: "Kết nối với Alumni tại các tập đoàn lớn và giao lưu với các CLB trường bạn (Bách Khoa, NEU...).",
    icon: "Network"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Chưa biết lập trình có vào được CLB không?",
    answer: "Dĩ nhiên là được! JS Club không đòi hỏi bạn là 'thần đồng code'. Chỉ cần bạn có đam mê và tinh thần học hỏi, CLB có lộ trình đào tạo từ Zero đến Hero."
  },
  {
    question: "Học ngành khác (KT, Thiết kế...) có tham gia được không?",
    answer: "Tất nhiên! JS Club là 'vương quốc' đa dạng. Các ban Truyền Thông, Văn Hóa, Đối Ngoại luôn chào đón các bạn từ QTKD, Truyền thông đa phương tiện, Thiết kế đồ họa..."
  },
  {
    question: "Kỳ thử thách là gì? Có đáng sợ không?",
    answer: "Đây là '3 tháng thanh xuân rực rỡ'. Bạn sẽ được chia team để tổ chức sự kiện hoặc làm sản phẩm. Khó nhằn nhưng là kỷ niệm đẹp nhất và giúp bạn trưởng thành vượt bậc."
  },
  {
    question: "Test chuyên môn gồm những gì?",
    answer: "Bài test gồm Logic Code và Toán tư duy. Mục tiêu là đánh giá cách bạn tiếp cận và xử lý vấn đề (Mindset) hơn là kiến thức cú pháp."
  }
];

export const executive_board = [
  {
    name: "Cao Văn Huy",
    position: "Chủ nhiệm CLB",
    photoUrl: "executive_board/cao_van_huy.jpg"
  },
  {
    name: "Lý Ngọc Mai",
    position: "Phó Chủ nhiệm CLB",
    photoUrl: "executive_board/ly_ngoc_mai.jpg"
  },
  {
    name: "Nguyễn Vũ Đăng Khánh",
    position: "Trưởng Ban Chuyên Môn",
    photoUrl: "executive_board/nguyen_vu_dang_khanh.jpg"
  },
  {
    name: "Đỗ Hải Dương",
    position: "Trưởng Ban Nội Dung",
    photoUrl: "executive_board/do_hai_duong.jpg"
  },
  {
    name: "Nguyễn Minh Trang",
    position: "Trưởng Ban Truyền Thông",
    photoUrl: "executive_board/nguyen_minh_trang.jpg"
  },
  {
    name: "Lê Minh Phương",
    position: "Trưởng Ban Văn Hóa",
    photoUrl: "executive_board/le_minh_phuong.jpg"
  },
  {
    name: "Nguyễn Trường Giang",
    position: "Trưởng Ban Đối Ngoại",
    photoUrl: "executive_board/nguyen_truong_giang.jpg"
  }
];
  