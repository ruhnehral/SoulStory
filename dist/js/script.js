
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");   
  navMenu.classList.toggle("hidden");
});


window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

feather.replace();

// const instanceMode = te.Sidenav.getInstance(
//   document.getElementById("sidenav-2")
// );
// const modes = ["push", "over", "side"];

// modes.forEach((mode) => {
//   const modeSwitch = document.getElementById(mode);
//   modeSwitch.addEventListener("click", () => {
//     const instance = te.Sidenav.getInstance(
//       document.getElementById("sidenav-2")
//     );
//     instance.changeMode(mode);
//     modes.forEach((el) => {
//       if (el === mode) {
//         ["text-primary-600", "border-primary-600"].forEach((item) =>
//           modeSwitch.classList.remove(item)
//         );
//         modeSwitch.className +=
//           " bg-primary text-white hover:bg-primary-700 active:bg-primary-800 focus:bg-primary-700 border-transparent";
//       } else {
//         const node = document.getElementById(el);
//         node.className += " text-primary-600 border-primary-600";
//         [
//           "bg-primary",
//           "text-white",
//           "hover:bg-primary-700",
//           "active:bg-primary-800",
//           "focus:bg-primary-700",
//           "border-transparent",
//         ].forEach((item) => node.classList.remove(item));
//       }
//     });
//   });
// });