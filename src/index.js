import './css/style.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import bootstrapIcon from './assets/images/tech/Bootstrap.svg'
import cssIcon from './assets/images/tech/CSS3.svg'
import gitIcon from './assets/images/tech/git.png'
import htmlIcon from './assets/images/tech/HTML5.svg'
import jsIcon from './assets/images/tech/JS.svg'
import linuxIcon from './assets/images/tech/Linux.svg'
import pythonIcon from './assets/images/tech/Python.svg'
import reactIcon from './assets/images/tech/react.svg'
import sassIcon from './assets/images/tech/Sass.svg'
import ubuntuIcon from './assets/images/tech/ubuntu.png'
import xdIcon from './assets/images/tech/xd.svg'

library.add(fas, far, fab) 

dom.i2svg() 

function elementBuilder(elType, className, parent) {
  const newElement = document.createElement(elType);
  newElement.classList.add(className);
  parent.appendChild(newElement);
  return newElement;
}

function linkBuilder(linkArray, ulVar, className, openNewTab) {
  let linkElementArray = [];
  for (let i = 0; i < linkArray.length; i++) {
    let linkLi = elementBuilder("li", className, ulVar);
    let linkAnchor = elementBuilder("a", "nav-link", linkLi);
    linkAnchor.textContent = linkArray[i].name;
    linkAnchor.href = linkArray[i].link;
    if (openNewTab === true) {
      linkAnchor.rel = "noreferrer noopener";
      linkAnchor.target = "blank";
    }
    linkElementArray.push(linkAnchor);
  }
  return linkElementArray;
}

function sectionBuilder(sectionName) {
  let section = elementBuilder("section", sectionName, body);
  section.setAttribute("id", sectionName);
  let sectionContainer = elementBuilder("div", "container", section);
  let sectionRow = elementBuilder("div", "row", sectionContainer);
  let sectionElements = [section, sectionContainer, sectionRow];
  return sectionElements;
}

function buttonBuilder(buttonClass, spanClass, parent) {
  let button = elementBuilder("button", buttonClass, parent);
  button.type = "button";
  let span = elementBuilder("span", spanClass, button);
  let buttonBuild = [button, span];
  return buttonBuild;
}

function buttonBuilderJr(buttonArray, parent) {
  let buttonElementArray = [];
  for (let i = 0; i < buttonArray.length; i++) {
    let projectButton = elementBuilder("button", "btn", parent);
    projectButton.type = "button";
    projectButton.classList.add("btn-outline-primary", "m-1");
    projectButton.innerHTML = buttonArray[i];
    buttonElementArray.push(projectButton);
  }
  return buttonElementArray;
}

//Wave Border Generator

function waveGenerator(dPath, fillColor, parent) {
  let waveBorder = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  waveBorder.setAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "xmlns",
    "http://www.w3.org/2000/svg"
  );
  waveBorder.setAttributeNS(null, "viewBox", "0 0 1440 320");
  waveBorder.classList.add("wave-border");
  let wavePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  wavePath.setAttribute("fill", fillColor);
  wavePath.setAttribute("fill-opacity", "1");
  wavePath.setAttribute("d", dPath);
  waveBorder.appendChild(wavePath);
  parent.appendChild(waveBorder);
  return [waveBorder, wavePath];
}

/* Project Section */

function projectBoxBuilder(
  imgSrc,
  projectTitle,
  description,
  parent,
  category,
  link
) {
  let projectBodyCol = elementBuilder("div", "col-lg-4", parent);
  projectBodyCol.classList.add("active");
  let projectLink = elementBuilder("a", "project-link", projectBodyCol);
  projectLink.href = link;
  projectLink.rel = "noreferrer noopener";
  projectLink.target = "blank";
  let projectBox = elementBuilder("div", "project-box", projectLink);
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
  let projectElements = [
    projectBodyCol,
    projectBox,
    projectImage,
    projectInfo,
    caption,
    captionHead,
    captionDesc,
    category,
  ];
  return projectElements;
}

