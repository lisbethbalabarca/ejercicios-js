function  galones() {
	var a = parseInt(prompt("Cuantos litros de leche has entregado?"));
	var g = 3.785;
	var total = 0;

	total= (a/g).toFixed(2);
	alert("el total de galones que has entregado es :"+total); 
}

galones();