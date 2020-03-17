function elegirElemento() {
	var selector = document.getElementById("elementos");
	var opTexto = document.getElementById("texto");
	var opNum = document.getElementById("numero");
	var opEmail = document.getElementById("email");
	var opLista = document.getElementById("lista");
	var opCheck = document.getElementById("check");
	var opRadio = document.getElementById("radio");

	switch (selector.value) {
		case opTexto.value:
			return funcTexto();
		case opNum.value:
			return funcNum();
		case opEmail.value:
			return funcEmail();
		case opLista.value:
			return funcLista();
		case opCheck.value:
			return funcCheck();
		case opRadio.value:
			return funcRadio();
	}
}

var botonRadio = document.createElement("button");
var optDefaultRadio = document.createElement("label");

function funcRadio() {
	optDefaultRadio.innerHTML = "Elija una opcion";
	optDefaultRadio.setAttribute("style", "display: block");
	botonRadio.setAttribute("style", "display: block");
	botonRadio.setAttribute("value", "añadir más opciones");
	botonRadio.innerHTML = "Añade opcion Radio";
	botonRadio.addEventListener("click", añadirOpRadio);
	document.getElementById("divRadio").appendChild(botonRadio);
	document.getElementById("divRadio").appendChild(optDefaultRadio);
	event.preventDefault();
}

function añadirOpRadio() {
	var optRadio = document.createElement("input");
	var labelCreate = document.createElement("label");
	labelCreate.setAttribute("style", "display: block");
	optRadio.setAttribute("name", "radio");
	var span = document.createElement("span");
	var nuevoOptRadio = prompt("Escribe el nombre del campo opción:");
	span.innerHTML = nuevoOptRadio;
	labelCreate.appendChild(optRadio);
	labelCreate.appendChild(span);
	optRadio.setAttribute("type", "radio");
	document.getElementById("divRadio").appendChild(labelCreate);
	event.preventDefault();
}

var botonCheck = document.createElement("button");
var optDefaultCheck = document.createElement("label");

function funcCheck() {
	optDefaultCheck.innerHTML = "Personalice las casillas";
	optDefaultCheck.setAttribute("style", "display: block");
	botonCheck.setAttribute("style", "display: block");
	botonCheck.setAttribute("value", "añadir más opciones");
	botonCheck.innerHTML = "Añade opcion checkbox";
	botonCheck.addEventListener("click", añadirOpCheck);
	document.getElementById("divCheck").appendChild(botonCheck);
	document.getElementById("divCheck").appendChild(optDefaultCheck);
	event.preventDefault();
}

function añadirOpCheck() {
	var optCheck = document.createElement("input");
	var labelCreate = document.createElement("label");
	labelCreate.setAttribute("style", "display: block");
	var span = document.createElement("span");
	var nuevoOptCheck = prompt("Escribe el nombre del campo opción:");
	span.innerHTML = nuevoOptCheck;
	labelCreate.appendChild(optCheck);
	labelCreate.appendChild(span);
	optCheck.setAttribute("type", "checkbox");
	document.getElementById("divCheck").appendChild(labelCreate);
	event.preventDefault();
}

var cajaLista = document.createElement("select");
var optDefaultLista = document.createElement("option");
optDefaultLista.innerHTML = "Selecciona una opción";
cajaLista.appendChild(optDefaultLista);
var botonLista = document.createElement("button");
function funcLista() {
	botonLista.setAttribute("value", "añadir más opciones");
	botonLista.innerHTML = "Añade opcion lista";
	botonLista.addEventListener("click", añadirOpLista);
	document.getElementById("divLista").appendChild(botonLista);
	botonLista.setAttribute("style", "display: block");
	event.preventDefault();
}

function añadirOpLista() {
	document.getElementById("divLista").appendChild(cajaLista);
	var opt = document.createElement("option");
	var nuevoOpt = prompt("Escribe el nombre del campo opción:");
	opt.innerHTML = nuevoOpt;
	cajaLista.appendChild(opt);
	event.preventDefault();
}

function funcEmail() {
	var cajaEmail = document.createElement("input");
	var labelEmail = document.createElement("label");
	var nuevoEmail = prompt("Escribe el nombre del campo email:");
	labelEmail.innerHTML = nuevoEmail;
	cajaEmail.setAttribute("Style", "Display: Block");
	cajaEmail.setAttribute("type", "texto");
	cajaEmail.setAttribute("placeholder", "Introduzca un email");
	document.getElementById("divEmail").appendChild(labelEmail);
	document.getElementById("divEmail").appendChild(cajaEmail);
	event.preventDefault();
}

function funcNum() {
	var cajaNum = document.createElement("input");
	var labelNum = document.createElement("label");
	var nuevoNum = prompt("Escribe el nombre del campo número:");
	labelNum.innerHTML = nuevoNum;
	document.getElementById("divNum").appendChild(labelNum);
	cajaNum.setAttribute("type", "number");
	cajaNum.setAttribute("placeholder", "Introduzca un numero");
	cajaNum.setAttribute("style", "display: block");
	document.getElementById("divNum").appendChild(cajaNum);
	event.preventDefault();
}

function funcTexto() {
	var cajaTexto = document.createElement("input");
	var labelTexto = document.createElement("label");
	var nuevoTexto = prompt("Escribe el nombre del campo texto:");
	labelTexto.innerHTML = nuevoTexto;
	document.getElementById("divTexto").appendChild(labelTexto);
	cajaTexto.setAttribute("type", "text");
	cajaTexto.setAttribute("placeholder", "Introduzca su texto");
	cajaTexto.setAttribute("style", "display: block");
	document.getElementById("divTexto").appendChild(cajaTexto);
	event.preventDefault();
}
