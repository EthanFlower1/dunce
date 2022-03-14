// ======= Select already existing elements =======
var app = document.querySelector('#app');


// ======= Create new HTML elements =======

var header = document.createElement('header');
var title = document.createElement('h1');

var aside = document.createElement('aside');

var main = document.createElement('main');
var draftPost = document.createElement('form');
var feed = document.createElement('section');

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
    tagLi.textContent = tag;
    tagUl.appendChild(tagLi);
  });
  // append to aside
  aside.appendChild(tagTitle);
  aside.appendChild(tagUl);
};

// ======= Set attributes / event listeners (providing appropriate handlers as input) =======
title.setAttribute('class', 'title');
title.textContent = 'dunce';

aside.setAttribute('class', 'tag-list');

main.setAttribute('class', 'main');

draftPost.setAttribute('class', 'draft-post');

feed.setAttribute('class', 'feed');

//  ======= Append new HTML elements to the DOM =======
header.appendChild(title);
app.appendChild(header);

app.appendChild(aside);

main.appendChild(draftPost);
main.appendChild(feed);
app.appendChild(main);

app.appendChild(footer);

// ======= Execute functions and initiate any extra variables =======
// console.log(aside);
var tags = ['#html', '#css', '#js'];
renderTaglist();