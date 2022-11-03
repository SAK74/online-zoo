function showPetInfo(target) {
  target.children[1].style.visibility = "visible";
}
function hidePetInfo(target) {
  target.children[1].style.visibility = "hidden";
}

function addEventToImg() {
  const cards = document.getElementsByClassName("card");
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
}
