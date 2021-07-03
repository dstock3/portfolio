//Blog Data

const article = {
    title: "Blog 1 Example Title",
    preview: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem..."
}

//Blog Elements
const blogElements = sectionBuilder("blog");
const blogSection = blogElements[0];
const blogSectionContainer = blogElements[1];
const blogRow = blogElements[2];

/*
const waveElement = elementBuilder("svg", "wave-border", blogSection);
waveElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
waveElement.setAttribute("viewBox", "0 0 1440 320");
const wavePath = elementBuilder("path", "wave-path", waveElement);
wavePath.setAttribute("fill", "#fff");
wavePath.setAttribute("fill-opacity", "1");
wavePath.setAttribute("d", "M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,192C672,181,768,139,864,149.3C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z");
*/

blogSection.classList.add("gradient");
blogSectionContainer.classList.add("text-center");

const blogHead = elementBuilder("h1", "display-3", blogRow);
blogHead.classList.add("text-white", "mt-4");
blogHead.innerHTML = "Blog"
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
blogBodyBkg.classList.add ("p-2", "text-start");
const blogBody = elementBuilder("p", "blog__content", blogBodyBkg);
blogBody.classList.add("fw-light");
blogBody.innerHTML = article.preview;
const blogLink = elementBuilder("a", "float-end", blogCol);
blogLink.classList.add("me-4", "text-white", "mb-4");
blogLink.href = "blog.html"; 
blogLink.innerHTML = "Read More"
const blogCol2 = elementBuilder("div", "col-md-5", blogRow2);
const imageDiv = elementBuilder("div", "blog__pic", blogCol2);
const blogImage = elementBuilder("img", "img-fluid", imageDiv);
blogImage.src = "https://dummyimage.com/600x400/000/0011ff.png";
blogImage.classList.add("shadow");

//<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,192C672,181,768,139,864,149.3C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>


