import { body } from './nav.js'

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

function descriptionBuilder(descArray, parent) {
  let description = elementBuilder("article", "color-bg-subtle", parent);
  description.classList.add("rounded-bottom-1", "py-2");
  for (let i = 0; i < descArray.length; i++) {
    let descItem = descArray[i]
    let flexDiv = elementBuilder("div", "d-flex", description);
    flexDiv.classList.add("flex-items-center", "desc-div")
    let span = elementBuilder("span", "desc-span", flexDiv)
    span.classList.add("pl-0")
    let pre = elementBuilder("pre", "lh-condensed-ultra", flexDiv)
    pre.innerHTML =  descItem

  }

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
  contactButton.classList.add("btn-primary", "rounded-pill", "pt-3", "pb-3", "contact-button");
  contactButton.innerHTML = "Send Message";
  let contactButtonIcon = elementBuilder("i", "fas", contactButton);
  contactButtonIcon.classList.add("fa-paper-plane");
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
    let techCol = elementBuilder("div", "tech-item", rowTech);
    techCol.classList.add("col-lg-2",  "col-md-4");
    let techDiv = elementBuilder("div", "tech__logo-box", techCol);
    let techImage = elementBuilder("img", "img-fluid", techDiv);
    techImage.setAttribute("src", `${techArray[i].source}`);
    techImage.setAttribute("alt", `${techArray[i].alt}`);
    techImage.setAttribute("id", `${techArray[i].id}`);
    imageElementArray.push(techImage);
    let techDes = elementBuilder("div", "tech-des", techCol);
    techDes.innerHTML = techArray[i].title;
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

export { elementBuilder, linkBuilder, sectionBuilder, buttonBuilder, buttonBuilderJr, descriptionBuilder, waveGenerator, projectBoxBuilder, projectIterator, projectArraySorter, projectColRemover, projectButtonListener, allButtonListener, formHelper, contactBoxBuilder, techBuilder, carouselBuilder }