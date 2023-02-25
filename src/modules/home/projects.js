import { elementBuilder, buttonBuilderJr, sectionBuilder, projectIterator, projectButtonListener, allButtonListener } from "../functions.js";
import { projectArray } from "../data.js";

const projects = () => {
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
  paraProject.innerHTML = "Check out my most recent projects.";
  
  const buttonRow = elementBuilder("div", "row", projectContainer);
  buttonRow.classList.add("text-center", "mt-3", "mb-4");
  const buttonCol = elementBuilder("div", "col-md-12", buttonRow);
  
  const projectBodyRow = elementBuilder("div", "row", projectContainer);
  
  const projectButtonArray = ["All", "JavaScript", "React", "Express", "Python", "Designs"];
  const projectButtonElements = buttonBuilderJr(projectButtonArray, buttonCol);
  const allButton = projectButtonElements[0];
  const javascriptButton = projectButtonElements[1];
  const reactButton = projectButtonElements[2];
  const expressButton = projectButtonElements[3];
  const designsButton = projectButtonElements[4];
  const pythonButton = projectButtonElements[5];
  
  projectIterator(projectArray, projectBodyRow);
  projectButtonListener(javascriptButton, projectArray, projectBodyRow);
  projectButtonListener(reactButton, projectArray, projectBodyRow);
  projectButtonListener(expressButton, projectArray, projectBodyRow);
  projectButtonListener(pythonButton, projectArray, projectBodyRow);
  projectButtonListener(designsButton, projectArray, projectBodyRow);
  allButtonListener(allButton, projectArray, projectBodyRow);
}

export { projects }
