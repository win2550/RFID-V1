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


//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน
//เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน //เก็บข้อมูลนักเรียน

let classData = {
    m11: [],
    // เพิ่มข้อมูลสำหรับชั้นอื่นๆ ถ้ามีในฐานข้อมูลของคุณ (ใส่ array เปล่าไว้ก่อน)
    m12: [], 
    m13: [], 
    m14: [
        { name: 'นักเรียน 1', id: '100000' },
        { name: 'นักเรียน 2', id: '100000' },
        { name: 'นักเรียน 3', id: '100000' },
        { name: 'นักเรียน 4', id: '100000' }
    ], 
     m15: [], m16: [], m17: [], m18: [], m19: [], m110: [], m111: [], m112: [],
     m21: [], m22: [], m23: [], m24: [], m25: [], m26: [], m27: [], m28: [], m29: [], m210: [], m211: [], m212: [],
     m31: [], m32: [], m33: [], m34: [], m35: [], m36: [], m37: [], m38: [], m39: [], m310: [], m311: [], m312: [],
     m41: [], m42: [], m43: [], m44: [], m45: [], m46: [], m47: [], m48: [], m49: [], m410: [], m411: [], m412: [],
     m51: [], m52: [], m53: [], m54: [], m55: [], m56: [], m57: [], m58: [], m59: [], m510: [], m511: [], m512: [],
     m61: [
      { name: 'นักเรียน 1', id: '0524341830' },
      { name: 'นักเรียน 2', id: '0524291866' },
      { name: 'นักเรียน 3', id: '0524278452' },
      { name: 'นักเรียน 4', id: '0524265572' },
      { name: 'นักเรียน 5', id: '0524312563' },
      { name: 'นักเรียน 6', id: '0524322839' },
      { name: 'นักเรียน 7', id: '0524296314' },
      { name: 'นักเรียน 8', id: '0524286774' },
      { name: 'นักเรียน 9', id: '0524323709' },
      { name: 'นักเรียน 10', id: '0524347693' },
      { name: 'นักเรียน 11', id: '0793386100' },
      { name: 'นักเรียน 12', id: '0793468549' },
      { name: 'นักเรียน 13', id: '0793358550' },
      { name: 'นักเรียน 14', id: '0793443813' },
      { name: 'นักเรียน 15', id: '0524269358' },
      { name: 'นักเรียน 16', id: '0524332702' },
      { name: 'นักเรียน 17', id: '0524308439' },
      { name: 'นักเรียน 18', id: '0524259145' },
      { name: 'นักเรียน 19', id: '0524337019' },
      { name: 'นักเรียน 20', id: '1339676489' },
      { name: 'นักเรียน 21', id: '0524310646' },
      { name: 'นักเรียน 22', id: '0524338534' },
      { name: 'นักเรียน 23', id: '0524315228' },
      { name: 'นักเรียน 24', id: '0524285822' },
      { name: 'นักเรียน 25', id: '0524297817' },
      { name: 'นักเรียน 26', id: '0524301949' },
      { name: 'นักเรียน 27', id: '0524324410' },
      { name: 'นักเรียน 28', id: '0524351878' },
      { name: 'นักเรียน 29', id: '0524320947' },
      { name: 'นักเรียน 30', id: '0524307221' }
     ], 
     m62: [], m63: [], m64: [], m65: [], m66: [], m67: [], m68: [], m69: [], m610: [], m611: [], m612: []
};


//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน
//หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน  //หน้าlogin อีเมล-รหัสผ่าน


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
    clearTime.setHours(21, 0, 0, 0); // ตั้งเวลาล้างข้อมูลเป็น 21:00:00

    let delay;
    if (now.getTime() < clearTime.getTime()) {
        // ถ้าตอนนี้ยังไม่ถึง 21:00 น. ให้ตั้งเวลาสำหรับวันนี้
        delay = clearTime.getTime() - now.getTime();
    } else {
        // ถ้าตอนนี้เกิน 21:00 น. ไปแล้ว ให้ตั้งเวลาสำหรับวันพรุ่งนี้
        clearTime.setDate(clearTime.getDate() + 1);
        delay = clearTime.getTime() - now.getTime();
    }

    console.log(`Scheduled daily data clear at ${clearTime.toLocaleTimeString('th-TH')} for next trigger in ${delay / 1000 / 60} minutes.`);
    setTimeout(dailyClearData, delay);
}

