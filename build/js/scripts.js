// Custom Scripts
// Custom scripts



// const modalLinks = document.querySelectorAll('.modal__choice-link');

// modalLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         this.classList.toggle('active');
//     });
// });


// const modalLinks = document.querySelectorAll('.modal__choice-link');

// modalLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         modalLinks.forEach(link => link.classList.remove('active'));
//         this.classList.add('active');
//     });
// });


const modalChoices = document.querySelectorAll('.modal__choice');

modalChoices.forEach(choice => {
    const modalLinks = choice.querySelectorAll('.modal__choice-link');

    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            modalLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if(event.target){
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)

// function fixedNav();



// Модальное окно
function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

    const body = document.body

    trigger.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
        body.classList.add('locked')
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none'
        body.classList.remove('locked')
    });
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none'
            body.classList.remove('locked')
        }
    })
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')



