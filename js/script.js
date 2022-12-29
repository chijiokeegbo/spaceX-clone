

const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu-right');
}

function scrollPage(){
    const scrollPos = window.scrollY;

    if(scrollPos > 100 && !scrollStarted){
        countUp();
        scrollStarted = true;
    }else if(scrollPos < 100 && scrollStarted){
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

    const updateCounter = () => {
            // Get Count Target
            const target = +counter.getAttribute('data-target');
            // Get Current Counter Value
            const c = +counter.innerText;
            //Creat an Increment
            const increment = target / 100;

            if(c < target){
                counter.innerText = `${Math.ceil(c + increment)}`;

                setInterval(updateCounter, 75);
            }else{
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

function reset(){
    counters.forEach((counter) => (counter.innerHTML = '0'));
}