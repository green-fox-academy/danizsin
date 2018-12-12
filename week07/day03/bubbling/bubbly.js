// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//  - the nav buttons (up, down, left, right) move the background by 10px
//  - the zoom buttons increase/decrease the image by 20%
//  - attach only two event listeners to the nav element
//    - one for navigation
//    - one for zooming
window.onload = () => {
  const myNav = document.querySelector('nav');
  const image = document.querySelector('.img-inspector');
  let imagePosX = 0;
  let imagePosY = 0;
  let imageZoom = 200;

  const navigate = (event) => {
    if (event.target.getAttribute('data-action') === 'move') {
      switch (event.target.getAttribute('data-direction')) {
        case 'up':
          imagePosY += 10;
          image.style.backgroundPosition = `${imagePosX}px ${imagePosY}px`;
          break;

        case 'down':
          imagePosY -= 10;
          image.style.backgroundPosition = `${imagePosX}px ${imagePosY}px`;
          break;

        case 'left':
          imagePosX += 10;
          image.style.backgroundPosition = `${imagePosX}px ${imagePosY}px`;
          break;

        case 'right':
          imagePosX -= 10;
          image.style.backgroundPosition = `${imagePosX}px ${imagePosY}px`;
          break;
      }
    }
  }

  const zoom = (event) => {
    if (event.target.getAttribute('data-action') === 'zoom') {
      switch (event.target.getAttribute('data-direction')) {
        case 'in':
          imageZoom += 20;
          image.style.backgroundSize = `${imageZoom}%`;
          break;

        case 'out':
          imageZoom -= 20;
          image.style.backgroundSize = `${imageZoom}%`;
          break;
      }
    }
  }

  myNav.addEventListener('click', navigate);
  myNav.addEventListener('click', zoom);
}