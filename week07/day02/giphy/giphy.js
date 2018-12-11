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

const selectFunnyPics = (response) => {
  const div = document.createElement('div');
  response.data.forEach(e => {
    const img = document.createElement('img');
    img.src = e.images.original_still.url;
    img.setAttribute('data-bigimgurl', e.images.downsized_large.url)
    div.appendChild(img);
  });
  const htmlbody = document.querySelector('body');
  htmlbody.appendChild(div);
  if (document.querySelectorAll('div img')) {
    const thumbnails = document.querySelectorAll('div img');
    thumbnails.forEach(e => {
      e.onclick = (event) => {
        event.target.src = event.target.getAttribute('data-bigimgurl');
      }
    });
  }
}

const httpUrl = 'https://api.giphy.com/v1/gifs/search?api_key=addeK2iy9rHZO3BVSG9r530KJnW0i5UF&q=funny+cute&limit=16&offset=0&rating=G&lang=ens';
const httpMethod = 'GET';
createHttpRequest(httpUrl, httpMethod, selectFunnyPics);