//Blog Data

const article = {
    title: "Blog 1 Example Title",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
}

//Blog Elements
const blogElements = sectionBuilder("blog");
const blogSection = blogElements[0];
const blogSectionContainer = blogElements[1];
const blogRow = blogElements[2];
blogRow.classList.add("text-center");

const blogHead = elementBuilder("h1", "display-3", blogRow);
blogHead.innerHTML = "Blog"
const blogLine = elementBuilder("div", "heading-line", blogRow);
blogLine.classList.add("mb-1");

const blogRow2 = elementBuilder("div", "row", blogSectionContainer);
blogRow2.classList.add("pt-2", "pb-2", "mt-0", "mb-3");
const blogCol = elementBuilder("div", "col-md-7", blogRow2);
blogCol.classList.add("border-right");
const blogTitleBkg = elementBuilder("div", "bg-white", blogCol);
blogTitleBkg.classList.add("p-2");
const blogTitle = elementBuilder("h2", "text-capitalize", blogTitleBkg);
blogTitle.classList.add("text-center");
blogTitle.innerHTML = article.title;
const blogBodyBkg = elementBuilder("div", "bg-white", blogCol);
blogBodyBkg.classList.add ("p-4", "text-start");
const blogBody = elementBuilder("p", "fw-light", blogBodyBkg);
blogBody.innerHTML = article.body;
const blogLink = elementBuilder("a", "float-end", blogCol);
blogLink.classList.add("me-4");
blogLink.href = "#"; //Need to insert link once this is built out
blogLink.innerHTML = "Read More"

const blogCol2 = elementBuilder("div", "col-md-6", blogRow2);


