const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

      let linksDisplay = document.getElementById("links");

      let linkList = "<ol>";
      links.forEach(function (element) {
        linkList += "<li><a href='${element.url}' title='${element.label}'>${element.lable}</a></li>"
      })

      linkList += "</ol>";
      

    linksDisplay.innerHTML = linkList;

