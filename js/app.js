let listOfNavbar = document.getElementById('navbar__list');
let sectionOne = document.createElement('li')
let sectionTwo = document.createElement('li');
let sectionThree = document.createElement('li');
let sectionFour = document.createElement('li');
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
        let sections = document.getElementsByTagName('section')
        console.log(blockNav)
        //remove active class from nav 
       
        // remove active class 
       for(let i = 0; i < sections.length ; i++){
           let el = sections[i]
          el.classList.remove('your-active-class')
          
       }
        

        let item = document.getElementById(blockNav.getAttribute("data-nav"));
       
        
        let dimenion = item.getBoundingClientRect()
    
        
        item.scrollIntoView({ behavior:'smooth',block:"start"
            
        })
        // add active class
         item.classList.add("your-active-class");
        blockNav.classList.add('your-active-class')

       
       
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