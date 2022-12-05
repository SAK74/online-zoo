// function showPetInfo(target) {
//   target.nextSibling.nextSibling.style.transform = "translateY(-50px)";
//   target.nextSibling.nextSibling.style.color = "white";
// }
// function hidePetInfo(target) {
//   target.nextSibling.nextSibling.style.transform = "none";
//   target.nextSibling.nextSibling.style.color = "inherit";
// }

// function addEventToImg() {
//   const cards = document.getElementsByClassName("image-container");
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("mouseover", (ev) =>
//       showPetInfo(ev.currentTarget)
//     );
//     cards[i].addEventListener("mouseout", (ev) =>
//       hidePetInfo(ev.currentTarget)
//     );
//   }
// }
function donateBtn() {
  const donateBtns = document.getElementsByClassName("to_donate");
  for (let i = 0; i < donateBtns.length; i++) {
    donateBtns[i].addEventListener("click", () => {
      location.assign("https://sak74.github.io/online-zoo/pages/donate/");
    });
  }
}
function handleChange({ target: { value } }) {
  const submBtn = document.getElementById("submit");
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
    submBtn.style.color = "#333B41";
    submBtn.style.borderColor = "#333B41";
  } else {
    submBtn.style.color = "#D31414";
    submBtn.style.borderColor = "#D31414";
  }
}
function validation() {
  const input = document
    .getElementById("email")
    .addEventListener("change", (ev) => handleChange(ev));
}
function activeLink() {
  const links = document.getElementsByClassName("first-part")[0].children;
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", ({ target }) => {
      for (let j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }
      target.classList.add("active");
    });
  }
}
const overlay = document.createElement("div");
overlay.id = "overlay";
function openMenu() {
  document.querySelector(".menu-container").style.transform = "none";
  document.querySelector(".header").classList.add("opened-menu");
  document.body.appendChild(overlay);
}
function closeMenu() {
  document.querySelector(".menu-container").style.transform = "scaleY(0)";
  document.querySelector(".header").classList.remove("opened-menu");
  document.body.removeChild(document.getElementById("overlay"));
  document.body.querySelector(".menu").classList.remove("opened-menu");
}
overlay.addEventListener("click", closeMenu);
function menuClickHandle() {
  if (!this.classList.contains("opened-menu")) {
    this.classList.add("opened-menu");
    openMenu();
  } else {
    closeMenu();
  }
}
function closePopupTestim() {
  document.body.removeChild(document.querySelector(".popup"));
}
overlay.addEventListener("click", closePopupTestim);
function clickTestimonialHandle() {
  const popup = document.createElement("div");
  popup.appendChild(this.cloneNode(true));
  popup.classList.add("popup");
  const closeBtn = document.createElement("img");
  closeBtn.src = "icons/x_icon.png";
  popup.appendChild(closeBtn);
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(document.getElementById("overlay"));
    closePopupTestim();
  });
  document.body.appendChild(overlay);
  document.body.appendChild(popup);
}

function start() {
  // addEventToImg();
  donateBtn();
  validation();
  activeLink();

  const menuItems = new DocumentFragment();
  const menuWrapper = document.querySelector(".menu-container");

  function burgerChange(mm) {
    menuItems.append(document.querySelector(".first-part"));
    menuItems.append(document.querySelector(".design"));
    if (mm.matches) {
      menuWrapper.appendChild(menuItems);
    } else {
      document.querySelector(".wrapper_header").appendChild(menuItems);
    }
  }

  const arrows = document.querySelectorAll(".icons > img");
  function arrowChange(mm) {
    if (mm.matches) {
      arrows.forEach((arrow) => (arrow.src = "../../assets/icons/arrow.png"));
    } else {
      arrows.forEach((arrow) => (arrow.src = "../../assets/icons/Vector.png"));
    }
  }
  function arrowRotate(mm) {
    if (mm.matches) {
      arrows.forEach((arrow) => (arrow.style.transform = "rotate(90deg)"));
    } else {
      arrows.forEach((arrow) => (arrow.style.transform = "none"));
    }
  }
  function addPopup(mm) {
    const testimonials = document.querySelector(
      ".testimonials .container"
    ).children;
    for (const elem of testimonials) {
      if (mm.matches) {
        elem.addEventListener("click", clickTestimonialHandle);
      } else {
        elem.removeEventListener("click", clickTestimonialHandle);
      }
    }
  }
  const mmedia = matchMedia("(max-width: 640px)");
  mmedia.addEventListener("change", burgerChange);
  mmedia.addEventListener("change", arrowChange);
  mmedia.addEventListener("change", addPopup);
  burgerChange(mmedia);
  arrowChange(mmedia);
  addPopup(mmedia);
  const mobMedia = matchMedia("(max-width: 320px)");
  mobMedia.addEventListener("change", arrowRotate);
  arrowRotate(mobMedia);
  document.querySelector(".menu").addEventListener("click", menuClickHandle);
  testimonialsCarousel();
  petCarousel();
}
import { testimonialsCarousel } from "./carousel/carousel.js";
import { petCarousel } from "./carousel/petsCarousel.js";
start();
