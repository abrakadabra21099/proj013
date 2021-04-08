'use strict';

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// btns[0].classList.add('red', 'dhsfkjh');
// btns[1].classList.add('red');
// btns[0].classList.remove('blue');
// btns[0].classList.toggle('blue');

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red')
    // } else {
    //     btns[1].classList.remove('red')
    // }
    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

wrapper.addEventListener('click', (e) => {
    // console.dir(e.target);
    // if (e.target && e.target.tagName == 'BUTTON') {
    if (e.target && e.target.matches('button.red')) {
            // if (e.target && e.target.classList.contains('some')) {
        console.log('hell')
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.appendChild(btn);
