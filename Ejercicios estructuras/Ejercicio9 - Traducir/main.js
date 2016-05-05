var palabra= prompt("Introduzca solo una de estas palabras: casa, mesa, perro o gato:");
var text= palabra.toLowerCase();
switch(text){
	case 'casa':
		alert("la palabra que usted eligio en ingles se escribe : House");
		break;
	case 'mesa':
		alert("la palabra que usted eligio en ingles se escribe : Table");
		break;
	case 'perro':
		alert("la palabra que usted eligio en ingles se escribe : Dog");
		break;
	case 'gato':
		alert("la palabra que usted eligio en ingles se escribe : Cat");
		break;
	default:
		alert("Not found!");
		break;
}



