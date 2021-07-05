const vidElements = sectionBuilder("videos");
const vidSection = vidElements[0];
const vidContainer = vidElements[1];
const vidRow = vidElements[2];
vidRow.classList.add("text-center", "text-white");
const vidHead = elementBuilder("h1", "display-3", vidRow);
vidHead.classList.add("fw-bold");
vidHead.innerHTML = "Videos";
const vidLine = elementBuilder("hr", "mx-auto", vidRow);
vidLine.setAttribute("style", "width: 100px; height: 3px; ");
const vidPara = elementBuilder("p", "lead", vidRow);
vidPara.classList.add("pt-1");
vidPara.innerHTML = "lorem ipsum lorem ipsum lorem ipsum";

const vidRow2 = elementBuilder("div", "row", vidContainer);

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




/*
<button class="btn btn-outline-light fas fa-long-arrow-alt-left" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
</button>
<button class="btn btn-outline-light fas fa-long-arrow-alt-right" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
</button>
*/