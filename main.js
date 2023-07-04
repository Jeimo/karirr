// Navbar Functionality
let navbar = document.querySelector('.navbar')
document.addEventListener('scroll' , () =>{
    if(window.top.scrollY > 19){
    }else{
        navbar.classList.add('scroll');
        navbar.style.transition = '.2s ease';
    }
})

// Slider Functionality
const productContainers = [...document.querySelectorAll('.company-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Toggle Menu Functionality
let subMenu = document.getElementById("subMenu");

        function toggleMenu(){
            subMenu.classList.toggle("open-menu");
        }