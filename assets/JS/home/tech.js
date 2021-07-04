const techElements = sectionBuilder("tech");
const sectionTech = techElements[0];
const techContainer = techElements[1];
const rowTech = techElements[2];
rowTech.classList.add("text-center");
const techHead = elementBuilder("h4", "fw-bold", rowTech);
techHead.classList.add("lead", "mb-3", "mt-3", "pt-3");
techHead.innerHTML = "Technologies";
const techLine = elementBuilder("div", "heading-line", rowTech);
techLine.classList.add("mb-5");

const techContainer2 = elementBuilder("div", "tech-container", sectionTech);
const rowTech2 = elementBuilder("div", "row", techContainer2);
rowTech2.classList.add("tech-row");

const html = {
    source: `/assets/images/tech/HTML5.svg`,
    alt: `HTML logo`,
};

const css = {
    source: `/assets/images/tech/CSS3.svg`,
    alt: `CSS logo`,
};

const linux = {
    source:`/assets/images/tech/Linux.svg`,
    alt: `Linux logo`,
};

const ubuntu = {
    source: `/assets/images/tech/ubuntu.png`,
    alt: `Ubuntu logo`,
};

const python = {
    source: `/assets/images/tech/Python.svg`,
    alt: `Python logo`,
};

const sass = {
    source: `/assets/images/tech/Sass.svg`,
    alt: `Sass logo`,
};

const js = {
    source: `/assets/images/tech/JS.svg`,
    alt: `Javascript logo`,
};

const bootstrap = {
    source: `/assets/images/tech/Bootstrap.svg`,
    alt: `Bootstrap logo`,
};

const git = {
    source: `/assets/images/tech/git.png`,
    alt: `Git logo`,
}

const techArray = [html, css, js, sass, bootstrap, linux, ubuntu, python, git];

function techBuilder(techArray) {
    for (i = 0; i < techArray.length; i++) {
        let techCol = elementBuilder("div", "col-md-4", rowTech2);
        techCol.classList.add("col-lg-1", "mx-auto");
        let techDiv =  elementBuilder("div", "tech__logo-box", techCol);
        techDiv.classList.add("shadow-sm");
        let techImage = elementBuilder("img", "img-fluid", techDiv);
        techImage.setAttribute("src", `${techArray[i].source}`);
        techImage.setAttribute("alt", `${techArray[i].alt}`);
        techImage.setAttribute("title", `${techArray[i].title}`);
    };
};

techBuilder(techArray);

const techLine2 = elementBuilder("hr", "tech-border", sectionTech);
techLine2.classList.add("mx-auto");