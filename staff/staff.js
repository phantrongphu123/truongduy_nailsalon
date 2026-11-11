/**
 * ====================================================
 * STAFF / STYLIST PORTAL MODULE
 * Hỗ trợ quản lý ca làm, hồ sơ khách, lương & portfolio
 * ====================================================
 */

const STAFF_DATE = '2026-11-11'; // Ngày mặc định theo hệ thống mock

const StaffDB = {
  // ─── LOCAL STORAGE INITIALIZERS ──────────────────
  init() {
    // 1. Appointments
    if (!localStorage.getItem('salon_appointments')) {
      localStorage.setItem('salon_appointments', JSON.stringify(MOCK.appointments));
    }
    // 2. Attendance
    if (!localStorage.getItem('salon_attendance')) {
      localStorage.setItem('salon_attendance', JSON.stringify(MOCK.attendance));
    }
    // 3. Customer hair profiles
    if (!localStorage.getItem('salon_hair_profiles')) {
      const initialHairProfiles = {
        'U201': {
          hairType: 'Tóc tơ mảnh, mật độ vừa',
          scalpType: 'Da đầu dầu nhẹ, nhạy cảm',
          damageLevel: 'Cấp độ 2 (Khô nhẹ ở phần đuôi tóc do sấy nhiệt)',
          hairLength: 'Dài ngang lưng, tỉa layer nhẹ',
          colorHistory: 'Đã nhuộm L\'Oréal Majirel 6.11 (Nâu rêu trầm) + Oxy 6% (Tỷ lệ 1:1.5). Giữ màu tốt 8 tuần.',
          permFormula: 'Chưa uốn hóa chất trong 6 tháng gần nhất.',
          treatmentHistory: 'Phục hồi Kérastase Nutritive 1 lần/tháng.',
          notes: [
            { date: '2026-11-01', author: 'Nguyễn Minh Khoa', text: 'Khách thích cắt layer đuôi nhẹ bay, gội nhẹ tay vùng da đầu nhạy cảm.' },
            { date: '2026-10-15', author: 'Trần Thị Bảo Ngọc', text: 'Màu nhuộm lên chuẩn tone nâu rêu, lần tới dặm chân bằng tone 6.11.' }
          ]
        },
        'U202': {
          hairType: 'Tóc sợi trung bình, sợi thẳng tự nhiên',
          scalpType: 'Da đầu thường, khỏe',
          damageLevel: 'Cấp độ 3 (Đã tẩy highlight 1 lần cách đây 3 tháng)',
          hairLength: 'Ngang vai (Bob dài)',
          colorHistory: 'Highlight khói Wella Blondor + toner 9/16.',
          permFormula: 'Uốn Setting trục 22mm lọn sóng lơi Hàn Quốc, nhiệt 120°C 15 phút, dập số 2 10 phút.',
          treatmentHistory: 'Mặt nạ Olaplex No.3 tại nhà.',
          notes: [
            { date: '2026-11-05', author: 'Lê Văn Phúc', text: 'Tóc giữ lọn uốn rất tốt, dặn khách sấy cuộn ngón tay về sau.' }
          ]
        },
        'U203': {
          hairType: 'Tóc nam sợi to, rễ tre, hơi cứng',
          scalpType: 'Da đầu dầu, hay đổ mồ hôi',
          damageLevel: 'Cấp độ 1 (Tóc khỏe, nguyên bản)',
          hairLength: 'Ngắn (Two-block undercut)',
          colorHistory: 'Chưa nhuộm bao giờ.',
          permFormula: 'Ép side mai và gáy 10 phút thuốc Wella nhẹ để chống bung xù.',
          treatmentHistory: 'Gội thảo dược dưỡng sinh bạc hà.',
          notes: [
            { date: '2026-11-08', author: 'Nguyễn Minh Khoa', text: 'Hai bên mai chỉa nhiều, cần ủi sát fade mid và ép side để vào nếp.' }
          ]
        },
        'U204': {
          hairType: 'Tóc dày, mềm, độ đàn hồi cao',
          scalpType: 'Da đầu khô, nhạy cảm với hóa chất tẩy',
          damageLevel: 'Cấp độ 4 (Tẩy full đầu level 9, nâng tone 2 lần)',
          hairLength: 'Dài qua ngực (V-cut)',
          colorHistory: 'Balayage Khói Bạch Kim (Smoky Ash Balayage). Công thức: Tẩy BlondMe + Oxy 20vol + Toner Illumina 10/69.',
          permFormula: 'Chống chỉ định uốn nhiệt do tóc đã tẩy level cao.',
          treatmentHistory: 'Liệu trình Collagen Nano + Kérastase Chronologiste phục hồi lõi tóc 2 tuần/lần.',
          notes: [
            { date: '2026-11-11', author: 'Trần Thị Bảo Ngọc', text: 'Khách VIP. Thích massage cổ vai gáy sâu. Khi sấy dùng xịt chống nhiệt Moroccanoil.' },
            { date: '2026-11-03', author: 'Trần Thị Bảo Ngọc', text: 'Tóc sau phục hồi độ ẩm tăng 40%, duy trì hấp nano định kỳ.' }
          ]
        },
        'U205': {
          hairType: 'Tóc nam sợi mảnh, mật độ thưa phần đỉnh đầu',
          scalpType: 'Da đầu thường',
          damageLevel: 'Cấp độ 1 (Khỏe)',
          hairLength: 'Ngắn (Side part 7/3)',
          colorHistory: 'Nhuộm Nâu hạt dẻ tự nhiên (Majirel 5.0).',
          permFormula: 'Uốn phồng chân tóc (Root perm) tạo độ bồng bềnh đỉnh đầu.',
          treatmentHistory: 'Dầu gội chống rụng tóc Kérastase Genesis.',
          notes: [
            { date: '2026-11-09', author: 'Trần Thị Bảo Ngọc', text: 'Khách thích rẽ ngôi 7/3 chuẩn Hàn Quốc, không vuốt sáp quá cứng.' }
          ]
        },
        'U206': {
          hairType: 'Tóc sợi vừa, mật độ dày',
          scalpType: 'Da đầu khỏe mạnh',
          damageLevel: 'Cấp độ 2 (Hơi khô ráp ngọn tóc)',
          hairLength: 'Ngang lưng (Layer tầng cao)',
          colorHistory: 'Phủ bạc tự nhiên Majirel 4.0 kết hợp ánh nâu chocolate.',
          permFormula: 'Uốn cúp chữ C ngọn tóc trục 26mm.',
          treatmentHistory: 'Ủ hấp dầu Argan hữu cơ.',
          notes: [
            { date: '2026-11-07', author: 'Phạm Thanh Hương', text: 'Khách thích kiểu nhẹ nhàng thanh lịch, tư vấn dưỡng serum Argan sau khi gội.' }
          ]
        }
      };
      localStorage.setItem('salon_hair_profiles', JSON.stringify(initialHairProfiles));
    }

    // 4. Portfolios & Showcase
    if (!localStorage.getItem('salon_portfolios')) {
      const initialPortfolios = [
        {
          id: 'PF01',
          stylistId: 'U101',
          title: 'Cắt Two Block & Uốn Texture Hàn Quốc',
          category: 'Cắt & Tạo kiểu Nam',
          beforeImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500',
          afterImg: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500',
          technique: 'Fade Mid Taper + Cắt Layer phồng + Uốn xoăn Texture trục nhỏ dập phồng đỉnh đầu.',
          productsUsed: 'Sáp Pomade Reuzel Fiber + Gôm Schwarzkopf OSiS+',
          customerName: 'Hoàng Anh Tuấn',
          date: '2026-11-09',
          likes: 48
        },
        {
          id: 'PF02',
          stylistId: 'U101',
          title: 'Mullet Hiện Đại Layer Kết Hợp Ép Side',
          category: 'Cắt & Tạo kiểu Nam',
          beforeImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500',
          afterImg: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500',
          technique: 'Cắt kéo texture tự nhiên, fade gọn 2 bên tai, giữ đuôi mullet 8cm, ép side Wella.',
          productsUsed: 'Moroccanoil Molding Cream',
          customerName: 'Lê Minh Khoa',
          date: '2026-11-05',
          likes: 62
        },
        {
          id: 'PF03',
          stylistId: 'U102',
          title: 'Balayage Khói Tro Ánh Bạch Kim (Smoky Balayage)',
          category: 'Nhuộm & Highlight',
          beforeImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500',
          afterImg: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500',
          technique: 'Tẩy kỹ thuật Balayage Freehand nâng 2 cấp, đan xen baby-lights, toner xám lạnh L\'Oréal Dia Light 9.02.',
          productsUsed: 'Schwarzkopf BlondMe + Olaplex Bond Protector',
          customerName: 'Phạm Hồng Nhung (VIP)',
          date: '2026-11-03',
          likes: 115
        },
        {
          id: 'PF04',
          stylistId: 'U102',
          title: 'Nhuộm Nâu Tây Hạt Dẻ Ánh Rêu Tự Nhiên',
          category: 'Nhuộm & Highlight',
          beforeImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500',
          afterImg: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500',
          technique: 'Cân bằng nền tóc loang màu, nhuộm một đập Majirel 6.11 + 7.1, xả khóa màu axit nhẹ.',
          productsUsed: 'L\'Oréal Professionnel Metal Detox',
          customerName: 'Nguyễn Thảo Linh',
          date: '2026-11-01',
          likes: 84
        },
        {
          id: 'PF05',
          stylistId: 'U103',
          title: 'Uốn Sóng Lơi Hàn Quốc Bồng Bềnh',
          category: 'Uốn & Duỗi',
          beforeImg: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500',
          afterImg: 'https://images.unsplash.com/photo-1605497746444-ac9da58d7fc0?w=500',
          technique: 'Uốn Setting trục 25mm, kỹ thuật quấn xoắn ốc ngược chiều, nhiệt độ bảo toàn protein 115°C.',
          productsUsed: 'Wella Creatine+ Perm & Dầu dưỡng Kérastase Elixir',
          customerName: 'Trần Bảo Châu',
          date: '2026-11-05',
          likes: 73
        },
        {
          id: 'PF06',
          stylistId: 'U104',
          title: 'Liệu Trình Phục Hồi Tóc Nát 5 Bước Chuyên Sâu',
          category: 'Phục hồi & Chăm sóc',
          beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500',
          afterImg: 'https://images.unsplash.com/photo-1527799851257-6592aae86836?w=500',
          technique: 'Bù nước Hyaluronic, truyền Keratin thủy phân vào tủy tóc, kích nhiệt nano hồng ngoại.',
          productsUsed: 'Liệu trình Kérastase Fusio-Dose + Chronologiste',
          customerName: 'Võ Thanh Mai',
          date: '2026-11-07',
          likes: 56
        }
      ];
      localStorage.setItem('salon_portfolios', JSON.stringify(initialPortfolios));
    }
  },

  // ─── STYLIST STATE ────────────────────────────────
  getCurrentStylistId() {
    let id = sessionStorage.getItem('currentUser');
    if (!id || !id.startsWith('U10')) {
      id = localStorage.getItem('salon_current_stylist') || 'U101';
      sessionStorage.setItem('currentUser', id);
      sessionStorage.setItem('currentRole', 'stylist');
    }
    return id;
  },

  setCurrentStylistId(stylistId) {
    sessionStorage.setItem('currentUser', stylistId);
    sessionStorage.setItem('currentRole', 'stylist');
    localStorage.setItem('salon_current_stylist', stylistId);
  },

  getCurrentStylist() {
    const id = this.getCurrentStylistId();
    return MOCK.users.find(u => u.id === id) || MOCK.users.find(u => u.role === 'stylist');
  },

  getAllStylists() {
    return MOCK.users.filter(u => u.role === 'stylist');
  },

  // ─── APPOINTMENT MANAGEMENT ───────────────────────
  getAppointments() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem('salon_appointments')) || MOCK.appointments;
    } catch (e) {
      return MOCK.appointments;
    }
  },

  saveAppointments(list) {
    localStorage.setItem('salon_appointments', JSON.stringify(list));
  },

  getStylistAppointments(stylistId, date = null) {
    const list = this.getAppointments();
    return list.filter(a => {
      const matchStylist = a.stylistId === stylistId;
      const matchDate = date ? a.date === date : true;
      return matchStylist && matchDate;
    }).sort((a, b) => a.time.localeCompare(b.time));
  },

  updateAppointmentStatus(apptId, newStatus) {
    const list = this.getAppointments();
    const appt = list.find(a => a.id === apptId);
    if (!appt) return null;

    appt.status = newStatus;
    if (newStatus === 'completed') {
      appt.paymentStatus = 'paid';
    }
    this.saveAppointments(list);
    return appt;
  },

  // ─── ATTENDANCE MANAGEMENT ────────────────────────
  getAttendanceList() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem('salon_attendance')) || MOCK.attendance;
    } catch (e) {
      return MOCK.attendance;
    }
  },

  saveAttendanceList(list) {
    localStorage.setItem('salon_attendance', JSON.stringify(list));
  },

  getTodayAttendance(stylistId) {
    const list = this.getAttendanceList();
    return list.find(a => a.stylistId === stylistId && a.date === STAFF_DATE) || {
      stylistId,
      date: STAFF_DATE,
      checkIn: null,
      checkOut: null,
      status: 'day-off',
      hoursWorked: 0
    };
  },

  checkInToday(stylistId) {
    const list = this.getAttendanceList();
    let att = list.find(a => a.stylistId === stylistId && a.date === STAFF_DATE);
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const checkInTime = timeStr > '08:30' ? timeStr : '08:28';

    if (att) {
      att.checkIn = checkInTime;
      att.status = 'working';
      att.checkOut = null;
    } else {
      att = {
        stylistId,
        date: STAFF_DATE,
        checkIn: checkInTime,
        checkOut: null,
        status: 'working',
        hoursWorked: null
      };
      list.push(att);
    }
    this.saveAttendanceList(list);
    return att;
  },

  checkOutToday(stylistId) {
    const list = this.getAttendanceList();
    const att = list.find(a => a.stylistId === stylistId && a.date === STAFF_DATE);
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const checkOutTime = timeStr < '20:00' ? '20:00' : timeStr;

    if (att && att.checkIn) {
      att.checkOut = checkOutTime;
      att.status = 'on-time';
      const inMin = MockDB.timeToMinutes(att.checkIn);
      const outMin = MockDB.timeToMinutes(checkOutTime);
      att.hoursWorked = parseFloat(((outMin - inMin) / 60).toFixed(1));
    }
    this.saveAttendanceList(list);
    return att;
  },

  // ─── HAIR PROFILE & NOTES ─────────────────────────
  getHairProfiles() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem('salon_hair_profiles')) || {};
    } catch (e) {
      return {};
    }
  },

  getCustomerHairProfile(customerId) {
    const profiles = this.getHairProfiles();
    return profiles[customerId] || {
      hairType: 'Tóc thường, mật độ tự nhiên',
      scalpType: 'Da đầu thường',
      damageLevel: 'Cấp độ 1 (Khỏe mạnh)',
      hairLength: 'Trung bình',
      colorHistory: 'Chưa có dữ liệu màu',
      permFormula: 'Chưa có dữ liệu uốn',
      treatmentHistory: 'Dưỡng cơ bản',
      notes: []
    };
  },

  saveCustomerHairProfile(customerId, updatedData) {
    const profiles = this.getHairProfiles();
    profiles[customerId] = { ...profiles[customerId], ...updatedData };
    localStorage.setItem('salon_hair_profiles', JSON.stringify(profiles));
    return profiles[customerId];
  },

  addCustomerTechnicianNote(customerId, noteText, authorName = null) {
    const profiles = this.getHairProfiles();
    const profile = this.getCustomerHairProfile(customerId);
    const stylist = this.getCurrentStylist();
    const author = authorName || stylist.name;

    if (!profile.notes) profile.notes = [];
    profile.notes.unshift({
      date: STAFF_DATE,
      author: author,
      text: noteText
    });
    profiles[customerId] = profile;
    localStorage.setItem('salon_hair_profiles', JSON.stringify(profiles));
    return profile;
  },

  // ─── PORTFOLIO MANAGEMENT ─────────────────────────
  getPortfolios() {
    this.init();
    try {
      return JSON.parse(localStorage.getItem('salon_portfolios')) || [];
    } catch (e) {
      return [];
    }
  },

  getPortfoliosByStylist(stylistId) {
    const list = this.getPortfolios();
    return list.filter(p => p.stylistId === stylistId);
  },

  addPortfolioItem(stylistId, item) {
    const list = this.getPortfolios();
    const newItem = {
      id: 'PF' + String(Date.now()).slice(-4),
      stylistId,
      likes: 1,
      date: STAFF_DATE,
      ...item
    };
    list.unshift(newItem);
    localStorage.setItem('salon_portfolios', JSON.stringify(list));
    return newItem;
  },

  // ─── REVIEWS ──────────────────────────────────────
  getStylistReviews(stylistId) {
    const appts = this.getAppointments().filter(a => a.stylistId === stylistId && a.rating);
    return appts.map(a => {
      const customer = MockDB.getUser(a.customerId) || { name: 'Khách hàng', avatar: 'https://i.pravatar.cc/150' };
      const serviceNames = (a.serviceIds || []).map(sid => MockDB.getService(sid)?.name).filter(Boolean).join(', ');
      return {
        id: a.id,
        customerName: customer.name,
        customerAvatar: customer.avatar,
        date: a.date,
        rating: a.rating,
        review: a.review || 'Dịch vụ chu đáo, tay nghề rất khéo léo và tận tâm!',
        services: serviceNames
      };
    });
  },

  // ─── PAYROLL DETAILS ──────────────────────────────
  getStylistPayrollData(stylistId, month = '2026-11') {
    const stylist = MockDB.getUser(stylistId);
    const mockPayroll = MOCK.payroll.find(p => p.stylistId === stylistId && p.month === month);

    if (month === '2026-10') {
      return {
        ...mockPayroll,
        isClosed: true,
        monthName: 'Tháng 10/2026 (Đã chốt lương)',
        bills: this.getStylistCompletedBillsForMonth(stylistId, '2026-10')
      };
    }

    // Tháng 11: Tính động từ các cuộc hẹn đã hoàn thành + bảng kê
    const completedAppts = this.getAppointments().filter(a => a.stylistId === stylistId && a.date.startsWith('2026-11') && a.status === 'completed');
    const totalRevenue = completedAppts.reduce((sum, a) => sum + (a.totalAmount || 0), 0);
    const baseSalary = mockPayroll ? mockPayroll.baseSalary : 8000000;
    const commissionRate = mockPayroll ? mockPayroll.commissionRate : 0.15;
    const commissionEarned = Math.round(totalRevenue * commissionRate) || (mockPayroll ? mockPayroll.commissionEarned : 1200000);
    const bonus = mockPayroll ? mockPayroll.bonus : 0;
    const deductions = mockPayroll ? mockPayroll.deductions : 0;
    const tip = mockPayroll ? mockPayroll.tip : 120000;
    const netSalary = baseSalary + commissionEarned + bonus + tip - deductions;

    return {
      stylistId,
      month: '2026-11',
      monthName: 'Tháng 11/2026 (Đang tích lũy)',
      isClosed: false,
      baseSalary,
      commissionRate,
      commissionEarned,
      bonus,
      deductions,
      tip,
      totalCustomers: completedAppts.length + 15,
      totalServices: completedAppts.length + 18,
      netSalary,
      totalRevenue: totalRevenue > 0 ? totalRevenue : Math.round(commissionEarned / commissionRate),
      bills: this.getStylistCompletedBillsForMonth(stylistId, '2026-11')
    };
  },

  getStylistCompletedBillsForMonth(stylistId, month) {
    const appts = this.getAppointments().filter(a => a.stylistId === stylistId && a.date.startsWith(month) && a.status === 'completed');
    const commissionRate = stylistId === 'U103' || stylistId === 'U104' ? 0.12 : 0.15;

    return appts.map(a => {
      const customer = MockDB.getUser(a.customerId) || { name: 'Khách hàng' };
      const services = (a.serviceIds || []).map(sid => MockDB.getService(sid)?.name).filter(Boolean).join(', ');
      const amount = a.totalAmount || 0;
      const commission = Math.round(amount * commissionRate);
      return {
        id: a.id,
        date: a.date,
        time: a.time,
        customerName: customer.name,
        services,
        amount,
        commissionRate: commissionRate * 100,
        commission
      };
    });
  }
};

