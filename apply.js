var userTitle = document.querySelector('.website-title');
var userUrl = document.querySelector('.website-url');
var enterUserInput= document.querySelector('.enter-button');
var readButton = document.querySelector('#read-button');
var deleteButton = document.querySelector('#delete-button');
var bookMarkList = document.querySelector('#listed-bookmarks');


enterUserInput.addEventListener('click', urlval);

$('#listed-bookmarks').on('click', '#read-button', readButtonClicked);
$('#listed-bookmarks').on('click', '#delete-button', deleteButtonClicked);

function readButtonClicked(event) {
  event.preventDefault();
  $(this).toggleClass('read-button','readButtonClicked');
  $(this).parent().toggleClass('ulClicked');
}

function deleteButtonClicked () {
  $(this).parent().remove();
}

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

function urlval() {
    var testedUrl = userUrl.value;
    var linkRegex =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(linkRegex.test(testedUrl) === true) {
       captureUserInput();
    } else {
       alert ('please enter a valid URL');
    }
    clearInput();
}

function clearInput() {
  userTitle.value= "";
  userUrl.value= "";
}





