window.addEventListener('DOMContentLoaded', () => {

    const questionMore = document.querySelectorAll('.question__box__item .button');
    const questionText = document.querySelectorAll('.question__box__item__text');

    for(let i = 0; i<questionMore.length; i++){
        questionMore[i].addEventListener('click', () => {
            questionText[i].classList.toggle('text-active');
        });
    }
    
});