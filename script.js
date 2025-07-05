//ลบทุกสิ่งอย่าง
// localStorage.clear();

// User authentication data
const users = {
  'admin@gmail.com': { password: 'admin_123', role: 'admin' },
  'shop1@gmail.com': { password: 'cellshop_1', role: 'shop', shopId: 1 },
  'shop2@gmail.com': { password: 'cellshop_2', role: 'shop', shopId: 2 },
  'shop3@gmail.com': { password: 'cellshop_3', role: 'shop', shopId: 3 }
  // เพิ่มร้านค้าอื่นๆ ได้ที่นี่
};

let currentUserRole = null;
let currentShopId = null;

document.addEventListener('DOMContentLoaded', () => {
  showPage('login-page');

  // Add event listener for Enter key on login page
  document.getElementById('login-email').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      document.getElementById('login-password').focus(); // Move focus to password
    }
  });
  document.getElementById('login-password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      handleLogin();
    }
  });

  // Add event listeners for Enter key for shop forms
  for (let i = 1; i <= 3; i++) { // Loop for use1, use2, use3 forms
      const formId = `use${i}-form`;
      const idInputId = `use${i}-id`;

      document.getElementById(idInputId).addEventListener('keypress', function(event) {
          if (event.key === 'Enter') {
              event.preventDefault(); // Prevent default form submission
              handleUseSubmit(event, i); // Pass shop number
          }
      });
      // Also handle form submission when the submit button is clicked (original behavior)
      document.getElementById(formId).addEventListener('submit', function(event) {
          event.preventDefault();
          handleUseSubmit(event, i); // Pass shop number
      });
  }

  // Initialize the daily clear schedule
  scheduleDailyClear();
  // Clean up old historical data on load
  cleanOldHistoricalData();
});

//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน


// โหลดวันที่ปัจจุบัน (เช่น "2025-06-04")
const todayStr = new Date().toISOString().split("T")[0];

// โหลดข้อมูลเดิม
let todayData = JSON.parse(localStorage.getItem('todayData')) || [];
let historicalData = JSON.parse(localStorage.getItem('historicalData')) || {};

// ตรวจสอบวันล่าสุดที่อัปเดต
const lastUpdatedDate = localStorage.getItem("lastUpdatedDate");

// ถ้าไม่ใช่วันเดิม แสดงว่าเป็นวันใหม่
if (lastUpdatedDate && lastUpdatedDate !== todayStr) {
  // ย้ายข้อมูลวันนี้ไปเก็บเป็นของเมื่อวาน
  if (todayData.length > 0) {
    historicalData[lastUpdatedDate] = (historicalData[lastUpdatedDate] || []).concat(todayData);
  }

  // เคลียร์ข้อมูลวันนี้
  todayData = [];
  localStorage.setItem("todayData", JSON.stringify(todayData));
  localStorage.setItem("historicalData", JSON.stringify(historicalData));
}

