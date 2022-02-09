import { sectionBuilder, contactBoxBuilder, elementBuilder } from "./functions.js";
import { contactBoxArray } from "./data.js";
import { body } from "./nav.js";

const footer = () => {
  //FOOTER
  const footerElements = sectionBuilder("footer");
  const footerSection = footerElements[0];
  const footerSectionContainer = footerElements[1];
  const footerRow = footerElements[2];
  //contactBoxBuilder(contactBoxArray, footerRow);

  const social = elementBuilder("div", "footer-sm", footerRow);
  const socialContainer = elementBuilder("div", "container", social);
  const socialRow = elementBuilder("div", "row", socialContainer);
  socialRow.classList.add("py-4", "text-center", "text-white");
  const socialCol = elementBuilder("div", "col-lg-5", socialRow);
  socialCol.classList.add("col-md-5", "mb-3", "mb-0");
  socialCol.innerHTML = "Connect with Me on Social Media";
  const socialIcons = elementBuilder("div", "col-lg-6", socialRow);
  socialIcons.id = "social-media"

  /*
  const facebookAnchor = elementBuilder("a", "social-media-links", socialIcons);
  facebookAnchor.href = ""; //Need to enter my facebook when complete
  const facebookIcon = elementBuilder("i", "fab", facebookAnchor);
  facebookIcon.classList.add("fa-facebook");

  const youtubeAnchor = elementBuilder("a", "social-media-links", socialIcons);
  youtubeAnchor.href = ""; //Need to enter my linkedin when complete
  const youtubeIcon = elementBuilder("i", "fab", youtubeAnchor);
  youtubeIcon.classList.add("fa-youtube");
  */

  const githubAnchor = elementBuilder("a", "social-media-links", socialIcons);
  githubAnchor.href = "https://github.com/dstock3";
  githubAnchor.rel = "noreferrer noopener";
  githubAnchor.target = "blank";
  const githubIcon = elementBuilder("i", "fab", githubAnchor);
  githubIcon.classList.add("fa-github", "fa-2x");

  const linkedAnchor = elementBuilder("a", "social-media-links", socialIcons);
  linkedAnchor.href = "https://www.linkedin.com/in/stockdale/";
  linkedAnchor.rel = "noreferrer noopener";
  linkedAnchor.target = "blank";
  const linkedIcon = elementBuilder("i", "fab", linkedAnchor);
  linkedIcon.classList.add("fa-linkedin", "fa-2x");

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

  const topButtonAnchor = elementBuilder("a", "btn-primary", body);
  topButtonAnchor.id = "back-to-top-button" 
  topButtonAnchor.classList.add("rounded-circle", "back-to-top");
  topButtonAnchor.href = "#";
  const topButtonIcon = elementBuilder("i", "fas", topButtonAnchor);
  topButtonIcon.classList.add("fa-chevron-up");
}

export { footer }
