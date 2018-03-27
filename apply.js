var userTitle = document.querySelector('.website-title');
var userUrl = document.querySelector('.website-url');
var enterUserInput= document.querySelector('.enter-button');
var readButton = document.querySelector('#read-button');
var deleteButton = document.querySelector('#delete-button');
var bookMarkList = document.querySelector('#listed-bookmarks');



enterUserInput.addEventListener('click', captureUserInput);

$('#listed-bookmarks').on('click', '#read-button', readButtonClicked);



function readButtonClicked() {
  console.log('This fucking shit');
  // console.log(this.closest('ul')) // path to ul
  $(this).addClass('readButtonClicked');

}



// bookMarkList.addEventListener('click', function () {
//   bookMarkList.classList.toggle('readButtonClicked');
// });


function captureUserInput() {
  var newBookmark = document.createElement ('ul');

  newBookmark.innerHTML = 
    `<h2>${userTitle.value}</h2>
     <hr>
     <a>${userUrl.value}</a>
     <hr>
     <button id = "read-button">Read</button>
     <button id = "delete-button">Delete</button>
    `;
  bookMarkList.prepend(newBookmark);
  clearInput();
}

function clearInput() {
  userTitle.value= "";
  userUrl.value= "";
}













