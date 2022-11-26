function showPetInfo(target) {
  target.nextSibling.nextSibling.style.transform = "translateY(-50px)";
  target.nextSibling.nextSibling.style.color = "white";
}
function hidePetInfo(target) {
  target.nextSibling.nextSibling.style.transform = "none";
  target.nextSibling.nextSibling.style.color = "inherit";
}

function addEventToImg() {
  const cards = document.getElementsByClassName("image-container");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", (ev) =>
      showPetInfo(ev.currentTarget)
    );
    cards[i].addEventListener("mouseout", (ev) =>
      hidePetInfo(ev.currentTarget)
    );
  }
}
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

function start() {
  addEventToImg();
  donateBtn();
  validation();
  activeLink();

  const menuItems = new DocumentFragment();
  const menuWrapper = document.querySelector(".menu>div");
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
}
