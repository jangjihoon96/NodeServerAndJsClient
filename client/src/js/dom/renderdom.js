import { createDom } from "./createdom.js";

export const renderDom = (data) => {
  const resultElement = document.getElementById("result");
  data.forEach((data) => {
    resultElement.insertAdjacentHTML("beforeend", createDom(data));
  });
};
