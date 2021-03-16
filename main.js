function comparacion(id) {

    
    
    let nombreColor=document.getElementById("color").textContent;    //trae el nombre del color escrito
    let Color= window.getComputedStyle(id); // trae el elemento seleccionado por el mouse
    let fondo=Color.backgroundColor; //guardo en una variable el rgb del color seleccionado 0 el numero hexa
    
    let partes = fondo.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); //lo divido en 2 secciones al rgb encontrado 
    
    delete(partes[0]); //borro la posicion 0 de partes 
    for (var i = 1; i <= 3; ++i) { 
    partes[i] = parseInt(partes[i]).toString(16); //durante las 3 iteraciones voy a ir pasando cada miembro del rgb en hexa
    if (partes[i].length == 1) partes[i] = '0' + partes[i]; //en caso de que la longitud de partes sea igual a 1 , se le agrega un 0
    } 
    let hexaColor ='#'+partes.join(''); //guardo el hexadecimal obtenido con el formato

    nombreColor == hexaColor?alert("Adivinaste , era ese"):alert("Color incorrecto"); //comparo si es igual al color del texto dado
    
    
    
    ///esta parte es para cambiar de colores cada vez que se resetee
    let colornombre=randomColor();
    let colorNuevo1=randomColor();
    let colorNuevo2=randomColor();
    let colorNuevo3=colornombre;
    let colorNuevo4=randomColor();
    document.getElementById("color").innerHTML=colornombre;
    alert(colornombre);
    alert(colorNuevo3);
    document.getElementById("color1").style.backgroundColor=colorNuevo1;
    document.getElementById("color2").style.backgroundColor=colorNuevo2;
    document.getElementById("color3").style.backgroundColor=colorNuevo3;
    document.getElementById("color4").style.backgroundColor=colorNuevo4;

  }

  function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

