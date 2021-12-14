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
