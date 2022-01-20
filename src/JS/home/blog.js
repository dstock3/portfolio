import { sectionBuilder, waveGenerator, elementBuilder } from "../functions.js";
import { article } from '../data.js'

//Blog Elements
const blogElements = sectionBuilder("blog");
const blogSection = blogElements[0];
const blogSectionContainer = blogElements[1];
const blogRow = blogElements[2];

blogSection.classList.add("gradient");
blogSectionContainer.classList.add("text-center");

const blogWaveArrayTop = waveGenerator(
  "M0,192L48,181.3C96,171,192,149,288,122.7C384,96,480,64,576,69.3C672,75,768,117,864,160C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
  "#ffffff",
  blogSection
);

const blogWaveTop = blogWaveArrayTop[0];
blogSection.insertBefore(blogWaveTop, blogSection.childNodes[0]);

const blogHead = elementBuilder("h1", "display-2", blogRow);
blogHead.classList.add("text-white", "mt-4");
blogHead.innerHTML = "Blog";
const blogLine = elementBuilder("hr", "mx-auto", blogRow);
const blogRow2 = elementBuilder("div", "row", blogSectionContainer);
blogRow2.classList.add("pt-2", "pb-2", "mt-5", "mb-4");
const blogCol = elementBuilder("div", "col-md-7", blogRow2);
blogCol.classList.add("border-right");
const blogTitleBkg = elementBuilder("div", "text-white", blogCol);
blogTitleBkg.classList.add("p-1");
const blogTitle = elementBuilder("h2", "text-capitalize", blogTitleBkg);
blogTitle.classList.add("text-center");
blogTitle.innerHTML = article.title;
const blogBodyBkg = elementBuilder("div", "text-white", blogCol);
blogBodyBkg.classList.add("p-2", "text-start");
const blogBody = elementBuilder("p", "blog__content", blogBodyBkg);
blogBody.classList.add("fw-light");
blogBody.innerHTML = article.preview;
const blogLink = elementBuilder("a", "float-end", blogCol);
blogLink.classList.add("me-4", "text-white", "mb-4");
blogLink.href = "blog.html";
blogLink.innerHTML = "Read More";
const blogCol2 = elementBuilder("div", "col-md-5", blogRow2);
const imageDiv = elementBuilder("div", "blog__pic", blogCol2);
const blogImage = elementBuilder("img", "img-fluid", imageDiv);
blogImage.src = "https://dummyimage.com/600x400/000/0011ff.png";
blogImage.classList.add("shadow");

const blogWaveArrayBottom = waveGenerator(
  "M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
  "#e9ecef",
  blogSection
);
