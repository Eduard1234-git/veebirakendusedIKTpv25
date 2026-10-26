"use strict";
const image = document.getElementById("desk-image");
const areas = [...document.querySelectorAll("area")];
// Originaalkoordinaadid jäävad alles, et korduv suuruse muutmine ei koguks ümardusvigu.
const originals = areas.map(area => area.coords.split(",").map(Number));
function resizeMap() {
  const scale = image.clientWidth / 1024;
  areas.forEach((area, index) => {
    area.coords = originals[index].map(value => Math.round(value * scale)).join(",");
  });
}
image.addEventListener("load", resizeMap);
window.addEventListener("resize", resizeMap);
if (typeof ResizeObserver !== "undefined") new ResizeObserver(resizeMap).observe(image);
resizeMap();
const sections = [...document.querySelectorAll(".description")];
const controls = [...document.querySelectorAll("[data-area]")];
function selectArea(id, focus = false) {
  const selected = sections.find(section => section.id === id);
  sections.forEach(section => {
    section.hidden = section !== selected;
    section.classList.toggle("selected", section === selected);
  });
  document.getElementById("hint").hidden = Boolean(selected);
  document.querySelectorAll("[data-outline]").forEach(outline => {
    outline.classList.toggle("selected", outline.dataset.outline === id);
  });
  controls.forEach(control => {
    if (selected && control.dataset.area === id) control.setAttribute("aria-current", "true");
    else control.removeAttribute("aria-current");
  });
  if (selected && focus) selected.focus({ preventScroll: true });
}
function readLocation(focus = false) {
  selectArea(location.hash.slice(1) || document.body.dataset.initial, focus);
}
controls.forEach(control => {
  control.addEventListener("click", event => {
    event.preventDefault();
    const id = control.dataset.area;
    if (location.hash !== "#" + id) history.pushState(null, "", "#" + id);
    selectArea(id, true);
  });
  const outline = document.querySelector('[data-outline="' + control.dataset.area + '"]');
  ["mouseenter", "focus"].forEach(type => control.addEventListener(type, () => outline.classList.add("hovered")));
  ["mouseleave", "blur"].forEach(type => control.addEventListener(type, () => outline.classList.remove("hovered")));
});
window.addEventListener("hashchange", () => readLocation());
window.addEventListener("popstate", () => readLocation());
readLocation();