// ─── UI COMPONENT GENERATOR & WIDGETS ──────────────
const StaffUI = {
  renderSidebar(activePage) {
    const stylist = StaffDB.getCurrentStylist();
    const navItems = [
      { id: 'dashboard', href: 'dashboard.html', icon: 'fas fa-chart-pie', label: 'Tổng Quan' },
      { id: 'schedule', href: 'schedule.html', icon: 'fas fa-calendar-alt', label: 'Lịch Làm & Ca Trực' },
      { id: 'customer', href: 'customer-detail.html', icon: 'fas fa-id-card-clip', label: 'Hồ Sơ Khách Hàng' },
      { id: 'payroll', href: 'payroll.html', icon: 'fas fa-wallet', label: 'Lương & Hoa Hồng' },
      { id: 'portfolio', href: 'portfolio.html', icon: 'fas fa-camera-retro', label: 'Tác Phẩm & Tay Nghề' }
    ];

    return `
      <div class="sidebar-header">
        <a href="dashboard.html" class="sidebar-logo">
          VÕ THUẬN
          <span>Hair Stylist Portal</span>
        </a>
      </div>
      <div class="sidebar-nav">
        <div class="nav-section-title">CHUYÊN MÔN & CA LÀM</div>
        ${navItems.map(item => `
          <a href="${item.href}" class="${activePage === item.id ? 'active' : ''}">
            <i class="${item.icon}"></i>
            <span>${item.label}</span>
          </a>
        `).join('')}

        <div class="nav-section-title">HỆ THỐNG</div>
        <a href="../index.html">
          <i class="fas fa-store"></i>
          <span>Trang Chủ Salon</span>
        </a>
        <a href="../login.html">
          <i class="fas fa-sign-out-alt"></i>
          <span>Đăng Xuất</span>
        </a>
      </div>
      <div class="sidebar-footer">
        <div class="sidebar-user">
          <img src="${stylist.avatar}" alt="${stylist.name}" id="sidebarUserAvatar">
          <div class="sidebar-user-info">
            <h4 id="sidebarUserName">${stylist.name}</h4>
            <p id="sidebarUserRole">${stylist.specialty}</p>
          </div>
        </div>
      </div>
    `;
  },

  renderTopbar(pageTitle, breadcrumb = 'Kỹ Thuật Viên') {
    const currentId = StaffDB.getCurrentStylistId();
    const allStylists = StaffDB.getAllStylists();
    const todayAtt = StaffDB.getTodayAttendance(currentId);
    const isWorking = todayAtt.status === 'working';

    return `
      <div class="top-bar-left">
        <button class="menu-toggle"><i class="fas fa-bars"></i></button>
        <div>
          <h1>${pageTitle}</h1>
          <div class="breadcrumb"><a href="dashboard.html">Stylist Portal</a> / ${breadcrumb}</div>
        </div>
      </div>
      <div class="top-bar-right">
        <!-- Stylist Switcher -->
        <div class="stylist-switcher">
          <label for="topStylistSelect"><i class="fas fa-user-gear"></i> Đổi Thợ:</label>
          <select id="topStylistSelect" onchange="StaffUI.handleStylistChange(this.value)">
            ${allStylists.map(s => `
              <option value="${s.id}" ${s.id === currentId ? 'selected' : ''}>
                ${s.name} (${s.specialty})
              </option>
            `).join('')}
          </select>
        </div>

        <!-- Attendance Quick Indicator -->
        <div class="badge ${isWorking ? 'badge-working' : 'badge-on-time'}" style="padding: 6px 14px; font-size: 0.82rem;" title="Trạng thái chấm công hôm nay">
          <i class="fas fa-circle" style="font-size: 0.6rem; color: ${isWorking ? 'var(--blue)' : 'var(--green)'};"></i>
          <span>${isWorking ? 'Đang làm việc' : 'Đã check-in'}</span>
        </div>

        <!-- Notification bell -->
        <button class="top-bar-btn" title="Thông báo mới" onclick="Toast.show('Bạn có 3 lịch hẹn hôm nay cần thực hiện!', 'info')">
          <i class="fas fa-bell"></i>
          <span class="badge-dot"></span>
        </button>

        <a href="portfolio.html" class="top-bar-btn" title="Trang hồ sơ cá nhân">
          <i class="fas fa-scissors"></i>
        </a>
      </div>
    `;
  },

  handleStylistChange(stylistId) {
    StaffDB.setCurrentStylistId(stylistId);
    Toast.show(`Đã chuyển sang tài khoản thợ: ${MockDB.getUser(stylistId).name}`, 'success');
    setTimeout(() => {
      window.location.reload();
    }, 400);
  },

  // Setup Global Topbar and Sidebar on DOMContentLoaded
  setupLayout(activePage, pageTitle, breadcrumb) {
    StaffDB.init();

    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.innerHTML = this.renderSidebar(activePage);
    }

    const topbar = document.querySelector('.top-bar');
    if (topbar) {
      topbar.innerHTML = this.renderTopbar(pageTitle, breadcrumb);
    }

    initSidebar();
  }
};

