/**
 * ====================================================
 * MOCK DATA - Hệ thống quản lý Hair Salon
 * Dữ liệu giả lập cho demo giao diện
 * ====================================================
 */

const MOCK = {
  // ─── THÔNG TIN SALON ──────────────────────────────
  salon: {
    name: 'Võ Thuận Hair Salon',
    slogan: 'Nghệ Thuật Tóc Đẳng Cấp',
    address: '2/139N Lê Thị Hà, Hóc Môn, TP.HCM',
    phone: '0869 990 740',
    email: 'info@vothuanhairsalon.com',
    openTime: '08:30',
    closeTime: '20:00',
    timeSlotMinutes: 30,
  },

  // ─── TÀI KHOẢN NGƯỜI DÙNG ────────────────────────
  users: [
    // ADMIN / CHỦ
    { id: 'U001', name: 'Võ Thuận', phone: '0869990740', email: 'admin@vothuanhairsalon.com', role: 'admin', avatar: 'https://i.pravatar.cc/150?img=68', joinDate: '2022-01-01' },
    // THỢ / STYLIST
    { id: 'U101', name: 'Nguyễn Minh Khoa', phone: '0901234001', email: 'khoa@salon.com', role: 'stylist', avatar: 'https://i.pravatar.cc/150?img=12', joinDate: '2023-03-15', specialty: 'Cắt & Tạo kiểu Nam', rating: 4.9, totalReviews: 234, experience: '5 năm', bio: 'Chuyên gia cắt tóc nam phong cách Hàn Quốc, tốt nghiệp khóa đào tạo Mise en Scène Seoul.', certificates: ['Chứng chỉ Hair Styling quốc tế – Vidal Sassoon Academy', 'Top 10 Barber Vietnam 2025'], portfolio: ['https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400', 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400', 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400', 'https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?w=400'] },
    { id: 'U102', name: 'Trần Thị Bảo Ngọc', phone: '0901234002', email: 'ngoc@salon.com', role: 'stylist', avatar: 'https://i.pravatar.cc/150?img=45', joinDate: '2023-06-01', specialty: 'Nhuộm & Highlight', rating: 4.8, totalReviews: 189, experience: '4 năm', bio: 'Nghệ nhân nhuộm tóc với kỹ thuật Balayage, Ombre chuyên sâu. Đam mê sáng tạo bảng màu cá nhân hóa.', certificates: ['Chứng chỉ Colorist – L\'Oréal Professionnel', 'Balayage Master Class – Wella'], portfolio: ['https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400', 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400', 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400', 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400'] },
    { id: 'U103', name: 'Lê Văn Phúc', phone: '0901234003', email: 'phuc@salon.com', role: 'stylist', avatar: 'https://i.pravatar.cc/150?img=53', joinDate: '2024-01-10', specialty: 'Uốn & Duỗi', rating: 4.7, totalReviews: 142, experience: '3 năm', bio: 'Kỹ thuật viên uốn/duỗi chuyên nghiệp, sử dụng công nghệ nano keratin bảo vệ tóc.', certificates: ['Chứng chỉ Perm Specialist – Schwarzkopf', 'Khóa đào tạo Tóc Hàn Quốc – Jenny House Seoul'], portfolio: ['https://images.unsplash.com/photo-1605497746444-ac9da58d7fc0?w=400', 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400', 'https://images.unsplash.com/photo-1527799851257-6592aae86836?w=400'] },
    { id: 'U104', name: 'Phạm Thanh Hương', phone: '0901234004', email: 'huong@salon.com', role: 'stylist', avatar: 'https://i.pravatar.cc/150?img=47', joinDate: '2024-06-20', specialty: 'Phục hồi & Chăm sóc', rating: 4.6, totalReviews: 98, experience: '2 năm', bio: 'Chuyên viên phục hồi tóc hư tổn, trị liệu da đầu. Tư vấn chăm sóc tóc tại nhà chuyên sâu.', certificates: ['Chứng nhận Trichologist – Kérastase', 'Hair Treatment Expert – Moroccanoil'], portfolio: ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400', 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400'] },
    // KHÁCH HÀNG
    { id: 'U201', name: 'Nguyễn Thảo Linh', phone: '0912345001', email: 'linh@gmail.com', role: 'customer', avatar: 'https://i.pravatar.cc/150?img=32', joinDate: '2024-01-15', memberTier: 'Vàng', points: 2450, totalSpent: 12500000 },
    { id: 'U202', name: 'Trần Bảo Châu', phone: '0912345002', email: 'chau@gmail.com', role: 'customer', avatar: 'https://i.pravatar.cc/150?img=44', joinDate: '2024-03-20', memberTier: 'Bạc', points: 1200, totalSpent: 6800000 },
    { id: 'U203', name: 'Lê Minh Khoa', phone: '0912345003', email: 'khoa.le@gmail.com', role: 'customer', avatar: 'https://i.pravatar.cc/150?img=59', joinDate: '2024-07-10', memberTier: 'Đồng', points: 450, totalSpent: 2300000 },
    { id: 'U204', name: 'Phạm Hồng Nhung', phone: '0912345004', email: 'nhung@gmail.com', role: 'customer', avatar: 'https://i.pravatar.cc/150?img=26', joinDate: '2025-02-05', memberTier: 'VIP', points: 5800, totalSpent: 28000000 },
    { id: 'U205', name: 'Hoàng Anh Tuấn', phone: '0912345005', email: 'tuan.ha@gmail.com', role: 'customer', avatar: 'https://i.pravatar.cc/150?img=60', joinDate: '2025-06-18', memberTier: 'Đồng', points: 180, totalSpent: 950000 },
    { id: 'U206', name: 'Võ Thanh Mai', phone: '0912345006', email: 'mai.vo@gmail.com', role: 'customer', avatar: 'https://i.pravatar.cc/150?img=23', joinDate: '2025-09-01', memberTier: 'Bạc', points: 980, totalSpent: 5200000 },
  ],

  // ─── DANH MỤC DỊCH VỤ ────────────────────────────
  services: [
    { id: 'S01', name: 'Cắt Tóc Thiết Kế Nam', category: 'Cắt tóc', price: 150000, duration: 45, image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500', description: 'Tư vấn & cắt tóc nam theo phong cách cá nhân hóa, phù hợp dáng khuôn mặt.', includes: ['Tư vấn kiểu tóc', 'Gội đầu massage', 'Sấy tạo kiểu'] },
    { id: 'S02', name: 'Cắt Tóc Thiết Kế Nữ', category: 'Cắt tóc', price: 200000, duration: 60, image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500', description: 'Cắt tạo kiểu nữ theo xu hướng, từ layer, bob đến pixie hiện đại.', includes: ['Tư vấn dáng tóc', 'Gội đầu dưỡng sinh', 'Sấy tạo kiểu chuyên sâu'] },
    { id: 'S03', name: 'Nhuộm Màu Thời Trang', category: 'Nhuộm tóc', price: 500000, duration: 120, image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500', description: 'Nhuộm Balayage, Ombre, Highlight với thuốc nhuộm cao cấp nhập khẩu.', includes: ['Thuốc nhuộm L\'Oréal / Wella', 'Kỹ thuật lên màu chuẩn', 'Khóa màu tóc'] },
    { id: 'S04', name: 'Nhuộm Đen / Phủ Bạc', category: 'Nhuộm tóc', price: 300000, duration: 90, image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500', description: 'Nhuộm phủ bạc tự nhiên, không gây kích ứng da đầu.', includes: ['Thuốc nhuộm an toàn', 'Dưỡng sau nhuộm', 'Bảo hành màu 4 tuần'] },
    { id: 'S05', name: 'Uốn Setting / Uốn Lạnh', category: 'Uốn tóc', price: 600000, duration: 150, image: 'https://images.unsplash.com/photo-1605497746444-ac9da58d7fc0?w=500', description: 'Uốn sóng lơi tự nhiên phong cách Hàn Quốc, giữ nếp bền lâu.', includes: ['Công nghệ uốn máy', 'Dưỡng phục hồi', 'Tạo kiểu hoàn thiện'] },
    { id: 'S06', name: 'Duỗi Thẳng Keratin', category: 'Duỗi tóc', price: 700000, duration: 180, image: 'https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?w=500', description: 'Duỗi thẳng mượt với protein keratin tự nhiên, không xơ cứng.', includes: ['Keratin Nano cao cấp', 'Phục hồi lõi tóc', 'Bảo hành thẳng 3 tháng'] },
    { id: 'S07', name: 'Phục Hồi Chuyên Sâu', category: 'Chăm sóc', price: 400000, duration: 90, image: 'https://images.unsplash.com/photo-1527799851257-6592aae86836?w=500', description: 'Liệu trình phục hồi 5 bước cho tóc hư tổn nặng do tẩy, nhuộm nhiều lần.', includes: ['Protein + Collagen', 'Xông hơi nano', 'Mặt nạ ủ tóc 20 phút'] },
    { id: 'S08', name: 'Gội Đầu Dưỡng Sinh', category: 'Chăm sóc', price: 100000, duration: 30, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500', description: 'Gội đầu thư giãn kết hợp massage bấm huyệt đầu, vai, cổ.', includes: ['Massage 15 phút', 'Dầu gội thảo dược', 'Xả dưỡng ẩm'] },
    { id: 'S09', name: 'Combo VIP (Cắt + Nhuộm + Phục hồi)', category: 'Combo', price: 950000, duration: 210, image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500', description: 'Trọn gói làm đẹp cao cấp: cắt thiết kế + nhuộm màu + phục hồi chuyên sâu.', includes: ['Tiết kiệm 150K', 'Tư vấn toàn diện', 'Nước uống & snack miễn phí'] },
    { id: 'S10', name: 'Tẩy Tóc Chuyên Nghiệp', category: 'Nhuộm tóc', price: 350000, duration: 60, image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500', description: 'Tẩy tóc an toàn với thuốc tẩy Schwarzkopf, hạn chế tối đa hư tổn.', includes: ['Tẩy nhẹ 1-2 lần', 'Dưỡng sau tẩy', 'Tư vấn bảo quản'] },
  ],

  // ─── LỊCH HẸN / BOOKING ──────────────────────────
  appointments: [
    // Hôm nay 2026-11-11
    { id: 'A001', customerId: 'U201', stylistId: 'U101', serviceIds: ['S01'], date: '2026-11-11', time: '09:00', endTime: '09:45', status: 'completed', totalAmount: 150000, paymentStatus: 'paid', paymentMethod: 'cash', notes: 'Khách muốn cắt kiểu Two Block', rating: 5, review: 'Cắt rất đẹp, đúng ý mình!' },
    { id: 'A002', customerId: 'U204', stylistId: 'U102', serviceIds: ['S03', 'S07'], date: '2026-11-11', time: '09:30', endTime: '13:00', status: 'completed', totalAmount: 900000, paymentStatus: 'paid', paymentMethod: 'transfer', notes: 'VIP - Nhuộm Balayage + Phục hồi', rating: 5, review: 'Màu nhuộm xuất sắc, rất hài lòng!' },
    { id: 'A003', customerId: 'U203', stylistId: 'U103', serviceIds: ['S05'], date: '2026-11-11', time: '10:00', endTime: '12:30', status: 'in-progress', totalAmount: 600000, paymentStatus: 'pending', paymentMethod: null, notes: 'Uốn sóng nhẹ Hàn Quốc' },
    { id: 'A004', customerId: 'U206', stylistId: 'U101', serviceIds: ['S02'], date: '2026-11-11', time: '13:00', endTime: '14:00', status: 'confirmed', totalAmount: 200000, paymentStatus: 'deposit', depositAmount: 50000, paymentMethod: 'momo', notes: 'Cắt layer dài' },
    { id: 'A005', customerId: 'U202', stylistId: 'U104', serviceIds: ['S08', 'S07'], date: '2026-11-11', time: '14:00', endTime: '16:00', status: 'confirmed', totalAmount: 500000, paymentStatus: 'pending', notes: 'Gội dưỡng sinh + phục hồi' },
    { id: 'A006', customerId: 'U205', stylistId: 'U103', serviceIds: ['S01'], date: '2026-11-11', time: '15:00', endTime: '15:45', status: 'confirmed', totalAmount: 150000, paymentStatus: 'pending', notes: '' },
    { id: 'A007', customerId: 'U201', stylistId: 'U102', serviceIds: ['S09'], date: '2026-11-11', time: '15:30', endTime: '19:00', status: 'confirmed', totalAmount: 950000, paymentStatus: 'deposit', depositAmount: 200000, paymentMethod: 'transfer', notes: 'Combo VIP - đổi màu tóc mới' },
    // Ngày mai 2026-11-12
    { id: 'A008', customerId: 'U204', stylistId: 'U101', serviceIds: ['S01'], date: '2026-11-12', time: '09:00', endTime: '09:45', status: 'confirmed', totalAmount: 150000, paymentStatus: 'pending' },
    { id: 'A009', customerId: 'U206', stylistId: 'U102', serviceIds: ['S04'], date: '2026-11-12', time: '10:00', endTime: '11:30', status: 'confirmed', totalAmount: 300000, paymentStatus: 'pending' },
    { id: 'A010', customerId: 'U202', stylistId: 'U103', serviceIds: ['S06'], date: '2026-11-12', time: '13:00', endTime: '16:00', status: 'confirmed', totalAmount: 700000, paymentStatus: 'deposit', depositAmount: 100000, paymentMethod: 'momo' },
    // Ngày 13
    { id: 'A011', customerId: 'U203', stylistId: 'U104', serviceIds: ['S08'], date: '2026-11-13', time: '09:30', endTime: '10:00', status: 'confirmed', totalAmount: 100000, paymentStatus: 'pending' },
    { id: 'A012', customerId: 'U205', stylistId: 'U101', serviceIds: ['S02', 'S03'], date: '2026-11-13', time: '10:00', endTime: '13:00', status: 'confirmed', totalAmount: 700000, paymentStatus: 'pending' },
    // Lịch sử (quá khứ)
    { id: 'A100', customerId: 'U201', stylistId: 'U101', serviceIds: ['S01'], date: '2026-11-01', time: '10:00', endTime: '10:45', status: 'completed', totalAmount: 150000, paymentStatus: 'paid', paymentMethod: 'cash', rating: 5, review: 'Luôn hài lòng!' },
    { id: 'A101', customerId: 'U204', stylistId: 'U102', serviceIds: ['S09'], date: '2026-11-03', time: '09:00', endTime: '12:30', status: 'completed', totalAmount: 950000, paymentStatus: 'paid', paymentMethod: 'transfer', rating: 5, review: 'Combo VIP xứng đáng từng đồng!' },
    { id: 'A102', customerId: 'U202', stylistId: 'U103', serviceIds: ['S05'], date: '2026-11-05', time: '14:00', endTime: '16:30', status: 'completed', totalAmount: 600000, paymentStatus: 'paid', paymentMethod: 'momo', rating: 4, review: 'Uốn đẹp nhưng hơi lâu.' },
    { id: 'A103', customerId: 'U206', stylistId: 'U104', serviceIds: ['S07', 'S08'], date: '2026-11-07', time: '10:00', endTime: '12:00', status: 'completed', totalAmount: 500000, paymentStatus: 'paid', paymentMethod: 'cash', rating: 5, review: 'Tóc phục hồi mềm mượt hẳn!' },
    { id: 'A104', customerId: 'U203', stylistId: 'U101', serviceIds: ['S01'], date: '2026-11-08', time: '16:00', endTime: '16:45', status: 'completed', totalAmount: 150000, paymentStatus: 'paid', paymentMethod: 'cash', rating: 4 },
    { id: 'A105', customerId: 'U205', stylistId: 'U102', serviceIds: ['S10', 'S03'], date: '2026-11-09', time: '09:00', endTime: '12:00', status: 'completed', totalAmount: 850000, paymentStatus: 'paid', paymentMethod: 'transfer', rating: 5, review: 'Tẩy + nhuộm rất đẹp, an toàn.' },
    { id: 'A106', customerId: 'U201', stylistId: 'U103', serviceIds: ['S08'], date: '2026-11-10', time: '11:00', endTime: '11:30', status: 'completed', totalAmount: 100000, paymentStatus: 'paid', paymentMethod: 'cash', rating: 5, review: 'Massage đầu rất thư giãn.' },
    // Cancelled
    { id: 'A107', customerId: 'U205', stylistId: 'U101', serviceIds: ['S02'], date: '2026-11-10', time: '14:00', endTime: '15:00', status: 'cancelled', totalAmount: 200000, cancelReason: 'Khách bận đột xuất' },
  ],

  // ─── CHẤM CÔNG NHÂN VIÊN ─────────────────────────
  attendance: [
    // Tháng 11/2026
    { stylistId: 'U101', date: '2026-11-01', checkIn: '08:25', checkOut: '20:05', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U101', date: '2026-11-02', checkIn: '08:30', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U101', date: '2026-11-03', checkIn: '08:45', checkOut: '20:10', status: 'late', hoursWorked: 11.4, lateMinutes: 15 },
    { stylistId: 'U101', date: '2026-11-04', checkIn: null, checkOut: null, status: 'day-off', hoursWorked: 0 },
    { stylistId: 'U101', date: '2026-11-05', checkIn: '08:28', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U101', date: '2026-11-06', checkIn: '08:30', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U101', date: '2026-11-07', checkIn: '08:29', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U101', date: '2026-11-08', checkIn: '08:30', checkOut: '20:05', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U101', date: '2026-11-09', checkIn: '08:25', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U101', date: '2026-11-10', checkIn: '08:30', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U101', date: '2026-11-11', checkIn: '08:28', checkOut: null, status: 'working', hoursWorked: null },
    // U102
    { stylistId: 'U102', date: '2026-11-01', checkIn: '08:30', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U102', date: '2026-11-02', checkIn: '08:28', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U102', date: '2026-11-03', checkIn: '08:30', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U102', date: '2026-11-04', checkIn: '08:30', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U102', date: '2026-11-05', checkIn: null, checkOut: null, status: 'day-off', hoursWorked: 0 },
    { stylistId: 'U102', date: '2026-11-06', checkIn: '08:30', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U102', date: '2026-11-07', checkIn: '08:30', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U102', date: '2026-11-08', checkIn: '09:00', checkOut: '20:00', status: 'late', hoursWorked: 11.0, lateMinutes: 30 },
    { stylistId: 'U102', date: '2026-11-09', checkIn: '08:30', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U102', date: '2026-11-10', checkIn: '08:30', checkOut: '20:00', status: 'on-time', hoursWorked: 11.5 },
    { stylistId: 'U102', date: '2026-11-11', checkIn: '08:30', checkOut: null, status: 'working', hoursWorked: null },
    // U103
    { stylistId: 'U103', date: '2026-11-11', checkIn: '08:25', checkOut: null, status: 'working', hoursWorked: null },
    // U104
    { stylistId: 'U104', date: '2026-11-11', checkIn: '08:32', checkOut: null, status: 'working', hoursWorked: null },
  ],

  // ─── BẢNG LƯƠNG & HOA HỒNG ───────────────────────
  payroll: [
    // Tháng 10/2026 (đã chốt)
    { stylistId: 'U101', month: '2026-10', baseSalary: 8000000, commissionRate: 0.15, commissionEarned: 3450000, bonus: 500000, deductions: 0, tip: 350000, totalCustomers: 85, totalServices: 92, netSalary: 12300000 },
    { stylistId: 'U102', month: '2026-10', baseSalary: 7500000, commissionRate: 0.15, commissionEarned: 4200000, bonus: 300000, deductions: 100000, tip: 280000, totalCustomers: 72, totalServices: 78, netSalary: 12180000 },
    { stylistId: 'U103', month: '2026-10', baseSalary: 7000000, commissionRate: 0.12, commissionEarned: 2880000, bonus: 200000, deductions: 50000, tip: 150000, totalCustomers: 65, totalServices: 68, netSalary: 10180000 },
    { stylistId: 'U104', month: '2026-10', baseSalary: 6500000, commissionRate: 0.12, commissionEarned: 1920000, bonus: 0, deductions: 0, tip: 120000, totalCustomers: 48, totalServices: 52, netSalary: 8540000 },
    // Tháng 11/2026 (đang tính)
    { stylistId: 'U101', month: '2026-11', baseSalary: 8000000, commissionRate: 0.15, commissionEarned: 1200000, bonus: 0, deductions: 0, tip: 120000, totalCustomers: 28, totalServices: 31, netSalary: null },
    { stylistId: 'U102', month: '2026-11', baseSalary: 7500000, commissionRate: 0.15, commissionEarned: 1650000, bonus: 0, deductions: 100000, tip: 80000, totalCustomers: 22, totalServices: 25, netSalary: null },
    { stylistId: 'U103', month: '2026-11', baseSalary: 7000000, commissionRate: 0.12, commissionEarned: 960000, bonus: 0, deductions: 0, tip: 50000, totalCustomers: 18, totalServices: 20, netSalary: null },
    { stylistId: 'U104', month: '2026-11', baseSalary: 6500000, commissionRate: 0.12, commissionEarned: 720000, bonus: 0, deductions: 0, tip: 40000, totalCustomers: 14, totalServices: 15, netSalary: null },
  ],

  // ─── DOANH THU THEO NGÀY ──────────────────────────
  dailyRevenue: [
    { date: '2026-11-01', revenue: 3250000, expenses: 450000, bookingCount: 12, cashAmount: 1500000, transferAmount: 1250000, momoAmount: 500000 },
    { date: '2026-11-02', revenue: 2800000, expenses: 380000, bookingCount: 10, cashAmount: 1200000, transferAmount: 1100000, momoAmount: 500000 },
    { date: '2026-11-03', revenue: 4100000, expenses: 520000, bookingCount: 15, cashAmount: 1800000, transferAmount: 1500000, momoAmount: 800000 },
    { date: '2026-11-04', revenue: 1950000, expenses: 280000, bookingCount: 8, cashAmount: 950000, transferAmount: 600000, momoAmount: 400000 },
    { date: '2026-11-05', revenue: 3500000, expenses: 420000, bookingCount: 13, cashAmount: 1600000, transferAmount: 1300000, momoAmount: 600000 },
    { date: '2026-11-06', revenue: 2650000, expenses: 350000, bookingCount: 9, cashAmount: 1100000, transferAmount: 1050000, momoAmount: 500000 },
    { date: '2026-11-07', revenue: 3800000, expenses: 480000, bookingCount: 14, cashAmount: 1700000, transferAmount: 1400000, momoAmount: 700000 },
    { date: '2026-11-08', revenue: 4500000, expenses: 580000, bookingCount: 16, cashAmount: 2000000, transferAmount: 1600000, momoAmount: 900000 },
    { date: '2026-11-09', revenue: 5200000, expenses: 650000, bookingCount: 18, cashAmount: 2200000, transferAmount: 1800000, momoAmount: 1200000 },
    { date: '2026-11-10', revenue: 3100000, expenses: 400000, bookingCount: 11, cashAmount: 1400000, transferAmount: 1100000, momoAmount: 600000 },
    { date: '2026-11-11', revenue: 2500000, expenses: 320000, bookingCount: 7, cashAmount: 1050000, transferAmount: 950000, momoAmount: 500000 },
  ],

  // ─── KHUYẾN MÃI / VOUCHER ────────────────────────
  promotions: [
    { id: 'P01', code: 'WELCOME50', name: 'Chào mừng khách mới', description: 'Giảm 50K cho lần đầu đặt lịch online', discount: 50000, discountType: 'fixed', minSpend: 200000, startDate: '2026-11-01', endDate: '2026-12-31', usageLimit: 100, usedCount: 23, status: 'active' },
    { id: 'P02', code: 'VIP20', name: 'Ưu đãi VIP tháng 11', description: 'Giảm 20% cho khách hạng Vàng & VIP', discount: 20, discountType: 'percent', minSpend: 500000, maxDiscount: 200000, startDate: '2026-11-01', endDate: '2026-11-30', usageLimit: 50, usedCount: 8, status: 'active', applicableTiers: ['Vàng', 'VIP'] },
    { id: 'P03', code: 'BIRTHDAY', name: 'Quà sinh nhật', description: 'Tặng dịch vụ gội đầu dưỡng sinh cho khách có sinh nhật trong tháng', discount: 100000, discountType: 'fixed', minSpend: 0, startDate: '2026-01-01', endDate: '2026-12-31', usageLimit: null, usedCount: 45, status: 'active' },
    { id: 'P04', code: 'COMBO100', name: 'Combo tiết kiệm', description: 'Giảm 100K khi đặt combo 2 dịch vụ trở lên', discount: 100000, discountType: 'fixed', minSpend: 800000, startDate: '2026-11-01', endDate: '2026-11-30', usageLimit: 30, usedCount: 12, status: 'active' },
    { id: 'P05', code: 'REFERFRIEND', name: 'Giới thiệu bạn bè', description: 'Cả 2 người được giảm 10% khi giới thiệu bạn mới', discount: 10, discountType: 'percent', minSpend: 150000, maxDiscount: 100000, startDate: '2026-10-01', endDate: '2026-12-31', usageLimit: null, usedCount: 34, status: 'active' },
  ],

  // ─── SẢN PHẨM / KHO ──────────────────────────────
  inventory: [
    { id: 'INV01', name: 'Thuốc nhuộm L\'Oréal Majirel (tuýp)', category: 'Thuốc nhuộm', brand: 'L\'Oréal', unit: 'tuýp', costPrice: 180000, sellPrice: 0, stock: 45, minStock: 10, status: 'in-stock' },
    { id: 'INV02', name: 'Thuốc tẩy Schwarzkopf BlondMe', category: 'Thuốc tẩy', brand: 'Schwarzkopf', unit: 'hộp', costPrice: 250000, sellPrice: 0, stock: 12, minStock: 5, status: 'in-stock' },
    { id: 'INV03', name: 'Kem uốn Wella Creatine+', category: 'Thuốc uốn', brand: 'Wella', unit: 'bộ', costPrice: 200000, sellPrice: 0, stock: 8, minStock: 5, status: 'in-stock' },
    { id: 'INV04', name: 'Dầu gội Moroccanoil 1000ml', category: 'Chăm sóc', brand: 'Moroccanoil', unit: 'chai', costPrice: 850000, sellPrice: 1200000, stock: 6, minStock: 3, status: 'in-stock' },
    { id: 'INV05', name: 'Dầu xả Kérastase Nutritive 1000ml', category: 'Chăm sóc', brand: 'Kérastase', unit: 'chai', costPrice: 950000, sellPrice: 1350000, stock: 4, minStock: 3, status: 'in-stock' },
    { id: 'INV06', name: 'Tinh dầu dưỡng tóc Olaplex No.7', category: 'Dưỡng tóc', brand: 'Olaplex', unit: 'chai', costPrice: 650000, sellPrice: 900000, stock: 3, minStock: 5, status: 'low-stock' },
    { id: 'INV07', name: 'Oxy 6% L\'Oréal 1000ml', category: 'Phụ kiện nhuộm', brand: 'L\'Oréal', unit: 'chai', costPrice: 120000, sellPrice: 0, stock: 15, minStock: 5, status: 'in-stock' },
    { id: 'INV08', name: 'Thuốc duỗi Keratin Brazil Cacau', category: 'Thuốc duỗi', brand: 'Brazil Cacau', unit: 'bộ', costPrice: 350000, sellPrice: 0, stock: 2, minStock: 3, status: 'low-stock' },
    { id: 'INV09', name: 'Mặt nạ ủ tóc Kérastase Chronologiste', category: 'Chăm sóc', brand: 'Kérastase', unit: 'hũ', costPrice: 1200000, sellPrice: 1800000, stock: 5, minStock: 2, status: 'in-stock' },
    { id: 'INV10', name: 'Keo xịt tóc Schwarzkopf OSiS+', category: 'Tạo kiểu', brand: 'Schwarzkopf', unit: 'chai', costPrice: 180000, sellPrice: 280000, stock: 10, minStock: 3, status: 'in-stock' },
  ],
};

// ─── HELPER FUNCTIONS ─────────────────────────────
const MockDB = {
  // Lấy user theo ID
  getUser(id) { return MOCK.users.find(u => u.id === id); },

  // Lấy danh sách theo role
  getUsersByRole(role) { return MOCK.users.filter(u => u.role === role); },

  // Lấy service theo ID
  getService(id) { return MOCK.services.find(s => s.id === id); },

  // Lấy services theo category
  getServicesByCategory(cat) { return MOCK.services.filter(s => s.category === cat); },

  // Lấy danh sách categories
  getCategories() { return [...new Set(MOCK.services.map(s => s.category))]; },

  // Lấy appointments của 1 stylist theo ngày
  getStylistAppointments(stylistId, date) {
    return MOCK.appointments.filter(a => a.stylistId === stylistId && a.date === date && a.status !== 'cancelled');
  },

  // Lấy appointments của 1 customer
  getCustomerAppointments(customerId) {
    return MOCK.appointments.filter(a => a.customerId === customerId).sort((a, b) => b.date.localeCompare(a.date));
  },

  // Kiểm tra thợ có rảnh ở khung giờ không
  isStylistAvailable(stylistId, date, startTime, durationMinutes) {
    const appts = this.getStylistAppointments(stylistId, date);
    const reqStart = this.timeToMinutes(startTime);
    const reqEnd = reqStart + durationMinutes;
    return !appts.some(a => {
      const aStart = this.timeToMinutes(a.time);
      const aEnd = this.timeToMinutes(a.endTime);
      return reqStart < aEnd && reqEnd > aStart;
    });
  },

  // Lấy tất cả thợ rảnh ở khung giờ
  getAvailableStylists(date, startTime, durationMinutes) {
    const stylists = this.getUsersByRole('stylist');
    return stylists.filter(s => this.isStylistAvailable(s.id, date, startTime, durationMinutes));
  },

  // Lấy các khung giờ trống cho 1 thợ trong ngày
  getAvailableSlots(stylistId, date, durationMinutes) {
    const slots = [];
    const openMin = this.timeToMinutes(MOCK.salon.openTime);
    const closeMin = this.timeToMinutes(MOCK.salon.closeTime);
    const step = MOCK.salon.timeSlotMinutes;
    for (let t = openMin; t + durationMinutes <= closeMin; t += step) {
      const timeStr = this.minutesToTime(t);
      if (this.isStylistAvailable(stylistId, date, timeStr, durationMinutes)) {
        slots.push(timeStr);
      }
    }
    return slots;
  },

  // Chấm công tháng
  getMonthlyAttendance(stylistId, month) {
    return MOCK.attendance.filter(a => a.stylistId === stylistId && a.date.startsWith(month));
  },

  // Lương tháng
  getPayroll(stylistId, month) {
    return MOCK.payroll.find(p => p.stylistId === stylistId && p.month === month);
  },

  // Doanh thu khoảng thời gian
  getRevenueRange(startDate, endDate) {
    return MOCK.dailyRevenue.filter(r => r.date >= startDate && r.date <= endDate);
  },

  // Tổng doanh thu
  getTotalRevenue(startDate, endDate) {
    const data = this.getRevenueRange(startDate, endDate);
    return data.reduce((sum, d) => sum + d.revenue, 0);
  },

  // Format tiền VND
  formatCurrency(amount) {
    if (amount == null) return '—';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  },

  // Format ngày
  formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });
  },

  formatDateShort(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
  },

  // Helper: time string to minutes
  timeToMinutes(t) {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  },

  // Helper: minutes to time string
  minutesToTime(m) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    return `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
  },

  // Trạng thái tiếng Việt
  getStatusLabel(status) {
    const map = {
      'confirmed': 'Đã xác nhận',
      'in-progress': 'Đang thực hiện',
      'completed': 'Hoàn thành',
      'cancelled': 'Đã hủy',
      'pending': 'Chờ xác nhận',
    };
    return map[status] || status;
  },

  getStatusClass(status) {
    const map = {
      'confirmed': 'status-confirmed',
      'in-progress': 'status-progress',
      'completed': 'status-completed',
      'cancelled': 'status-cancelled',
      'pending': 'status-pending',
    };
    return map[status] || '';
  },

  getPaymentLabel(status) {
    const map = {
      'paid': 'Đã thanh toán',
      'deposit': 'Đã đặt cọc',
      'pending': 'Chưa thanh toán',
    };
    return map[status] || status;
  },

  getMemberTierClass(tier) {
    const map = { 'Đồng': 'tier-bronze', 'Bạc': 'tier-silver', 'Vàng': 'tier-gold', 'VIP': 'tier-vip' };
    return map[tier] || '';
  },
};

