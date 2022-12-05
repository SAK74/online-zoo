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
  const newContainer = document.createElement("div");
  newContainer.className = "cards-container";
  const wrapper = document.querySelector(".cards-wrapper");
  setItems(newContainer);
  wrapper.appendChild(newContainer);
  newContainer.scrollIntoView({
    behavior: "smooth",
    block: "center",
    // inline: "center",
  });
  setTimeout(() => {
    wrapper.firstElementChild.remove();
  }, 500);
}
export function petCarousel() {
  const container = document.querySelector(".cards-container");
  setItems(container);

  document.querySelector(".arrow:first-child").addEventListener("click", () => {
    document.querySelector(".cards-wrapper").style.flexDirection = "row";
    turn();
  });
  document.querySelector(".arrow:last-child").addEventListener("click", () => {
    document.querySelector(".cards-wrapper").style.flexDirection =
      "row-reverse";
    turn();
  });
  matchMedia("(min-width: 641px").addEventListener("change", () => {
    const container = document.querySelector(".cards-container");
    for (let i = container.children.length; i; i--) {
      container.removeChild(container.children.item(i - 1));
    }
    setItems(container);
  });
}
