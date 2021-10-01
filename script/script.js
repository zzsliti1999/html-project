const navSlide=()=>{
    const burger = document.querySelector('.burger');
    const nav =document.querySelector('.menu');
    const navlinks =document.querySelectorAll('.menu li')
    burger.addEventListener('click',()=>
    {
        nav.classList.toggle('nav-active');
        navlinks.forEach((link, index)=>
        {  
            if(link.style.animation){
                link.style.animation=''
            }else
            {link.style.animation=`menuFade 0.5 ease forwards ${index/ 7 +2}s`;
    }
        }
    
        );
    });

}
navSlide()

