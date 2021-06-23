/* CORE FUNCTIONS */
function elementBuilder (elType, className, parent) {
    const newElement = document.createElement(elType);
    newElement.classList.add(className);
    parent.appendChild(newElement);
    return newElement;
};

function linkBuilder(linkArray, ulVar, className, openNewTab) {
    for (let i = 0; i < linkArray.length; i++) {
        linkLi = elementBuilder('li', className, ulVar);
        linkAnchor = elementBuilder('a', 'nav-link', linkLi);
        linkAnchor.textContent = linkArray[i].name;
        linkAnchor.href = linkArray[i].link;
        linkLi.setAttribute("id", `${linkArray[i].name.toLowerCase()}`);
        
        if (openNewTab === true) {
            linkAnchor.rel = "noreferrer noopener";
            linkAnchor.target = "blank";
        };
    };
};

function sectionBuilder(sectionName) {
    let section = elementBuilder("section", sectionName, body);
    section.setAttribute("id", sectionName);
    let sectionContainer = elementBuilder("div", "container", section);
    let sectionRow = elementBuilder("div", "row", sectionContainer);
    let sectionElements = [section, sectionContainer, sectionRow];
    return sectionElements;
};

function buttonBuilder(buttonClass, spanClass, parent) {
    let button = elementBuilder("button", buttonClass, parent);
    button.type = "button";
    let span = elementBuilder("span", spanClass, button);
    let buttonBuild = [button, span];
    return buttonBuild;
};

function buttonBuilderJr(buttonArray, parent) {
    let buttonElementArray = [];
    for (i = 0; i < buttonArray.length; i++) {
        let projectButton = elementBuilder("button", "btn", parent);
        projectButton.type = "button";
        projectButton.classList.add("btn-outline-primary", "m-1");
        projectButton.innerHTML = buttonArray[i];
        buttonElementArray.push(projectButton);
    };
    return buttonElementArray;
};

function projectBoxBuilder(imgSrc, projectTitle, description, parent, category) {
    let projectBodyCol = elementBuilder("div", "col-lg-4", parent);
    projectBodyCol.classList.add("active");
    let projectBox = elementBuilder("div", "project-box", projectBodyCol);
    projectBox.classList.add("shadow");
    let projectImage = elementBuilder("img", "img-fluid", projectBox);
    projectImage.alt = description;
    projectImage.src = imgSrc;
    projectImage.title = projectTitle;
    let projectInfo = elementBuilder("div", "project-info", projectBox);
    let caption = elementBuilder("div", "caption", projectInfo);
    let captionHead = elementBuilder("h4", "caption-head", caption);
    captionHead.innerHTML = projectTitle;
    let captionDesc = elementBuilder("p", "caption-description", caption);
    captionDesc.innerHTML = description;
    let projectElements = [projectBodyCol, projectBox, projectImage, projectInfo, caption, captionHead, captionDesc, category];
    return projectElements;
};

function projectIterator(projectArray, parent) {
    let projectElementsArray = [];
    for (i = 0; i < projectArray.length; i++) {
        let newProject = projectArray[i];
        let newProjectElements = projectBoxBuilder(newProject.source, newProject.title, newProject.description, parent, newProject.category);
        projectElementsArray.push(newProjectElements);
    };
    return projectElementsArray;
};


/* NAV ELEMENTS */

const body = document.getElementsByTagName("body")[0];
const nav = elementBuilder("nav", "navbar", body);
const containerDiv = elementBuilder("div", "container", nav);
const logoAnchor = elementBuilder("a", "navbar-brand", containerDiv);
logoAnchor.href = "#";
const logoImage = elementBuilder("img", "logo", logoAnchor);
logoImage.src = "#";

const buttonArray = buttonBuilder("navbar-toggler", "navbar-toggler-icon", containerDiv);
const toggleButton = buttonArray[0];
toggleButton.setAttribute("data-bs-toggle", "collapse");
toggleButton.setAttribute("data-bs-target", "#navbarNav");
toggleButton.setAttribute("aria-controls", "navbarNav");
toggleButton.setAttribute("aria-expanded", "false");
toggleButton.setAttribute("aria-label", "Toggle navigation");
const toggleSpan = buttonArray[1];

nav.classList.add("navbar-expand-lg", "navbar-dark", "menu", "shadow", "fixed-top");
const navBar = elementBuilder("div", "collapse", containerDiv);
navBar.classList.add("navbar-collapse", "justify-content-end");
const ul = elementBuilder("ul", "navbar-nav", navBar);

const phoneButtonArray = buttonBuilder("rounded-pill", "span", containerDiv);
const phoneButton = phoneButtonArray[0];
phoneButton.classList.add("btn-rounded");
const phoneSpan = phoneButtonArray[1];
const icon = elementBuilder("i", "fas", phoneSpan);
icon.classList.add("fa-phone-alt");
phoneButton.innerHTML = "+1 (000) 000-0000";


/* NAV LINKS */

const about = {
    name: "About",
    link: "#",
}

const projects = {
    name: "Projects",
    link: "#",
}

