const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    },
    {
      label: "Week3 notes",
      url: "week3/index.html"
    },
    {
      label: "Week4 notes",
      url: "week4/index.html"
    }
  ]

linkList = "<ol>";
links.forEach(function (element) {
    console.log(element.url + ", " + element.label);
    linkList += `<li class="purpleBanner"><a href=${element.url} title='${element.label}'>${element.label}</a></li><br><br>`;
})

linkList += "</ol>";
      
document.getElementById("links").innerHTML = linkList;
