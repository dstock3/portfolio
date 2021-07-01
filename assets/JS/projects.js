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
paraProject.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid quo vitae impedit.";

const buttonRow = elementBuilder("div", "row", projectContainer);
buttonRow.classList.add("text-center", "mt-3", "mb-4");
const buttonCol = elementBuilder("div", "col-md-12", buttonRow);

const projectBodyRow = elementBuilder("div", "row", projectContainer);

const projectButtonArray = ["All", "Websites", "Design", "Mockups"];
const projectButtonElements = buttonBuilderJr(projectButtonArray, buttonCol);
const allButton = projectButtonElements[0];
const websitesButton = projectButtonElements[1];
const designButton = projectButtonElements[2];
const mockupsButton = projectButtonElements[3];

const projectOne = {
    title: "project one title",
    description: "description one",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image one alt",
    category: "Websites",
    link: "https://www.google.com/"
};

const projectTwo = {
    title: "project two title",
    description: "description two",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image two alt",
    category: "Design",
    link: "#"
};

const projectThree = {
    title: "project three title",
    description: "description three",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image three alt",
    category: "Mockups",
    link: "#"
};

const projectFour = {
    title: "project four title",
    description: "description four",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image four alt",
    category: "Websites",
    link: "#"
};

const projectFive = {
    title: "project five title",
    description: "description five",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image five alt",
    category: "Websites",
    link: "#"
};

const projectSix = {
    title: "project six title",
    description: "description six",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image six alt",
    category: "Design",
    link: "#"
};

const projectSeven = {
    title: "project seven title",
    description: "description seven",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image seven alt",
    category: "Mockups",
    link: "#"
};

const projectEight = {
    title: "project eight title",
    description: "description eight",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image eight alt",
    category: "Websites",
    link: "#"
};

const projectNine = {
    title: "project nine title",
    description: "description nine",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image nine alt",
    category: "Design",
    link: "#"
};

const dummyProjectArray = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine];

projectIterator(dummyProjectArray, projectBodyRow);
projectButtonListener(websitesButton, dummyProjectArray);
projectButtonListener(designButton, dummyProjectArray);
projectButtonListener(mockupsButton, dummyProjectArray);
allButtonListener(dummyProjectArray);
