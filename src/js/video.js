
export default () => {
    const ifr = document.querySelector('.video__iframe');
    const but = document.querySelector('.video__play-img');
    const over = document.querySelector('.video__overlay');
    
    but.addEventListener('click', (e) => {
        e.target.classList.contains('video__play-img') ? (ifr.style.visibility = 'visible') && (over.style.visibility = 'visible') : console.log(e.target);
    })

    over.addEventListener('click', (e) => {
        e.stopPropagation();
        e.target.classList.contains('video__overlay') ? (ifr.style.visibility = 'hidden') && (ifr.src = ifr.src) && (over.style.visibility = 'hidden') : console.log(e.target);
    })
}