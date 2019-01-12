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

const validateUserLogin = (event) => {
  const { loginname, loginpwd, remembercheck } = document.forms[0].elements;
  let rememberMe = 0;
  if (remembercheck.checked) {
    rememberMe = 1;
  }

  const sendObj = {
    loginName: loginname.value,
    loginPwd: loginpwd.value,
    isChecked: rememberMe
  }

  fetch('/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sendObj)
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.answer == 'success') {
        fetchForms();
        addRegFormValidationEventListener();
      } else {
        const errorDiv = document.querySelector('.errordiv');
        errorDiv.innerText = data.answer;
      }
    })
    .catch(err => console.log(err));
}

const fetchRestaurantProducts = (id) => {
  fetch(`/showfoods/${id}`)
    .then(resp => resp.json())
    .then(data => {
      buildFoods(data);
    })
    .catch(err => console.log(err));
}

const destroyUserSession = () => {
  fetch('/logout')
    .then(resp => resp.json())
    .then(data => {
      if (data.answer == 'success') {
        fetchForms();
      }
    })
    .catch(err => console.log(err));
}

const buildFoods = (data) => {
  const mainContent = document.querySelector('.maincontent');
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
  data.forEach(food => {
    const foodCont = document.createElement('div');
    foodCont.classList.add('foodcont');

    const imageCont = document.createElement('figure');
    imageCont.classList.add('imagecont');

    const foodImage = document.createElement('img');
    foodImage.src = food.imageurl;

    const foodInfoCont = document.createElement('div');
    foodInfoCont.classList.add('foodinfocont');

    const foodName = document.createElement('p');
    foodName.classList.add('foodname');
    foodName.innerText = food.name;

    const foodPriceAndButton = document.createElement('div');
    foodPriceAndButton.classList.add('pricenbutton');

    const foodPrice = document.createElement('p');
    foodPrice.classList.add('foodprice');
    foodPrice.innerHTML = `<span class="price">${food.price}</span> €`;

    const buttonCont = document.createElement('div');
    buttonCont.classList.add('buttoncont');
    buttonCont.setAttribute('data-foodid', food.id);

    const cartIcon = document.createElement('i');
    cartIcon.classList.add('carticon');
    cartIcon.classList.add('fas');
    cartIcon.classList.add('fa-shopping-cart');
    cartIcon.setAttribute('data-foodid', food.id);

    buttonCont.appendChild(cartIcon);
    foodPriceAndButton.appendChild(foodPrice);
    foodPriceAndButton.appendChild(buttonCont);
    foodInfoCont.appendChild(foodName);
    foodInfoCont.appendChild(foodPriceAndButton);
    imageCont.appendChild(foodImage);
    foodCont.appendChild(imageCont);
    foodCont.appendChild(foodInfoCont);
    mainContent.appendChild(foodCont);
  });
}

const registrateUser = () => {
  const regForm = document.querySelector('.regform');
  const { fullname, username, email, password } = regForm.elements;
  const textBefore = document.querySelector('.firstreglabel');
  fetch('/register', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fullname: fullname.value.trim(),
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value.trim()
    })
  })
    .then(resp => resp.json())
    .then(data => {
      const successText = document.createElement('h3');
      successText.classList.add('modalelem');
      if (data.answer == 'success') {
        successText.innerText = 'Thanks for your registration! Welcome to the club!';
        fullname.value = '';
        username.value = '';
        email.value = '';
        password.value = '';
        fullname.classList.remove('valid');
        username.classList.remove('valid');
        email.classList.remove('valid');
        password.classList.remove('valid');
      } else {
        successText.innerText = data.answer;
        successText.classList.add('warnmess');
      }
      if (!document.querySelector('.warnmess')) {
        regForm.insertBefore(successText, textBefore);
        setTimeout(() => {
          regForm.removeChild(successText);
        }, 3000);
      }
    })
    .catch(err => console.log(err));
}

const validateField = (event) => {
  const trgt = event.target;
  let testRegex;
  if (trgt.value.trim() != "") {
    if (trgt.classList.contains('fullname')) {
      testRegex = /^[a-záéíűúőóüöA-ZÁÍÉŰÚŐÓÜÖ -]*$/;
    } else if (trgt.classList.contains('username')) {
      testRegex = /^[a-zA-Z0-9]{1,45}$/;
    } else if (trgt.classList.contains('email')) {
      testRegex = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
    } else if (trgt.classList.contains('password')) {
      testRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{8,}$/;
    }
    if (testRegex.test(trgt.value.trim())) {
      validInput(trgt);
    } else {
      notValidInput(trgt);
    }
  } else {
    notValidInput(trgt);
  }
}

const notValidInput = (target) => {
  target.classList.remove('notvalid');
  target.classList.remove('valid');
  target.classList.add('notvalid');
}

const validInput = (target) => {
  target.classList.remove('notvalid');
  target.classList.remove('valid');
  target.classList.add('valid');
}

addRegFormValidationEventListener();