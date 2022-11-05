const navSLide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //togle Nav
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle')

        //Animation on links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade1 0.5s ease forwards ${index /3 + 0.5}s`
            }
        });
    })
}

navSLide();