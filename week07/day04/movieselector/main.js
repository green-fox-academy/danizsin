const slctgenre = document.querySelector('#genreselector');
const slctfilm = document.querySelector('#filmselector');
const paragraph = document.querySelector('p');

const films = {
  'scifi': ['Moon', '2001 Space Odessy'],
  'drama': ['Darkest Hour', 'There will be blood', 'Wayne\'s world'],
  'comedy': ['Deadpool', 'American Beauty', 'Airplane!', 'Contact']
}

const fillUpFilms = (genre) => {
  while (slctfilm.firstChild) {
    slctfilm.removeChild(slctfilm.firstChild);
  }
  const baseopt = document.createElement('option');
  baseopt.value = '';
  baseopt.innerText = '--Select a film--';
  slctfilm.appendChild(baseopt);
  const filmsToShow = films[`${genre}`];
  filmsToShow.forEach(film => {
    const filmoption = document.createElement('option');
    filmoption.value = film;
    filmoption.innerText = film;
    slctfilm.appendChild(filmoption);
  });
}

slctgenre.addEventListener('change', () => {
  switch (slctgenre.value) {
    case '0':
      while (slctfilm.firstChild) {
        slctfilm.removeChild(slctfilm.firstChild);
      }
      break;

    case 'scifi':
      fillUpFilms('scifi');
      break;

    case 'drama':
      fillUpFilms('drama');
      break;

    case 'comedy':
      fillUpFilms('comedy');
      break;
  }
});

slctfilm.addEventListener('change', () => {
  paragraph.innerText = slctfilm.value;
});