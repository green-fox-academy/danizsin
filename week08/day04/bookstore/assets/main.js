'use strict';

const main = document.querySelector('main');
const categoryS = document.querySelector('#category');
const publisherS = document.querySelector('#publisher');
const form = document.forms.filters;
const categ = form.category;
const publish = form.publisher;
const pricerange = form.pricerange;
// const pricerange = document.querySelector('#pricerange');

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

const fillPublisherSelect = (data) => {
  const baseOption = document.createElement('option');
  baseOption.value = 'all';
  baseOption.innerText = 'All';
  publisherS.appendChild(baseOption);
  data.forEach(publisher => {
    const publisherOption = document.createElement('option');
    publisherOption.value = publisher.pub_name;
    publisherOption.innerText = publisher.pub_name;
    publisherS.appendChild(publisherOption);
  });
}

const fillCategSelect = (data) => {
  const baseOption = document.createElement('option');
  baseOption.value = 'all';
  baseOption.innerText = 'All';
  categoryS.appendChild(baseOption);
  data.forEach(category => {
    const categOption = document.createElement('option');
    categOption.value = category.cate_descrip;
    categOption.innerText = category.cate_descrip;
    categoryS.appendChild(categOption);
  });
}

const listBooks = (data) => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const firstRow = document.createElement('div');
  const baseTitle = document.createElement('p');
  baseTitle.innerText = 'Book name';
  const baseAuthorName = document.createElement('p');
  baseAuthorName.innerText = 'Author\'s name';
  const baseCategory = document.createElement('p');
  baseCategory.innerText = 'Category';
  const basePublisher = document.createElement('p');
  basePublisher.innerText = 'Publisher\'s name';
  const basePrice = document.createElement('p');
  basePrice.innerText = 'Book price';

  firstRow.appendChild(baseTitle);
  firstRow.appendChild(baseAuthorName);
  firstRow.appendChild(baseCategory);
  firstRow.appendChild(basePublisher);
  firstRow.appendChild(basePrice);

  main.appendChild(firstRow);

  data.forEach(book => {
    const row = document.createElement('div');
    const title = document.createElement('p');
    title.innerText = book.book_name;
    const autName = document.createElement('p');
    autName.innerText = book.aut_name;
    const category = document.createElement('p');
    category.innerText = book.cate_descrip;
    const publisher = document.createElement('p');
    publisher.innerText = book.pub_name;
    const price = document.createElement('p');
    price.innerText = `${book.book_price} $`;

    row.appendChild(title);
    row.appendChild(autName);
    row.appendChild(category);
    row.appendChild(publisher);
    row.appendChild(price);

    main.appendChild(row);
  });
}

form.addEventListener('change', (event) => {
  const postHXR = new XMLHttpRequest();
  postHXR.onreadystatechange = () => {
    if (postHXR.status === 200 && postHXR.readyState === XMLHttpRequest.DONE) {
      callback(JSON.parse(postHXR.responseText));
    }
  }
  postHXR.open('POST', '/filter');
  postHXR.send(JSON.stringify({

  }));
});

createHttpRequest('/books', 'GET', listBooks);
createHttpRequest('/publisherselect', 'GET', fillPublisherSelect);
createHttpRequest('/categselect', 'GET', fillCategSelect);