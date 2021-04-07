const links = [
    {
      label: "Week 1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week 2 notes",
      url: "week2/index.html"
    },
    {
      label: "Week 3 notes",
      url: "week3/index.html"
    },
    {
      label: "Week 4 notes",
      url: "week4/index.html"
    },
    {
      label: "Week 5 notes",
      url: "week5/index.html"
    },
    {
      label: "Week 6 ToDo",
      url: "week6/index.html"
    },
    {
      label: "Week 7 Notes",
      url: "week7/index.html"
    },
    {
      label: "Week 8 Notes",
      url: "week8/index.html"
    },
    {
      label: "Week 9 Notes",
      url: "week9/index.html"
    },
    {
      label: "Week 10 Notes",
      url: "week10/index.html"
    },
    {
      label: "Week 14 Final",
      url: "week14/index.html"
    }
  ]

linkList = "<ol>";
links.forEach(function (element) {
    console.log(element.url + ", " + element.label);
    linkList += `<li class="purpleBanner"><a href=${element.url} title='${element.label}'>${element.label}</a></li><br><br>`;
})

linkList += "</ol>";
      
document.getElementById("links").innerHTML = linkList;
