import bootstrapIcon from '../assets/images/tech/Bootstrap.svg'
import cssIcon from '../assets/images/tech/CSS3.svg'
import gitIcon from '../assets/images/tech/git.png'
import htmlIcon from '../assets/images/tech/HTML5.svg'
import jsIcon from '../assets/images/tech/JS.svg'
import linuxIcon from '../assets/images/tech/Linux.svg'
import pythonIcon from '../assets/images/tech/Python.svg'
import reactIcon from '../assets/images/tech/react.svg'
import sassIcon from '../assets/images/tech/Sass.svg'
import ubuntuIcon from '../assets/images/tech/ubuntu.png'
import xdIcon from '../assets/images/tech/xd.svg'
import webpackIcon from '../assets/images/tech/webpack.png'
import vidIllus from '../assets/images/illus_blue.png'
import battleshipImg from '../assets/images/portfolio/battleship.png'
import ontaskImg from '../assets/images/portfolio/ontask.png'
import scapeImg from '../assets/images/portfolio/scape.png'
import weatherImg from '../assets/images/portfolio/myweather.png'
import resumeImg from '../assets/images/portfolio/resume.png'
import cartImg from '../assets/images/portfolio/cart.png'
import calcImg from '../assets/images/portfolio/calc.png'
import ticTacImg from '../assets/images/portfolio/tictac.png'
import pizzaImg from '../assets/images/portfolio/pizza.png'
import spacetimeImg from '../assets/images/portfolio/spacetime.png'
import gtsImg from '../assets/images/portfolio/gts.png'
import nmmcImg from '../assets/images/portfolio/nmmc.png'
import writingImg from '../assets/images/portfolio/writing.png'
import roarImg from '../assets/images/portfolio/roar.png'
import linodeIcon from '../assets/images/tech/linode.png'
import stockImg from '../assets/images/portfolio/stockApp.png'
import invImg from '../assets/images/portfolio/invApp.png'
import nodeIcon from '../assets/images/tech/node.svg'
import mongoIcon from '../assets/images/tech/mongo.png'
import erNpcImg from '../assets/images/portfolio/erNPC.png'
import blogImg from '../assets/images/portfolio/blog.png'
import mineImg from '../assets/images/portfolio/mineScreen.png'
import tsIcon from '../assets/images/tech/Typescript.svg'
import billImg from '../assets/images/portfolio/billsadv.png'
import spaceRaceImg from '../assets/images/portfolio/spacerace.png'

//Nav Info

const about = {
  name: "About",
  link: "index.html#about",
};

const tech = {
  name: "Tech",
  link: "index.html#tech"
}

const projects = {
  name: "Projects",
  link: "index.html#projects",
};

/*
const videos = {
  name: "Videos",
  link: "index.html#videos",
};

const blog = {
  name: "Blog",
  link: "index.html#blog",
};

const contact = {
  name: "Contact",
  link: "index.html#contact",
};
*/
const links = [about, tech, projects, /*videos, blog, contact */];

//Video Illus
const vidData = {
  source: vidIllus,
  alt: "coder illustration"
}

const interests = `👀 I’m interested in fullstack web development`
const learn = `🌱 I’m currently learning Flask`
const ask = `💬 Ask me about front-end development`
const collab = `🔥 I’m looking to collaborate on open source projects`
const pronouns = `😀 Pronouns: He/Him`
const contactInfo = `📫 How to reach me: dstock3@gmail.com`

const descArray = [interests, ask, learn, collab, pronouns, contactInfo]

//Project Info

const spaceRace = {
  title: "History of the Space Race",
  description: "A website about the Space Race built using Flask",
  source: spaceRaceImg,
  category: "Python",
  link: "https://spacerace-dstock3.vercel.app/"
}

const billsAdventure = {
  title: "Bill's Adventure",
  description: "A Choose Your Own Adventure game built using React",
  source: billImg,
  alt: "A screenshot from Bill's Adventure.",
  category: "React",
  link: "https://dstock3.github.io/bills-portal/",
}

const minesweeper = {
  title: "Minesweeper",
  description: "A Minesweeper application built using React",
  source: mineImg,
  alt: "A screenshot from my minesweeper app.",
  category: "React",
  link: "https://dstock3.github.io/minesweeper/",
}

