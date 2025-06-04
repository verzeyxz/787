@@ -0,0 +1,33 @@
document.addEventListener('DOMContentLoaded', () => {
  // เรียกฟังก์ชันเพื่อแสดง Modal ทันทีที่ DOM โหลดเสร็จ
  showModal();
});

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn"); // อาจไม่จำเป็นแล้วถ้าแสดงทันที
const closeButton = document.querySelector(".close-button");

// ฟังก์ชันสำหรับแสดง Modal
function showModal() {
  modal.classList.add("show");
}

// ฟังก์ชันสำหรับซ่อน Modal
function hideModal() {
  modal.classList.remove("show");
}

// หากคุณยังต้องการปุ่มเปิด Modal (อาจมีเงื่อนไขอื่นในการแสดง)
if (openModalBtn) {
  openModalBtn.addEventListener("click", showModal);
}

// เพิ่ม Event Listener สำหรับปุ่มปิด
closeButton.addEventListener("click", hideModal);Add commentMore actions

// เพิ่ม Event Listener สำหรับคลิกที่พื้นหลัง Modal เพื่อปิด
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    hideModal();
  }
});
