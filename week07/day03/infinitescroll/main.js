const createTenDivs = () => {
  for (let i = 0; i < 10; i++) {
    const randnum1 = Math.floor(Math.random() * 256);
    const randnum2 = Math.floor(Math.random() * 256);
    const randnum3 = Math.floor(Math.random() * 256);
    const newdiv = document.createElement('div');
    newdiv.style.backgroundColor = `rgb(${randnum1},${randnum2},${randnum3})`;
    document.body.appendChild(newdiv);
  }
}

const insertBeforeTenDivs = () => {
  const alldivs = document.querySelectorAll('div');
  for (let i = 0; i < 10; i++) {
    const randnum1 = Math.floor(Math.random() * 256);
    const randnum2 = Math.floor(Math.random() * 256);
    const randnum3 = Math.floor(Math.random() * 256);
    const newdiv = document.createElement('div');
    newdiv.style.backgroundColor = `rgb(${randnum1},${randnum2},${randnum3})`;
    document.body.insertBefore(newdiv, alldivs[0]);
  }
}

const insertDivs = () => {
  if (window.scrollY + window.innerHeight === document.body.clientHeight) {
    createTenDivs();
    window.scrollTo(0, document.body.clientHeight * 0.7);
  } else if (window.scrollY == 0) {
    insertBeforeTenDivs();
    window.scrollTo(0, 2000);
  }
}


createTenDivs();
window.addEventListener('scroll', insertDivs);