function dailyClearData() {
    console.log('Performing daily data clear...');
    const now = new Date();
    const todayKey = formatDate(now); // YYYY-MM-DD

    if (todayData.length > 0) {
        // ตรวจสอบว่าวันนี้มีการล้างข้อมูลแล้วหรือยัง (ป้องกันการล้างซ้ำในวันเดียวกัน)
        // ถ้าวันนี้มีข้อมูลถูกบันทึกใน historicalData แล้ว แสดงว่ามีการล้างไปแล้ว
        if (!historicalData[todayKey]) {
            historicalData[todayKey] = [];
        }
        // ย้ายข้อมูลจาก todayData ไปยัง historicalData ของวันนี้
        historicalData[todayKey] = historicalData[todayKey].concat(todayData);
        localStorage.setItem('historicalData', JSON.stringify(historicalData));

        // ล้าง todayData
        todayData = [];
        localStorage.setItem('todayData', JSON.stringify(todayData));
        console.log(`todayData cleared and moved to historicalData for ${todayKey}.`);
        
        // อัปเดต UI ของ Admin ทันที (ถ้า Admin กำลังดูอยู่)
        if (currentUserRole === 'admin') {
            renderTodayTable(); // จะแสดงเป็นตารางว่างเปล่า
            for (const className in classData) {
                updateClassTable(className);
            }
            updateSummaryAllView(); // อัปเดตข้อมูลสรุปย้อนหลัง
        }
    } else {
        console.log('No data in todayData to clear.');
    }

    cleanOldHistoricalData(); // ทำความสะอาดข้อมูลเก่าด้วย
    scheduleDailyClear(); // ตั้งเวลาสำหรับวันถัดไป
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
    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(now.getDate() - 7); // 7 วันที่แล้ว

    let changed = false;
    for (const dateKey in historicalData) {
        const historyDate = new Date(dateKey); // แปลง string dateKey เป็น Date object
        if (historyDate.getTime() < sevenDaysAgo.getTime()) {
            delete historicalData[dateKey];
            changed = true;
            console.log(`Deleted historical data for ${dateKey} (older than 7 days).`);
        }
    }
    if (changed) {
        localStorage.setItem('historicalData', JSON.stringify(historicalData));
        // ถ้ามีการลบข้อมูลย้อนหลัง อาจต้องอัปเดต UI ของ Admin ถ้ากำลังดูสถิติย้อนหลัง
        if (currentUserRole === 'admin' && (document.getElementById('view-summary-all').style.display === 'block' || document.querySelector('.summary-class-view').style.display === 'block')) {
             updateSummaryAllView();
             // หรือเรียก updateClassTableForSummary สำหรับแต่ละชั้นที่กำลังแสดงอยู่
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
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น
// อันนี้ของ หน้าใช้ร้านค้า กำหนดเวลา สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น


async function handleUseSubmit(e, shopNumber) {
    e.preventDefault(); // Ensure default form submission is prevented for both click and Enter
    const shopName = `ร้านค้า ${shopNumber}`;
    const idInput = document.getElementById(`use${shopNumber}-id`);
    const id = idInput.value.trim();

    const now = new Date();
    const currentHour = now.getHours();
    
    // --- ตรวจสอบช่วงเวลาที่อนุญาตให้บันทึก (7:00 - 16:00) ---
    if (currentHour < 7 || currentHour >= 20) {
        alert('สามารถบันทึกการใช้คูปองได้ตั้งแต่เวลา 07:00 น. ถึง 16:00 น. เท่านั้น');
        idInput.value = ''; // Clear input if outside allowed time
        idInput.focus();
        return;
    }
    // --- สิ้นสุดการตรวจสอบเวลา ---


    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`; // ดึงเวลาปัจจุบัน
    const dateRecorded = formatDate(now); // วันที่ที่บันทึก YYYY-MM-DD

    if (!id) {
        alert('กรุณากรอก รหัส ID นักเรียน');
        return;
    }

    // ค้นหาชื่อนักเรียนจาก classData (ควรวนลูปหาในทุกชั้น)
    let student = null;
    let studentClass = ''; // เพิ่มตัวแปรสำหรับเก็บชั้นของนักเรียน
    for (const className in classData) {
        student = classData[className].find(s => s.id === id);
        if (student) {
            studentClass = className; // บันทึกชั้นที่พบนักเรียน
            break;
        }
    }
    
    let name = student ? student.name : 'ไม่พบชื่อนักเรียน';

    if (!student) {
         alert(`ไม่พบนักเรียนด้วยรหัส ID: ${id} ในฐานข้อมูล`);
         idInput.value = ''; // Clear input if not found
         idInput.focus();
         return; // หยุดการทำงานถ้าไม่พบ ID
    }

    const existingEntry = todayData.find(d => d.id === id);

    if (existingEntry) {
        if (existingEntry.shop === shopName) {
            alert(`ID ${id} ได้ถูกบันทึกการใช้คูปองในร้าน ${shopName} แล้ว`);
        } else {
            alert(`ID ${id} ได้ถูกบันทึกการใช้คูปองในร้าน ${existingEntry.shop} แล้ว`);
        }
        idInput.value = ''; // Clear input if already used today
        idInput.focus();
        return;
    }

    // เพิ่มข้อมูลการใช้พร้อมกับวันที่บันทึก (dateRecorded)
    todayData.push({ name, id, shop: shopName, time, dateRecorded, class: studentClass });
    localStorage.setItem('todayData', JSON.stringify(todayData));

    idInput.value = '';
    idInput.focus(); // Focus back to the ID input after submission
    
    updateShopTable(shopNumber, 'shop'); // อัปเดตตารางของร้านค้า
    // อัปเดตตารางสำหรับผู้ดูแลระบบทันที
    renderTodayTable();
    for (const className in classData) {
        updateClassTable(className);
    }
    updateSummaryAllView(); // อัปเดตตารางสรุปรวมทั้งหมด
}

function renderTodayTable() {
  const tbody = document.getElementById('today-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (todayData.length === 0) return;

  todayData.forEach((d, i) => {
    const row = `<tr><td>${i + 1}</td><td>${d.name}</td><td>${d.id}</td><td>${d.shop}</td><td>${d.time}</td></tr>`;
    tbody.innerHTML += row;
  });
}

function updateClassTable(className) {
  const tbody = document.getElementById(`${className}-body`);
  if (!tbody) return;
  tbody.innerHTML = '';
  // ตรวจสอบว่ามีข้อมูลสำหรับ class นั้นๆ และไม่ใช่ class ว่าง
  if (!classData[className] || classData[className].length === 0) {
    tbody.innerHTML = '<tr><td colspan="6">ไม่มีข้อมูลนักเรียนสำหรับชั้นนี้</td></tr>';
    return;
  }

  classData[className].forEach((d, i) => {
    const found = todayData.find(t => t.id === d.id);
    const use = found ? '✔️' : '❌';
    const shop = found ? found.shop : '-';
    const time = found ? found.time : '-';
    const row = `<tr><td>${i + 1}</td><td>${d.name}</td><td>${d.id}</td><td>${use}</td><td>${shop}</td><td>${time}</td></tr>`;
    tbody.innerHTML += row;
  });
}

function updateShopTable(shopNumber, role) {
  let tbodyId;
  if (role === 'admin') {
      tbodyId = `shop${shopNumber}-admin-body`; // สำหรับตาราง Admin
  } else { // role === 'shop'
      tbodyId = `use${shopNumber}-body`; // สำหรับตารางของร้านค้าเอง
  }
  
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  tbody.innerHTML = '';

  const filtered = todayData.filter(d => d.shop === `ร้านค้า ${shopNumber}`);

  if (filtered.length === 0) return;

  filtered.forEach((d, i) => {
    const row = `<tr>
      <td>${i + 1}</td>
      <td>${d.name}</td>
      <td>${d.id}</td>
      <td>${d.shop}</td>
      <td>${d.time}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

// 🔁 วางแทนที่ของเดิมตั้งแต่บรรทัดที่ 593 เป็นต้นไป
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


  

// ฟังก์ชันอัปเดตตารางสรุปรวมทั้งหมด
function updateSummaryAllView() {
  const summaryAllContentDiv = document.getElementById('summary-all-content');
  if (!summaryAllContentDiv) return;
  summaryAllContentDiv.innerHTML = ''; // Clear previous content

  for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 12; j++) {
          const className = `m${i}${j}`;
          const classLabel = `ม.${i}/${j}`;
          
          // สร้างหัวข้อและตารางสำหรับแต่ละชั้น
          const h4 = document.createElement('h4');
          h4.textContent = classLabel;
          summaryAllContentDiv.appendChild(h4);

          const table = document.createElement('table');
          table.innerHTML = `
              <thead>
                  <tr><th>ลำดับ</th><th>ชื่อ</th><th>ID</th><th>การใช้</th><th>ร้านค้า</th><th>เวลาที่บันทึก</th><th>วันที่บันทึก</th></tr>
              </thead>
              <tbody id="summary-${className}-body-all-view"></tbody>
          `;
          summaryAllContentDiv.appendChild(table);

          const tbody = document.getElementById(`summary-${className}-body-all-view`);
          if (!tbody || !classData[className]) continue;
          tbody.innerHTML = '<tr><td colspan="7">ไม่มีข้อมูลนักเรียนสำหรับชั้นนี้</td></tr>'; // Default message, colspan 7
          
          if (classData[className].length > 0) {
            let currentClassData = classData[className];
            // Sort by name for consistent display
            currentClassData.sort((a, b) => a.name.localeCompare(b.name, 'th'));

            tbody.innerHTML = ''; // Clear default message if data exists

            // รวบรวมข้อมูลทั้งหมดสำหรับชั้นนี้จาก historicalData
            let combinedHistoricalData = [];
            for (const dateKey in historicalData) {
                const dataForDate = historicalData[dateKey].filter(d => d.class === className);
                combinedHistoricalData = combinedHistoricalData.concat(dataForDate);
            }

            currentClassData.forEach((d, k) => {
                // ค้นหาข้อมูลจาก todayData ก่อน
                let found = todayData.find(t => t.id === d.id);
                let use = '❌';
                let shop = '-';
                let time = '-';
                let dateRecorded = '-';

                if (found) {
                    use = '✔️';
                    shop = found.shop;
                    time = found.time;
                    dateRecorded = formatDate(new Date()); // วันที่ปัจจุบัน
                } else {
                    // ถ้าไม่พบใน todayData ให้ค้นหาใน historicalData
                    const foundInHistory = combinedHistoricalData.find(t => t.id === d.id);
                    if (foundInHistory) {
                        use = '✔️';
                        shop = foundInHistory.shop;
                        time = foundInHistory.time;
                        dateRecorded = foundInHistory.dateRecorded; // ใช้วันที่บันทึกจาก historicalData
                    }
                }
                const row = `<tr><td>${k + 1}</td><td>${d.name}</td><td>${d.id}</td><td>${use}</td><td>${shop}</td><td>${time}</td><td>${dateRecorded}</td></tr>`;
                tbody.innerHTML += row;
            });
          }
      }
  }
}

//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง   เอาไว้โหลดตาราง  มันดีละอย่าไปยุ่งกับแม่ง


function downloadExcel(view) {
  let wb = XLSX.utils.book_new();
  let ws;

  function makeSafeSheetName(name) {
    return name.replace(/[\\/:?*\[\]]/g, '-');
  }

  switch (view) {
    case 'today':
      if (todayData.length > 0) {
        ws = XLSX.utils.json_to_sheet(todayData.map((d, i) => ({
          ลำดับ: i + 1,
          ชื่อ: d.name,
          ID: d.id,
          ร้านค้า: d.shop,
          เวลา: d.time
        })));
        XLSX.utils.book_append_sheet(wb, ws, 'สถิติวันนี้');
      }
      break;

    case 'm11': case 'm12': case 'm13': case 'm14': case 'm15': case 'm16': case 'm17': case 'm18': case 'm19': case 'm110': case 'm111': case 'm112':
    case 'm21': case 'm22': case 'm23': case 'm24': case 'm25': case 'm26': case 'm27': case 'm28': case 'm29': case 'm210': case 'm211': case 'm212':
    case 'm31': case 'm32': case 'm33': case 'm34': case 'm35': case 'm36': case 'm37': case 'm38': case 'm39': case 'm310': case 'm311': case 'm312':
    case 'm41': case 'm42': case 'm43': case 'm44': case 'm45': case 'm46': case 'm47': case 'm48': case 'm49': case 'm410': case 'm411': case 'm412':
    case 'm51': case 'm52': case 'm53': case 'm54': case 'm55': case 'm56': case 'm57': case 'm58': case 'm59': case 'm510': case 'm511': case 'm512':
    case 'm61': case 'm62': case 'm63': case 'm64': case 'm65': case 'm66': case 'm67': case 'm68': case 'm69': case 'm610': case 'm611': case 'm612':
      let classNameRaw = view;
      if (classData[classNameRaw]) {
        const data = classData[classNameRaw].map((d, i) => {
          const found = todayData.find(t => t.id === d.id);
          return {
            ลำดับ: i + 1,
            ชื่อ: d.name,
            ID: d.id,
            การใช้: found ? '✔️' : '❌',
            ร้านค้า: found?.shop || '-',
            เวลา: found?.time || '-'
          };
        });
        const rawSheetName = `ม.${classNameRaw.slice(1,2)}/${classNameRaw.slice(2)}`;
        const sheetName = makeSafeSheetName(rawSheetName);
        ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
      }
      break;

      case 'summary-m11': case 'summary-m12': case 'summary-m13': case 'summary-m14': case 'summary-m15': case 'summary-m16':
        case 'summary-m17': case 'summary-m18': case 'summary-m19': case 'summary-m110': case 'summary-m111': case 'summary-m112':
        case 'summary-m21': case 'summary-m22': case 'summary-m23': case 'summary-m24': case 'summary-m25': case 'summary-m26':
        case 'summary-m27': case 'summary-m28': case 'summary-m29': case 'summary-m210': case 'summary-m211': case 'summary-m212':
        case 'summary-m31': case 'summary-m32': case 'summary-m33': case 'summary-m34': case 'summary-m35': case 'summary-m36':
        case 'summary-m37': case 'summary-m38': case 'summary-m39': case 'summary-m310': case 'summary-m311': case 'summary-m312':
        case 'summary-m41': case 'summary-m42': case 'summary-m43': case 'summary-m44': case 'summary-m45': case 'summary-m46':
        case 'summary-m47': case 'summary-m48': case 'summary-m49': case 'summary-m410': case 'summary-m411': case 'summary-m412':
        case 'summary-m51': case 'summary-m52': case 'summary-m53': case 'summary-m54': case 'summary-m55': case 'summary-m56':
        case 'summary-m57': case 'summary-m58': case 'summary-m59': case 'summary-m510': case 'summary-m511': case 'summary-m512':
        case 'summary-m61': case 'summary-m62': case 'summary-m63': case 'summary-m64': case 'summary-m65': case 'summary-m66':
        case 'summary-m67': case 'summary-m68': case 'summary-m69': case 'summary-m610': case 'summary-m611': case 'summary-m612': {
          let summaryClassName = view.replace('summary-', '');
          if (classData[summaryClassName]) {
            let combinedHistoricalDataForClass = [];
            for (const dateKey in historicalData) {
              const dataForDate = historicalData[dateKey]
                .filter(d => d.class === summaryClassName)
                .map(d => ({ ...d, dateRecorded: d.dateRecorded || dateKey }));
              combinedHistoricalDataForClass = combinedHistoricalDataForClass.concat(dataForDate);
            }
    
            const data = classData[summaryClassName].map((d, i) => {
              let use = '❌', shop = '-', time = '-', dateRecorded = '-';
              const foundToday = todayData.find(t => t.id === d.id);
              if (foundToday) {
                use = '✔️';
                shop = foundToday.shop;
                time = foundToday.time;
                dateRecorded = formatDate(new Date());
              } else {
                const foundInHistory = combinedHistoricalDataForClass.find(t => t.id === d.id);
                if (foundInHistory) {
                  use = '✔️';
                  shop = foundInHistory.shop;
                  time = foundInHistory.time;
                  dateRecorded = foundInHistory.dateRecorded;
                }
              }
              return {
                ลำดับ: i + 1,
                ชื่อ: d.name,
                ID: d.id,
                การใช้: use,
                ร้านค้า: shop,
                เวลาที่บันทึก: time,
                วันที่บันทึก: dateRecorded
              };
            });
    
            const rawSheetName = `สรุป ม.${summaryClassName.slice(1,2)}/${summaryClassName.slice(2)}`;
            const sheetName = makeSafeSheetName(rawSheetName);
            ws = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, sheetName);
          }
          break;
        }

    case 'shop1':
    case 'shop2':
    case 'shop3':
      const shopNum = view.replace('shop', '');
      const shopFilteredData = todayData.filter(d => d.shop === `ร้านค้า ${shopNum}`)
        .map((d, i) => ({
          ลำดับ: i + 1,
          ชื่อ: d.name,
          ID: d.id,
          ร้านค้า: d.shop,
          เวลา: d.time
        }));
      if (shopFilteredData.length > 0) {
        ws = XLSX.utils.json_to_sheet(shopFilteredData);
        XLSX.utils.book_append_sheet(wb, ws, `ร้านค้า ${shopNum}`);
      }
      break;

    case 'summary':
      for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 12; j++) {
          const className = `m${i}${j}`;
          if (classData[className]) {
            let combinedHistoricalDataForClass = [];
            for (const dateKey in historicalData) {
              const dataForDate = historicalData[dateKey]
                .filter(d => d.class === className)
                .map(d => ({ ...d, dateRecorded: d.dateRecorded || dateKey }));
              combinedHistoricalDataForClass = combinedHistoricalDataForClass.concat(dataForDate);
            }

            const data = classData[className].map((d, idx) => {
              let found = todayData.find(t => t.id === d.id);
              let use = '❌', shop = '-', time = '-', dateRecorded = '-';

              if (found) {
                use = '✔️';
                shop = found.shop;
                time = found.time;
                dateRecorded = formatDate(new Date());
              } else {
                const foundInHistory = combinedHistoricalDataForClass.find(t => t.id === d.id);
                if (foundInHistory) {
                  use = '✔️';
                  shop = foundInHistory.shop;
                  time = foundInHistory.time;
                  dateRecorded = foundInHistory.dateRecorded;
                }
              }

              return {
                ลำดับ: idx + 1,
                ชื่อ: d.name,
                ID: d.id,
                การใช้: use,
                ร้านค้า: shop,
                เวลาที่บันทึก: time,
                วันที่บันทึก: dateRecorded
              };
            });

            const rawSheetName = `ม.${i}/${j}`;
            const sheetName = makeSafeSheetName(rawSheetName);
            const ws = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, sheetName);
          }
        }
      }
      break;

    case 'summaryOneSheet':
      let allSummaryData = [];
      for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 12; j++) {
          const className = `m${i}${j}`;
          if (classData[className]) {
            const classLabel = `ม.${i}/${j}`;
            let combinedHistoricalDataForClass = [];
            for (const dateKey in historicalData) {
              const dataForDate = historicalData[dateKey]
                .filter(d => d.class === className)
                .map(d => ({ ...d, dateRecorded: d.dateRecorded || dateKey }));
              combinedHistoricalDataForClass = combinedHistoricalDataForClass.concat(dataForDate);
            }

            classData[className].forEach((d, idx) => {
              let found = todayData.find(t => t.id === d.id);
              let use = '❌', shop = '-', time = '-', dateRecorded = '-';

              if (found) {
                use = '✔️';
                shop = found.shop;
                time = found.time;
                dateRecorded = formatDate(new Date());
              } else {
                const foundInHistory = combinedHistoricalDataForClass.find(t => t.id === d.id);
                if (foundInHistory) {
                  use = '✔️';
                  shop = foundInHistory.shop;
                  time = foundInHistory.time;
                  dateRecorded = foundInHistory.dateRecorded;
                }
              }

              allSummaryData.push({
                ลำดับ: idx + 1,
                ชั้น: classLabel,
                ชื่อ: d.name,
                ID: d.id,
                การใช้: use,
                ร้านค้า: shop,
                เวลาที่บันทึก: time,
                วันที่บันทึก: dateRecorded
              });
            });
          }
        }
      }
      if (allSummaryData.length > 0) {
        ws = XLSX.utils.json_to_sheet(allSummaryData);
        XLSX.utils.book_append_sheet(wb, ws, makeSafeSheetName('สรุปทั้งหมด'));
      }
      break;
  }

  if (wb.SheetNames.length > 0) {
    XLSX.writeFile(wb, `${view}.xlsx`);
  } else {
    alert('ไม่มีข้อมูลให้ดาวน์โหลดสำหรับมุมมองนี้');
  }
}

