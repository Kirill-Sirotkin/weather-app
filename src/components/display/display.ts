import display from "./display.html?raw";

const displayContainer: HTMLElement = document.createElement("section");
displayContainer.innerHTML = display;
export default displayContainer;
