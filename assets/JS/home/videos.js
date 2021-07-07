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
carouselDiv.setAttribute("id", "carouselExampleCaptions");
carouselDiv.setAttribute("data-bs-ride", "carousel");
const carouselInnerDiv = elementBuilder("div", "carousel-inner",carouselDiv);


/*
const carouselActive = elementBuilder("div", "carousel-item", carouselInnerDiv);
carouselActive.classList.add("active");
const vidCard = elementBuilder("div", "videos__vid", carouselActive);
vidCard.classList.add("mx-auto");
const vidTitle = elementBuilder("h2", "vid-title", vidCard);
vidTitle.innerHTML = "Video 1 Title";
const vidContainer2 = elementBuilder("div", "vid-container", vidCard);
vidContainer2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/iJKCj8uAHz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
const vidDescription = elementBuilder("p", "text-start", vidCard);
vidDescription.innerHTML = `Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio. Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.`
*/

const vidOne = {
    title: `Learn Bootstrap 5 and SASS by Building a Portfolio Website - Full Course`,
    iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iJKCj8uAHz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    description: `Learn Bootstrap 5 and Sass by building a portfolio website. Bootstrap is one of the most popular CSS frameworks and Sass is one of the most popular preprocessors for CSS.`,
}

const vidTwo = {
    title: `JavaScript Programming - Full Course`,
    iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jS4aFq5-91M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    description: `Learn JavaScript from scratch by solving over a hundred different coding challenges.`,
    
}

const vidThree = {
    title: `Python Backend Web Development Course (with Django)`,
    iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jBzwzrDvZ18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    description: `This video is a full backend web development course with python. In the course, you will learn everything you need to know to start your web development journey with Python and Django.`,
}

const carouselVidArray = [vidOne, vidTwo, vidThree];

function carouselBuilder(carouselArray, parent) {
    for (i = 0; i < carouselArray.length; i++) {
        let carouselActive = elementBuilder("div", "carousel-item", parent);
        if (i <= 0) {
            carouselActive.classList.add("active"); 
        };
        let vidCard = elementBuilder("div", "videos__vid", carouselActive);
        vidCard.classList.add("mx-auto");
        let vidTitle = elementBuilder("h2", "vid-title", vidCard);
        vidTitle.innerHTML = carouselArray[i].title;
        let vidContainer2 = elementBuilder("div", "vid-container", vidCard);
        vidContainer2.innerHTML = carouselArray[i].iframe;
        let vidDescription = elementBuilder("p", "text-start", vidCard);
        vidDescription.innerHTML = carouselArray[i].description;
    };
};

carouselBuilder(carouselVidArray, carouselInnerDiv);

//Buttons
const buttonDiv = elementBuilder("div", "text-center", vidRow2);
buttonDiv.classList.add("button-container");
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