// ตั้งค่าวันใหม่
localStorage.setItem("lastUpdatedDate", todayStr);

  let classData = JSON.parse(localStorage.getItem('classData')) || {
    "m11": [
    { name: "สมชาย", id: "123",  balance: 0, totalUsed: 0 },
    { name: "สมหญิง", id: "1234",  balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 1', id: '0524341830', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 2', id: '0524291866', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 3', id: '0524278452', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 4', id: '0524265572', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 5', id: '0524312563', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 6', id: '0524322839', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 7', id: '0524296314', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 8', id: '0524286774', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 9', id: '0524323709', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 10', id: '0524347693', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 11', id: '0793386100', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 12', id: '0793468549', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 13', id: '0793358550', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 14', id: '0793443813', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 15', id: '0524269358', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 16', id: '0524332702', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 17', id: '0524308439', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 18', id: '0524259145', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 19', id: '0524337019', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 20', id: '1339676489', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 21', id: '0524310646', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 22', id: '0524338534', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 23', id: '0524315228', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 24', id: '0524285822', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 25', id: '0524297817', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 26', id: '0524301949', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 27', id: '0524324410', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 28', id: '0524351878', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 29', id: '0524320947', balance: 0, totalUsed: 0 },
    { name: 'นักเรียน 30', id: '0524307221', balance: 0, totalUsed: 0 }
   ], 
};


// เพิ่มเงินแอดมิน
function topUpCoupon() {
  const studentId = document.getElementById("student-id").value.trim();
  const amount = parseFloat(document.getElementById("amount-topup").value);

  let studentFound = false;

  for (const room in classData) {
    for (const student of classData[room]) {
      if (student.id === studentId) {
        if (!student.balance) student.balance = 0;
        student.balance += amount;

        studentFound = true;

        // ✅ บันทึกข้อมูลทั้งหมดกลับเข้า localStorage
        localStorage.setItem("classData", JSON.stringify(classData));

        document.getElementById("topup-message").innerText =
          `เติมเงินให้ ${student.name} (${student.id}) สำเร็จ! ยอดคงเหลือ: ${student.balance} บาท`;

        // เคลียร์ช่อง input
        document.getElementById("student-id").value = "";
        document.getElementById("amount-topup").value = "";

        return;
      }
    }
  }

  if (!studentFound) {
    document.getElementById("topup-message").innerText = "ไม่พบรหัสนักเรียนนี้";
  }
}


// ลบเงินแอดมิน
function deductCoupon() {
  const studentId = document.getElementById("deduct-student-id").value.trim();
  const amount = parseFloat(document.getElementById("deduct-amount").value);

  if (!studentId || isNaN(amount) || amount <= 0) {
    document.getElementById("deduct-message").innerText = "กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง";
    return;
  }

  let studentFound = false;

  for (const room in classData) {
    for (const student of classData[room]) {
      if (student.id === studentId) {
        studentFound = true;

        if (!student.balance) student.balance = 0;

        if (student.balance < amount) {
          document.getElementById("deduct-message").innerText =
            `ยอดเงินของ ${student.name} (${student.id}) ไม่เพียงพอ`;
          return;
        }

        student.balance -= amount;

        // ✅ บันทึกกลับ localStorage หลังลบเงิน
        localStorage.setItem("classData", JSON.stringify(classData));

        document.getElementById("deduct-message").innerText =
          `ลบเงิน ${amount} บาทจาก ${student.name} (${student.id}) สำเร็จ! ยอดคงเหลือ: ${student.balance} บาท`;

        // ล้างช่องกรอก
        document.getElementById("deduct-student-id").value = "";
        document.getElementById("deduct-amount").value = "";

        return;
      }
    }
  }

  if (!studentFound) {
    document.getElementById("deduct-message").innerText = "ไม่พบรหัสนักเรียนนี้";
  }
}

// แสดงตาราง ร้านค้าละหักเงินร้านค้าผู้ใช้
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderTodayTable() {
  const tbody = document.getElementById('today-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (todayData.length === 0);

  todayData.forEach((d, i) => {
    const row = `<tr><td>${i + 1}</td><td>${d.name}</td><td>${d.id}</td><td>${d.shop}</td><td>${d.time}</td><td>${d.balance}</td><td>${d.amount}</td></tr>`;
    tbody.innerHTML += row;
  });

  // ✅ แสดงยอดรวมวันนี้
  const total = getTotalUsedToday();
  const totalEl = document.getElementById('today-total-used');
  if (totalEl) totalEl.textContent = `ยอดรวมที่ใช้วันนี้: ${total} บาท`;
}


function updateShopTable(shopNumber, role = 'shop') {
  const key = `useData${shopNumber}`;
  const data = JSON.parse(localStorage.getItem(key)) || [];

  const tbodyId = role === 'admin' 
    ? `shop${shopNumber}-admin-body`
    : `use${shopNumber}-body`;
    
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  tbody.innerHTML = '';
  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.id}</td>
      <td>${item.shop}</td>
      <td>${item.time}</td>
      <td>${item.balance}</td>
      <td>${item.used}</td>
    `;
    tbody.appendChild(row);
  });

  // ✅ แสดงยอดรวมของร้านค้า
  const shopName = `ร้านค้า ${shopNumber}`;
  const total = getTotalUsedToday(shopName);
  const displayId = role === 'admin' ? `shop${shopNumber}-total-used` : `use${shopNumber}-total-used`;
  const displayEl = document.getElementById(displayId);
  if (displayEl) {
    displayEl.textContent = `ยอดรวมที่ใช้วันนี้: ${total} บาท`;
  }
}





const useAmounts = {
  use1: 20,
  use2: 20,
  use3: 20
};

// โหลดค่าล่าสุดจาก localStorage ถ้ามี
['use1', 'use2', 'use3'].forEach(shopKey => {
  const saved = parseInt(localStorage.getItem(`${shopKey}-lastAmount`));
  if (!isNaN(saved)) {
    useAmounts[shopKey] = saved;
    const el = document.getElementById(`${shopKey}-amount`);
    if (el) el.textContent = saved;
  }
});

// ปรับค่าเมื่อกด +5 / -5
function changeAmount(shopKey, amount) {
  useAmounts[shopKey] += amount;
  if (useAmounts[shopKey] < 0) useAmounts[shopKey] = 0;
  document.getElementById(`${shopKey}-amount`).textContent = useAmounts[shopKey];
  localStorage.setItem(`${shopKey}-lastAmount`, useAmounts[shopKey]);
}

// ค้นหานักเรียนจาก ID
function findStudentById(id) {
  for (const className in classData) {
    const student = classData[className].find(s => s.id === id);
    if (student) return student;
  }
  return null;
}

// ฟังก์ชันใช้งานเมื่อกด "บันทึกการใช้"
function handleUseSubmit(e, shopNumber) {
  e.preventDefault();

  const dateRecorded = formatDate(now); // ✅ YYYY-MM-DD

  const id = document.getElementById(`use${shopNumber}-id`).value.trim();
  const amount = parseInt(document.getElementById(`use${shopNumber}-amount`).textContent);

  const student = findStudentById(id);
  if (!student) {
    alert("ไม่พบนักเรียน");
    return;
  }

  if (student.balance < amount) {
    alert("ยอดเงินไม่พอ");
    return;
  }

  // หักเงิน
  student.balance -= amount;
  student.totalUsed += amount;

  // วันและเวลา
  const now = new Date();
  const time = now.toLocaleTimeString("th-TH", {
    hour: '2-digit',
    minute: '2-digit'
  });
  const date = formatDate(now); // ✅ ใช้ฟอร์แมต YYYY-MM-DD ที่เสถียร


  // เพิ่มแถวในตารางร้านค้า
  const tbody = document.getElementById(`use${shopNumber}-body`);
  const row = document.createElement("tr");
  const rowNumber = tbody.rows.length + 1;
  row.innerHTML = `
    <td>${rowNumber}</td>
    <td>${student.name}</td>
    <td>${student.id}</td>
    <td>ร้านค้า ${shopNumber}</td>
    <td>${time}</td>
    <td>${student.balance}</td>
    <td>${amount}</td>
  `;
  tbody.appendChild(row);

  // บันทึกข้อมูลนักเรียน
  localStorage.setItem("classData", JSON.stringify(classData));

  // บันทึกข้อมูลการใช้
  const record = {
    name: student.name,
    id: student.id,
    shop: `ร้านค้า ${shopNumber}`,
    time,
    date,
    balance: student.balance,
    used: amount
  };

  const key = `useData${shopNumber}`;
  const oldData = JSON.parse(localStorage.getItem(key)) || [];
  oldData.push(record);
  localStorage.setItem(key, JSON.stringify(oldData));

  // อัปเดต "สถิตวันนี้"
  renderTodayData();

  // ล้างช่องกรอก
  document.getElementById(`use${shopNumber}-id`).value = "";
}

// โหลดตารางร้านค้า
function restoreUseTable(shopNumber) {
  const key = `useData${shopNumber}`;
  const data = JSON.parse(localStorage.getItem(key));
  if (!Array.isArray(data)) return;

  const tbody = document.getElementById(`use${shopNumber}-body`);
  tbody.innerHTML = "";
  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.id}</td>
      <td>${item.shop}</td>
      <td>${item.time}</td>
      <td>${item.balance}</td>
      <td>${item.used}</td>
    `;
    tbody.appendChild(row);
  });
}

