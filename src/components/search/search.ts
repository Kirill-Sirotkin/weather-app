import search from "./search.html?raw";

const searchContainer: HTMLElement = document.createElement("section");
searchContainer.innerHTML = search;

const settingsButton: HTMLButtonElement | null =
  searchContainer.querySelector("#settings-button");

const settingsImg: HTMLImageElement | null | undefined =
  settingsButton?.querySelector("img");

const settingsImgClasses: DOMTokenList | null | undefined =
  settingsImg?.classList;

const temperatureContainer: HTMLElement | null = searchContainer.querySelector(
  "#temperature-button-container"
);

const temperatureContainerClasses: DOMTokenList | null | undefined =
  temperatureContainer?.classList;

const temperatureButtons: NodeListOf<HTMLButtonElement> =
  searchContainer.querySelectorAll(".temperature-button");

const rotateLine: string = "animate-wiggle";
const opacityLine: string = "opacity-0";
var tempOpacity: boolean = false;

settingsButton?.addEventListener("click", () => {
  tempOpacity = !tempOpacity;
  console.log(temperatureButtons);

  if (tempOpacity) {
    temperatureContainerClasses?.remove(opacityLine);
    temperatureButtons.forEach((tempButton) => {
      tempButton.disabled = !tempOpacity;
    });
  } else {
    temperatureContainerClasses?.add(opacityLine);
    temperatureButtons.forEach((tempButton) => {
      tempButton.disabled = !tempOpacity;
    });
  }
  if (!settingsImgClasses?.contains(rotateLine)) {
    settingsImgClasses?.add(rotateLine);
    setTimeout(() => {
      settingsImgClasses?.remove(rotateLine);
    }, 250);
    return;
  }
});

export default searchContainer;
