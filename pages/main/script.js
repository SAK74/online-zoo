function showPetInfo(target) {
  // console.log(target.children[1]);
  // target.style.height = "426px";
  // target.nextSibling
  target.children[1].style.visibility = "visible";
  // target.children[1].style.display = "flex";
  // target.children[1].style.opacity = "1";
  // target.children[1].style.top = "340px";
}
function hidePetInfo(target) {
  // target.style.height = "350px";
  target.children[1].style.visibility = "hidden";
  // target.children[1].style.display = "none";
  // target.children[1].style.opacity = "0";
  // target.children[1].style.top = "250px";
}

function addEventToImg() {
  const cards = document.getElementsByClassName("card");
  // for (let i = 0; i < cards.length; i++) {
  //   cards[i].addEventListener("mouseover", (ev) =>
  //     showPetInfo(ev.currentTarget)
  //   );
  //   cards[i].addEventListener("mouseout", (ev) =>
  //     hidePetInfo(ev.currentTarget)
  //   );
  // }
  // console.log(cards);
}
function donateBtn() {
  document.getElementById("to_donate").addEventListener("click", () => {
    location.assign("http://127.0.0.1:5500/pages/donate/");
  });
}
function start() {
  addEventToImg();
  donateBtn();
}
