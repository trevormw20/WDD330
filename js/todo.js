// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
taskLeft();
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
  taskLeft();
}, false);

// Create a new list item when clicking on the "Add" button
function newTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("addTask").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("listHolder").appendChild(li);
  }
  document.getElementById("addTask").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  taskLeft();
}

function selectAll() {
  list = document.getElementById("listHolder");

  li = list.getElementsByTagName("li");

  for (i = 0; i < (li.length - 1); i++) {
    li[i].style.display = "block";
  }
}

function selectActive() {
  list = document.getElementById("listHolder");

  li = list.getElementsByTagName("li");

  for (i = 0; i < (li.length - 1); i++) {
    if(document.getElementById('element').classList.contains("class_one")) {
  }
    if (li[i].classList.contains("checked")) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }

  }

}

function selectCompleted() {

}

function taskLeft() {
  taskLeft = document.getElementById("taskLeft");
  list = document.getElementById("listHolder");
  li = list.getElementsByTagName("li");
  taskLeftnumber = li.length;
  for (i = 0; i < (li.length - 1); i++) {
    if (li[i].classList.contains("checked")) {
      taskLeftnumber--;
    }
  }
  taskLeft.insertAdjacentHTML('beforeBegin', taskLeftnumber + " tasks left");
}