function projectIterator(projectArray, parent) {
  let projectElementsArray = [];
  for (let i = 0; i < projectArray.length; i++) {
    let newProject = projectArray[i];
    let newProjectElements = projectBoxBuilder(
      newProject.source,
      newProject.title,
      newProject.description,
      parent,
      newProject.category,
      newProject.link
    );
    projectElementsArray.push(newProjectElements);
  }
  let projectsArray = [projectElementsArray, projectArray];
  return projectsArray;
}

function projectArraySorter(projectArray, category) {
  let newProjectArray = [];
  for (let i = 0; i < projectArray.length; i++)
    if (category === projectArray[i].category) {
      newProjectArray.push(projectArray[i]);
    }
  return newProjectArray;
}

function projectColRemover() {
  let existingProjectCols = document.getElementsByClassName("col-lg-4");
  for (let i = existingProjectCols.length - 1; i >= 0; i--) {
    existingProjectCols[i].remove();
  }
}

function projectButtonListener(projectButton, projectArray, projBodyRow) {
  let newProjectArray = projectArraySorter(
    projectArray,
    projectButton.innerHTML
  );
  projectButton.addEventListener("click", () => {
    projectColRemover();
    return projectIterator(newProjectArray, projBodyRow);
  });
}

function allButtonListener(button, projectArray, projBodyRow) {
  button.addEventListener("click", () => {
    projectColRemover();
    return projectIterator(projectArray, projBodyRow);
  });
}

/* Contact Form */

function formHelper(contactFormArray, parent) {
  let firstName = contactFormArray[0];
  let lastName = contactFormArray[1];
  let email = contactFormArray[2];
  let message = contactFormArray[3];
  for (let i = 0; i < contactFormArray.length; i++) {
    if (i <= 1) {
      let formInfoDiv = elementBuilder("div", "col-lg-6", parent);
      formInfoDiv.classList.add("col-md", "mb-3", "form-elements");
    }
    if (i > 1) {
      let formInfoDiv = elementBuilder("div", "col-lg-12", parent);
      formInfoDiv.classList.add("mb-3", "form-elements");
    }
  }

  let formDivArray = document.getElementsByClassName("form-elements");
  let firstNameDiv = formDivArray[0];
  let lastNameDiv = formDivArray[1];
  let emailDiv = formDivArray[2];
  let messageDiv = formDivArray[3];

  let firstNameInput = elementBuilder("input", "shadow", firstNameDiv);
  firstNameInput.classList.add("form-control", "form-control-lg");
  firstNameInput.type = "text";
  firstNameInput.setAttribute("placeholder", firstName.placeholder);
  firstNameInput.setAttribute("id", firstName.id);

  let lastNameInput = elementBuilder("input", "shadow", lastNameDiv);
  lastNameInput.classList.add("form-control", "form-control-lg");
  lastNameInput.type = "text";
  lastNameInput.setAttribute("placeholder", lastName.placeholder);
  lastNameInput.setAttribute("id", lastName.id);

  let emailInput = elementBuilder("input", "shadow", emailDiv);
  emailInput.classList.add("form-control", "form-control-lg");
  emailInput.type = "text";
  emailInput.setAttribute("placeholder", email.placeholder);
  emailInput.setAttribute("id", email.id);

  let messageInput = elementBuilder("textarea", "shadow", messageDiv);
  messageInput.classList.add("form-control", "form-control-lg");
  messageInput.setAttribute("name", message.name);
  messageInput.setAttribute("placeholder", message.placeholder);
  messageInput.setAttribute("id", message.id);
  messageInput.setAttribute("rows", message.rows);

  let contactButtonDiv = elementBuilder("div", "text-center", parent);
  contactButtonDiv.classList.add("d-grid", "mt-1");
  let contactButton = elementBuilder("button", "btn", contactButtonDiv);
  contactButton.type = "button";
  contactButton.classList.add("btn-primary", "rounded-pill", "pt-3", "pb-3");
  contactButton.innerHTML = "Send Message";
  let contactButtonIcon = elementBuilder("i", "fas", contactButton);
  contactButtonIcon.classList.add("fa-paper-plane");
  contactButtonIcon.id = "plane-icon";
}

