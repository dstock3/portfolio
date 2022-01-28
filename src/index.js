import './assets/css/style.css'
import './assets/css/fontawesome.css'
import './assets/vendors/css/glightbox.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { about } from './modules/home/about.js'
import { blog } from './modules/home/blog'
import { contact } from './modules/home/contact'
import { projects } from './modules/home/projects'
import { tech } from './modules/home/tech'
import { videos } from './modules/home/videos'
import { footer } from './modules/footer'
import { nav } from './modules/nav'
import favicon from './assets/images/favicon.png'

library.add(fas, far, fab) 

dom.i2svg() 

const head = document.getElementsByTagName("head")[0]
const link = document.createElement("link")
link.rel ="shortcut icon"
link.href = favicon
head.appendChild(link)

nav()
about()
projects()
tech()
//blog()
//videos()
//contact()
footer()