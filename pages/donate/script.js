function donateBtn() {
  const donateBtns = document.getElementsByClassName("to_donate");
  for (let i = 0; i < donateBtns.length; i++) {
    donateBtns[i].addEventListener("click", () => {
      location.assign("https://sak74.github.io/online-zoo/pages/donate/");
    });
  }
}
function handleAmountChange(el) {
  if (el.value > 9999) {
    el.value = 9999;
  }
  const ranges = document.forms["donate"]["amount"];
  for (const range of ranges) {
    if (range.value === el.value) {
      range.checked = true;
    }
  }
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
function handleChange({ target: { value } }) {
  const submBtn = document.getElementById("submit");
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
    console.log("match!");
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
function handleRangeCheck() {
  document.forms["donate"]["another-amount"].value = this.value;
}
function handleFormElements() {
  const ranges = document.forms["donate"]["amount"];
  for (const range of ranges) {
    if (range.value === "100") {
      range.checked = true;
    }
    range.addEventListener("change", handleRangeCheck);
  }
}
function start() {
  activeLink();
  donateBtn();
  validation();

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
  const mmedia = matchMedia("(max-width: 640px)");
  mmedia.addEventListener("change", burgerChange);
  burgerChange(mmedia);
  document.querySelector(".menu").addEventListener("click", menuClickHandle);
  handleFormElements();
}
