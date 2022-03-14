// ======= Select already existing elements =======
var app = document.querySelector('#app');


// ======= Create new HTML elements =======

var header = document.createElement('header');
var title = document.createElement('h1');
var aside = document.createElement('aside');
var main = document.createElement('main');
var draftPost = document.createElement('form');
var postTextLabel = document.createElement('label');
var postTextInput = document.createElement('textarea');
var submitBtn = document.createElement('input');
var feed = document.createElement('section');
var questionList = document.createElement('ul');
var footer = document.createElement('footer');

// ======= Create event handler functions =======
// render tag list
var renderTaglist = function() {
  // make title
  var tagTitle = document.createElement('h3');
  tagTitle.setAttribute('class', 'tag-title');
  tagTitle.textContent = 'Trending Tags';

  // make unordered list
  var tagUl = document.createElement('ul');
  // iterate through tags array
  tags.forEach(function(tag) {
    // add list item to ul per tag
    var tagLi = document.createElement('li');
    tagLi.setAttribute('class', 'tag');
    tagLi.textContent = tag;
    tagUl.appendChild(tagLi);
  });
  // append to aside
  aside.appendChild(tagTitle);
  aside.appendChild(tagUl);
};

var addQuestion = function () {
  var text = document.getElementById('message').value;
  console.log(text);
  questionArray.push(text);
  renderFeed();
}
var renderFeed = function (tag) {
  var keyword = tag || ' ';
  questionArray.forEach( element => {
    if (element.includes(keyword)) {
      var question = document.createElement('li');
      question.setAttribute('class', 'question')
      question.textContent = element;
      questionList.appendChild(question);
    }
  })
}

// ======= Set attributes / event listeners (providing appropriate handlers as input) =======

title.setAttribute('class', 'title');
title.textContent = 'dunce.';
header.setAttribute('class', 'header');
aside.setAttribute('class', 'tag-list');
main.setAttribute('class', 'main');
draftPost.setAttribute('class', 'draft-post');
draftPost.setAttribute('onsubmit', 'addQuestion()');
feed.setAttribute('class', 'feed');
postTextInput.setAttribute('type', 'text');
postTextInput.setAttribute('placeholder', 'Ask us anything!');
postTextInput.setAttribute('id', 'message');
postTextLabel.setAttribute('for', 'message');
postTextLabel.textContent = '';
submitBtn.textContent = 'Submit your silly question';
submitBtn.setAttribute('class', 'submit-btn');
submitBtn.setAttribute('type', 'submit');
questionList.setAttribute('class', 'question-list');

//  ======= Append new HTML elements to the DOM =======
header.appendChild(title);
app.appendChild(header);
app.appendChild(aside);
draftPost.appendChild(postTextLabel);
draftPost.appendChild(postTextInput);
draftPost.appendChild(submitBtn);
main.appendChild(draftPost);
feed.appendChild(questionList);
main.appendChild(feed);
app.appendChild(main);
app.appendChild(footer);

// ======= Execute functions and initiate any extra variables =======
// console.log(aside);
var tags = ['#html', '#css', '#js', '#git', '#ds&algorithms', '#computerScience', '#math', '#linux', '#testing'];

var questionArray = ['At ethan erat pellentesque adipiscing commodo. Diam phasellus vestibulum lorem sed. Pharetra vel turpis nunc eget lorem dolor sed viverra. Quisque', 'At erat pellentesque adipiscing commodo. Diam phasellus vestibulum lorem sed. Pharetra vel turpis nunc eget lorem dolor sed viverra. Quisque', 'At erat pellentesque adipiscing commodo. Diam phasellus vestibulum lorem sed. Pharetra vel turpis nunc eget lorem dolor sed viverra. Quisque', 'Andres erat pellentesque adipiscing commodo. Diam phasellus vestibulum lorem sed. Pharetra vel turpis nunc eget lorem dolor sed viverra. Quisque'];

renderTaglist();
renderFeed();