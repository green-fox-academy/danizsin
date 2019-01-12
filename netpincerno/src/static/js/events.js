'use strict';

const navbar = document.querySelector('.navbar');
const restaurants = document.querySelector('.restaurants');
const login = document.querySelector('.login');
const docbody = document.body;

window.addEventListener('click', (event) => {
  const trgt = event.target;

  //REMOVE MODAL
  if (document.querySelector('.basemodal') && !trgt.classList.contains('modalelem')) {
    removeLoginModal();
  }

  //SHOWING MODAL
  if (trgt.classList.contains('login')) {
    showLoginModal();
  }

  //SWITCH BETWEEN LOGIN AND REGISTER
  if (trgt.classList.contains('modaltitle')) {
    trgt.parentElement.childNodes.forEach(e => e.classList.remove('activetitle'));
    trgt.classList.add('activetitle');
  }

  //REPOSITION FORMS
  if (trgt.classList.contains('regtitle')) {
    const loginform = document.querySelector('.loginform');
    const regform = document.querySelector('.regform');
    const loggedInCont = document.querySelector('.loggedincont');
    if (loginform) {
      loginform.classList.add('notactive');
    } else {
      loggedInCont.classList.add('notactive');
    }
    regform.classList.add('notactive');
  }

  //REPOSITION FORMS
  if (trgt.classList.contains('logintitle')) {
    const loginform = document.querySelector('.loginform');
    const regform = document.querySelector('.regform');
    const loggedInCont = document.querySelector('.loggedincont');
    if (loginform) {
      loginform.classList.remove('notactive');
    } else {
      loggedInCont.classList.remove('notactive');
    }
    regform.classList.remove('notactive');
  }

  //LOADING FOODS OF A RESTAURANT TO MAINCONTENT
  if (trgt.classList.contains('restaurantcont')) {
    fetchRestaurantProducts(trgt.getAttribute('data-restid'));
    const restaurantLinks = document.querySelectorAll('.restaurantcont');
    restaurantLinks.forEach(e => e.classList.remove('activerestaurant'));
    trgt.classList.add('activerestaurant');
  }

  //DROPDOWN ACTIVATE
  if (trgt.classList.contains('dropdownactivator')) {
    trgt.nextElementSibling.classList.add('activedropdown');
  }

  //DROPDOWN DEACTIVATE
  if (!trgt.classList.contains('cartdropdown')) {
    const drop = document.querySelector('.cartmenu');
    drop.classList.remove('activedropdown');
  }

  //DROPDOWN DEACTIVATE
  if (!trgt.classList.contains('accountdropdown')) {
    const drop = document.querySelector('.accountmenu');
    drop.classList.remove('activedropdown');
  }

  //SIGN IN
  if (trgt.classList.contains('signinbtn')) {
    event.preventDefault();
    validateUserLogin();
  }

  //REGISTER
  if (trgt.classList.contains('regbtn')) {
    event.preventDefault();
    registrateUser();
  }

  //DESTROY SESSION
  if (trgt.classList.contains('logout')) {
    destroyUserSession();
  }

  //ANIMATE CART ICON
  if (trgt.classList.contains('buttoncont') || trgt.classList.contains('fa-shopping-cart')) {
    if (trgt.classList.contains('buttoncont')) {
      trgt.firstChild.classList.add('animatecart');
      setTimeout(() => {
        trgt.firstChild.classList.remove('animatecart');
      }, 200);
    } else {
      trgt.classList.add('animatecart');
      setTimeout(() => {
        trgt.classList.remove('animatecart');
      }, 200);
    }
  }
});

window.addEventListener('keydown', (event) => {
  if (event.keyCode == 13 && document.querySelector('.loginform')) {
    event.preventDefault();
    validateUserLogin();
  }
})

const addRegFormValidationEventListener = () => {
  const formEvents = setTimeout(() => {
    const regform = document.querySelector('.regform');
    regform.addEventListener('input', (event) => {
      event.stopImmediatePropagation();
      validateField(event);
    });
  }, 500);
}