function lista(){
	var nombre =["Soledad ", "Paola ", "Dennis "];
	var cantidad=prompt("Cuantos nombres quieres en tu lista?");
	for(var i=4; i<=cantidad; i++){
		var name=prompt("A esta lista le falta el nombre en la posicion "+" "+i+" , vamos agrega los nombres"+" :");
		nombre.push(name);
	}
	return nombre;
}
alert("Estos son los nombres: "+lista());


