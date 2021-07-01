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
const date = new Date();
copyrightContent.innerHTML = `Copyright &COPY; ${date.getFullYear()} by David Stockdale.`;

//BACK TO TOP BUTTON

const topButtonAnchor = elementBuilder("a", "shadow", body);
topButtonAnchor.classList.add("btn-primary", "rounded-circle", "back-to-top");
topButtonAnchor.href = "#";
const topButtonIcon = elementBuilder("i", "fas", topButtonAnchor);
topButtonIcon.classList.add("fa-chevron-up");