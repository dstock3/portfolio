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