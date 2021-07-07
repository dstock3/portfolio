//Nav Info

const about = {
    name: "About",
    link: "#about",
}

const projects = {
    name: "Projects",
    link: "#projects",
}

const videos = {
    name: "Videos",
    link: "#videos",
}

const blog = {
    name: "Blog",
    link: "blog.html",
}

const contact = {
    name: "Contact",
    link: "#contact",
}

const links = [about, projects, videos, blog, contact];

//Project Info

const projectOne = {
    title: "project one title",
    description: "description one",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image one alt",
    category: "Websites",
    link: "https://www.google.com/"
};

const projectTwo = {
    title: "project two title",
    description: "description two",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image two alt",
    category: "Design",
    link: "#"
};

const projectThree = {
    title: "project three title",
    description: "description three",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image three alt",
    category: "Mockups",
    link: "#"
};

const projectFour = {
    title: "project four title",
    description: "description four",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image four alt",
    category: "Websites",
    link: "#"
};

const projectFive = {
    title: "project five title",
    description: "description five",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image five alt",
    category: "Websites",
    link: "#"
};

const projectSix = {
    title: "project six title",
    description: "description six",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image six alt",
    category: "Design",
    link: "#"
};

const projectSeven = {
    title: "project seven title",
    description: "description seven",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image seven alt",
    category: "Mockups",
    link: "#"
};

const projectEight = {
    title: "project eight title",
    description: "description eight",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image eight alt",
    category: "Websites",
    link: "#"
};

const projectNine = {
    title: "project nine title",
    description: "description nine",
    source: "https://dummyimage.com/600x400/000/0011ff.png",
    alt: "image nine alt",
    category: "Design",
    link: "#"
};

const dummyProjectArray = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine];

//Tech Info

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

//Contact Form Info
const firstName = {
    placeholder: "First Name",
    id: "inputFirstName",
}

const lastName = {
    placeholder: "Last Name",
    id: "inputLastName"
}

const email = {
    placeholder: "E-mail Address",
    id: "inputEmail"
}

const message = {
    name: "message",
    placeholder: "Enter your message here.",
    id: "message",
    rows: "8"
}

const formArray = [firstName, lastName, email, message]

//Blog Info
const article = {
    title: "Blog 1 Example Title",
    preview: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem..."
}

//Footer Contact Info

const phoneInfo = {
    title: `+0 (000) 000-0000`,
    subtitle: `Mon-Fri 9am-6pm (CST)`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    <path d="M15 7a2 2 0 0 1 2 2" />
    <path d="M15 3a6 6 0 0 1 6 6" />
  </svg>`,
}

const emailInfo = {
    title: `info@company.com`,
    subtitle: `Online Support`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <polyline points="3 9 12 15 21 9 12 3 3 9" />
    <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
    <line x1="3" y1="19" x2="9" y2="13" />
    <line x1="15" y1="13" x2="21" y2="19" />
  </svg>`
}

const locationInfo = {
    title: `Chicago, IL`,
    subtitle: `United States`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="18" y1="6" x2="18" y2="6.01" />
    <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
    <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
    <line x1="9" y1="4" x2="9" y2="17" />
    <line x1="15" y1="15" x2="15" y2="20" />
  </svg>`,
}

const contactBoxArray = [phoneInfo, emailInfo, locationInfo];