/* Footer */

function contactBoxBuilder(contactBoxArray, parent) {
  for (let i = 0; i < contactBoxArray.length; i++) {
    let footerDiv = elementBuilder("div", "col-md-4", parent);
    footerDiv.classList.add(
      "col-lg-4",
      "contact-box",
      "pt-1",
      "d-md-block",
      "d-lg-flex",
      "d-flex"
    );
    let contactBoxIcon = elementBuilder("div", "contact-box__icon", footerDiv);
    let contactBoxContent = contactBoxArray[i].icon;
    contactBoxIcon.innerHTML = contactBoxContent;
    let contactBoxInfo = elementBuilder("div", "contact-box__info", footerDiv);
    let contactBoxAnchor = elementBuilder(
      "a",
      "contact-box__info--title",
      contactBoxInfo
    );
    contactBoxAnchor.innerHTML = contactBoxArray[i].title;
    let contactBoxPara = elementBuilder(
      "p",
      "contact-box__info--subtitle",
      contactBoxInfo
    );
    contactBoxPara.innerHTML = contactBoxArray[i].subtitle;
  }
}

//Technologies Builder

function techBuilder(rowTech, techArray) {
  let imageElementArray = [];
  for (let i = 0; i < techArray.length; i++) {
    let techCol = elementBuilder("div", "col-md-4", rowTech);
    techCol.classList.add("col-lg-1", "mx-auto");
    let techDiv = elementBuilder("div", "tech__logo-box", techCol);
    techDiv.classList.add("shadow-sm");
    let techImage = elementBuilder("img", "img-fluid", techDiv);
    techImage.setAttribute("src", `${techArray[i].source}`);
    techImage.setAttribute("alt", `${techArray[i].alt}`);
    techImage.setAttribute("id", `${techArray[i].id}`);
    imageElementArray.push(techImage);
  }

  return imageElementArray;
}

//Video Carousel

function carouselBuilder(carouselArray, parent) {
  let carouselElementArray = [];
  for (let i = 0; i < carouselArray.length; i++) {
    let carousel = elementBuilder("div", "carousel-item", parent);
    if (i === 0) {
      carousel.classList.add("active");
    }
    let vidCard = elementBuilder("div", "videos__vid", carousel);
    vidCard.classList.add("mx-auto");
    let vidTitle = elementBuilder("h2", "vid-title", vidCard);
    vidTitle.innerHTML = carouselArray[i].title;
    let vidContainer2 = elementBuilder("div", "vid-container", vidCard);
    vidContainer2.innerHTML = carouselArray[i].iframe;
    let vidDescription = elementBuilder("p", "text-start", vidCard);
    vidDescription.innerHTML = carouselArray[i].description;
    let carouselIndexArray = [
      carousel,
      vidCard,
      vidTitle,
      vidContainer2,
      vidDescription,
    ];
    carouselElementArray.push(carouselIndexArray);
  }
  return carouselElementArray;
}

//Nav Info

const about = {
  name: "About",
  link: "/index.html#about",
};

const projects = {
  name: "Projects",
  link: "index.html#projects",
};

const videos = {
  name: "Videos",
  link: "/index.html#videos",
};

const blog = {
  name: "Blog",
  link: "/blog.html",
};

const contact = {
  name: "Contact",
  link: "/index.html#contact",
};

const links = [about, projects, videos, blog, contact];

//Project Info

