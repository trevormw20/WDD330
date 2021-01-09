const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

linkList = "<ol>";
links.forEach(function (element) {
    console.log(element.url + ", " + element.label);
    linkList += `<li><a href=${element.url} title='${element.label}'>${element.label}</a></li>`;
})

linkList += "</ol>";
      
document.getElementById("links").innerHTML = linkList;
