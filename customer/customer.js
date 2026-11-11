/**
 * CUSTOMER PORTAL LOGIC
 * Võ Thuận Hair Salon
 */

// ─── LOCAL STORAGE SYNCHRONIZATION ────────────────────
const SalonStorage = {
  KEY: 'salon_custom_appointments',
  REVIEWS_KEY: 'salon_customer_reviews',

  getCustomAppointments() {
    try {
      const data = localStorage.getItem(this.KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveAppointment(appt) {
    try {
      const existing = this.getCustomAppointments();
      existing.unshift(appt);
      localStorage.setItem(this.KEY, JSON.stringify(existing));
    } catch (e) {
      console.error(e);
    }
  },

  updateAppointment(apptId, updates) {
    try {
      const list = this.getCustomAppointments();
      const idx = list.findIndex(a => a.id === apptId);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...updates };
        localStorage.setItem(this.KEY, JSON.stringify(list));
      }
      // Also update MOCK.appointments
      const mockIdx = MOCK.appointments.findIndex(a => a.id === apptId);
      if (mockIdx !== -1) {
        MOCK.appointments[mockIdx] = { ...MOCK.appointments[mockIdx], ...updates };
      }
    } catch (e) {
      console.error(e);
    }
  },

  initMockSync() {
    const custom = this.getCustomAppointments();
    custom.forEach(ca => {
      if (!MOCK.appointments.some(a => a.id === ca.id)) {
        MOCK.appointments.unshift(ca);
      }
    });
  }
};

// Initialize synchronization
SalonStorage.initMockSync();

// ─── QR CODE SVG GENERATOR ────────────────────────────
// Renders a high-fidelity SVG QR Code matrix for VietQR and Check-in
function generateQRCodeSVG(text, size = 180, label = 'VIETQR') {
  // Hash text to generate deterministic decorative dot matrix
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }

  const matrixSize = 25; // 25x25 grid
  const cellSize = size / matrixSize;
  let rects = '';

  // Function to check if coordinate is in standard finder patterns (3 corners)
  function isFinderPattern(r, c) {
    if (r < 7 && c < 7) return true; // Top-left
    if (r < 7 && c >= matrixSize - 7) return true; // Top-right
    if (r >= matrixSize - 7 && c < 7) return true; // Bottom-left
    return false;
  }

  // Draw 3 corner finder patterns
  function drawFinder(r0, c0) {
    const x = c0 * cellSize;
    const y = r0 * cellSize;
    const w = 7 * cellSize;
    // Outer black
    rects += `<rect x="${x}" y="${y}" width="${w}" height="${w}" fill="#2C1A11" rx="4"/>`;
    // Inner white
    rects += `<rect x="${x + cellSize}" y="${y + cellSize}" width="${5 * cellSize}" height="${5 * cellSize}" fill="#FFFFFF" rx="2"/>`;
    // Center black
    rects += `<rect x="${x + 2 * cellSize}" y="${y + 2 * cellSize}" width="${3 * cellSize}" height="${3 * cellSize}" fill="#2C1A11" rx="2"/>`;
  }

  drawFinder(0, 0);
  drawFinder(0, matrixSize - 7);
  drawFinder(matrixSize - 7, 0);

  // Generate data dots based on text hash
  for (let r = 0; r < matrixSize; r++) {
    for (let c = 0; c < matrixSize; c++) {
      if (isFinderPattern(r, c)) continue;
      // Center logo area keep clear
      if (r >= 10 && r <= 14 && c >= 10 && c <= 14) continue;

      const bit = ((hash ^ (r * 31 + c * 17)) + (r * c)) % 3 === 0;
      if (bit) {
        const x = c * cellSize + cellSize * 0.1;
        const y = r * cellSize + cellSize * 0.1;
        const s = cellSize * 0.8;
        rects += `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="#2C1A11" rx="1.5"/>`;
      }
    }
  }

  // Center logo emblem
  const centerBoxX = 9.5 * cellSize;
  const centerBoxY = 9.5 * cellSize;
  const centerBoxW = 6 * cellSize;

  const centerLogo = `
    <rect x="${centerBoxX}" y="${centerBoxY}" width="${centerBoxW}" height="${centerBoxW}" fill="#FFFFFF" stroke="#D4AF37" stroke-width="2" rx="4"/>
    <text x="${size / 2}" y="${size / 2 + 4}" font-family="Cinzel, serif" font-size="${cellSize * 1.5}" font-weight="bold" fill="#2C1A11" text-anchor="middle">VT</text>
  `;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
      <rect width="${size}" height="${size}" fill="#FFFFFF" rx="8"/>
      ${rects}
      ${centerLogo}
    </svg>
  `;
}

// ─── USER SWITCHER HELPER ─────────────────────────────
function initCustomerSession() {
  if (!Auth.isLoggedIn()) {
    // Default to customer U201 (Nguyễn Thảo Linh) for demo convenience
    Auth.login('customer');
  }
  const user = Auth.getCurrentUser() || MOCK.users.find(u => u.id === 'U201');
  const userPills = document.querySelectorAll('.customer-user-pill-target');
  userPills.forEach(pill => {
    pill.innerHTML = `
      <div class="customer-user-pill" onclick="switchCustomerModal()" title="Nhấp để đổi tài khoản demo">
        <img src="${user.avatar}" alt="${user.name}" class="customer-user-avatar">
        <div class="customer-user-info">
          <span class="customer-user-name">${user.name}</span>
          <span class="customer-user-tier"><i class="fas fa-crown"></i> Hạng ${user.memberTier || 'Vàng'}</span>
        </div>
        <i class="fas fa-chevron-down" style="font-size: 0.75rem; color: var(--gold); margin-left: 4px;"></i>
      </div>
    `;
  });
}

function switchCustomerModal() {
  const customers = MOCK.users.filter(u => u.role === 'customer');
  const current = Auth.getCurrentUser();

  let html = `
    <div class="modal-overlay active" id="modal-switch-customer">
      <div class="modal-box" style="max-width: 440px;">
        <div class="modal-header">
          <h3 class="modal-title"><i class="fas fa-users-cog"></i> Chọn Khách Hàng Trải Nghiệm</h3>
          <button class="modal-close" onclick="closeModal('modal-switch-customer')">&times;</button>
        </div>
        <div class="modal-body">
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 14px;">
            Chọn một hồ sơ khách hàng để xem trước chính sách hạng thành viên & lịch sử cá nhân hóa:
          </p>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${customers.map(c => `
              <div onclick="selectCustomerAccount('${c.id}')" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; border: 1.5px solid ${c.id === current?.id ? 'var(--gold)' : 'var(--border)'}; background: ${c.id === current?.id ? 'var(--gold-dim)' : 'var(--bg-white)'}; border-radius: var(--radius-sm); cursor: pointer; transition: var(--transition);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img src="${c.avatar}" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover;">
                  <div>
                    <div style="font-weight: 600; font-size: 0.9rem; color: var(--primary);">${c.name}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${c.phone}</div>
                  </div>
                </div>
                <span class="badge ${MockDB.getMemberTierClass(c.memberTier)}" style="font-size: 0.72rem;">${c.memberTier}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Remove existing if any
  document.getElementById('modal-switch-customer')?.remove();
  document.body.insertAdjacentHTML('beforeend', html);
}

function selectCustomerAccount(userId) {
  sessionStorage.setItem('currentUser', userId);
  sessionStorage.setItem('currentRole', 'customer');
  closeModal('modal-switch-customer');
  Toast.show('Đã chuyển tài khoản demo sang: ' + MockDB.getUser(userId)?.name, 'success');
  setTimeout(() => window.location.reload(), 400);
}

function toggleCustomerMobileMenu() {
  const drawer = document.getElementById('customer-mobile-drawer');
  if (drawer) drawer.classList.toggle('active');
}

// ─── SHARED CLIPBOARD HELPER ──────────────────────────
function copyToClipboard(text, msg = 'Đã sao chép vào bộ nhớ tạm!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      Toast.show(msg, 'success');
    }).catch(() => fallbackCopy(text, msg));
  } else {
    fallbackCopy(text, msg);
  }
}

function fallbackCopy(text, msg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  Toast.show(msg, 'success');
}