// แสดงสถิตวันนี้
function renderTodayData() {
  const today = formatDate(new Date()); // ✅ ใช้ฟอร์แมตเดียวกัน
  const allData = [];
  const todayData = data.filter(item => item.date === today);

  for (let i = 1; i <= 3; i++) {
    const key = `useData${i}`;
    const data = JSON.parse(localStorage.getItem(key)) || [];
    const todayData = data.filter(item => item.date === today);
    allData.push(...todayData);
  }

  const tbody = document.getElementById("today-body");
  tbody.innerHTML = "";

  allData.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.id}</td>
      <td>${item.shop}</td>
      <td>${item.time}</td>
      <td>${item.balance}</td>
      <td>${item.used}</td>
    `;
    tbody.appendChild(row);
  });
}

// โหลดเมื่อเปิดหน้า
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("use1-form").addEventListener("submit", function(e) {
//     handleUseSubmit(e, 1);
//   });
//   document.getElementById("use2-form").addEventListener("submit", function(e) {
//     handleUseSubmit(e, 2);
//   });
//   document.getElementById("use3-form").addEventListener("submit", function(e) {
//     handleUseSubmit(e, 3);
//   });

//   restoreUseTable(1);
//   restoreUseTable(2);
//   restoreUseTable(3);
//   renderTodayData();
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --- Date and Time Utilities ---
function formatDateTime(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // 24-hour format
    };
    return date.toLocaleDateString('th-TH', options);
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function updateCurrentDateTime() {
    const datetimeElement = document.getElementById('current-datetime');
    if (datetimeElement) {
        datetimeElement.textContent = formatDateTime(new Date());
    }
}

setInterval(updateCurrentDateTime, 1000); // Update every second

function scheduleDailyClear() {
  const now = new Date();
  const clearTime = new Date(now);
  clearTime.setDate(clearTime.getDate() + 1); // วันถัดไป
  clearTime.setHours(0, 0, 0, 0); // เวลา 00:00 น.

  const delay = clearTime.getTime() - now.getTime();

  console.log(`Scheduled daily data clear at ${clearTime.toLocaleTimeString('th-TH')} for next trigger in ${Math.floor(delay / 1000 / 60)} minutes.`);
  setTimeout(dailyClearData, delay);
}


function dailyClearData() {
  console.log('Performing daily data clear...');
  const now = new Date();
  const todayKey = formatDate(now); // YYYY-MM-DD

  if (todayData.length > 0) {
    // ✅ เก็บ todayData ลง historicalData
    if (!historicalData[todayKey]) {
      historicalData[todayKey] = [];
    }
    historicalData[todayKey].push(...todayData);
    localStorage.setItem('historicalData', JSON.stringify(historicalData));
    console.log(`Saved ${todayData.length} records to historicalData[${todayKey}]`);
  }

  // ✅ ล้าง todayData
  todayData = [];
  localStorage.setItem('todayData', JSON.stringify(todayData));
  console.log(`todayData cleared for ${todayKey}`);

  // ✅ ลบข้อมูลร้านค้า useData1–3
  for (let i = 1; i <= 3; i++) {
    localStorage.removeItem(`useData${i}`);
    console.log(`Removed useData${i} from localStorage`);
  }

  // ✅ อัปเดตหน้าจอถ้า admin กำลังดู
  if (currentUserRole === 'admin') {
    renderTodayTable();
    for (const className in classData) {
      updateClassTable(className);
    }
    updateSummaryAllView();
  }

  cleanOldHistoricalData(); // ลบย้อนหลังเกิน 1 ปี
  scheduleDailyClear();     // ตั้งใหม่สำหรับวันถัดไป
}


// --- Data Management and Scheduling ---

const todayDate = new Date().toISOString().split('T')[0];
const lastSavedDate = localStorage.getItem("lastSavedDate");

if (lastSavedDate !== todayDate) {
  todayData = [];
  localStorage.setItem("todayData", JSON.stringify(todayData));
  localStorage.setItem("lastSavedDate", todayDate);
}

function cleanOldHistoricalData() {
  console.log('Cleaning old historical data...');
  const now = new Date();
  const oneYearAgo = new Date(now);
  oneYearAgo.setFullYear(now.getFullYear() - 1); // ✅ เก็บย้อนหลัง 1 ปี

  let changed = false;
  for (const dateKey in historicalData) {
    const historyDate = new Date(dateKey);
    if (historyDate.getTime() < oneYearAgo.getTime()) {
      delete historicalData[dateKey];
      changed = true;
      console.log(`Deleted historical data for ${dateKey} (older than 1 year).`);
    }
  }

  if (changed) {
    localStorage.setItem('historicalData', JSON.stringify(historicalData));
    if (currentUserRole === 'admin') {
      updateSummaryAllView?.(); // ถ้ามีฟังก์ชันนี้
    }
  } else {
    console.log('No old historical data to clean.');
  }
}



function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
    page.style.display = 'none';
  });
  document.getElementById(pageId).classList.add('active');
  document.getElementById(pageId).style.display = 'block';

  // จัดการการแสดงผลฟอร์มและตารางในหน้า use-page
  if (pageId === 'use-page') {
      // ซ่อนทุกฟอร์มและตารางของร้านค้าในหน้า use-page เริ่มต้น
      document.querySelectorAll('.use-view').forEach(view => view.style.display = 'none');
      document.querySelectorAll('.shop-form').forEach(form => form.style.display = 'none');

      if (currentUserRole === 'shop') {
          // ถ้าเป็นร้านค้า ให้แสดงเฉพาะฟอร์มและตารางของร้านตัวเอง
          const targetUseView = document.getElementById(`view-use${currentShopId}-shop`);
          if (targetUseView) {
              targetUseView.style.display = 'block';
              const currentShopForm = document.getElementById(`use${currentShopId}-form`);
              if (currentShopForm) {
                  currentShopForm.style.display = 'flex';
              }
          }
          updateCurrentDateTime(); // อัปเดตเวลาทันทีเมื่อเข้าหน้า use-page
      }
  }
}

function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const errorDisplay = document.getElementById('login-error');

  if (users[email] && users[email].password === password) {
    currentUserRole = users[email].role;
    currentShopId = users[email].shopId;
    errorDisplay.style.display = 'none';

    if (currentUserRole === 'admin') {
      showPage('main-app-page');
      switchView('home-main'); // Go to home page of admin
      renderTodayTable();
      // อัปเดตตารางชั้นทั้งหมดเมื่อผู้ดูแลระบบเข้าสู่ระบบ
      for (const className in classData) {
        updateClassTable(className);
      }
      // อัปเดตตารางสรุป
      updateSummaryAllView();
    } else if (currentUserRole === 'shop') {
      showPage('use-page');
      displayShopPageForShopUser(currentShopId); // Show the specific shop's use page
    }
  } else {
    errorDisplay.textContent = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
    errorDisplay.style.display = 'block';
  }
}

function logout() {
  currentUserRole = null;
  currentShopId = null;
  showPage('login-page');
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  // ซ่อนเมนู dropdown หลังจาก logout
  const adminMenu = document.getElementById('adminMenuDropdown');
  const shopMenu = document.getElementById('shopMenuDropdown');
  if (adminMenu) adminMenu.classList.remove('show');
  if (shopMenu) shopMenu.classList.remove('show');
  // รีเซ็ตไอคอนเมนู
  const adminMenuBtn = document.querySelector('.admin-menu-btn');
  const shopMenuBtn = document.querySelector('.shop-menu-btn');
  if (adminMenuBtn) {
      adminMenuBtn.classList.remove('toggle');
      adminMenuBtn.querySelector('.menu-icon').textContent = "☰";
  }
  if (shopMenuBtn) {
      shopMenuBtn.classList.remove('toggle');
      shopMenuBtn.querySelector('.menu-icon').textContent = "☰";
  }
}

// สำหรับ Admin: แสดงตารางร้านค้าที่เลือกใน contentArea ของ main-app-page
function showShopAdminTable(shopNumber) {
    if (currentUserRole === 'admin') {
        // ซ่อนทุก view ใน contentArea ก่อน
        document.querySelectorAll('#contentArea .view').forEach(v => v.style.display = 'none');
        // แสดงเฉพาะ view ของร้านค้าที่เลือกสำหรับ Admin
        const targetShopAdminView = document.getElementById(`view-shop${shopNumber}-admin`);
        if (targetShopAdminView) {
            targetShopAdminView.style.display = 'block';
        }
        // อัปเดตข้อมูลของร้านค้านั้น
        updateShopTable(shopNumber, 'admin'); // ส่ง role เพื่อระบุว่าเป็น Admin
    } else {
        alert('คุณไม่มีสิทธิ์เข้าถึงหน้านี้ โปรดเข้าสู่ระบบในฐานะผู้ดูแล');
    }
}

// สำหรับร้านค้า: แสดงเฉพาะฟอร์มและตารางของร้านตัวเองในหน้า use-page
function displayShopPageForShopUser(shopId) {
  document.getElementById('use-page-header').textContent = `ข้อมูลการใช้คูปองสำหรับร้านค้า ${shopId}`;
  
  // ซ่อนทุก view ของร้านค้าในหน้า use-page ก่อน
  document.querySelectorAll('.use-view').forEach(view => view.style.display = 'none');
  document.querySelectorAll('.shop-form').forEach(form => form.style.display = 'none');

  // แสดงเฉพาะ view ของร้านค้าที่เข้าสู่ระบบ
  const targetUseView = document.getElementById(`view-use${shopId}-shop`);
  if (targetUseView) {
      targetUseView.style.display = 'block';
      // แสดงฟอร์มของร้านค้าที่เข้าสู่ระบบ
      const currentShopForm = document.getElementById(`use${shopId}-form`);
      if (currentShopForm) {
          currentShopForm.style.display = 'flex';
      }
  }
  
  updateShopTable(shopId, 'shop'); // ส่ง role เพื่อระบุว่าเป็นร้านค้า
  // Focus on the first input field of the active use form
  const idInput = document.getElementById(`use${shopId}-id`);
  idInput.focus(); // Focus on ID input
}


function switchView(view) {
    if (currentUserRole === 'admin') {
        document.querySelectorAll('#contentArea .view').forEach(v => v.style.display = 'none');
        
        // ตรวจสอบว่าเป็น view ของ summary-class หรือไม่
        if (view.startsWith('summary-m')) {
            const className = view.replace('summary-', ''); // ดึงชื่อ class เช่น m11
            const targetView = document.getElementById(`view-${view}`);
            if (targetView) {
                targetView.style.display = 'block';
                updateClassTableForSummary(className); // อัปเดตตารางสรุปเฉพาะชั้นนั้นๆ
            }
        } else if (view === 'summary-all') {
             const targetView = document.getElementById(`view-${view}`);
            if (targetView) {
                targetView.style.display = 'block';
                updateSummaryAllView(); // อัปเดตตารางสรุปรวมทั้งหมด
            }
        }
        else { // สำหรับ view อื่นๆ เช่น home-main, today, m11, shop1-admin
            const targetView = document.getElementById(`view-${view}`);
            if (targetView) {
                targetView.style.display = 'block';
            }

            if (view.startsWith('m') && !view.startsWith('summary-m')) { // ตรวจสอบว่าเป็น mXX แบบไม่ summary
                updateClassTable(view);
            }
            if (view === 'today') {
                renderTodayTable();
            }
        }
    } else if (currentUserRole === 'shop') {
        alert('คุณไม่มีสิทธิ์เข้าถึงหน้านี้. โปรดออกจากระบบและเข้าสู่ระบบในฐานะผู้ดูแล.');
    }
}

// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น

function handleUseSubmit(e, shopNumber) {
  e.preventDefault();
  const shopName = `ร้านค้า ${shopNumber}`;
  const idInput = document.getElementById(`use${shopNumber}-id`);
  const id = idInput.value.trim();

  const now = new Date();
  const currentHour = now.getHours();

  // ✅ จำกัดเวลาใช้งานคูปอง
  if (currentHour < 7 || currentHour >= 16) {
    alert('สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น');
    idInput.value = '';
    idInput.focus();
    return;
  }

  let student = null;
  let studentClass = '';
  for (const className in classData) {
    student = classData[className].find(s => s.id === id);
    if (student) {
      studentClass = className;
      break;
    }
  }

  if (!student) {
    alert(`ไม่พบนักเรียนด้วยรหัส ID: ${id}`);
    idInput.value = '';
    idInput.focus();
    return;
  }

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const time = `${hours}:${minutes}`;
  const dateRecorded = formatDate(now);

  const amount = useAmounts[`use${shopNumber}`];

  // ✅ ตรวจสอบว่าเงินพอหรือไม่ก่อนหัก
  if (student.balance < amount) {
    alert(`ยอดเงินของ ${student.name} (${student.id}) ไม่เพียงพอ`);
    idInput.value = '';
    idInput.focus();
    return;
  }

  // ✅ หักเงินเมื่อเงินเพียงพอ
  student.balance -= amount;
  student.totalUsed += amount;

  // ✅ เพิ่มใน todayData
  todayData.push({
    name: student.name,
    id,
    shop: shopName,
    time,
    date: dateRecorded,
    class: studentClass,
    amount,
    balance: student.balance
  });

  localStorage.setItem('todayData', JSON.stringify(todayData));
  localStorage.setItem('classData', JSON.stringify(classData));

  // ✅ บันทึกข้อมูลของร้านค้า
  const record = {
    name: student.name,
    id,
    shop: shopName,
    time,
    date: dateRecorded,
    used: amount,
    balance: student.balance
  };

  const key = `useData${shopNumber}`;
  const existingData = JSON.parse(localStorage.getItem(key)) || [];
  existingData.push(record);
  localStorage.setItem(key, JSON.stringify(existingData));

  // ✅ เคลียร์ช่องกรอก
  idInput.value = '';
  idInput.focus();

  // ✅ อัปเดตหน้าจอ
  updateShopTable(shopNumber, 'shop');
  renderTodayTable();
  for (const className in classData) updateClassTable(className);
  updateSummaryAllView();
}

function updateShopTable(shopNumber, role = 'shop') {
  const key = `useData${shopNumber}`;
  const data = JSON.parse(localStorage.getItem(key)) || [];

  const tbodyId = role === 'admin' 
    ? `shop${shopNumber}-admin-body`
    : `use${shopNumber}-body`;
    
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  tbody.innerHTML = '';
  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.id}</td>
      <td>${item.shop}</td>
      <td>${item.time}</td>
      <td>${item.balance}</td>
      <td>${item.used}</td>
    `;
    tbody.appendChild(row);
  });

  // ✅ แสดงยอดรวมของร้านค้า
  const shopName = `ร้านค้า ${shopNumber}`;
  const total = getTotalUsedToday(shopName);
  const displayId = role === 'admin' ? `shop${shopNumber}-total-used` : `use${shopNumber}-total-used`;
  const displayEl = document.getElementById(displayId);
  if (displayEl) {
    displayEl.textContent = `ยอดรวมที่ใช้วันนี้: ${total} บาท`;
  }
}





