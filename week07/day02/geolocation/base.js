const httpUrl = `https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=`;
const httpMethod = 'GET';

const createHttpRequest = (url, method, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open(method, url);
  xhr.setRequestHeader('X-Mashape-Key', '1oiiIvMpKHmsh2ZC5nj6p8m1d14Gp1kjifkjsnTSPw9NlauyM5');
  xhr.send();
}

const maincont = document.querySelector('main');
const maps = document.querySelector('iframe');

const getGeolocation = (res) => {
  res.Results.forEach(e => {
    const article = document.createElement('article');
    const cityname = document.createElement('p');
    const latitude = document.createElement('p');
    const longitude = document.createElement('p');
    cityname.innerText = e.name;
    latitude.innerText = e.lat;
    longitude.innerText = e.lon;
    article.appendChild(cityname);
    article.appendChild(latitude);
    article.appendChild(longitude);
    maincont.appendChild(article);
  });
  maps.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDmwCKa3m4lOfh-IAO3TUm4f-RwqGPFPm8&q=${res.Results[0].name}`;
}

const searchbtn = document.querySelector('#searchbtn');
const geoinput = document.querySelector('#geolocation');

searchbtn.onclick = () => {
  while (maincont.firstChild) {
    maincont.removeChild(maincont.firstChild);
  }
  searchval = geoinput.value;
  createHttpRequest(`${httpUrl}${searchval}`, httpMethod, getGeolocation);
  geoinput.value = '';
}