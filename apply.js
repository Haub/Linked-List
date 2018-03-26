var userTitle = document.querySelector('.website-title');
var userUrl = document.querySelector('.website-url');
var enterUserInput= document.querySelector('.enter-button');
var readButton = document.querySelector('#read-button');
var deleteButton = document.querySelector('#delete-button');
var bookMarkList = document.querySelector('#listed-bookmarks');



enterUserInput.addEventListener('click', captureUserInput);

// main.addEventListener('click', function () {
//   main.classList.toggle('readButtonClicked');
// });



bookMarkList.addEventListener('click', function (e) {
  console.log(e.target.className);
});

// if (readButton.clicked == true) {
//   readButton.classList.add('.readButtonClicked');
//   userUrl.classList.add('.readButtonClickedUrl');
}

function captureUserInput() {
  var newBookmark = document.createElement ('ul');

  newBookmark.innerHTML = 
    `<h2>${userTitle.value}</h2>
     <hr>
     <a>${userUrl.value}</a>
     <hr>
     <button class = "read-button">Read</button>
     <button class = "delete-button">Delete</button>
    `;
  bookMarkList.prepend(newBookmark);
  clearInput();
}

function clearInput() {
  userTitle.value= "";
  userUrl.value= "";
}













