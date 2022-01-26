import { elementBuilder, buttonBuilder, waveGenerator, sectionBuilder } from "../functions.js";
import { vidData } from "../data.js";

const about = () => {
  const aboutSectionElements = sectionBuilder("about");
  const sectionAbout = aboutSectionElements[0];
  const aboutContainer = aboutSectionElements[1];
  const rowAbout = aboutSectionElements[2];

  rowAbout.classList.add("align-item-center", "text-white");
  const colAbout1 = elementBuilder("div", "col-md-6", rowAbout);
  colAbout1.classList.add("intros", "text-start");
  colAbout1.id = "intro-text"
  const aboutHead = elementBuilder("h1", "display-2", colAbout1);
  const headSpan = elementBuilder("span", "display-2--intro", aboutHead);
  const header = "Hi, I'm Dave!";
  headSpan.innerHTML = header;
  const headSpan2 = elementBuilder("span", "display-2--description", aboutHead);
  headSpan2.classList.add("lh-base");

  const interests = `👀 I’m interested in Web Development`
  const learn = `🌱 I’m currently learning MongoDB`
  const ask = `💬 Ask me about Front-end Development`
  const collab = `🔥 I’m looking to collaborate on React projects`
  const pronouns = `😀 Pronouns: He/Him`
  const contact = `📫 How to reach me: dstock3@gmail.com`


  const descArray = [interests, ask, learn, collab, pronouns, contact]

  function descriptionBuilder(descArray) {
    let description = elementBuilder("article", "color-bg-subtle", headSpan2);
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

  descriptionBuilder(descArray)


  

  const touchAnchor = elementBuilder("a", "get-in-touch", colAbout1);
  touchAnchor.href = "#contact";
  const touchButtonArray = buttonBuilder("rounded-pill", "span", touchAnchor);
  const touchButton = touchButtonArray[0];
  const touchText = document.createTextNode("Get In Touch");
  touchButton.appendChild(touchText);
  touchButton.classList.add("btn-rounded");
  const touchSpan = touchButtonArray[1];
  const touchIcon = elementBuilder("i", "fas", touchSpan);
  touchIcon.classList.add("fa-arrow-right");
  touchSpan.id = "touch-span"

  /* VIDEO */
  const vidDiv = elementBuilder("div", "col-md-6", rowAbout);
  vidDiv.classList.add("intros", "text-end");
  const vidBox = elementBuilder("div", "video-box", vidDiv);
  const vidIllus = elementBuilder("img", "img-fluid", vidBox);
  vidIllus.alt = vidData.alt;
  vidIllus.src = vidData.source;

  /*
  const lightboxAnchor = elementBuilder("a", "glightbox", vidBox);
  lightboxAnchor.classList.add(
    "position-absolute",
    "top-50",
    "start-50",
    "translate-middle"
  );
  lightboxAnchor.href = "#";
  lightboxAnchor.id = "lightbox-anchor";
  const anchorSpan = elementBuilder("span", "span", lightboxAnchor);
  anchorSpan.id = "play-btn"
  const anchorIcon = elementBuilder("i", "fas", anchorSpan);
  anchorIcon.classList.add("fa-play-circle");
  const borderSpan = elementBuilder("span", "border-animation", lightboxAnchor);
  borderSpan.classList.add("border-animation--border-1");
  const borderSpan2 = elementBuilder("span", "border-animation", lightboxAnchor);
  borderSpan2.classList.add("border-animation--border-2");
  */

  const aboutWaveArray = waveGenerator(
    "M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    "#ffffff",
    sectionAbout
  );
}

export { about }