import { BIO } from "./modules/bio.js";
import { PRESENTATION } from "./modules/presentation.js";
import { createElm, formatText, formatTextInArray } from "./modules/utils.js";

const createList = (obj, titleClass, contentClass) => {
  const ul = createElm("ul");
  for (const [key, val] of Object.entries(obj)) {
    if (val === "") {
      continue;
    }
    const li = createElm("li");
    const formattedContent = Array.isArray(val)
      ? formatTextInArray(key, val, titleClass, contentClass)
      : formatText(key, val, titleClass, contentClass);

    li.innerHTML = formattedContent;
    ul.appendChild(li);
  }
  return ul;
};

// render sidebar
const data = BIO().info;
const section = document.querySelector("#base-info");
for (const val of Object.values(data)) {
  const ul = createList(val, "", "sidebar-list");
  section.appendChild(ul);
}

// render main page
const feat = PRESENTATION().info;
const strengthSection = document.querySelector("#strength");
for (const [key, val] of Object.entries(feat)) {
  const headder = document.createElement("h2");
  headder.textContent = key;
  const ul = createList(val, "content-list-title", "");
  strengthSection.appendChild(headder);
  strengthSection.appendChild(ul);
}
