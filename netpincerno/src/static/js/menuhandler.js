const setupAccountMenu = () => {
  isSessionEstablished()
    .then(data => {
      if (data.answer == 'success') {
        return fetch(`static/html/templates/loggedinaccountmenu.html`);
      } else {
        return fetch(`static/html/templates/baseaccountmenu.html`);
      }
    })
    .then(response => response.text())
    .then(htmlContent => {
      const accountMenuCont = document.querySelector('.accountmenu');
      accountMenuCont.innerHTML = htmlContent;
    })
    .catch(err => console.log(err));
}

setupAccountMenu();