const blogDog = {
  title: "BlogDog",
  description: "A simple content management system using MongoDB, Node, Express, and React",
  source: blogImg,
  alt: "A screenshot from my content managerment app.",
  category: "Express",
  link: "https://dstock3.github.io/blog-dog/",
}

const erNpc = {
  title: "Elden Ring NPC Guide",
  description: "A Guide to Non-Player Characters in Elden Ring using Node and Express",
  source: erNpcImg,
  alt: "A screenshot from my Elden Ring NPC Guide App",
  category: "Express",
  link: "https://er-npc.herokuapp.com/npc",
}

const invApp = {
  title: "Product Tracker",
  description: "An Inventory Management Application using Node and Express",
  source: invImg,
  alt: "A screenshot from my Inventory Management App",
  category: "Express",
  link: "https://inv-app22.herokuapp.com/",
}

const stockApp = {
  title: "MarketQuest",
  description: "A Stock Market Application using React",
  source: stockImg,
  alt: "A screenshot from Market Quest",
  category: "React",
  link: "https://dstock3.github.io/stockApp/",
}

const writing = {
  title: "Writing Portfolio",
  description: "A writing portfolio created using React",
  source: writingImg,
  alt: "A screenshot from my writing portfolio",
  category: "React",
  link: "https://dstock3.github.io/k-portfolio/",
}

const gts = {
  title: "GTS Podcast",
  description: "A website for the GTS Podcast. Built using ES6 modules and Sass.",
  source: gtsImg,
  alt: "A screenshot from the GTS Podcast website",
  category: "JavaScript",
  link: "https://garagetalksports.com/",
}

const battleship = {
  title: "Battleship",
  description: "A web-based Battleship game built in JavaScript with a focus on unit testing",
  source: battleshipImg,
  alt: "A screenshot from my Battleship application",
  category: "JavaScript",
  link: "https://dstock3.github.io/battleship/",
};

const onTask = {
  title: "OnTask",
  description: "A Project Management Application built using JavaScript",
  source: ontaskImg,
  alt: "A screenshot from OnTask, a project management application",
  category: "JavaScript",
  link: "https://dstock3.github.io/toDoList/",
};

const weatherApp = {
  title: "Weather App",
  description: "A weather forecasting app that connects to the OpenWeatherMap API",
  source: weatherImg,
  alt: "A screenshot from MyWeather, a basic weather forecasting application",
  category: "JavaScript",
  link: "https://dstock3.github.io/weatherApp/",
};

const scape95 = {
  title: "Scape 95",
  description: "A Windows 95 nostalgia trip built in React primarily using functional components and custom hooks",
  source: scapeImg,
  alt: "A screenshot from Scape-95, a Windows 95 emulator",
  category: "React",
  link: "https://dstock3.github.io/scape-95/",
};

const roarBikes = {
  title: "Roar Bikes",
  description: "A design mockup for a bike store created in Adobe XD",
  source: roarImg,
  alt: "A screenshot from my design mockup",
  category: "Designs",
  link: "https://www.youtube.com/watch?v=iUG96J3q8Zg",
};

const spacetime = {
  title: "SpaceTime",
  description: "A design mockup for a science news aggregator created using Adobe XD",
  source: spacetimeImg,
  alt: "the spactime logo",
  category: "Designs",
  link: "https://www.youtube.com/watch?v=SAdV6R3QgQ8",
}

const projectArray = [
  spaceRace,
  billsAdventure,
  minesweeper,
  blogDog,
  erNpc,
  invApp,
  stockApp,
  writing,
  gts,
  battleship,
  onTask,
  weatherApp,
  scape95,
  roarBikes,
  spacetime
];

//Tech Info

const html = {
  source: htmlIcon,
  title: "HTML",
  alt: `HTML logo`,
  id: `html`,
};

const css = {
  source: cssIcon,
  title: "CSS",
  alt: `CSS logo`,
  id: `css`,
};

const linux = {
  source: linuxIcon,
  title: "Linux",
  alt: `Linux logo`,
  id: `linux`,
};

const ubuntu = {
  source: ubuntuIcon,
  title: "Ubuntu",
  alt: `Ubuntu logo`,
  id: `ubuntu`,
};

const python = {
  source: pythonIcon,
  title: "Python",
  alt: `Python logo`,
  id: `python`,
};

