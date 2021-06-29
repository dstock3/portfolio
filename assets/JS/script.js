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

    /* Project Section */

function projectBoxBuilder(imgSrc, projectTitle, description, parent, category, link) {
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
    let projectElements = [projectBodyCol, projectBox, projectImage, projectInfo, caption, captionHead, captionDesc, category];
    return projectElements;
};

function projectIterator(projectArray, parent) {
    let projectElementsArray = [];
    for (i = 0; i < projectArray.length; i++) {
        let newProject = projectArray[i];
        let newProjectElements = projectBoxBuilder(newProject.source, newProject.title, newProject.description, parent, newProject.category, newProject.link);
        projectElementsArray.push(newProjectElements);
    };
    let projectsArray = [projectElementsArray, projectArray];
    return projectsArray;
};

function projectArraySorter(projectArray, category) {
    let newProjectArray = []
    for (i = 0; i < projectArray.length; i++)
        if (category === projectArray[i].category) {
            newProjectArray.push(projectArray[i]);
        };
        return newProjectArray
}

function projectColRemover() {
    let existingProjectCols = document.getElementsByClassName('col-lg-4');
    for (i = existingProjectCols.length - 1; i >= 0; i--) {
        existingProjectCols[i].remove();
    }
}

function projectButtonListener(projectButton, projectArray) {
    let newProjectArray = projectArraySorter(projectArray, projectButton.innerHTML);
    projectButton.addEventListener('click', () => {
        projectColRemover();
        return projectIterator(newProjectArray, projectBodyRow);;
    });
};

function allButtonListener(projectArray) {
    allButton.addEventListener('click', () => {
        projectColRemover();
        return projectIterator(projectArray, projectBodyRow);
    });
};

    /* Contact Form */

function formHelper(contactFormArray, parent) {
    let firstName = contactFormArray[0];
    let lastName = contactFormArray[1];
    let email = contactFormArray[2];
    let message = contactFormArray[3];
    for (i = 0; i < contactFormArray.length; i++) {

        if (i <= 1) {
            let formInfoDiv = elementBuilder("div", "col-lg-6", parent);
            formInfoDiv.classList.add("col-md", "mb-3", "form-elements");
        } 
        if (i > 1) {
            let formInfoDiv = elementBuilder("div", "col-lg-12", parent);
            formInfoDiv.classList.add("mb-3", "form-elements");
        };
    };

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
};

    /* Footer */

function contactBoxBuilder(contactBoxArray, parent) {
    for (i = 0; i < contactBoxArray.length; i++) {
        let footerDiv = elementBuilder("div", "col-md-4", parent);
        footerDiv.classList.add("col-lg-4", "contact-box", "pt-1", "d-md-block", "d-lg-flex", "d-flex");
        let contactBoxIcon = elementBuilder("div", "contact-box__icon", footerDiv);
        let contactBoxContent = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler ${contactBoxArray[i].icon}" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        <path d="M15 7a2 2 0 0 1 2 2" />
        <path d="M15 3a6 6 0 0 1 6 6" />`;
    
        contactBoxIcon.innerHTML = contactBoxContent;
        let contactBoxInfo = elementBuilder("div", "contact-box__info", footerDiv);
        let contactBoxAnchor = elementBuilder("a", "contact-box__info--title", contactBoxInfo);
        contactBoxAnchor.innerHTML = contactBoxArray[i].title;
        let contactBoxPara = elementBuilder("p", "contact-box__info--subtitle", contactBoxInfo);
        contactBoxPara.innerHTML = contactBoxArray[i].subtitle;
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

/* CONTACT PAGE */
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
contactPara.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

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
contactPara2.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum cupiditate quasi corporis cumque, nisi enim quam sed magni voluptas assumenda voluptatum."
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
contactForm.setAttribute("action", "#") //Will need to use PHP to add functionality here

const firstName = {
    placeholder: "First Name",
    id: "inputFirstName",
}

const lastName = {
    placeholder: "Last Name",
    id: "inputLastName"
}

const email = {
    placeholder: "E-mail Address",
    id: "inputEmail"
}

const message = {
    name: "message",
    placeholder: "Enter your message here.",
    id: "message",
    rows: "8"
}

const formArray = [firstName, lastName, email, message]

formHelper(formArray, contactForm);

//FOOTER
const footerElements = sectionBuilder("footer");
const footerSection = footerElements[0];
const footerSectionContainer = footerElements[1];
const footerRow = footerElements[2];

const phoneInfo = {
    title: `+0 (000) 000-0000`,
    subtitle: `Mon-Fri 9am-6pm (CST)`,
    icon: `icon-tabler-phone-call`
}

const emailInfo = {
    title: `info@company.com`,
    subtitle: `Online Support`,
    icon: `icon-tabler-mail-opened`
}

const locationInfo = {
    title: `Chicago, IL`,
    subtitle: `United States`,
    icon: `icon-tabler-map-2`
}

const contactBoxArray = [phoneInfo, emailInfo, locationInfo];
contactBoxBuilder(contactBoxArray, footerRow);

const social = elementBuilder("div", "footer-sm", footerRow);
const socialContainer = elementBuilder("div", "container", social);
const socialRow = elementBuilder("div", "row", socialContainer);
socialRow.classList.add("py-4", "text-center", "text-white");
const socialCol = elementBuilder("div", "col-lg-5", socialRow);
socialCol.classList.add("col-md-6", "mb-4", "mb-0");
socialCol.innerHTML = "Connect with Me on Social Media";

const socialIcons = elementBuilder("div", "col-lg-7", socialRow);

const twitterAnchor = elementBuilder("a", "social-media-links", socialIcons);
twitterAnchor.href = "" //Need to enter my github when complete
const twitterIcon = elementBuilder("i", "fab", twitterAnchor);
twitterIcon.classList.add("fa-twitter");

const githubAnchor = elementBuilder("a", "social-media-links", socialIcons);
githubAnchor.href = "" //Need to enter my github when complete
const githubIcon = elementBuilder("i", "fab", githubAnchor);
githubIcon.classList.add("fa-github");

const linkedAnchor = elementBuilder("a", "social-media-links", socialIcons);
linkedAnchor.href = "" //Need to enter my linkedin when complete
const linkedIcon = elementBuilder("i", "fab", linkedAnchor);
linkedIcon.classList.add("fa-linkedin");

const copyrightDiv = elementBuilder("div", "footer-bottom", body);
copyrightDiv.classList.add("pt-5", "pb-5");
const copyrightContainer = elementBuilder("div", "container", copyrightDiv);
const copyrightRow = elementBuilder("div", "row", copyrightContainer);
copyrightRow.classList.add("text-center", "text-white");
const copyrightCol = elementBuilder("div", "col-12", copyrightRow);
const copyrightContent = elementBuilder("div", "footer-bottom__copyright", copyrightCol);
copyrightContent.innerHTML = `Copyright &COPY; 2021 by <a href="#">David Stockdale</a>`;

//BACK TO TOP BUTTON

const topButtonAnchor = elementBuilder("a", "shadow", body);
topButtonAnchor.classList.add("btn-primary", "rounded-circle", "back-to-top");
topButtonAnchor.href = "#";
const topButtonIcon = elementBuilder("i", "fas", topButtonAnchor);
topButtonIcon.classList.add("fa-chevron-up");