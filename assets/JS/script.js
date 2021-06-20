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

/* NAV ELEMENTS */

const body = document.getElementsByTagName("body")[0];
const nav = elementBuilder("nav", "navbar", body);
const containerDiv = elementBuilder("div", "container", nav);
const logoAnchor = elementBuilder("a", "navbar-brand", containerDiv);
logoAnchor.href = "#";
const logoImage = elementBuilder("img", "logo", logoAnchor);
logoImage.src = "#";
const toggleButton = elementBuilder("button", "navbar-toggler", containerDiv);
toggleButton.type = "button";
toggleButton.setAttribute("data-bs-toggle", "collapse");
toggleButton.setAttribute("data-bs-target", "#navbarNav");
toggleButton.setAttribute("aria-controls", "navbarNav");
toggleButton.setAttribute("aria-expanded", "false");
toggleButton.setAttribute("aria-label", "Toggle navigation");
const toggleSpan = elementBuilder("span", "navbar-toggler-icon", toggleButton);
nav.classList.add("navbar-expand-lg", "navbar-dark", "menu", "shadow", "fixed-top");
const navBar = elementBuilder("div", "collapse", containerDiv);
navBar.classList.add("navbar-collapse", "justify-content-end");
const ul = elementBuilder("ul", "navbar-nav", navBar);
const phoneButton = elementBuilder("button", "rounded-pill", containerDiv);
phoneButton.classList.add("btn-rounded");
phoneButton.type = "button";
phoneButton.innerHTML = "+1 (000) 000-0000";
const phoneSpan = elementBuilder("span", "span", phoneButton);
const i = elementBuilder("i", "fas", phoneSpan);
i.classList.add("fa-phone-alt");

/* NAV LINKS */

const about = {
    name: "About",
    link: "#",
}

const projects = {
    name: "Projects",
    link: "#",
}

const contact = {
    name: "Contact",
    link: "#",
}

const links = [about, projects, contact];

linkBuilder(links, ul, "nav-item");

/* ABOUT */

const sectionAbout = elementBuilder("section", "about", body);
sectionAbout.setAttribute("id", "home");
const aboutContainer = elementBuilder("div", "container", sectionAbout);
const rowAbout = elementBuilder("div", "row", aboutContainer);
rowAbout.classList.add("align-item-center", "text-white");
const colAbout1 = elementBuilder("div", "col-md-6", rowAbout);
colAbout1.classList.add("intros", "text-start");
const aboutHead = elementBuilder("h1", "display-2", colAbout1);
const headSpan = elementBuilder("span", "display-2--intro", aboutHead);
const header = "header header header";
headSpan.innerHTML = header;
const headSpan2 = elementBuilder("span", "display-2--description", aboutHead);
headSpan2.classList.add("lh-base");
const description = "description description description";
headSpan2.innerHTML = description;