function displayAbbrevitations(){
	var abbrevitations = document.getElementsByTagName("abbr");
	if (abbrevitations.length<1) return false;
	var defs = new Array();
	for (var i=0;i<abbrevitations.length;i++);{
		var current_abbr = abbrevitations[i]
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	
	var dlist = document.createElement("dl");
	for (key in defs){
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}