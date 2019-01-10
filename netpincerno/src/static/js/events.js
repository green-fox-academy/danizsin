'use strict';

const navbar = document.querySelector('.navbar');
const restaurants = document.querySelector('.restaurants');
const login = document.querySelector('.login');
const docbody = document.body;

const formEvents = setTimeout(() => {
  document.forms[1].addEventListener('input', (event) => {
    event.stopImmediatePropagation();
    validateField(event);
  });

  const signInBtn = document.querySelector('.signinbtn');
  signInBtn.addEventListener('click', validateUserLogin);

}, 200);

window.addEventListener('click', (event) => {
  const trgt = event.target;

  if (document.querySelector('.basemodal') && !trgt.classList.contains('modalelem')) {
    removeLoginModal();
  }

  if (trgt.classList.contains('modaltitle')) {
    trgt.parentElement.childNodes.forEach(e => e.classList.remove('activetitle'));
    trgt.classList.add('activetitle');
  }

  if (trgt.classList.contains('login')) {
    showLoginModal();
  }

  if (trgt.classList.contains('regtitle')) {
    const loginform = document.querySelector('.loginform');
    const regform = document.querySelector('.regform');
    loginform.classList.add('notactive');
    regform.classList.add('notactive');
  }

  if (trgt.classList.contains('logintitle')) {
    const loginform = document.querySelector('.loginform');
    const regform = document.querySelector('.regform');
    loginform.classList.remove('notactive');
    regform.classList.remove('notactive');
  }

  if (trgt.classList.contains('restaurantcont')) {
    fetchRestaurantProducts(trgt.getAttribute('data-restid'));
    const restaurantLinks = document.querySelectorAll('.restaurantcont');
    restaurantLinks.forEach(e => e.classList.remove('activerestaurant'));
    trgt.classList.add('activerestaurant');
  }

  if (trgt.classList.contains('dropdownactivator')) {
    trgt.nextElementSibling.classList.add('activedropdown');
  }

  if (!trgt.classList.contains('cartdropdown')) {
    const drop = document.querySelector('.cartmenu');
    drop.classList.remove('activedropdown');
  }

  if (!trgt.classList.contains('accountdropdown')) {
    const drop = document.querySelector('.accountmenu');
    drop.classList.remove('activedropdown');
  }

  if (trgt.classList.contains('signinbtn')) {
    event.preventDefault();
  }

  if (trgt.classList.contains('regbtn')) {
    event.preventDefault();
    registrateUser();
  }

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

const validateUserLogin = async (event) => {
  event.preventDefault();
  const loginName = document.forms[0].elements.loginname;
  const loginPwd = document.forms[0].elements.loginpwd;
  const checkBox = document.forms[0].elements.remembercheck;
  let rememberMe = 0;
  if (checkBox.checked) {
    rememberMe = 1;
  }
  console.log(`${loginName.value} nevu ,${loginPwd.value} jelszoval,   ${rememberMe}`);

  const sendObj = {
    loginName: loginName.value,
    loginPwd: loginPwd.value,
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
    .then(data => { console.log(data.answer) })
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
  const { fullname, username, email, password } = document.forms[1].elements;
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
        document.forms[1].insertBefore(successText, textBefore);
        setTimeout(() => {
          document.forms[1].removeChild(successText);
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