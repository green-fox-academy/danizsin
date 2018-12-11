const httpUrl = `https://swapi.co/api`;
const httpMethod = 'GET';

const createHttpRequest = (url, method, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open(method, url);
  xhr.send();
}

const allFilms = []
createHttpRequest(`${httpUrl}/films/`, httpMethod, (films) => {
  films.results.forEach(film => {
    allFilms.push(film);
  });
});

const selectChar = (res) => {
  const firstDiv = document.createElement('div');
  const secondDiv = document.createElement('div');
  const mainDisplay = document.querySelector('main');
  while (mainDisplay.firstChild) {
    mainDisplay.removeChild(mainDisplay.firstChild);
  }
  res.results.forEach(e => {
    const paragraph = document.createElement('p');
    firstDiv.appendChild(paragraph);
    paragraph.innerText = e.name;
    paragraph.onclick = () => {
      while (secondDiv.firstChild) {
        secondDiv.removeChild(secondDiv.firstChild);
      }
      paragraph.style.backgroundColor = 'pink';
      e.films.forEach(film => {
        const filmpar = document.createElement('p');
        filmpar.innerText = allFilms[film.slice(-2, -1)].title;
        secondDiv.appendChild(filmpar);
      });
    }
  });
  mainDisplay.appendChild(firstDiv);
  mainDisplay.appendChild(secondDiv);
}

const searchInput = document.querySelector('#searchbar');
const searchbtn = document.querySelector('#searchbtn');
searchbtn.onclick = () => {
  let searchValue = searchInput.value;
  createHttpRequest(`${httpUrl}/people?search=${searchValue}`, httpMethod, selectChar);
  searchInput.value = '';
}