// ─── MODAL HELPER: CUSTOMER HAIR PROFILE ──────────
function openCustomerHairModal(customerId) {
  let modalEl = document.getElementById('customerDetailModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'customerDetailModal';
    modalEl.className = 'modal-overlay';
    document.body.appendChild(modalEl);
  }

  const customer = MockDB.getUser(customerId) || { name: 'Khách hàng', phone: '', memberTier: 'Đồng', avatar: 'https://i.pravatar.cc/150' };
  const profile = StaffDB.getCustomerHairProfile(customerId);
  const tierClass = MockDB.getMemberTierClass(customer.memberTier);
  const appts = MockDB.getCustomerAppointments(customerId);

  modalEl.innerHTML = `
    <div class="modal" style="max-width: 720px;">
      <div class="modal-header">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${customer.avatar}" style="width: 44px; height: 44px; border-radius: 50%; border: 2px solid var(--gold); object-fit: cover;">
          <div>
            <h2 style="font-size: 1.15rem; margin-bottom: 2px;">${customer.name}</h2>
            <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 8px;">
              <span><i class="fas fa-phone-alt"></i> ${customer.phone}</span>
              <span class="tier-badge ${tierClass}">${customer.memberTier}</span>
              <span><i class="fas fa-coins" style="color: var(--gold);"></i> ${customer.points || 0} điểm</span>
            </div>
          </div>
        </div>
        <button class="modal-close" onclick="closeModal('customerDetailModal')">&times;</button>
      </div>

      <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
        <!-- Hair Attributes Summary -->
        <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; letter-spacing: 0.5px;">
          <i class="fas fa-wand-magic-sparkles" style="color: var(--gold);"></i> Thông Số & Tình Trạng Tóc Kỹ Thuật
        </h4>
        <div class="hair-metric-grid" style="margin-bottom: 20px;">
          <div class="hair-metric-box">
            <div class="hair-metric-label">Chất tóc</div>
            <div class="hair-metric-val">${profile.hairType}</div>
          </div>
          <div class="hair-metric-box">
            <div class="hair-metric-label">Da đầu</div>
            <div class="hair-metric-val">${profile.scalpType}</div>
          </div>
          <div class="hair-metric-box">
            <div class="hair-metric-label">Độ hư tổn</div>
            <div class="hair-metric-val">${profile.damageLevel}</div>
          </div>
          <div class="hair-metric-box">
            <div class="hair-metric-label">Dáng & Chiều dài</div>
            <div class="hair-metric-val">${profile.hairLength}</div>
          </div>
        </div>

        <!-- Formulas -->
        <div class="formula-card">
          <div class="formula-title"><i class="fas fa-palette" style="color: #D97706;"></i> Màu nhuộm / Nền tóc đã làm:</div>
          <div class="formula-code">${profile.colorHistory}</div>
        </div>

        <div class="formula-card" style="border-color: #3B82F6;">
          <div class="formula-title" style="color: #2563EB;"><i class="fas fa-wind"></i> Công thức Uốn / Duỗi đã dùng:</div>
          <div class="formula-code" style="color: #1D4ED8; background: #DBEAFE;">${profile.permFormula}</div>
        </div>

        <!-- Technician Notes -->
        <div style="margin-top: 20px;">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px; letter-spacing: 0.5px;">
            <i class="fas fa-clipboard-user" style="color: var(--gold);"></i> Ghi Chú Kỹ Thuật Viên Cho Lần Tới
          </h4>
          <div id="modalNotesList" style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
            ${(profile.notes || []).map(n => `
              <div style="background: var(--bg-cream); border-left: 3px solid var(--gold); padding: 10px 14px; border-radius: 4px; font-size: 0.85rem;">
                <div style="display: flex; justify-content: space-between; color: var(--text-muted); font-size: 0.75rem; margin-bottom: 4px;">
                  <strong><i class="fas fa-user-pen"></i> ${n.author}</strong>
                  <span><i class="fas fa-calendar-day"></i> ${n.date}</span>
                </div>
                <div>${n.text}</div>
              </div>
            `).join('')}
          </div>

          <!-- Add Note Form -->
          <div class="form-group" style="margin-bottom: 0;">
            <div style="display: flex; gap: 8px;">
              <input type="text" id="modalNewNoteInput" class="form-input" placeholder="Nhập thêm ghi chú kỹ thuật mới cho khách..." />
              <button class="btn btn-primary" onclick="submitModalCustomerNote('${customerId}')">
                <i class="fas fa-save"></i> Lưu
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <a href="customer-detail.html?id=${customerId}" class="btn btn-outline btn-sm">
          <i class="fas fa-external-link-alt"></i> Xem Trang Chi Tiết
        </a>
        <button class="btn btn-secondary btn-sm" onclick="closeModal('customerDetailModal')">Đóng</button>
      </div>
    </div>
  `;

  openModal('customerDetailModal');
}

function submitModalCustomerNote(customerId) {
  const input = document.getElementById('modalNewNoteInput');
  if (!input || !input.value.trim()) {
    Toast.show('Vui lòng nhập nội dung ghi chú!', 'warning');
    return;
  }
  StaffDB.addCustomerTechnicianNote(customerId, input.value.trim());
  Toast.show('Đã lưu ghi chú kỹ thuật viên thành công!', 'success');
  openCustomerHairModal(customerId); // Re-render modal content
}
