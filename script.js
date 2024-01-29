const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// Select the links you want to apply smooth scrolling to
const smoothScrollLinks = document.querySelectorAll(".smooth-scroll"); // Or any other selector

smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        // Optional: Customize alignment and scrolling position
        block: "start", // or 'center', 'end', 'nearest'
        inline: "start", // or 'center', 'end', 'nearest'
      });
    }
  });
});

function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    initialSlide: 1,
  });
}

// function menuAnimation() {
//   var menu = document.querySelector("nav h3");
//   var full = document.querySelector("#full-scr");
//   var navimg = document.querySelector("nav img");
//   var flag = 0;
//   menu.addEventListener("click", function () {
//     if (flag == 0) {
//       full.style.top = 0;
//       navimg.style.opacity = 0;
//       flag = 1;
//     } else {
//       full.style.top = "-100%";
//       navimg.style.opacity = 1;
//       flag = 0;
//     }
//   });
// }

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

swiperAnimation();
page4Animation();
// menuAnimation();
loaderAnimation();

for (let i = 1; i <= 7; i++) {
  const favDialog = document.getElementById(`favDialog${i}`);
  const confirmBtn = document.getElementById(`confirmBtn${i}`);
  const showDialogBtn = document.getElementById(`showDialogBtn${i}`);

  showDialogBtn.addEventListener("click", () => favDialog.showModal());

  confirmBtn.addEventListener("click", () => {
    favDialog.close();
  });
}

const favDialog = document.getElementById("favDialog");
const confirmBtn = document.getElementById("confirmBtn");
const showDialogBtn = document.getElementById("showDialogBtn");

showDialogBtn.addEventListener("click", () => favDialog.showModal());

confirmBtn.addEventListener("click", () => {
  favDialog.close();
});
