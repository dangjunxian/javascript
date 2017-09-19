function showPic1(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
}

function showPic(whichpic)
{
	var x = whichpic.getAttribute("href");
	var y = document.getElementById("placeholder");
	y.setAttribute("src",x);
}