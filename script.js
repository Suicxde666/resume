// ฟังก์ชันสำหรับเพิ่มเอฟเฟกต์แถบเมนู (Navbar) เมื่อเลื่อนเมาส์ลงมา
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // เมื่อเลื่อนลงมาเกิน 50px ให้เพิ่มเงาจางๆ และลดความโปร่งใส
      navbar.classList.add("shadow-[0_4px_30px_rgba(255,255,255,0.05)]");
      navbar.classList.replace("border-white/10", "border-white/20");
    } else {
      // เมื่ออยู่บนสุด ให้กลับไปเป็นเหมือนเดิม
      navbar.classList.remove("shadow-[0_4px_30px_rgba(255,255,255,0.05)]");
      navbar.classList.replace("border-white/20", "border-white/10");
    }
  });
});
// ฟังก์ชันสำหรับเพิ่มเอฟเฟกต์แถบเมนู (Navbar) เมื่อเลื่อนเมาส์ลงมา
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-[0_4px_30px_rgba(255,255,255,0.05)]");
      navbar.classList.replace("border-white/10", "border-white/20");
    } else {
      navbar.classList.remove("shadow-[0_4px_30px_rgba(255,255,255,0.05)]");
      navbar.classList.replace("border-white/20", "border-white/10");
    }
  });

  // ======= โค้ดที่เพิ่มใหม่: เปิดใช้งาน AOS =======
  AOS.init({
    duration: 800, // ความเร็วในการลอยขึ้น (มิลลิวินาที) - 800 คือกำลังสมูท
    once: true,    // ให้แสดงเอฟเฟกต์แค่ครั้งเดียวตอนเลื่อนผ่าน (ถ้าตั้ง false จะทำซ้ำทุกครั้งที่เลื่อนขึ้นลง)
    offset: 100    // ระยะให้หน้าจอเลื่อนมาถึงก่อนค่อยแสดงเอฟเฟกต์
  });
});