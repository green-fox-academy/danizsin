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

loadRestaurants();