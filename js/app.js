var listOfNavbar = document.getElementById('navbar__list');
var sectionOne = document.createElement('li')
var sectionTwo = document.createElement('li');
var sectionThree = document.createElement('li');
var sectionFour = document.createElement('li');
sectionOne.innerHTML='<a  data-nav="section1" class="menu__link ">Section1</a>';
sectionTwo.innerHTML='<a  data-nav="section2" class="menu__link ">Section2</a>';
sectionThree.innerHTML='<a  data-nav="section3" class="menu__link ">Section3</a>';
sectionFour.innerHTML='<a  data-nav="section4" class="menu__link ">Section4</a>';
listOfNavbar.appendChild(sectionOne);
listOfNavbar.appendChild(sectionTwo);
listOfNavbar.appendChild(sectionThree);
listOfNavbar.appendChild(sectionFour);
const links = document.querySelectorAll(" li .menu__link");
const button = document.getElementById('btn');
links.forEach((blockNav)=>{
    blockNav.addEventListener("click", ()=>{
        
        

        let item = document.getElementById(blockNav.getAttribute("data-nav"));
        let dimenion = item.getBoundingClientRect()
        console.log(item)
        console.log(dimenion)
        item.scrollIntoView({ behavior:'smooth',block:"start"
            
        })
       
    }
     )
    })
    window.addEventListener("scroll", ()=>{
        if(window.pageYOffset>100){
            button.style.display='block';
        }else{
            button.style.display='none';


        }
    })
    button.onclick= ()=>{
        window.scrollTo(0,0)
    }