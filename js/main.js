/* FADED TEXT*/
document.body.addEventListener(
    'click',
    (event) => {
        if (event.target.classList.contains('read-more')) {
            event.preventDefault;
            console.log(event.target.previousElementSibling)
            event.target.previousElementSibling.classList.toggle('faded-txt')
            event.target.previousElementSibling.style.setAttribute='max-heigh = 100%';
        }
    }
);
