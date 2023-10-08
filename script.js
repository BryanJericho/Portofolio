function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const typingEffect = document.querySelector(".typing-effect");

// // Tambahkan event listener pada elemen yang mengatur munculnya teks
// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     typingEffect.classList.add("show");
//   }, 500); // Ubah nilai 1000 sesuai dengan waktu yang Anda inginkan sebelum teks muncul
// });