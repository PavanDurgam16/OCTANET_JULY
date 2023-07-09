//responsive navbar code 
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('.navbar .mainMenu a');

openMenu.addEventListener('click',open);
closeMenu.addEventListener('click',close);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function open(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

//carousel code 
const carouselSlides = document.querySelectorAll('.carousel-slide');
const slideButtons = document.querySelectorAll('.slidebuttons');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);

function autoslide() {
  counter += 1;
  slidefun(counter);
}

function plusButton(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}

function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}

function slidefun(n) {
  for (let i = 0; i < carouselSlides.length; i++) {
    carouselSlides[i].style.display = 'none';
    slideButtons[i].classList.remove('active');
  }

  if (n > carouselSlides.length) {
    counter = 1;
  } else if (n < 1) {
    counter = carouselSlides.length;
  }

  carouselSlides[counter - 1].style.display = 'block';
  slideButtons[counter - 1].classList.add('active');
}

// FAQ
const faqToggles = document.querySelectorAll('.faq-toggle');
faqToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const answer = toggle.parentNode.nextElementSibling;
    answer.classList.toggle('show');
    faqToggles.forEach((otherToggle) => {
      if (otherToggle !== toggle) {
        const otherAnswer = otherToggle.parentNode.nextElementSibling;
        otherAnswer.classList.remove('show');
      }
    });
  });
});
