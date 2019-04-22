function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  const ul = document.querySelector('.employee-list')
  let li = document.createElement('li');
  li.innerHTML =  retrieveEmployeeInformation();
  ul.appendChild(li);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
    submit.addEventListener('click', function(event){
      addNewElementAsLi()
      document.querySelector('input').value = "";
    })
}

function clearEmployeeListOnLinkClick() {
  let del = document.querySelector('a');
  const ul = document.querySelector('.employee-list');

  del.addEventListener('click', function(e) {
      while (ul.hasChildNodes()) {
        ul.removeChild(ul.childNodes[0]);
      }})

  }
