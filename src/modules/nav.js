import { elementBuilder, buttonBuilder, linkBuilder } from "./functions.js";
import { links } from './data.js'
import logo from '../assets/images/d.png'

const body = document.getElementsByTagName("body")[0];

const nav = () => {
  const nav = elementBuilder("nav", "navbar", body);
  const containerDiv = elementBuilder("div", "container", nav);
  const logoAnchor = elementBuilder("a", "navbar-brand", containerDiv);
  logoAnchor.href = "#";
  const logoImage = elementBuilder("img", "logo", logoAnchor);
  logoImage.src = logo;
  
  const buttonArray = buttonBuilder(
    "navbar-toggler",
    "navbar-toggler-icon",
    containerDiv
  );
  const toggleButton = buttonArray[0];
  toggleButton.setAttribute("data-bs-toggle", "collapse");
  toggleButton.setAttribute("data-bs-target", "#navbarNav");
  toggleButton.setAttribute("aria-controls", "navbarNav");
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-label", "Toggle navigation");
  const toggleSpan = buttonArray[1];
  
  nav.classList.add(
    "navbar-expand-lg",
    "navbar-dark",
    "menu",
    "shadow",
    "fixed-top"
  );
  const navBar = elementBuilder("div", "collapse", containerDiv);
  navBar.classList.add("navbar-collapse", "justify-content-end");
  navBar.id = "navbarNav"
  const ul = elementBuilder("ul", "navbar-nav", navBar);
  
  const emailButtonArray = buttonBuilder("rounded-pill", "span", containerDiv);
  const emailButton = emailButtonArray[0];
  emailButton.classList.add("btn-rounded");
  emailButton.id = "email-button"
  const emailLink = elementBuilder("a", "email-link", emailButton)
  emailLink.href = "mailto:dstock3@gmail.com"
  const emailSpan = emailButtonArray[1];
  emailSpan.classList.add("email-span");
  const emailSpanContent = elementBuilder("div", "email-text", emailLink)
  emailSpanContent.innerHTML = "dstock3@gmail.com";
  const icon = elementBuilder("i", "fas", emailSpan);
  icon.classList.add("fa-envelope-square");

  
  const linkElementArray = linkBuilder(links, ul, "nav-item");
  
  for (let i = 0; i < linkElementArray.length; i++) {
    linkElementArray[i].classList.add("text-white");
  }
  
}

export { body, nav }
