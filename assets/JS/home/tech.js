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
    id: `html`,
};

const css = {
    source: `/assets/images/tech/CSS3.svg`,
    alt: `CSS logo`,
    id: `css`,
};

const linux = {
    source:`/assets/images/tech/Linux.svg`,
    alt: `Linux logo`,
    id: `linux`,
};

const ubuntu = {
    source: `/assets/images/tech/ubuntu.png`,
    alt: `Ubuntu logo`,
    id: `ubuntu`,
};

const python = {
    source: `/assets/images/tech/Python.svg`,
    alt: `Python logo`,
    id: `python`,
};

const sass = {
    source: `/assets/images/tech/Sass.svg`,
    alt: `Sass logo`,
    id: `sass`
};

const js = {
    source: `/assets/images/tech/JS.svg`,
    alt: `Javascript logo`,
    id: `javascript`,
};

const bootstrap = {
    source: `/assets/images/tech/Bootstrap.svg`,
    alt: `Bootstrap logo`,
    id: `bootstrap`,
};

const git = {
    source: `/assets/images/tech/git.png`,
    alt: `Git logo`,
    id: `git`,
}

const techArray = [html, css, js, sass, bootstrap, linux, ubuntu, python, git];

techBuilder(techArray);

const techLine2 = elementBuilder("hr", "tech-border", sectionTech);
techLine2.classList.add("mx-auto");