// ตารางแสดงรายชื่อ

function updateClassTable(className) {
  const tbody = document.getElementById(`${className}-body`);
  if (!tbody) return;
  tbody.innerHTML = '';

  if (!classData[className] || classData[className].length === 0) {
    tbody.innerHTML = '<tr><td colspan="5">ไม่มีข้อมูลนักเรียนสำหรับชั้นนี้</td></tr>';
    return;
  }

  classData[className].forEach((student, index) => {
    // ✅ รวมยอดใช้ "วันนี้ทั้งหมด" ของนักเรียนแต่ละคน
    const totalUsedToday = todayData
      .filter(entry => entry.id === student.id)
      .reduce((sum, entry) => sum + (entry.amount || 0), 0);

    const balance = student.balance ?? 0;

    const row = `<tr>
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.id}</td>
      <td>${balance}</td>
      <td>${totalUsedToday > 0 ? totalUsedToday : '-'}</td>
    </tr>`;

    tbody.innerHTML += row;
  });
}


function updateClassTableForSummary(viewId) {
  const tbody = document.getElementById(`summary-${viewId}-body`);
  if (!tbody || !classData[viewId]) return;

  tbody.innerHTML = '';
  const currentClassData = classData[viewId];
  let rowNumberMap = {};

  // ✅ เตรียมวันที่ 7 วันล่าสุด (ใหม่ → เก่า)
  const today = new Date();
  const datesToShow = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    datesToShow.push(d.toISOString().split('T')[0]);
  }

  // ✅ เพิ่ม sort เพื่อความแน่นอน
  datesToShow.sort((a, b) => new Date(b) - new Date(a)); // ใหม่ → เก่า

  // ✅ รวม historical + todayData ไว้ใน object
  const recordMap = {}; // { date: { id: record } }

  for (const date in historicalData) {
    if (!datesToShow.includes(date)) continue;
    historicalData[date].forEach(r => {
      if (!recordMap[date]) recordMap[date] = {};
      recordMap[date][r.id] = r;
    });
  }

  const todayStr = today.toISOString().split('T')[0];
  todayData.forEach(td => {
    if (!recordMap[todayStr]) recordMap[todayStr] = {};
    recordMap[todayStr][td.id] = {
      id: td.id,
      shop: td.shop,
      time: td.time,
      class: viewId,
      dateRecorded: todayStr, // ✅ เพิ่มวันที่ไว้ในข้อมูลของ todayData
    };
  });

  currentClassData.forEach((student, index) => {
    let useCount = 0;

    // ✅ ใช้วันที่ที่เรียงจากใหม่ → เก่า
    datesToShow.forEach(date => {
      const record = recordMap[date]?.[student.id];
      const use = record ? '✔️' : '❌';
      const shop = record?.shop || '-';
      const time = record?.time || '-';

      useCount++;
      const number = `${index + 1}.${useCount}`;

      const row = `<tr>
        <td>${number}</td>
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${use}</td>
        <td>${shop}</td>
        <td>${time}</td>
        <td>${date}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  });
}


//มันดีละอย่าไปยุ่งกับแม่ง

// ฟังก์ชันเปิด/ปิดเมนู Dropdown ที่มุมขวาบน
function toggleMenu(role) {
  const menuId = role === 'admin' ? 'adminMenuDropdown' : 'shopMenuDropdown';
  const menu = document.getElementById(menuId);
  // ใช้ querySelector ที่เฉพาะเจาะจงมากขึ้น
  const button = document.querySelector(`.${role}-menu-btn`);
  const icon = button ? button.querySelector('.menu-icon') : null; // ตรวจสอบว่า button มีอยู่ก่อน

  if (!menu || !button || !icon) { // เพิ่มการตรวจสอบ null
      console.error(`Menu elements not found for role: ${role}`);
      return;
  }

  if (menu.classList.contains('show')) {
    menu.style.opacity = '0';
    menu.style.transform = 'translateY(-10px)';
    button.classList.remove('toggle');
    icon.textContent = "☰";
    setTimeout(() => {
      menu.classList.remove('show');
      menu.style.visibility = 'hidden';
      menu.style.pointerEvents = 'none';
    }, 300);
  } else {
    menu.classList.add('show');
    menu.style.visibility = 'visible';
    menu.style.opacity = '1';
    menu.style.transform = 'translateY(0)';
    menu.style.pointerEvents = 'auto';
    button.classList.add('toggle');
    icon.textContent = "✖";
  }
}

document.addEventListener('click', function(event) {
  const adminMenuDropdown = document.getElementById('adminMenuDropdown');
  const shopMenuDropdown = document.getElementById('shopMenuDropdown');
  
  // อ้างอิงปุ่มเมนูที่ถูกต้องสำหรับแต่ละบทบาท
  const adminMenuBtn = document.querySelector('.admin-menu-btn'); 
  const shopMenuBtn = document.querySelector('.shop-menu-btn');

  // ตรวจสอบ Admin Menu
  if (adminMenuDropdown && adminMenuDropdown.classList.contains('show')) {
    if (adminMenuBtn && !adminMenuBtn.contains(event.target) && !adminMenuDropdown.contains(event.target)) {
      toggleMenu('admin');
    }
  }
  // ตรวจสอบ Shop Menu
  if (shopMenuDropdown && shopMenuDropdown.classList.contains('show')) {
    if (shopMenuBtn && !shopMenuBtn.contains(event.target) && !shopMenuDropdown.contains(event.target)) {
      toggleMenu('shop');
    }
  }
});


// ฟังก์ชันเปิด/ปิดเมนูหลัก "ตามลำดับชั้น"
function toggleMainMenu() {
  const mainSubmenu = document.getElementById('mainSubmenu');
  const mainIcon = document.getElementById('mainMenuIcon');
  if (mainSubmenu.style.display === "block") {
    mainSubmenu.style.display = "none";
    mainIcon.textContent = "▼";
  } else {
    mainSubmenu.style.display = "block";
    mainIcon.textContent = "▲";
  }
}

// ฟังก์ชันเปิด/ปิดเมนูย่อยของแต่ละชั้น (ม.1-ม.6)
function toggleClassSubmenu(id) {
  const submenu = document.getElementById(id);
  const icon = document.getElementById(id + "Icon");
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
    icon.textContent = "▼";
  } else {
    submenu.style.display = "block";
    icon.textContent = "▲";
  }
}

// ฟังก์ชันเปิด/ปิดเมนูย่อย "ร้านค้า"
function toggleShopSubmenu() {
  const shopSubmenu = document.getElementById('shopSubmenu');
  const shopIcon = document.getElementById('shopMenuIcon');
  if (shopSubmenu.style.display === "block") {
    shopSubmenu.style.display = "none";
    shopIcon.textContent = "▼";
  } else {
    shopSubmenu.style.display = "block";
    shopIcon.textContent = "▲";
  }
}

// ฟังก์ชันเปิด/ปิดเมนูย่อย "สถิติย้อนหลัง"
function toggleSummarySubmenu() {
  const summarySubmenu = document.getElementById('summarySubmenu');
  const summaryIcon = document.getElementById('summaryMenuIcon');
  if (summarySubmenu.style.display === "block") {
    summarySubmenu.style.display = "none";
    summaryIcon.textContent = "▼";
  } else {
    summarySubmenu.style.display = "block";
    summaryIcon.textContent = "▲";
  }
}

// ฟังก์ชันเปิด/ปิดเมนูย่อยของแต่ละชั้นใน "สถิติย้อนหลัง"
function toggleSummaryClassSubmenu(id) {
  const submenu = document.getElementById(id);
  const icon = document.getElementById(id + "Icon");
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
    icon.textContent = "▼";
  } else {
    submenu.style.display = "block";
    icon.textContent = "▲";
  }
}

  // ฟังก์ชันสำหรับสลับหน้า (ถ้าคุณใช้ระบบ page switching)
function showPage(pageId) {
const pages = document.querySelectorAll('.page');
pages.forEach(page => {
    if (page.id === pageId) {
        page.classList.add('active');
    } else {
        page.classList.remove('active');
    }
});
}

// ฟังก์ชันซ่อนเมนูและปุ่มทั้งหมด (ถ้ามี)
// คุณอาจจะต้องปรับฟังก์ชันนี้ให้ตรงกับโครงสร้าง HTML ที่แน่นอนของคุณ
function hideAllMenusAndButtons() {
// ตัวอย่าง: ถ้ามีปุ่มเมนู admin/user อื่นๆ ให้ซ่อน
const adminMenuBtn = document.querySelector('.admin-menu-btn');
const userMenuBtn = document.querySelector('.user-menu-btn');
if (adminMenuBtn) adminMenuBtn.style.display = 'none';
if (userMenuBtn) userMenuBtn.style.display = 'none';

// ซ่อน sidebar ถ้ามันเปิดอยู่
const sidebar = document.getElementById('sidebar');
if (sidebar) sidebar.classList.remove('active');
const mainContent = document.getElementById('contentArea');
if (mainContent) mainContent.classList.remove('shifted');

// ซ่อนเมนูหลักใน sidebar ทั้งหมด
document.querySelectorAll('#admin-main-menu, #shop-main-menu, #user-main-menu').forEach(menu => {
    if (menu) menu.style.display = 'none';
});
// ซ่อน submenu ทั้งหมด
document.querySelectorAll('.submenu').forEach(submenu => {
    if (submenu) submenu.style.display = 'none';
});
// รีเซ็ตไอคอน toggle
document.querySelectorAll('.menu-toggle-icon').forEach(icon => {
    if (icon) icon.textContent = "▼";
});
}

// รายวัน สัปดาห์ เดือน เทอมปี
function toggleSubSummaryMenu(id) {
  const submenu = document.getElementById(id);
  const icon = document.getElementById(id + 'Icon');

  if (!submenu) return;

  if (submenu.style.display === "block") {
    submenu.style.display = "none";
    if (icon) icon.textContent = "▼";
  } else {
    submenu.style.display = "block";
    if (icon) icon.textContent = "▲";
  }
}


// ฟังก์ชัน Logout
function logout() {
console.log("User logged out.");
localStorage.removeItem('userRole'); // ลบข้อมูลบทบาทผู้ใช้ออกจาก Local Storage
showPage('login-page'); // สลับกลับไปหน้า Login
hideAllMenusAndButtons(); // ซ่อนทุกเมนูและปุ่มที่เกี่ยวข้องหลังจาก Logout
}

// ทำให้ฟังก์ชัน logout เข้าถึงได้จาก HTML (global)
window.logout = logout;

// ตัวอย่างการเรียกใช้เมื่อหน้าเว็บโหลด (ถ้ามีระบบ Login และตรวจสอบบทบาท)
window.onload = function() {
const userRole = localStorage.getItem('userRole');
if (!userRole) { // ถ้าไม่มีบทบาท แสดงหน้า login
    showPage('login-page');
    hideAllMenusAndButtons();
} else {
    // หากมีบทบาทอยู่แล้ว (แสดงว่าเคย Login ค้างไว้)
    // คุณอาจจะต้องมีฟังก์ชันที่ใช้แสดงองค์ประกอบตามบทบาทนั้นๆ ด้วย
    // ตัวอย่าง:
     if (userRole === 'admin') {
        showPage('main-app-page');
       showAdminElements();
     } else if (userRole === 'user') {
         showPage('use-page');
         displayUserElements();
     } else if (userRole === 'shop') {
         showPage('use-page');
         displayShopElements();
     }
    // แต่ถ้าเน้นแค่ปุ่ม logout และไม่มีเมนูอื่น ๆ ที่ซับซ้อนก็ไม่จำเป็นต้องมีฟังก์ชันเหล่านี้
}
};
// Function to toggle the visibility of the user dropdown menu (with logout button)
function toggleUserMenu() {
const dropdownMenu = document.getElementById('user-dropdown-menu');
// Ensure the dropdownMenu element exists before attempting to toggle its class
if (dropdownMenu) {
    dropdownMenu.classList.toggle('show');
}
}

// แก้ไขฟังก์ชัน logout() ที่มีอยู่แล้ว
function logout() {
console.log("User logged out.");
localStorage.removeItem('userRole'); // ลบข้อมูลบทบาทผู้ใช้ออกจาก Local Storage
showPage('login-page'); // กลับไปหน้า Login

// *** เพิ่มบรรทัดนี้: ซ่อน dropdown เมนูเมื่อ Logout ***
const userDropdownMenu = document.getElementById('user-dropdown-menu');
if (userDropdownMenu) {
    userDropdownMenu.classList.remove('show');
}

// *** เพิ่มบรรทัดเหล่านี้ด้วย ถ้าคุณต้องการให้ Sidebar และ Content Area ถูกรีเซ็ตเมื่อ Logout ***
document.getElementById('sidebar')?.classList.remove('active');
document.getElementById('contentArea')?.classList.remove('shifted');
}

function clearAllDataManually() {
  // ตรวจสอบสิทธิ์การใช้งาน (เฉพาะ Admin เท่านั้น)
  if (currentUserRole !== 'admin') {
    alert('คุณไม่มีสิทธิ์ในการดำเนินการนี้');
    return;
  }

  // กล่องยืนยัน
  if (confirm('คำเตือน: คุณแน่ใจหรือไม่ที่ต้องการล้างข้อมูลทั้งหมด?\n\n- ยอดเงินคงเหลือของนักเรียนทั้งหมดจะถูกรีเซ็ตเป็น 0\n- ยอดเงินที่ใช้ไปรวมของนักเรียนทั้งหมดจะถูกรีเซ็ตเป็น 0\n- ข้อมูลการใช้จ่ายวันนี้จะถูกลบ\n- ประวัติการใช้จ่ายย้อนหลังจะถูกลบ\n- ข้อมูลตารางร้านค้าทั้งหมดจะถูกลบ\n\nการกระทำนี้ไม่สามารถย้อนกลับได้!')) {
    
    // 1. รีเซ็ต balance และ totalUsed ของนักเรียนทุกคน
    for (const className in classData) {
      if (Array.isArray(classData[className])) {
        classData[className].forEach(student => {
          student.balance = 0;
          student.totalUsed = 0;
        });
      }
    }
    localStorage.setItem('classData', JSON.stringify(classData));

    // 2. ล้างข้อมูล todayData และ historicalData
    todayData = [];
    historicalData = {};
    localStorage.setItem('todayData', JSON.stringify(todayData));
    localStorage.setItem('historicalData', JSON.stringify(historicalData));
    localStorage.removeItem('lastUpdatedDate');

    // 3. ลบข้อมูลร้านค้าทั้ง 3 จาก localStorage
    for (let i = 1; i <= 3; i++) {
      localStorage.removeItem(`useData${i}`);
    }

    // 4. ล้างตาราง HTML ที่เกี่ยวข้องทั้งหมด
    const tableIds = [
      "today-body",
      "m11-body",
      "shop1-admin-body",
      "shop2-admin-body",
      "shop3-admin-body",
      "summary-m11-body",
      "use1-body",
      "use2-body",
      "use3-body"
    ];

    tableIds.forEach(id => {
      const tbody = document.getElementById(id);
      if (tbody) tbody.innerHTML = '';
    });

    // 5. รีเซ็ตค่าแสดงยอดใช้ในปุ่มร้านค้า (แสดง 5)
    for (let i = 1; i <= 3; i++) {
      useAmounts[`use${i}`] = 5;
      localStorage.setItem(`use${i}-lastAmount`, 5);
      const amountDisplay = document.getElementById(`use${i}-amount`);
      if (amountDisplay) amountDisplay.textContent = '5';
    }

    // 6. อัปเดตตารางที่ยังเปิดอยู่
    renderTodayTable?.();
    for (const className in classData) updateClassTable(className);
    updateSummaryAllView?.();

    // 7. ปิด dropdown (ถ้ามี)
    const userDropdownMenu = document.getElementById('user-dropdown-menu');
    if (userDropdownMenu) userDropdownMenu.classList.remove('show');

    // 8. แจ้งเตือน
    alert('ล้างข้อมูลทั้งหมดเรียบร้อยแล้ว');

    // 9. โหลดหน้าใหม่ (เลือกใช้หรือตัดออกได้)
    location.reload();
  }
}


function getLast7DaysData() {
  const historicalData = JSON.parse(localStorage.getItem("historicalData")) || {};
  const sortedDates = Object.keys(historicalData).sort((a, b) => new Date(b) - new Date(a));
  const last7Dates = sortedDates.slice(0, 7);

  let combined = [];
  last7Dates.forEach(date => {
    const daily = historicalData[date];
    daily.forEach(entry => {
      combined.push({...entry, date});
    });
  });

  return combined;
}

document.addEventListener("DOMContentLoaded", () => {
  const studentIdInput = document.getElementById("student-id");
  const amountInput = document.getElementById("amount-topup");

  // ให้ทั้งสอง input ตอบสนองเมื่อกด Enter
  [studentIdInput, amountInput].forEach(input => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // ป้องกันการ submit อัตโนมัติ (ถ้ามีฟอร์ม)
        topUpCoupon(); // เรียกฟังก์ชันเติมเงิน
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('deduct-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      deductCoupon();
    });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// === ฟังก์ชันรวมสำหรับแสดงข้อมูลตามช่วงเวลาที่จำกัด ===

// ช่วย format วันที่เป็น YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// ตรวจสอบว่า date อยู่ในช่วงเวลาที่กำหนด
function isDateInCustomPeriod(date, now, period) {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  switch (period) {
    case 'daily':
      return formatDate(date) === formatDate(now);

    case 'weekly': {
      const monday = new Date(now);
      monday.setDate(now.getDate() - now.getDay() + 1); // จันทร์นี้
      monday.setHours(0, 0, 0, 0);

      const sunday = new Date(monday);
      sunday.setDate(monday.getDate() + 6);
      sunday.setHours(23, 59, 59, 999);

      return date >= monday && date <= sunday;
    }

    case 'monthly':
      return date.getMonth() === now.getMonth() && year === now.getFullYear();

    case 'semester': {
      const isFirstHalf = now.getMonth() < 6; // ม.ค.–มิ.ย.
      const validMonths = isFirstHalf ? [0,1,2,3,4,5] : [6,7,8,9,10,11];
      return validMonths.includes(month) && year === now.getFullYear();
    }

    case 'yearly':
      return year === now.getFullYear();

    default:
      return false;
  }
}

// ดึงข้อมูลตามช่วงเวลา (class: m11, m12, ...)
function getRecordsByPeriod(viewId, period) {
  const todayStr = formatDate(new Date());
  const now = new Date();
  const results = [];

  for (const dateKey in historicalData) {  // ✅ แก้ตรงนี้
    const recordDate = new Date(dateKey);
    if (!isDateInCustomPeriod(recordDate, now, period)) continue;

    const filtered = historicalData[dateKey].filter(r => r.class === viewId);
    filtered.forEach(entry => results.push({ ...entry, date: dateKey }));
  }

  todayData.forEach(td => {
    if (td.class === viewId && isDateInCustomPeriod(new Date(), now, period)) {
      results.push({ ...td, date: todayStr });
    }
  });

  return results;
}


function getThaiMonthName(monthNumber) {
  const monthNames = [
    "", "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];
  return monthNames[monthNumber];
}


// แสดงผลบนตารางสรุปย้อนหลังของนักเรียน
function updateClassTableForSummaryPeriod(viewId, period) {
  const tbody = document.getElementById(`summary-${viewId}-${period}-body`);
  if (!tbody) return;
  tbody.innerHTML = '';

  const records = getRecordsByPeriod(viewId, period);
  records.sort((a, b) => new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`));

  let lastMonth = '';

  records.forEach((record, index) => {
    const thisMonth = record.date.substring(0, 7); // "YYYY-MM"
    if ((period === 'semester' || period === 'yearly') && thisMonth !== lastMonth) {
      const [year, month] = thisMonth.split("-");
      const monthNameThai = getThaiMonthName(parseInt(month));
      const monthHeader = `<tr><td colspan="8" style="background:#f0f0f0;font-weight:bold;">${monthNameThai} ${year}</td></tr>`;
      tbody.innerHTML += monthHeader;
      lastMonth = thisMonth;
    }

    const row = `<tr>
      <td>${index + 1}</td>
      <td>${record.name}</td>
      <td>${record.id}</td>
      <td>${record.shop}</td>
      <td>${record.balance ?? '-'}</td>
      <td>${record.amount || record.used || '-'}</td>
      <td>${record.time}</td>
      <td>${record.date}</td>
    </tr>`;

    tbody.innerHTML += row;
  });
}


// สำหรับร้านค้า (shop1, shop2, shop3)
function updateShopSummaryView(shopKey, period) {
  const tbody = document.getElementById(`summary-${shopKey}-${period}-body`);
  if (!tbody) return;
  tbody.innerHTML = '';

  const todayStr = formatDate(new Date());
  const now = new Date();
  let records = [];

  const shopNumber = shopKey.replace("shop", "");
  const shopName = `ร้านค้า ${shopNumber}`;

  // ✅ ใช้ historicalData ที่โหลดไว้แล้ว ไม่โหลดใหม่จาก localStorage
  for (const dateKey in historicalData) {
    const recordDate = new Date(dateKey);
    if (!isDateInCustomPeriod(recordDate, now, period)) continue;

    const data = historicalData[dateKey].filter(r => r.shop === shopName);
    data.forEach(entry => records.push({ ...entry, date: dateKey }));
  }

  todayData.forEach(td => {
    if (td.shop === shopName && isDateInCustomPeriod(new Date(), now, period)) {
      records.push({ ...td, date: todayStr });
    }
  });

  records.sort((a, b) => new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`));

  let lastMonth = '';

  records.forEach((r, i) => {
    const thisMonth = r.date.substring(0, 7);
    if ((period === 'semester' || period === 'yearly') && thisMonth !== lastMonth) {
      const [year, month] = thisMonth.split("-");
      const monthNameThai = getThaiMonthName(parseInt(month));
      const spacer = `<tr><td colspan="8" style="background:#f0f0f0;font-weight:bold;">${monthNameThai} ${year}</td></tr>`;
      tbody.innerHTML += spacer;
      lastMonth = thisMonth;
    }

    const row = `<tr>
      <td>${i + 1}</td>
      <td>${r.name}</td>
      <td>${r.id}</td>
      <td>${r.shop}</td>
      <td>${r.balance ?? '-'}</td>
      <td>${r.used ?? r.amount ?? '-'}</td>
      <td>${r.time}</td>
      <td>${r.date}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}



// ==== เพิ่มเข้าใน switchView() ที่คุณมีอยู่แล้ว ====

function switchView(view) {
  if (currentUserRole === 'admin') {
    document.querySelectorAll('#contentArea .view').forEach(v => v.style.display = 'none');

    if (view.startsWith('summary-') && view.includes('-')) {
      const [_, key, period] = view.split('-'); // เช่น summary-m11-weekly
      const targetView = document.getElementById(`view-${view}`);
      if (targetView) {
        targetView.style.display = 'block';
        if (key.startsWith('shop')) {
          updateShopSummaryView(key, period);
        } else {
          updateClassTableForSummaryPeriod(key, period);
        }
      }
    } else if (view === 'summary-all') {
      const targetView = document.getElementById(`view-${view}`);
      if (targetView) {
        targetView.style.display = 'block';
        updateSummaryAllView();
      }
    } else {
      const targetView = document.getElementById(`view-${view}`);
      if (targetView) {
        targetView.style.display = 'block';
      }
      if (view.startsWith('m') && !view.startsWith('summary-')) {
        updateClassTable(view);
      }
      if (view === 'today') {
        renderTodayTable();
      }
    }
  } else if (currentUserRole === 'shop') {
    alert('คุณไม่มีสิทธิ์เข้าถึงหน้านี้. โปรดออกจากระบบและเข้าสู่ระบบในฐานะผู้ดูแล.');
  }
}


function getTotalUsedToday(shopFilter = null) {
  const today = formatDate(new Date()); // "YYYY-MM-DD"
  const records = todayData.filter(entry => entry.date === today); // ✅ แก้ตรงนี้
  const filtered = shopFilter ? records.filter(r => r.shop === shopFilter) : records;
  const total = filtered.reduce((sum, r) => sum + (r.amount || r.used || 0), 0);
  return total;
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkBalance(studentId) {
  for (const room in classData) {
    for (const student of classData[room]) {
      if (student.id === studentId) {
        alert(`ยอดเงินของ ${student.name} (${student.id}) คือ ${student.balance ?? 0} บาท`);
        return;
      }
    }
  }
  alert(`ไม่พบรหัสนักเรียน: ${studentId}`);
}
// checkBalance("123");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// เปิดให้ใช้ใน HTML
window.switchView = switchView;
window.handleUseSubmit = handleUseSubmit;
window.downloadExcel = downloadExcel;
window.toggleMenu = toggleMenu;
window.logout = logout;
window.toggleMainMenu = toggleMainMenu;
window.toggleClassSubmenu = toggleClassSubmenu;
window.showShopAdminTable = showShopAdminTable;
window.toggleShopSubmenu = toggleShopSubmenu;
window.displayShopPageForShopUser = displayShopPageForShopUser;
window.toggleSummarySubmenu = toggleSummarySubmenu;
window.toggleSummaryClassSubmenu = toggleSummaryClassSubmenu;
window.toggleUserMenu = toggleUserMenu;
window.clearAllDataManually = clearAllDataManually;
// ✅ เรียกคืนข้อมูลร้านค้า 1, 2, 3 ทันทีเมื่อโหลดเว็บ
window.addEventListener("DOMContentLoaded", () => {
  restoreUseTable(1);
  restoreUseTable(2);
  restoreUseTable(3);
});
