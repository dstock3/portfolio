const projectElements = sectionBuilder("projects");
const sectionProject = projectElements[0];
const projectContainer = projectElements[1];
const projectRow = projectElements[2];
projectRow.classList.add("text-center", "mt-5");
const projectHead = elementBuilder("h1", "display-2", projectRow);
projectHead.classList.add("fw-bold", "text-capitalize");
projectHead.innerHTML = "Latest Work";
const headLine = elementBuilder("div", "heading-line", projectRow);
const paraProject = elementBuilder("p", "lead", projectRow);
paraProject.innerHTML =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid quo vitae impedit.";

const buttonRow = elementBuilder("div", "row", projectContainer);
buttonRow.classList.add("text-center", "mt-3", "mb-4");
const buttonCol = elementBuilder("div", "col-md-12", buttonRow);

const projectBodyRow = elementBuilder("div", "row", projectContainer);

const projectButtonArray = ["All", "Vanilla JS", "React", "Mockups"];
const projectButtonElements = buttonBuilderJr(projectButtonArray, buttonCol);
const allButton = projectButtonElements[0];
const websitesButton = projectButtonElements[1];
const designButton = projectButtonElements[2];
const mockupsButton = projectButtonElements[3];

projectIterator(dummyProjectArray, projectBodyRow);
projectButtonListener(websitesButton, dummyProjectArray);
projectButtonListener(designButton, dummyProjectArray);
projectButtonListener(mockupsButton, dummyProjectArray);
allButtonListener(dummyProjectArray);