const ticTacToe = {
  title: "Tic Tac Toe",
  description: "One of my first exercises using Vanilla JS.",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image one alt",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/ticTacToe/",
};

const calculator = {
  title: "Calculator",
  description: "A simple calculator application made in JavaScript.",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image two alt",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/calc/",
};

const restaurant = {
  title: "Chef Vito's Pizzeria",
  description: "A restaurant page built using ES6 modules in JavaScript",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image two alt",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/restaurant/",
}

const battleship = {
  title: "Battleship",
  description: "A web-based Battleship game built in JavaScript with a focus on unit testing",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image three alt",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/battleship/",
};

const onTask = {
  title: "OnTask",
  description: "A Project Management Application built entirely in JavaScript",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image four alt",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/toDoList/",
};

const weatherApp = {
  title: "Weather App",
  description: "A weather forecasting app that connects to the OpenWeatherMap API",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image five alt",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/weatherApp/",
};

const scape95 = {
  title: "Scape 95",
  description: "A Windows 95 nostalgia trip built in React primarily using functional components and custom hooks",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image six alt",
  category: "React",
  link: "https://dstock3.github.io/scape-95/",
};

const resumeBuilder = {
  title: "Resume Builder",
  description: "A resume application built using class-based components in React",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image seven alt",
  category: "React",
  link: "https://dstock3.github.io/cv-app/",
};

const shoppingCart = {
  title: "Shopping Cart",
  description: "A simple shopping cart demo built using router and custom hooks in React",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image eight alt",
  category: "React",
  link: "https://dstock3.github.io/shopping-cart/",
};

const roarBikes = {
  title: "Roar Bikes",
  description: "A design mockup created in Adobe XD",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image eight alt",
  category: "Mockups",
  link: "https://www.youtube.com/watch?v=iUG96J3q8Zg",
};

const projectArray = [
  battleship,
  onTask,
  weatherApp,
  scape95,
  resumeBuilder,
  shoppingCart,
  ticTacToe,
  calculator,
  restaurant,
  roarBikes
];

//Tech Info

const html = {
  source: htmlIcon,
  alt: `HTML logo`,
  id: `html`,
};

const css = {
  source: cssIcon,
  alt: `CSS logo`,
  id: `css`,
};

const linux = {
  source: linuxIcon,
  alt: `Linux logo`,
  id: `linux`,
};

const ubuntu = {
  source: ubuntuIcon,
  alt: `Ubuntu logo`,
  id: `ubuntu`,
};

const python = {
  source: pythonIcon,
  alt: `Python logo`,
  id: `python`,
};

const sass = {
  source: sassIcon,
  alt: `Sass logo`,
  id: `sass`,
};

const js = {
  source: jsIcon,
  alt: `Javascript logo`,
  id: `javascript`,
};

const bootstrap = {
  source: bootstrapIcon,
  alt: `Bootstrap logo`,
  id: `bootstrap`,
};

const git = {
  source: gitIcon,
  alt: `Git logo`,
  id: `git`,
};

const react = {
  source: reactIcon,
  alt: `React logo`,
  id: `react`,
}

const xd = {
  source: xdIcon,
  alt: "Adobe XD logo",
  id: "xd",
}

const techArray = [html, css, js, react, sass, bootstrap, linux, ubuntu, python, git, xd];

//Video Carousel

const vidOne = {
  title: `Learn Bootstrap 5 and SASS by Building a Portfolio Website`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iJKCj8uAHz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `Learn Bootstrap 5 and Sass by building a portfolio website. Bootstrap is one of the most popular CSS frameworks and Sass is one of the most popular preprocessors for CSS.`,
};

const vidTwo = {
  title: `JavaScript Programming`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jS4aFq5-91M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `Learn JavaScript from scratch by solving over a hundred different coding challenges. Go here for the interactive browser version: https://scrimba.com/learn/learnjavascript`,
};

