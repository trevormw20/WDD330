var myNodelist = document.getElementsByTagName("LI");
var i;
var taskLeftnumber = 0;
taskLeftStart();
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    taskLeftnumber--;
    updateTaskLeft();
  }
}, false);

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

  for (i = 0; i < (li.length); i++) {
    li[i].style.display = "block";
  }
  taskLeft();
}

function selectActive() {
  list = document.getElementById("listHolder");

  li = list.getElementsByTagName("li");

  for (i = 0; i < (li.length); i++) {
    if (li[i].classList.contains("checked")) {
      li[i].style.display = "none";
    } else {
      li[i].style.display = "block";
    }

  }
  taskLeft();
}

function selectCompleted() {
  list = document.getElementById("listHolder");

  li = list.getElementsByTagName("li");

  for (i = 0; i < (li.length); i++) {
    if (li[i].classList.contains("checked")) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }

  }
}

function taskLeftStart() { 
  list = document.getElementById("listHolder");
  li = list.getElementsByTagName("li");
  taskLeftnumber = li.length;
  for (i = 0; i < (li.length); i++) {
    if (li[i].classList.contains("checked")) {
      taskLeftnumber--;
    }
  } 
  taskLeft = document.getElementById("taskLeft");
  taskLeft.insertAdjacentHTML('beforeBegin', taskLeftnumber + " tasks left");
}

function updateTaskLeft() {
  taskLeft = document.getElementById("taskLeft");
  taskLeft.replaceHTML('beforeBegin', taskLeftnumber + " tasks left");
}