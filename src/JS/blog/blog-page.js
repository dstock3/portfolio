const blogElements = sectionBuilder("blog-page");
const blogSection = blogElements[0];
const blogSectionContainer = blogElements[1];
const blogRow = blogElements[2];

blogSection.classList.add("gradient");
blogSectionContainer.classList.add("text-center");

const blogHead = elementBuilder("h1", "display-2", blogRow);
blogHead.classList.add("text-white", "mt-5", "pt-5");
blogHead.innerHTML = "Blog";
const blogLine = elementBuilder("hr", "mx-auto", blogRow);
const blogRow2 = elementBuilder("div", "row", blogSectionContainer);
blogRow2.classList.add("pt-2", "pb-1", "mt-5", "mb-2");
const blogCol = elementBuilder("div", "col-md-10", blogRow2);
blogCol.classList.add("mx-auto");
const blogTitleBkg = elementBuilder("div", "text-white", blogCol);
blogTitleBkg.classList.add("p-1");
const blogTitle = elementBuilder("h2", "text-capitalize", blogTitleBkg);
blogTitle.classList.add("text-center");
blogTitle.innerHTML = article.title;

const blogBodyBkg = elementBuilder("div", "text-white", blogCol);
blogBodyBkg.classList.add("p-1", "text-start");
const blogBody = elementBuilder("p", "blog__content", blogBodyBkg);
blogBody.classList.add("fw-light");
blogBody.innerHTML = article.preview;

const imageDiv = elementBuilder("div", "blog__pic", blogCol);
const blogImage = elementBuilder("img", "img-fluid", imageDiv);
blogImage.src = "https://dummyimage.com/600x400/000/0011ff.png";
blogImage.classList.add("shadow");
