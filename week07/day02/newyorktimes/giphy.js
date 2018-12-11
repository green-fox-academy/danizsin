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

const selectMoonArticles = (res) => {
  const htmlbody = document.querySelector('body');
  res.response.docs.forEach(e => {
    const article = document.createElement('article');
    const header = document.createElement('header');
    header.innerText = e.headline.print_headline;
    const snippet = document.createElement('p');
    snippet.innerText = e.snippet;
    const pubdate = document.createElement('div');
    pubdate.innerText = e.pub_date;
    const permaurl = document.createElement('a');
    permaurl.href = e.web_url;
    permaurl.innerText = 'read entire article here';
    permaurl.target = '_blank';
    article.appendChild(header);
    article.appendChild(snippet);
    article.appendChild(pubdate);
    article.appendChild(permaurl);
    htmlbody.appendChild(article);
  });
}

const httpUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d7077355621d4df4adfe86b6286f4fe1&q=moon_landing_by_Apollo_11';
const httpMethod = 'GET';
createHttpRequest(httpUrl, httpMethod, selectMoonArticles);