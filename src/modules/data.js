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
import vidIllus from '../assets/images/illus.png'
import battleshipImg from '../assets/images/portfolio/battleship.png'
import ontaskImg from '../assets/images/portfolio/ontask.png'
import scapeImg from '../assets/images/portfolio/scape.png'
import weatherImg from '../assets/images/portfolio/myweather.png'
import resumeImg from '../assets/images/portfolio/resume.png'
import cartImg from '../assets/images/portfolio/cart.png'
import calcImg from '../assets/images/portfolio/calc.png'
import ticTacImg from '../assets/images/portfolio/tictac.png'

//Nav Info

const about = {
  name: "About",
  link: "index.html#about",
};

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
*/
const contact = {
  name: "Contact",
  link: "index.html#contact",
};

const links = [about, projects, /*videos, blog,*/ contact];

//Video Illus
const vidData = {
  source: vidIllus,
  alt: "coder illustration"

}

//Project Info

const ticTacToe = {
  title: "Tic Tac Toe",
  description: "One of my first exercises using Vanilla JS.",
  source: ticTacImg,
  alt: "A screenshot from my tic-tac-toe application",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/ticTacToe/",
};

const calculator = {
  title: "Calculator",
  description: "A simple calculator application made in JavaScript.",
  source: calcImg,
  alt: "A screenshot from my calculator app",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/calc/",
};

const restaurant = {
  title: "Chef Vito's Pizzeria",
  description: "A restaurant page built using ES6 modules in JavaScript",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image two alt",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/restaurant/",
}

const battleship = {
  title: "Battleship",
  description: "A web-based Battleship game built in JavaScript with a focus on unit testing",
  source: battleshipImg,
  alt: "A screenshot from my Battleship application",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/battleship/",
};

const onTask = {
  title: "OnTask",
  description: "A Project Management Application built entirely in JavaScript",
  source: ontaskImg,
  alt: "A screenshot from OnTask, a project management application",
  category: "Vanilla JS",
  link: "https://dstock3.github.io/toDoList/",
};

const weatherApp = {
  title: "Weather App",
  description: "A weather forecasting app that connects to the OpenWeatherMap API",
  source: weatherImg,
  alt: "A screenshot from MyWeather, a basic weather forecasting application",
  category: "Vanilla JS",
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

const resumeBuilder = {
  title: "Resume Builder",
  description: "A resume application built using class-based components in React",
  source: resumeImg,
  alt: "A screenshot from my resume creator application",
  category: "React",
  link: "https://dstock3.github.io/cv-app/",
};

const shoppingCart = {
  title: "Shopping Cart",
  description: "A simple shopping cart demo built using router and custom hooks in React",
  source: cartImg,
  alt: "A screenshot from my shopping cart application",
  category: "React",
  link: "https://dstock3.github.io/shopping-cart/",
};

const roarBikes = {
  title: "Roar Bikes",
  description: "A design mockup created in Adobe XD",
  source: "https://dummyimage.com/600x400/000/0011ff.png",
  alt: "image eight alt",
  category: "Mockups",
  link: "https://www.youtube.com/watch?v=iUG96J3q8Zg",
};

const projectArray = [
  battleship,
  onTask,
  weatherApp,
  scape95,
  resumeBuilder,
  shoppingCart,
  ticTacToe,
  calculator,
  restaurant,
  roarBikes
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

const techArray = [html, css, js, react, sass, bootstrap, linux, ubuntu, python, git, xd];

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

export { links, projectArray, vidData, techArray, carouselVidArray, formArray, article, contactBoxArray }
