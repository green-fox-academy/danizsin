'use strict';
const aside = document.querySelector('.pickrestaurant');

const loadRestaurants = () => {
  fetch(`/listrestaurant`)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(restaurant => {
          const container = document.createElement('div');
          container.innerText = restaurant.name;
          container.classList.add('restaurantcont');
          container.setAttribute('data-restid', restaurant.id);
          aside.appendChild(container);
        });
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
    foodImage.src = `static/assets/images/${food.imageurl}`;

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

loadRestaurants();