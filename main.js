const hamburgerButton = document.querySelector('.icon-menu');
const menu = document.querySelector('.menubar');
const navbar = document.querySelector('.navbar');
const screenWidth = window.screen.innerWidth;
hamburgerButton.addEventListener('click',(event)=>{
    menu.classList.toggle("isActive");
    if(menu.classList.contains('isActive')){
        hamburgerButton.src = 'assets/images/icon-menu-close.svg';
        
    }
    else{
        hamburgerButton.src = 'assets/images/icon-menu.svg';
        
        
            
        }
     
    }
    
);
