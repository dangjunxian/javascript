function showPic1(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = text;
}


function showPic(whichpic)
{
	var x = whichpic.getAttribute("href");
	var y = document.getElementById("placeholder");
	y.setAttribute("src",x);
	var z = whichpic.getAttribute("title");
    var jieshao = document.getElementById("description");
    jieshao.firstChild.nodeValue = z;
}