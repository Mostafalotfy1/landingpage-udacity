/**
 * Define Global Variables
 *
 */
// Build menu

let listOfNavbar = document.getElementById("navbar__list");
let sectionOne = document.createElement("li");
let sectionTwo = document.createElement("li");
let sectionThree = document.createElement("li");
let sectionFour = document.createElement("li");
sectionOne.innerHTML =
  '<a  data-nav="section1" class="menu__link ">Section1</a>';
sectionTwo.innerHTML =
  '<a  data-nav="section2" class="menu__link ">Section2</a>';
sectionThree.innerHTML =
  '<a  data-nav="section3" class="menu__link ">Section3</a>';
sectionFour.innerHTML =
  '<a  data-nav="section4" class="menu__link ">Section4</a>';
listOfNavbar.appendChild(sectionOne);
listOfNavbar.appendChild(sectionTwo);
listOfNavbar.appendChild(sectionThree);
listOfNavbar.appendChild(sectionFour);
const links = document.querySelectorAll(" li .menu__link");
const button = document.getElementById("btn");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (Sectionscroll) {
    //console.log(Sectionscroll);
    let activeLink = listOfNavbar.querySelector(
      `[data-nav=${Sectionscroll.id}]`
    );
    if (
      Sectionscroll.getBoundingClientRect().top >= -400 &&
      Sectionscroll.getBoundingClientRect().top <= 150
    ) {
      // Add class 'active' to section when near top of viewport
      Sectionscroll.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    } else {
      Sectionscroll.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
links.forEach((blockNav) => {
  // links.classList.remove('your-active-class')
  blockNav.addEventListener("click", () => {
    let sections = document.getElementsByTagName("section");
    const linksItems = document.querySelectorAll(" li .menu__link");
    //remove active class from nav
    for (let j = 0; j < linksItems.length; j++) {
      let link = linksItems[j];
      link.classList.remove("your-active-class");
    }
    console.log(linksItems);
    console.log(blockNav);
    // remove active class
    for (let i = 0; i < sections.length; i++) {
      let el = sections[i];
      el.classList.remove("your-active-class");
    }
    // Scroll to anchor ID using scrollTO event
    let item = document.getElementById(blockNav.getAttribute("data-nav"));
    let dimenion = item.getBoundingClientRect();
    // Scroll to section on link click
    item.scrollIntoView({ behavior: "smooth", block: "start" });
    // add active class
    item.classList.add("your-active-class");
    blockNav.classList.add("your-active-class");
  });
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});
button.onclick = () => {
  window.scrollTo(0, 0);
};
/**
 * End Main Functions
 
 * 
*/
