//FOOTER
const footerElements = sectionBuilder("footer");
const footerSection = footerElements[0];
const footerSectionContainer = footerElements[1];
const footerRow = footerElements[2];

const phoneInfo = {
    title: `+0 (000) 000-0000`,
    subtitle: `Mon-Fri 9am-6pm (CST)`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    <path d="M15 7a2 2 0 0 1 2 2" />
    <path d="M15 3a6 6 0 0 1 6 6" />
  </svg>`,
}

const emailInfo = {
    title: `info@company.com`,
    subtitle: `Online Support`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <polyline points="3 9 12 15 21 9 12 3 3 9" />
    <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
    <line x1="3" y1="19" x2="9" y2="13" />
    <line x1="15" y1="13" x2="21" y2="19" />
  </svg>`
}

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
}

const contactBoxArray = [phoneInfo, emailInfo, locationInfo];
contactBoxBuilder(contactBoxArray, footerRow);

const social = elementBuilder("div", "footer-sm", footerRow);
const socialContainer = elementBuilder("div", "container", social);
const socialRow = elementBuilder("div", "row", socialContainer);
socialRow.classList.add("py-4", "text-center", "text-white");
const socialCol = elementBuilder("div", "col-lg-5", socialRow);
socialCol.classList.add("col-md-5", "mb-3", "mb-0");
socialCol.innerHTML = "Connect with Me on Social Media";
const socialIcons = elementBuilder("div", "col-lg-6", socialRow);

const facebookAnchor = elementBuilder("a", "social-media-links", socialIcons);
facebookAnchor.href = "" //Need to enter my facebook when complete
const facebookIcon = elementBuilder("i", "fab", facebookAnchor);
facebookIcon.classList.add("fa-facebook");

const githubAnchor = elementBuilder("a", "social-media-links", socialIcons);
githubAnchor.href = "https://github.com/dstock3" //Need to enter my github when complete
const githubIcon = elementBuilder("i", "fab", githubAnchor);
githubIcon.classList.add("fa-github");

const linkedAnchor = elementBuilder("a", "social-media-links", socialIcons);
linkedAnchor.href = "https://www.linkedin.com/in/stockdale/" //Need to enter my linkedin when complete
const linkedIcon = elementBuilder("i", "fab", linkedAnchor);
linkedIcon.classList.add("fa-linkedin");

const youtubeAnchor = elementBuilder("a", "social-media-links", socialIcons);
youtubeAnchor.href = "" //Need to enter my linkedin when complete
const youtubeIcon = elementBuilder("i", "fab", youtubeAnchor);
youtubeIcon.classList.add("fa-youtube");

const copyrightDiv = elementBuilder("div", "footer-bottom", body);
copyrightDiv.classList.add("pt-5", "pb-5");
const copyrightContainer = elementBuilder("div", "container", copyrightDiv);
const copyrightRow = elementBuilder("div", "row", copyrightContainer);
copyrightRow.classList.add("text-center", "text-white");
const copyrightCol = elementBuilder("div", "col-12", copyrightRow);
const copyrightContent = elementBuilder("div", "footer-bottom__copyright", copyrightCol);
const date = new Date();
copyrightContent.innerHTML = `Copyright &COPY; ${date.getFullYear()} by David Stockdale.`;

//BACK TO TOP BUTTON

const topButtonAnchor = elementBuilder("a", "shadow", body);
topButtonAnchor.classList.add("btn-primary", "rounded-circle", "back-to-top");
topButtonAnchor.href = "#";
const topButtonIcon = elementBuilder("i", "fas", topButtonAnchor);
topButtonIcon.classList.add("fa-chevron-up");