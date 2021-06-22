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
touchButton.classList.add("btn-rounded");
const touchSpan = touchButtonArray[1];
const touchIcon = elementBuilder("i", "fas", touchSpan);
touchIcon.classList.add("fa-arrow-right");
touchButton.innerHTML = "Get In Touch";

/* VIDEO */
const vidDiv = elementBuilder("div", "col-md-6", rowAbout);
const vidBox = elementBuilder("div", "video-box", vidDiv);
const vidIllus = elementBuilder("img", "img-fluid", vidBox);
vidIllus.alt = "video illustration";
vidIllus.src = "#";
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
const projectHead = elementBuilder("h1", "display-3", projectRow);
projectHead.classList.add("fw-bold", "text-capitalize");
projectHead.innerHTML = "Latest Work";
const headLine = elementBuilder("div", "heading-line", projectRow);
const paraProject = elementBuilder("p", "lead", projectRow);
paraProject.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid quo vitae impedit.";

const buttonRow = elementBuilder("div", "row", projectContainer);
buttonRow.classList.add("text-center", "mt-5", "g-3");
const buttonCol = elementBuilder("div", "col-md-12", buttonRow);

const projectButtonArray = ["All", "Websites", "Design", "Mockups"];

function buttonBuilderJr(buttonArray, parent) {
    let buttonElementArray = [];
    for (i = 0; i < buttonArray.length; i++) {
        let projectButton = elementBuilder("button", "btn", parent);
        projectButton.type = "button";
        projectButton.classList.add("btn-outline-primary");
        projectButton.innerHTML = buttonArray[i];
        buttonElementArray.push(projectButton);
    };
    return buttonElementArray;
};

const projectButtonElements = buttonBuilderJr(projectButtonArray, buttonCol);
const allButton = projectButtonElements[0];
const websitesButton = projectButtonElements[1];
const designButton = projectButtonElements[2];
const mockupsButton = projectButtonElements[3];