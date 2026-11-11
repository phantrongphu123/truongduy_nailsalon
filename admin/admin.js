/**
 * Admin Panel Common Script & Logic
 * Võ Thuận Hair Salon
 */

// Helper to export any table to CSV
function exportTableToCSV(filename, tableSelector) {
  const table = document.querySelector(tableSelector);
  if (!table) return;

  const rows = Array.from(table.querySelectorAll('tr'));
  const csvContent = rows.map(row => {
    const cols = Array.from(row.querySelectorAll('th, td'));
    return cols.map(col => {
      let text = col.innerText.replace(/"/g, '""').trim();
      return `"${text}"`;
    }).join(',');
  }).join('\r\n');

  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (typeof Toast !== 'undefined') {
    Toast.show(`Đã xuất file ${filename} thành công!`, 'success');
  }
}

// Global active nav helper
function setActiveNav(pageKey) {
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    if (link.getAttribute('data-nav') === pageKey) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Print specific element
function printElement(elementId) {
  const elem = document.getElementById(elementId);
  if (!elem) return;
  const printWindow = window.open('', '', 'height=700,width=900');
  printWindow.document.write('<html><head><title>In tài liệu – Võ Thuận Hair Salon</title>');
  printWindow.document.write('<link rel="stylesheet" href="../shared/shared.css">');
  printWindow.document.write('<link rel="stylesheet" href="admin.css">');
  printWindow.document.write('<style>body{padding:20px;background:#fff;}</style>');
  printWindow.document.write('</head><body>');
  printWindow.document.write(elem.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 500);
}
