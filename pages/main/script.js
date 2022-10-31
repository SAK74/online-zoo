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
  document.getElementById("to_donate").addEventListener("click", () => {
    location.assign("https://sak74.github.io/online-zoo/pages/donate/");
  });
}
function start() {
  addEventToImg();
  donateBtn();
}
