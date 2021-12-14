This project is derived from a Bootstrap tutorial by Muriungi:

Learn Bootstrap 5 and SASS by Building a Portfolio Website - Full Course
https://www.youtube.com/watch?v=iJKCj8uAHz8

Here's the Git repository: https://github.com/MuriungiPatrick/Bootstrap-5-portfolio-template

I used this wonderful exercise as a jumping off point to combine what I've learned about DOM manipulation with the basic principles of SASS and Bootstrap 5. The HTML elements in my version are generated using vanilla JS.

I've created a number of functions to handle repetitive HTML elements. Most notably, I've added functionality for filtering categories in the Projects section (this was not included in the original tutorial). I've also refactored the carousel elements to work for a series of videos.

The javascript files are broken up in a modular fashion based on distinct section elements, i.e. about, projects, videos, contact, etc. The reason I've done this is acheive a general separation of concerns in order to allow for more freedom with respect to what sections can be added or removed based on present needs.