const blog = {
    name: "Blog",
    link: "#",
}

const contact = {
    name: "Contact",
    link: "#",
}

const links = [about, projects, blog, contact];

linkBuilder(links, ul, "nav-item");

/* ABOUT */

const aboutSectionElements = sectionBuilder("about");
const sectionAbout = aboutSectionElements[0];
const aboutContainer = aboutSectionElements[1];
const rowAbout = aboutSectionElements[2];

rowAbout.classList.add("align-item-center", "text-white");
const colAbout1 = elementBuilder("div", "col-md-6", rowAbout);
colAbout1.classList.add("intros", "text-start");
const aboutHead = elementBuilder("h1", "display-2", colAbout1);
const headSpan = elementBuilder("span", "display-2--intro", aboutHead);
const header = "Hi, I'm Dave!";
headSpan.innerHTML = header;
const headSpan2 = elementBuilder("span", "display-2--description", aboutHead);
headSpan2.classList.add("lh-base");
const description = "description description description";
headSpan2.innerHTML = description;
const touchButtonArray = buttonBuilder("rounded-pill", "span", rowAbout);
const touchButton = touchButtonArray[0];
const touchText = document.createTextNode("Get In Touch");
touchButton.appendChild(touchText);
touchButton.classList.add("btn-rounded");
const touchSpan = touchButtonArray[1];
const touchIcon = elementBuilder("i", "fas", touchSpan);
touchIcon.classList.add("fa-arrow-right");

/* VIDEO */
const vidDiv = elementBuilder("div", "col-md-6", rowAbout);
vidDiv.classList.add("intros", "text-end");
const vidBox = elementBuilder("div", "video-box", vidDiv);
const vidIllus = elementBuilder("img", "img-fluid", vidBox);
vidIllus.alt = "video illustration";
vidIllus.src = "https://dummyimage.com/600x400/000/0011ff.png";
const lightboxAnchor = elementBuilder("a", "glightbox", vidBox);
lightboxAnchor.classList.add("position-absolute", "top-50", "start-50", "translate-middle");
const anchorSpan = elementBuilder("span", "span", lightboxAnchor);
const anchorIcon = elementBuilder("i", "fas", anchorSpan);
anchorIcon.classList.add("fa-play-circle");
const borderSpan = elementBuilder("span", "border-animation", lightboxAnchor);
borderSpan.classList.add("border-animation--border-1");
const borderSpan2 = elementBuilder("span", "border-animation", lightboxAnchor);
borderSpan2.classList.add("border-animation--border-2");
const zigBorder = elementBuilder("svg", "zig-border", sectionAbout);
zigBorder.setAttribute("xmlns", "http://www.w3.org/2000/svg");
zigBorder.setAttribute("viewBox", "0 0 1440 320");
zigBorder.innerHTML = `<path fill="#ffffff" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,186.7C384,213,480,203,576,170.7C672,139,768,85,864,101.3C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>`;

/* PROJECTS */
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

const projectButtonArray = ["All", "Websites", "Design", "Mockups"];

const projectButtonElements = buttonBuilderJr(projectButtonArray, buttonCol);

const projectBodyRow = elementBuilder("div", "row", projectContainer);

const projectOne = {
    title: "project one title",
    description: "description one",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image one alt",
    category: "Websites"
};

const projectTwo = {
    title: "project two title",
    description: "description two",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image two alt",
    category: "design"
};

const projectThree = {
    title: "project three title",
    description: "description three",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image three alt",
    category: "Mockups"
};

const projectFour = {
    title: "project four title",
    description: "description four",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image four alt",
    category: "Websites"
};

const projectFive = {
    title: "project five title",
    description: "description five",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image five alt",
    category: "Websites"
};

const projectSix = {
    title: "project six title",
    description: "description six",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image six alt",
    category: "Design"
};

const projectSeven = {
    title: "project seven title",
    description: "description seven",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image seven alt",
    category: "Mockups"
};

const projectEight = {
    title: "project eight title",
    description: "description eight",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image eight alt",
    category: "Websites"
};

const projectNine = {
    title: "project nine title",
    description: "description nine",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image nine alt",
    category: "Design"
};


const dummyProjectArray = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine];
let projectElementsArray = projectIterator(dummyProjectArray, projectBodyRow);

const allButton = projectButtonElements[0];
const websitesButton = projectButtonElements[1];
const designButton = projectButtonElements[2];
const mockupsButton = projectButtonElements[3];


function buttonFilter(projectButton) {
    projectButton.addEventListener('click', () => {
        for (i = 0; i < projectElementsArray.length; i++){
            if (projectButton.innerHTML === projectElementsArray[i][7]) {
                projectElementsArray[i][0].classList.remove("hidden");
                projectElementsArray[i][0].classList.add("active");
            } else {
                projectElementsArray[i][0].classList.remove("active");
                projectElementsArray[i][0].classList.add("hidden");
            }
        };
    });
};

for (i = 1; i < projectButtonElements.length; i++) {
    buttonFilter(projectButtonElements[i]);
}