const vidThree = {
  title: `Python Backend Web Development Course (with Django)`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jBzwzrDvZ18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `This video is a full backend web development course with python. In the course, you will learn everything you need to know to start your web development journey with Python and Django.`,
};

const carouselVidArray = [vidOne, vidTwo, vidThree];

//Contact Form Info
const firstName = {
  placeholder: "First Name",
  id: "inputFirstName",
};

const lastName = {
  placeholder: "Last Name",
  id: "inputLastName",
};

const email = {
  placeholder: "E-mail Address",
  id: "inputEmail",
};

const message = {
  name: "message",
  placeholder: "Enter your message here.",
  id: "message",
  rows: "8",
};

const formArray = [firstName, lastName, email, message];

//Blog Info
const article = {
  title: "Blog 1 Example Title",
  preview:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem...",
};

//Footer Contact Info

const phoneInfo = {
  title: `+0 (000) 000-0000`,
  subtitle: `Mon-Fri 9am-6pm (CST)`,
  icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    <path d="M15 7a2 2 0 0 1 2 2" />
    <path d="M15 3a6 6 0 0 1 6 6" />
  </svg>`,
};

const emailInfo = {
  title: `info@company.com`,
  subtitle: `Online Support`,
  icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <polyline points="3 9 12 15 21 9 12 3 3 9" />
    <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
    <line x1="3" y1="19" x2="9" y2="13" />
    <line x1="15" y1="13" x2="21" y2="19" />
  </svg>`,
};

