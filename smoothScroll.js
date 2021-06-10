// function transition(target, duration) {
//     const element = document.querySelector(target);
//     let elementTop = element.getBoundingClientRect().top;
//     let startPosition = pageYOffset;
//     let distance = elementTop - startPosition;
//     let startTime = null;

//     function scrolling(currentTime) {
//         if (startTime === null || startTime === undefined) {
//             startTime = currentTime;
//         }
//         let timeElapsed = currentTime - startTime;
//         let run = ease(timeElapsed, startPosition, distance, duration);
//         console.log(run,distance)
//         window.scrollTo(0, run)
//         if (timeElapsed < duration) requestAnimationFrame(scrolling)
//     }

//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     }

//     requestAnimationFrame(scrolling)
// }

// const buttons = document.querySelectorAll('.btn');

// buttons[0].addEventListener('click',function(){
//     transition('.section-2',1000);
// })
// buttons[1].addEventListener('click',function(){
//     transition('.section-3',1000);
// })
// buttons[2].addEventListener('click',function(){
//     transition('.section-4',1000);
// })
// buttons[3].addEventListener('click',function(){
//     transition('.section-1',1000);
// })

// buttons.forEach(btn => {
//     btn.addEventListener('click', function () {
//         if (btn.classList.contains('sec-1')) {
//             transition('.section-3', 1000)
//         } else if (btn.classList.contains('sec-2')) {
//             transition('.section-4', 1000)
//         } else if (btn.classList.contains('sec-3')) {
//             transition('.section-1', 1000)
//         } else {
//             transition('.section-2', 1000)
//         }
//     })
// })



function transition(target, duration) {
    const element = document.querySelector(target);
    let elementTop = element.getBoundingClientRect().top;
    let startPosition = pageYOffset;
    let distance = elementTop + startPosition;

    scrollTo(0, distance)
    console.log(distance)
    return;
}

const btn1 = document.querySelector('.sec-1');
btn1.addEventListener('click', function () {
    transition('.section-1', 2000);
});

const btn2 = document.querySelector('.sec-2');
btn2.addEventListener('click', function () {
    transition('.section-2', 2000);
});

const btn3 = document.querySelector('.sec-3');
btn3.addEventListener('click', function () {
    transition('.section-3', 2000);
});

const btn4 = document.querySelector('.sec-4');
btn4.addEventListener('click', function () {
    transition('.section-4', 2000);
});
// scrollTo(0,distance)

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const buttons = document.querySelectorAll('.btn');
    sections.forEach((section, idx) => {
        let topValue = section.getBoundingClientRect().y;
        let bottomValue = section.getBoundingClientRect().bottom;

        // if (bottomValue <= innerHeight  && bottomValue > 0) buttons[idx].classList.add('active');
        // else buttons[idx].classList.remove('active');

        if (topValue < window.innerHeight - 200 ) {
            buttons.forEach(button => {
                button.classList.remove('active');
            })
            buttons[idx].classList.add('active');
        }

    });
});
