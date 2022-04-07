import display from "./components/display/display";
import search from "./components/search/search";
import main from "./main.html?raw";
import "./style.css";

interface Component {
  id: string;
  component: HTMLElement;
}

const app: HTMLDivElement = document.querySelector<HTMLDivElement>("#app")!;
const components: Component[] = [
  { id: "search", component: search },
  { id: "display", component: display },
];

app.innerHTML = main;
components.forEach((value: Component) => {
  const result: HTMLElement | null = app.querySelector(`#${value.id}`);
  if (result) {
    result.replaceWith(value.component);
  }
});
