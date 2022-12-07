import petsData from "./data-pets.js";

function showPetInfo() {
  this.nextSibling.style.transform = "translateY(-50px)";
  this.nextSibling.style.color = "white";
}
function hidePetInfo() {
  this.nextSibling.style.transform = "none";
  this.nextSibling.style.color = "inherit";
}

function setItems(container) {
  const items = matchMedia("(min-width: 641px").matches ? 6 : 4;
  const tempSet = new Set();
  while (tempSet.size < items) {
    tempSet.add(Math.round(Math.random() * 6));
  }
  tempSet.forEach((el) => {
    const { name, image, location, food } = petsData[el];
    const card = document.createElement("div");
    card.className = "card";
    const imageContainer = document.createElement("div");
    imageContainer.innerHTML = `<img src=${image} alt=${name} />`;
    imageContainer.className = "image-container";
    imageContainer.addEventListener("mouseover", showPetInfo);
    imageContainer.addEventListener("mouseout", hidePetInfo);
    card.appendChild(imageContainer);
    const info = document.createElement("div");
    info.className = "wrapper";
    info.innerHTML = `<div class="content">
      <span class="text">
        <h5>${name}</h5>
        <div>${location}</div>
      </span>
      <img src=${
        food === "banana-bamboo"
          ? "icons/banana-bamboo_icon.png"
          : "icons/meet-fish_icon.png"
      } alt=${food} />
    </div>`;
    card.appendChild(info);
    container.appendChild(card);
  });
}
function turn() {
  const button = this;
  this.removeEventListener("click", turn);
  const right = this.innerText !== "←";
  const wrapper = document.querySelector(".cards-wrapper");
  const oldContainer = wrapper.firstElementChild;
  const newContainer = document.createElement("div");
  newContainer.className = "cards-container";
  setItems(newContainer);
  wrapper.appendChild(newContainer);
  oldContainer.addEventListener("animationend", () => {
    oldContainer.remove();
    newContainer.style.animationName = "";
    button.addEventListener("click", turn);
  });
  oldContainer.style.animationName = right ? "center-left" : "right-center";
  oldContainer.style.animationDirection = right ? "normal" : "reverse";
  newContainer.style.animationName = right ? "right-center" : "center-left";
  newContainer.style.animationDirection = right ? "normal" : "reverse";
}
export function petCarousel() {
  const container = document.querySelector(".cards-container");
  setItems(container);

  document.querySelector(".arrow:first-child").addEventListener("click", turn);
  document.querySelector(".arrow:last-child").addEventListener("click", turn);
  matchMedia("(min-width: 641px").addEventListener("change", () => {
    const container = document.querySelector(".cards-container");
    for (let i = container.children.length; i; i--) {
      container.removeChild(container.children.item(i - 1));
    }
    setItems(container);
  });
}