//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
//มันดีละอย่าไปยุ่งกับแม่ง
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

// ฟังก์ชัน Logout
function logout() {
console.log("User logged out.");
localStorage.removeItem('userRole'); // ลบข้อมูลบทบาทผู้ใช้ออกจาก Local Storage
showPage('login-page'); // สลับกลับไปหน้า Login
hideAllMenusAndButtons(); // ซ่อนทุกเมนูและปุ่มที่เกี่ยวข้องหลังจาก Logout
}

// ทำให้ฟังก์ชัน logout เข้าถึงได้จาก HTML (global)
window.logout = logout;

// **สำคัญ**: หากคุณมีการจัดการบทบาทผู้ใช้ (admin, user, shop) ที่แสดงเมนูต่างกัน
// คุณต้องแน่ใจว่าฟังก์ชันที่ใช้แสดงเมนูหลังจาก login (เช่น showAdminElements, displayUserElements, displayShopElements)
// ได้ถูกเรียกใช้หลังจาก login สำเร็จ และ `hideAllMenusAndButtons()` ถูกเรียกใช้เมื่อ Logout
// เพื่อให้ปุ่มและเมนูต่างๆ แสดงผลได้ถูกต้องตามบทบาท

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





// ฟังก์ชันสำหรับผู้ดูแลระบบ เพื่อล้างข้อมูลทั้งหมด (todayData และ historicalData) ด้วยตนเอง
function clearAllDataManually() {
    if (currentUserRole !== 'admin') {
        alert('คุณไม่มีสิทธิ์ในการดำเนินการนี้');
        return;
    }

    if (confirm('คำเตือน: คุณแน่ใจหรือไม่ว่าต้องการล้างข้อมูลการใช้คูปองทั้งหมด? ทั้งข้อมูลวันนี้และข้อมูลย้อนหลังจะถูกลบออกทั้งหมด การกระทำนี้ไม่สามารถย้อนกลับได้')) {
        todayData = []; // ล้าง todayData
        historicalData = {}; // ล้าง historicalData
        localStorage.setItem('todayData', JSON.stringify(todayData)); // บันทึกการเปลี่ยนแปลง
        localStorage.setItem('historicalData', JSON.stringify(historicalData)); // บันทึกการเปลี่ยนแปลง

        console.log('All data (todayData and historicalData) has been manually cleared by admin.');
        alert('ข้อมูลทั้งหมดถูกล้างเรียบร้อยแล้ว');

        // อัปเดต UI ที่เกี่ยวข้องทั้งหมดทันที
        renderTodayTable(); // สถิติวันนี้จะว่างเปล่า
        for (const className in classData) {
            updateClassTable(className); // ตารางตามลำดับชั้นจะว่างเปล่า
            updateClassTableForSummary(className); // ตารางสรุปรายชั้นจะว่างเปล่า
        }
        updateSummaryAllView(); // ตารางสรุปรวมทั้งหมดจะว่างเปล่า

        // รีเฟรชตารางร้านค้าทั้งหมด (ถ้า Admin กำลังดูอยู่)
        // (คุณอาจจะต้องเพิ่มเงื่อนไขสำหรับร้านค้าตามจำนวนที่คุณมี)
        if (document.getElementById('view-shop1-admin').style.display === 'block') updateShopTable(1, 'admin');
        if (document.getElementById('view-shop2-admin').style.display === 'block') updateShopTable(2, 'admin');
        if (document.getElementById('view-shop3-admin').style.display === 'block') updateShopTable(3, 'admin');

        // ซ่อนเมนูดรอปดาวน์หลังจากกดล้าง
        const userDropdownMenu = document.getElementById('user-dropdown-menu');
        if (userDropdownMenu) {
            userDropdownMenu.classList.remove('show');
        }
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