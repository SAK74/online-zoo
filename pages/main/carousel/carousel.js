import data from "./data.js";

function handleChange() {
  const step = matchMedia("(max-width: 1000px)").matches ? 327 : 297;
  const input = document.querySelector(".progress_wrapper input");
  document.querySelector(
    ".testimonials .container"
  ).style.transform = `translateX(-${input.value * step}px)`;
}
function setElements(items) {
  const container = document.querySelector(".testimonials .container");
  for (let i = 0; i < items; i++) {
    const { name, descr, icon, date, content } = data[i % 4];
    const elem = document.createElement("div");
    elem.className = "testimonial";
    elem.innerHTML = `<div>
    <div class="testim_header">
      <img src=${icon} alt=${icon} />
      <span>
        <div class="name">${name}</div>
        <div class="descr">
          <span>${descr}</span>
          &bull;;
          <span>${date}</span>
        </div>
      </span>
    </div>
    <p>${content}</p>
  </div>`;
    container.appendChild(elem);
  }
}
export function testimonialsCarousel() {
  setElements(11);
  // handle change range
  const small = matchMedia("(min-width: 1001px)");
  document
    .querySelector(".progress_wrapper input")
    .addEventListener("input", handleChange);
  small.addEventListener("change", handleChange);
}