const sass = {
  source: sassIcon,
  title: "Sass",
  alt: `Sass logo`,
  id: `sass`,
};

const js = {
  source: jsIcon,
  title: "JavaScript",
  alt: `Javascript logo`,
  id: `javascript`,
};

const bootstrap = {
  source: bootstrapIcon,
  title: "Bootstrap",
  alt: `Bootstrap logo`,
  id: `bootstrap`,
};

const git = {
  source: gitIcon,
  title: "Git",
  alt: `Git logo`,
  id: `git`,
};

const react = {
  source: reactIcon,
  title: "React",
  alt: `React logo`,
  id: `react`,
}

const xd = {
  source: xdIcon,
  title: "Adobe XD",
  alt: "Adobe XD logo",
  id: "xd",
}

const webpack = {
  source: webpackIcon,
  title: "Webpack",
  alt: "Webpack logo",
  id: "webpack"
}

const linode = {
  source: linodeIcon,
  title: "Linode",
  alt: "Linode logo",
  id: "linode"
}

const node = {
  source: nodeIcon,
  title: "Node.js",
  alt: "Node logo",
  id: "node"
}

const mongo = {
  source: mongoIcon,
  title: "MongoDB",
  alt: "MongoDB logo",
  id: "mongo"
}

const typescript = {
  source: tsIcon,
  title: "TypeScript",
  alt: "TypeScript logo",
  id: "typescript"
}

const techArray = [html, css, js, react, sass, bootstrap, linux, ubuntu, python, git, xd, webpack, node, linode, mongo, typescript];

//Profile

const profileData = {
  introduction: "Hi, my name is Dave. I'm a web developer on a mission to turn the internet into a more beautiful and functional place, one pixel at a time. I began my journey during the pandemic when I realized that if I couldn't go outside, I might as well learn how to build websites. I have since dedicated myself to learning and honing my skills in various technologies and frameworks, including JavaScript, React, and Express.",
  strengths: "I am excited to bring my strong work ethic and dedication to problem-solving to a team and am eager to continue growing and learning in the field. I am confident that my skills and enthusiasm will make me a valuable asset to any organization.",
  goal: "I look forward to the opportunity to collaborate with like-minded individuals and make a positive impact through my work in web development. Thank you for your consideration."
};

//Video Carousel

const vidOne = {
  title: `Learn Bootstrap 5 and SASS by Building a Portfolio Website`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iJKCj8uAHz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `Learn Bootstrap 5 and Sass by building a portfolio website. Bootstrap is one of the most popular CSS frameworks and Sass is one of the most popular preprocessors for CSS.`,
};

const vidTwo = {
  title: `JavaScript Programming`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jS4aFq5-91M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `Learn JavaScript from scratch by solving over a hundred different coding challenges. Go here for the interactive browser version: https://scrimba.com/learn/learnjavascript`,
};

const vidThree = {
  title: `Python Backend Web Development Course (with Django)`,
  iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jBzwzrDvZ18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  description: `This video is a full backend web development course with python. In the course, you will learn everything you need to know to start your web development journey with Python and Django.`,
};

const carouselVidArray = [vidOne, vidTwo, vidThree];

//Contact Form Info
const firstName = {
  placeholder: "First Name",
  id: "inputFirstName",
};

const lastName = {
  placeholder: "Last Name",
  id: "inputLastName",
};

const email = {
  placeholder: "E-mail Address",
  id: "inputEmail",
};

const message = {
  name: "message",
  placeholder: "Enter your message here.",
  id: "message",
  rows: "8",
};

const formArray = [firstName, lastName, email, message];

//Blog Info
const article = {
  title: "Blog 1 Example Title",
  preview:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem...",
};

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
};

const emailInfo = {
  title: `info@company.com`,
  subtitle: `Online Support`,
  icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <polyline points="3 9 12 15 21 9 12 3 3 9" />
    <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
    <line x1="3" y1="19" x2="9" y2="13" />
    <line x1="15" y1="13" x2="21" y2="19" />
  </svg>`,
};

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
};

const contactBoxArray = [phoneInfo, emailInfo, locationInfo];

export { links, projectArray, descArray, vidData, techArray, profileData, carouselVidArray, formArray, article, contactBoxArray }
