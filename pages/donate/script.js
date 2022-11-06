function maxLenght(el) {
  console.log(el.value);
  if (el.value > 9999) {
    el.value = 9999;
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
function start() {
  activeLink();
}
