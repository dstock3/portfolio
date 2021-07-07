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