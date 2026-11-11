/**
 * Shared Utilities for Salon Dashboard
 */

// ─── AUTH SIMULATION ─────────────────────────────
const Auth = {
  login(role) {
    let userId;
    switch(role) {
      case 'admin': userId = 'U001'; break;
      case 'stylist': userId = 'U101'; break;
      case 'customer': userId = 'U201'; break;
    }
    sessionStorage.setItem('currentUser', userId);
    sessionStorage.setItem('currentRole', role);
  },

  logout() {
    sessionStorage.clear();
    window.location.href = '/login.html';
  },

  getCurrentUser() {
    const userId = sessionStorage.getItem('currentUser');
    if (!userId) return null;
    return MOCK.users.find(u => u.id === userId);
  },

  getCurrentRole() {
    return sessionStorage.getItem('currentRole');
  },

  isLoggedIn() {
    return !!sessionStorage.getItem('currentUser');
  },

  requireAuth(role) {
    if (!this.isLoggedIn() || (role && this.getCurrentRole() !== role)) {
      window.location.href = '/login.html';
      return false;
    }
    return true;
  }
};

// ─── TOAST NOTIFICATIONS ─────────────────────────
const Toast = {
  container: null,

  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'success', duration = 3000) {
    this.init();
    const icons = {
      success: 'fas fa-check-circle',
      error: 'fas fa-times-circle',
      warning: 'fas fa-exclamation-triangle',
      info: 'fas fa-info-circle',
    };
    const colors = {
      success: 'var(--green)',
      error: 'var(--red)',
      warning: 'var(--orange)',
      info: 'var(--blue)',
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <i class="${icons[type]} toast-icon" style="color: ${colors[type]}"></i>
      <span class="toast-message">${message}</span>
    `;
    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastIn 0.3s ease reverse';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

// ─── SIDEBAR TOGGLE ──────────────────────────────
function initSidebar() {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (toggle) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay?.classList.toggle('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }
}

// ─── TABS ────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabsEl => {
    const buttons = tabsEl.querySelectorAll('.tab-btn');
    const parentContainer = tabsEl.parentElement;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetId = btn.dataset.tab;
        parentContainer.querySelectorAll('.tab-content').forEach(content => {
          content.classList.remove('active');
        });
        const target = parentContainer.querySelector(`#${targetId}`);
        if (target) target.classList.add('active');
      });
    });
  });
}

// ─── MODAL HELPERS ───────────────────────────────
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// ─── STAR RATING HTML ────────────────────────────
function renderStars(rating, maxStars = 5) {
  let html = '';
  for (let i = 1; i <= maxStars; i++) {
    if (i <= Math.floor(rating)) {
      html += '<i class="fas fa-star filled"></i>';
    } else if (i - 0.5 <= rating) {
      html += '<i class="fas fa-star-half-alt filled"></i>';
    } else {
      html += '<i class="far fa-star empty"></i>';
    }
  }
  return html;
}

// ─── DATE HELPERS ────────────────────────────────
function getToday() {
  return '2026-11-11'; // Fixed for demo
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getDayOfWeek(year, month, day) {
  return new Date(year, month, day).getDay();
}

// ─── INIT ON LOAD ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initTabs();

  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
});

