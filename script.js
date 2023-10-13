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

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode"); // Toggle the dark-mode class on the body element
  const desktopNav = document.getElementById("desktop-nav");
  desktopNav.classList.toggle("dark-mode"); // Toggle the dark-mode class on the navbar

  // Ubah warna latar belakang dan warna teks sesuai dengan dark mode
  if (body.classList.contains("dark-mode")) {
    desktopNav.style.backgroundColor = "#333"; // Ubah latar belakang menjadi hitam
    desktopNav.style.color = "#fff"; // Ubah warna teks menjadi putih
    const navLinks = desktopNav.querySelectorAll("a");
    for (let link of navLinks) {
      link.style.color = "#fff"; // Ubah warna tautan navigasi menjadi putih
    }
  } else {
    // Jika dark mode dinonaktifkan, kembalikan warna latar belakang dan teks seperti semula
    desktopNav.style.backgroundColor = "#fff";
    desktopNav.style.color = "#fff";
    const navLinks = desktopNav.querySelectorAll("a");
    for (let link of navLinks) {
      link.style.color = "#fff";
    }
  }
}

window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector("body");

  setTimeout(function () {
    preloader.style.display = "none"; // Hide the preloader after 3 seconds
    content.style.overflow = "visible"; // Show the content
  }, 2000); // Change 3000 to the desired duration in milliseconds
});
