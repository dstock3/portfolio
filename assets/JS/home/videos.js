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
const carouselInnerDiv = elementBuilder("div", "carousel-inner",carouselDiv);
carouselInnerDiv.setAttribute("id", "carouselExampleCaptions");
carouselInnerDiv.setAttribute("data-bs-ride", "carousel");
const carouselActive = elementBuilder("div", "carousel-item", carouselInnerDiv);
carouselActive.classList.add("active");
const vidCard = elementBuilder("div", "videos__desc", carouselActive);
const vidContainer2 = elementBuilder("div", "vid-container", vidCard);
vidContainer2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/iJKCj8uAHz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
const vidDescription = elementBuilder("p", "lh-lg", vidCard);
vidDescription.innerHTML = `Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.`

//Buttons
const buttonDiv = elementBuilder("div", "text-center", vidRow2);
const prevButton =  elementBuilder("button", "btn", buttonDiv);
prevButton.classList.add("btn-outline-light", "fas", "fa-long-arrow-alt-left");
prevButton.type = "button";
prevButton.setAttribute("data-bs-target", "#carouselExampleCaptions");
prevButton.setAttribute("data-bs-slide", "prev");
const nextButton = elementBuilder("button", "btn", buttonDiv);
nextButton.classList.add("btn-outline-light", "fas", "fa-long-arrow-alt-right");
nextButton.type = "button";
nextButton.setAttribute("data-bs-target", "#carouselExampleCaptions");
nextButton.setAttribute("data-bs-slide", "next");