const locationInfo = {
  title: `Chicago, IL`,
  subtitle: `United States`,
  icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="18" y1="6" x2="18" y2="6.01" />
    <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
    <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
    <line x1="9" y1="4" x2="9" y2="17" />
    <line x1="15" y1="15" x2="15" y2="20" />
  </svg>`,
};

const contactBoxArray = [phoneInfo, emailInfo, locationInfo];
      

  const body = document.getElementsByTagName("body")[0];
  const nav = elementBuilder("nav", "navbar", body);
  const containerDiv = elementBuilder("div", "container", nav);
  const logoAnchor = elementBuilder("a", "navbar-brand", containerDiv);
  logoAnchor.href = "index.html";
  const logoImage = elementBuilder("img", "logo", logoAnchor);
  logoImage.src = "#";
  
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
  const ul = elementBuilder("ul", "navbar-nav", navBar);
  
  const phoneButtonArray = buttonBuilder("rounded-pill", "span", containerDiv);
  const phoneButton = phoneButtonArray[0];
  phoneButton.classList.add("btn-rounded");
  const phoneSpan = phoneButtonArray[1];
  const icon = elementBuilder("i", "fas", phoneSpan);
  icon.classList.add("fa-phone-alt");
  phoneButton.innerHTML = "+1 (000) 000-0000";
  
  const linkElementArray = linkBuilder(links, ul, "nav-item");
  
  for (let i = 0; i < linkElementArray.length; i++) {
    linkElementArray[i].classList.add("text-white");
  }


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
  const touchAnchor = elementBuilder("a", "get-in-touch", colAbout1);
  touchAnchor.href = "#contact";
  const touchButtonArray = buttonBuilder("rounded-pill", "span", touchAnchor);
  const touchButton = touchButtonArray[0];
  const touchText = document.createTextNode("Get In Touch");
  touchButton.appendChild(touchText);
  touchButton.classList.add("btn-rounded");
  const touchSpan = touchButtonArray[1];
  touchSpan.id = "touch-span"
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
  lightboxAnchor.classList.add(
    "position-absolute",
    "top-50",
    "start-50",
    "translate-middle"
  );
  lightboxAnchor.href = "#";
  const anchorSpan = elementBuilder("span", "span", lightboxAnchor);
  const anchorIcon = elementBuilder("i", "fas", anchorSpan);
  anchorIcon.classList.add("fa-play-circle");
  const borderSpan = elementBuilder("span", "border-animation", lightboxAnchor);
  borderSpan.classList.add("border-animation--border-1");
  const borderSpan2 = elementBuilder("span", "border-animation", lightboxAnchor);
  borderSpan2.classList.add("border-animation--border-2");
  
  const aboutWaveArray = waveGenerator(
    "M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "#ffffff",
    sectionAbout
  );
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
  
  projectIterator(projectArray, projectBodyRow);
  projectButtonListener(websitesButton, projectArray, projectBodyRow);
  projectButtonListener(designButton, projectArray, projectBodyRow);
  projectButtonListener(mockupsButton, projectArray, projectBodyRow);
  allButtonListener(allButton, projectArray, projectBodyRow);

//Basic elements
const vidElements = sectionBuilder("videos");
const vidSection = vidElements[0];
const vidContainer = vidElements[1];
const vidRow = vidElements[2];
vidRow.classList.add("text-center", "text-white");

//Section Head
const vidHead = elementBuilder("h1", "display-3", vidRow);
vidHead.classList.add("fw-bold", "mt-4");
vidHead.innerHTML = "Videos";
const vidLine = elementBuilder("hr", "mx-auto", vidRow);
vidLine.setAttribute("style", "width: 100px; height: 3px; ");
const vidPara = elementBuilder("p", "lead", vidRow);
vidPara.classList.add("pt-1");
vidPara.innerHTML = "lorem ipsum lorem ipsum lorem ipsum";

//Videos
const vidRow2 = elementBuilder("div", "row", vidContainer);
vidRow2.classList.add("align-items-center");
const carouselDiv = elementBuilder("div", "carousel", vidRow2);
carouselDiv.classList.add("slide");
carouselDiv.setAttribute("id", "carouselExampleCaptions");
carouselDiv.setAttribute("data-bs-ride", "carousel");
const carouselInnerDiv = elementBuilder("div", "carousel-inner", carouselDiv);
const carouselElementArray = carouselBuilder(
  carouselVidArray,
  carouselInnerDiv
);

//Buttons
const buttonDiv = elementBuilder("div", "text-center", vidRow2);
buttonDiv.classList.add("button-container");
const prevButton = elementBuilder("button", "btn", buttonDiv);
prevButton.classList.add("btn-outline-light", "fas", "fa-long-arrow-alt-left");
prevButton.type = "button";
prevButton.setAttribute("data-bs-target", "#carouselExampleCaptions");
prevButton.setAttribute("data-bs-slide", "prev");
const nextButton = elementBuilder("button", "btn", buttonDiv);
nextButton.classList.add("btn-outline-light", "fas", "fa-long-arrow-alt-right");
nextButton.type = "button";
nextButton.setAttribute("data-bs-target", "#carouselExampleCaptions");
nextButton.setAttribute("data-bs-slide", "next");

const techElements = sectionBuilder("tech");
const sectionTech = techElements[0];
const techContainer = techElements[1];
const rowTech = techElements[2];
rowTech.classList.add("text-center");
const techHead = elementBuilder("h4", "fw-bold", rowTech);
techHead.classList.add("lead", "mb-3", "mt-3", "pt-3");
techHead.innerHTML = "Technologies";
const techLine = elementBuilder("div", "heading-line", rowTech);
techLine.classList.add("mb-5");

const techContainer2 = elementBuilder("div", "tech-container", sectionTech);
const rowTech2 = elementBuilder("div", "row", techContainer2);
rowTech2.classList.add("tech-row", "mb-0", "pb-4");

const techImageArray = techBuilder(rowTech2, techArray);


//Blog Elements
const blogElements = sectionBuilder("blog");
const blogSection = blogElements[0];
const blogSectionContainer = blogElements[1];
const blogRow = blogElements[2];

blogSection.classList.add("gradient");
blogSectionContainer.classList.add("text-center");

const blogWaveArrayTop = waveGenerator(
  "M0,192L48,181.3C96,171,192,149,288,122.7C384,96,480,64,576,69.3C672,75,768,117,864,160C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
  "#ffffff",
  blogSection
);

const blogWaveTop = blogWaveArrayTop[0];
blogSection.insertBefore(blogWaveTop, blogSection.childNodes[0]);

const blogHead = elementBuilder("h1", "display-2", blogRow);
blogHead.classList.add("text-white", "mt-4");
blogHead.innerHTML = "Blog";
const blogLine = elementBuilder("hr", "mx-auto", blogRow);
const blogRow2 = elementBuilder("div", "row", blogSectionContainer);
blogRow2.classList.add("pt-2", "pb-2", "mt-5", "mb-4");
const blogCol = elementBuilder("div", "col-md-7", blogRow2);
blogCol.classList.add("border-right");
const blogTitleBkg = elementBuilder("div", "text-white", blogCol);
blogTitleBkg.classList.add("p-1");
const blogTitle = elementBuilder("h2", "text-capitalize", blogTitleBkg);
blogTitle.classList.add("text-center");
blogTitle.innerHTML = article.title;
const blogBodyBkg = elementBuilder("div", "text-white", blogCol);
blogBodyBkg.classList.add("p-2", "text-start");
const blogBody = elementBuilder("p", "blog__content", blogBodyBkg);
blogBody.classList.add("fw-light");
blogBody.innerHTML = article.preview;
const blogLink = elementBuilder("a", "float-end", blogCol);
blogLink.classList.add("me-4", "text-white", "mb-4");
blogLink.href = "blog.html";
blogLink.innerHTML = "Read More";
const blogCol2 = elementBuilder("div", "col-md-5", blogRow2);
const imageDiv = elementBuilder("div", "blog__pic", blogCol2);
const blogImage = elementBuilder("img", "img-fluid", imageDiv);
blogImage.src = "https://dummyimage.com/600x400/000/0011ff.png";
blogImage.classList.add("shadow");

const blogWaveArrayBottom = waveGenerator(
  "M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
  "#e9ecef",
  blogSection
);

const contactElements = sectionBuilder("contact");
const contactSection = contactElements[0];
const contactSectionContainer = contactElements[1];
const contactRow = contactElements[2];
contactRow.classList.add("text-center");
const contactHead = elementBuilder("h1", "display-3", contactRow);
contactHead.classList.add("fw-bold");
contactHead.innerHTML = "Contact Me";
const contactHeadLine = elementBuilder("div", "heading-line", contactRow);
const contactPara = elementBuilder("p", "lh-lg", contactRow);
contactPara.innerHTML =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

const contactRow2 = elementBuilder("div", "row", contactSectionContainer);
contactRow2.classList.add("text-white");
const contactCol = elementBuilder("div", "col-12", contactRow2);
contactCol.classList.add("col-lg-6", "gradient", "shadow", "p-3");
const contactInfo = elementBuilder("div", "cta-info", contactCol);
contactInfo.classList.add("w-100");
const contactHead2 = elementBuilder("h4", "display-4", contactInfo);
contactHead2.classList.add("fw-bold");
contactHead2.innerHTML = "100% Satisfaction Guaranteed";
const contactPara2 = elementBuilder("p", "lh-lg", contactInfo);
contactPara2.innerHTML =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum cupiditate quasi corporis cumque, nisi enim quam sed magni voluptas assumenda voluptatum.";
const contactHead3 = elementBuilder("h3", "display-3--brief", contactInfo);
contactHead3.innerHTML = "Next Steps";
const contactList = elementBuilder("ul", "cta-info__list", contactInfo);
const listItem = elementBuilder("li", "list-item", contactList);
listItem.innerHTML = "We'll prepare a proposal for your review.";
const listItem2 = elementBuilder("li", "list-item", contactList);
listItem2.innerHTML = "We'll discuss it together.";
const listItem3 = elementBuilder("li", "list-item", contactList);
listItem3.innerHTML = "Let's get going!";

//Form
const contactCol2 = elementBuilder("div", "col-12", contactRow2);
contactCol2.classList.add("col-lg-6", "bg-white", "shadow", "p-3");
const contactFormDiv = elementBuilder("div", "form", contactCol2);
contactFormDiv.classList.add("w-100", "pb-2");
const contactHead4 = elementBuilder("h4", "display-3--title", contactFormDiv);
contactHead4.classList.add("mb-5");
contactHead4.innerHTML = "Get in Touch";
const contactForm = elementBuilder("form", "row", contactFormDiv);
contactForm.setAttribute("action", "contact-form.php");
contactForm.setAttribute("method", "POST");

formHelper(formArray, contactForm);

//FOOTER
const footerElements = sectionBuilder("footer");
const footerSection = footerElements[0];
const footerSectionContainer = footerElements[1];
const footerRow = footerElements[2];
contactBoxBuilder(contactBoxArray, footerRow);

const social = elementBuilder("div", "footer-sm", footerRow);
const socialContainer = elementBuilder("div", "container", social);
const socialRow = elementBuilder("div", "row", socialContainer);
socialRow.classList.add("py-4", "text-center", "text-white");
const socialCol = elementBuilder("div", "col-lg-5", socialRow);
socialCol.classList.add("col-md-5", "mb-3", "mb-0");
socialCol.innerHTML = "Connect with Me on Social Media";
const socialIcons = elementBuilder("div", "col-lg-6", socialRow);
socialIcons.id = "contact-icons"

const facebookAnchor = elementBuilder("a", "social-media-links", socialIcons);
facebookAnchor.href = ""; //Need to enter my facebook when complete
const facebookIcon = elementBuilder("i", "fab", facebookAnchor);
facebookIcon.classList.add("fa-facebook");

const githubAnchor = elementBuilder("a", "social-media-links", socialIcons);
githubAnchor.href = "https://github.com/dstock3"; //Need to enter my github when complete
const githubIcon = elementBuilder("i", "fab", githubAnchor);
githubIcon.classList.add("fa-github");

const linkedAnchor = elementBuilder("a", "social-media-links", socialIcons);
linkedAnchor.href = "https://www.linkedin.com/in/stockdale/"; //Need to enter my linkedin when complete
const linkedIcon = elementBuilder("i", "fab", linkedAnchor);
linkedIcon.classList.add("fa-linkedin");

const youtubeAnchor = elementBuilder("a", "social-media-links", socialIcons);
youtubeAnchor.href = ""; //Need to enter my linkedin when complete
const youtubeIcon = elementBuilder("i", "fab", youtubeAnchor);
youtubeIcon.classList.add("fa-youtube");

const copyrightDiv = elementBuilder("div", "footer-bottom", body);
copyrightDiv.classList.add("pt-5", "pb-5");
const copyrightContainer = elementBuilder("div", "container", copyrightDiv);
const copyrightRow = elementBuilder("div", "row", copyrightContainer);
copyrightRow.classList.add("text-center", "text-white");
const copyrightCol = elementBuilder("div", "col-12", copyrightRow);
const copyrightContent = elementBuilder(
  "div",
  "footer-bottom__copyright",
  copyrightCol
);
const date = new Date();
copyrightContent.innerHTML = `Copyright &COPY; ${date.getFullYear()} by David Stockdale.`;

//BACK TO TOP BUTTON

const topButtonAnchor = elementBuilder("a", "shadow", body);
topButtonAnchor.classList.add("btn-primary", "rounded-circle", "back-to-top");
topButtonAnchor.href = "#";
topButtonAnchor.id = "back-to-top-button"
const topButtonIcon = elementBuilder("i", "fas", topButtonAnchor);
topButtonIcon.classList.add("fa-chevron-up");











  


  





  