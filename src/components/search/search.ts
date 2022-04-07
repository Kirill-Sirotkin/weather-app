import search from "./search.html?raw";

const searchContainer: HTMLElement = document.createElement("section");
searchContainer.innerHTML = search;

const settingsButton: HTMLButtonElement | null =
  searchContainer.querySelector("#settings-button");

const settingsImg: HTMLImageElement | null | undefined =
  settingsButton?.querySelector("img");

const settingsImgClasses: DOMTokenList | null | undefined =
  settingsImg?.classList;

const rotateLine: string = "animate-wiggle";

settingsButton?.addEventListener("click", () => {
  if (!settingsImgClasses?.contains(rotateLine)) {
    settingsImgClasses?.add(rotateLine);
    setTimeout(() => {
      settingsImgClasses?.remove(rotateLine);
    }, 250);
    return;
  }
});

export default searchContainer;
