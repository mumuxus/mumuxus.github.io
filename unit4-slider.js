//-------------------------------------Unit 4-----------------------------------------------//
// /*Code Reference: https://www.foolishdeveloper.com/2021/06/create-image-slider-using-html-css-and.html 		Written by: Shantanu Jana in 2021*/
const prev = document.querySelector('.prev'); /*constant variable perv points to the first class/selector "perv" in the document*/
const next = document.querySelector('.next'); /*next is pointing to the selector next*/
const images = document.querySelector('.proj3-carousel').children; /*images is an array containing all the children in the class Proj3-carousel*/
const totalImages = images.length; /*the .length command will give us the number of items in our array*/
let index = 0;

prev.addEventListener('click', () => { /*when element perv is clicked perform function nextImage*/
    nextImage('next');
})

next.addEventListener('click', () => { /*when element next is clicked perform function nextImage*/
    nextImage('prev');
})

function nextImage(direction) {
    if (direction == 'next') { /*when we click the next arrow execute this*/
        index++; /*increment our index counter by one*/
        if (index == totalImages) { /*check to see if our index counter is equal to that of our totalImages value we stored earlier*/
            index = 0; /*if this is true it means we have reached the end of our slideshow, and so we jump back to the start*/
        }
    } else { /*calling this function only happens when we click the next or prev button and if not next then it's prev*/
        if (index == 0) { /*if we're already at thr start of our slideshow and want to go back we have to edit our index counter*/
            index = totalImages - 1; /*total -1 will take us to the last slide. This is because our index starts count at 0 not 1*/
        } else { /*if we entered prev and the index isn't 0 to begin with then there is nothing more for us to consider*/
            index--; /*index minus one will take the counter to the previous slide*/
        }
    }

    for (let i = 0; i < images.length; i++) { /*run a forloop from 0 to the number of images in our array*/
        images[i].classList.remove('main'); /*images[0] points to the first child in our class, which is slide 1 which also has the class main.
												this line of code removes that class main from the first and every following child in case they had it too (they don't in our code).*/
    }
    images[index].classList.add('main'); /*Now over here we add that 'main' class to  whatever our current slide is
											 we are able to do this because we keep track of the current slide using our index counter.
											 from our css code we know that .item is set to display:none and .main is set to display:block,
											 so we have to keep switching this main ticker around to whichever item we want to be showing*/
}

