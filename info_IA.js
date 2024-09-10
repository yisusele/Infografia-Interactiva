let escena1, escena2;
let escenaNUCLEO1, escenaNUCLEO2, escenaNUCLEO3;
let escenaTipos, escenaAlan1, escenaAlan2, escenaTest, escenaFuerte, escenaDebil;
let boton,boton2;
let ArchiveroPantalla;
let SoldadoIsrael, LavandaDijoKris;//Soldado y tanque Nucleo3
let MasDeLavender;  // Variable de control para mostrar la imagen
  // Variable para cargar la imagen
;  // Controla la visibilidad de la nueva interfaz lavender

let estado = 0;  // Variable que controla la escena actual(en mi caso el nucleo2 pq empecé el código desde ahí)
let botonVolverN1, botonVolverN1T, botonVolverN1IA, botonSusy, botonMarco, botonContinuar, botonDebil, botonFuerte;
let botonPuertaN2, botonPuertaN3;
let botonInvisible, botonNota1, botonNota2; //Para el archivero
let botonPin1, botonPin2, botonPin3; //Para el mapa
let botonVolver, botonArchivero, botonArchivo;//botones de volver en el N2
let botonLavender, botonVolverN3,lavender_volver;//boton en N3

// Posición y tamaño del objeto
let objetoX = 250, objetoY = 184, objetoW = 98, objetoH = 170; 

//Arreglo de objetos para que recorra si está el mouse para el hover
let objetos = [
  { x: objetoX, y: objetoY, w: objetoW, h: objetoH, hoverW: 100, hoverH: 170, hoverImage: null, normalImage: null, estadoDestino: 13},
  { x: objetoX+203, y: objetoY+115, w: objetoW+105, h: objetoH+20, hoverW: 190, hoverH: 200, hoverImage: null, normalImage: null, estadoDestino: 14 },
  { x: objetoX+485, y: objetoY+335, w: objetoW+4, h: objetoH-50, hoverW: 100, hoverH: 130, hoverImage: null, normalImage: null, estadoDestino: 16 },
];


//cambiar el numero de estadoDestino segun el que corresponda
let objetos2 = [
  { x: objetoX+320, y: objetoY+80, w: objetoW-35, h: objetoH-70, hoverW: -128, hoverH: 114, hoverImage: null, normalImage: null, estadoDestino:7 },  // Aquí el Planeta
  { x: objetoX-75, y: objetoY+297, w: objetoW-15, h: objetoH-25, hoverW: -113, hoverH: 162, hoverImage: null, normalImage: null, estadoDestino:8 },//archivero
];

//Soldado y tanque Nucleo3
let objetos3 = [
  {  x: objetoX+120, y: objetoY+5, w: 70, h: 100,hoverW: 70, hoverH: 100,hoverImage: null, normalImage: null, estadoDestino: 10 },//soldado
  {  x: objetoX+150, y: objetoY+290, w: 166, h: 158,hoverW: 166, hoverH: 158,hoverImage: null, normalImage: null, estadoDestino: 11 },//tanque
 // {  x: objetoX+50, y: objetoY+5, w: 70, h: 100,hoverW:70, hoverH: 100,hoverImage: null, normalImage: null, estadoDestino: 13 },//autito al Nucleo2
 //{  x: objetoX+150, y: objetoY+290, w: 166, h: 158,hoverW: 166, hoverH: 158,hoverImage: null, normalImage: null, estadoDestino: 14 },//tanque

];
let objetosN3 = [
  // { x: objetoX- 2,y: objetoY+100 , w: objetoW -100,h:objetoH- 20,hoverW:-100,hoverH: -20,hoverImage: null, normalImage: null, estadoDestino: 13},//tanque grande
 
   {
     x: 78,  // Posición X centrada horizontalmente
     y: 541,    // Posición Y para que se ajuste desde el borde superior
     w: 284,  // Nuevo ancho calculado
     h: 142,  // Nuevo alto igual al alto del canvas
     hoverW: 283,
     hoverH: 142,
     hoverImage: null,
     normalImage: null,
     estadoDestino: 25
   },
 ];



// Cargar imágenes de fondo y objetos
function preload() {
  escena1 = loadImage('imagenes/Inicio.png');
  escena2 = loadImage('imagenes/Introduccion.png');
  escenaNUCLEO1 = loadImage('imagenes/nucleoPrincipal.png');
  escenaNUCLEO2 = loadImage('imagenes/nucleo2.png');
  escenaNUCLEO3 = loadImage('imagenes/nucleo3.png');
  escenaTest = loadImage('imagenes/nucleo1/EscenaTestTuring.png');
  escenaExito = loadImage('imagenes/nucleo1/Exito.png')
  escenaError = loadImage('imagenes/nucleo1/Error.png')
  escenaAlan1 = loadImage('imagenes/nucleo1/EscenaAlanTuring1.png');
  escenaAlan2 = loadImage('imagenes/nucleo1/EscenaAlanTuring2.png');
  escenaTipos = loadImage('imagenes/nucleo1/EscenaTiposIA.png');
  escenaFuerte = loadImage('imagenes/nucleo1/IAFuerte.png');
  escenaDebil = loadImage('imagenes/nucleo1/IADebil.png');
  Notas = loadImage('imagenes/nucleo2/notas.png');
  Nota1 = loadImage('imagenes/nucleo2/nota1.png');
  Nota2 = loadImage('imagenes/nucleo2/nota2.png');
  mapaClic = loadImage('imagenes/nucleo2/MAPA.png');
  Pin1 = loadImage('imagenes/nucleo2/Pin1.png');
  Pin2 =  loadImage('imagenes/nucleo2/Pin2.png');
  Pin3 =  loadImage('imagenes/nucleo2/Pin3.png');
  ArchiveroPantalla = loadImage('imagenes/nucleo2/ArchiveroSinBoton.png');
  SoldadoIsrael=loadImage('imagenes/nucleo3/Soldado - contexto.svg');
  LavandaDijoKris=loadImage('imagenes/nucleo3/tanqueLavender.svg');
  MasDeLavender=loadImage('imagenes/nucleo3/minijuego.png');
  fuego2=loadImage('imagenes/nucleo3/minijuegoFuego.png');
  fondoFinal=loadImage('imagenes/nucleo3/fondoFinal.png');


  // Cargar imágenes de los objetos
  objetos[0].hoverImage = loadImage('imagenes/hover_seleccionIA.png');
  objetos[0].normalImage = loadImage('imagenes/IA_neutra.png');

  objetos[1].hoverImage = loadImage('imagenes/AlanTuringH.png');
  objetos[1].normalImage = loadImage('imagenes/AlanTuring.png');

  objetos[2].hoverImage = loadImage('imagenes/TiposIAH.png');
  objetos[2].normalImage = loadImage('imagenes/TiposIA.png');

  // Cargar imágenes del núcleo2
  objetos2[0].hoverImage = loadImage('imagenes/PlanetaH.png');
  objetos2[0].normalImage = loadImage('imagenes/Planeta.png');
  objetos2[1].hoverImage = loadImage('imagenes/ArchiveroH.png');
  objetos2[1].normalImage = loadImage('imagenes/Archivero.png');

  
//Imagenes del núcleo3
objetos3[0].hoverImage=loadImage('imagenes/nucleo3/soldado_hover.png');
objetos3[0].normalImage=loadImage('imagenes/nucleo3/soldado_normal.png');

objetos3[1].hoverImage=loadImage('imagenes/nucleo3/tanque_hover.png');
objetos3[1].normalImage=loadImage('imagenes/nucleo3/tanque_normal.png');

objetosN3[0].normalImage=loadImage('imagenes/nucleo3/auto_normal.png');
objetosN3[0].hoverImage=loadImage('imagenes/nucleo3/auto_hover.png');

volverBoton = loadImage('imagenes/nucleo3/volerFlecha.png');  // Cargar la imagen que deseas mostrar*/
}


function setup() {
  createCanvas(1024 , 720);

   // Crear boton de comenzar
   boton = createButton('');
   boton.id('mi-boton');
   boton.position(590, 475);  // Posicionar el botón en la pantalla
    // Asignar una función al clic del botón: cambio de escena
   boton.mousePressed(cambiarEscena);

  //Interacciones para cada seccion del NUCLEO1
  //TEST DE TURING
  botonSusy = createButton('');
  botonSusy.id('Susy');
  botonSusy.position(322, 500);
  botonSusy.hide();

  //Evento
  botonSusy.mousePressed(() => { 
    estado = 17;
    botonSusy.hide(); 
    botonMarco.hide();
    botonVolverN1.show();
  });

  botonMarco = createButton('');
  botonMarco.id('Marco');
  botonMarco.position(520, 510);
  botonMarco.hide();

  //Evento
  botonMarco.mousePressed(() => {
    estado = 18;
    botonSusy.hide(); 
    botonMarco.hide();
  });

  //Boton volverN1
  botonVolverN1 = createButton('');
  botonVolverN1.id('VolverN1');
  botonVolverN1.position(675,490);
  botonVolverN1.hide();

  //Evento
  botonVolverN1.mousePressed(() => {
    estado = 2;
    botonVolverN1.hide(); 
    botonSusy.hide();
    botonMarco.hide();
    botonDebil.hide();
    botonFuerte.hide();
    botonContinuar.hide();
  });

  //ALAN TURING
  botonContinuar = createButton('');
  botonContinuar.id('continuar');
  botonContinuar.position(880, 558);
  botonContinuar.hide();

  //Evento
  botonContinuar.mousePressed(() => { 
    estado = 15;
    botonContinuar.hide();
    
  });

  //Boton volverN1T
  botonVolverN1T = createButton('');
  botonVolverN1T.id('VolverN1T');
  botonVolverN1T.position(819,630);
  botonVolverN1T.hide();

  //Evento
  botonVolverN1T.mousePressed(() => {
    estado = 2;
    botonVolverN1T.hide();    
  });

  //TIPOS IA
  botonDebil = createButton('');
  botonDebil.id('debil');
  botonDebil.position(490, 387);
  botonDebil.hide();

  //Evento
  botonDebil.mousePressed(() => { 
    estado = 20;
    botonFuerte.hide();
    botonDebil.hide();    
  });

  botonFuerte = createButton('');
  botonFuerte.id('fuerte');
  botonFuerte.position(332, 387);
  botonFuerte.hide();

  //Evento
  botonFuerte.mousePressed(() => { 
    estado = 19;
    botonDebil.hide();
    botonFuerte.hide();    
  });

  //Boton volverN1IA
    botonVolverN1IA = createButton('');
    botonVolverN1IA.id('VolverN1IA');
    botonVolverN1IA.position(602,619);
    botonVolverN1IA.hide();
  
  //Evento
  botonVolverN1IA.mousePressed(() => {
      estado = 2;
      botonVolverN1IA.hide();
      botonDebil.hide();
      botonFuerte.hide();     
    });

    ////// PUERTA PARA EL NUCLEO2
    //Boton Puerta
    botonPuertaN2 = createButton('');
    botonPuertaN2.id('PuertaN2');
    botonPuertaN2.position(732,628);
    botonPuertaN2.hide();
  
  //Evento
  botonPuertaN2.mousePressed(() => {
      estado = 3;
      botonPuertaN2.hide();
    });

  ///////////////////////////////////////////// NUCLEO 2/////////////////////////////////////////////////////////////////////////
     //puerta nucleo3
    botonPuertaN3 = createButton('');
    botonPuertaN3.id('PuertaN3');
    botonPuertaN3.position(732,628);
    botonPuertaN3.hide();
  
  //Evento
  botonPuertaN3.mousePressed(() => {
      estado = 9;
      botonPuertaN3.hide();  
    });


    //BOTON ARCHIVO
  botonArchivo = createButton('');
  botonArchivo.id('invisible');
  botonArchivo.position(610, 468);
  botonArchivo.style('transform', 'rotate(165deg)');
  botonArchivo.style('background-color', 'transparent');
  botonArchivo.hide();

  //Evento
  botonArchivo.mousePressed(() => {
    estado = 23;
    botonArchivo.hide();
  });

  //boton nota 1 y 2
  botonNota1 = createButton('');
  botonNota1.id('invisible');
  botonNota1.position(847, 200);
  botonNota1.style('background-color', 'transparent');
  botonNota1.size(180, 200);
  botonNota1.hide();

  //Evento
  botonNota1.mousePressed(() => {
    estado = 24;
    botonNota1.hide();
  });

  botonNota2 = createButton('');
  botonNota2.id('invisible');
  botonNota2.position(580, 165);
  botonNota2.style('background-color', 'transparent');
  botonNota2.size(200, 200);
  botonNota2.hide();

  //Evento
  botonNota2.mousePressed(() => {
    estado = 24;
    botonNota2.hide();
  });

   //BOTONES INVISIBLES PARA CADA PIN DEL MAPA
   botonPin1 = createButton('');
   botonPin1.id('invisible');
   botonPin1.position(450, 268);
   botonPin1.style('background-color', 'transparent');
   botonPin1.size(40, 60);
   botonPin1.hide();
 
   //Evento
   botonPin1.mousePressed(() => {
     estado = 28;
     botonPin1.hide();
   });
 
 
   botonPin2 = createButton('');
   botonPin2.id('invisible');
   botonPin2.position(760, 202);
   botonPin2.style('background-color', 'transparent');
   botonPin2.size(40, 60);
   botonPin2.hide();
 
   //Evento
   botonPin2.mousePressed(() => {
     estado = 30;
     botonPin2.hide();
   });
 
 
   botonPin3 = createButton('');
   botonPin3.id('invisible');
   botonPin3.position(1060, 295);
   botonPin3.style('background-color', 'transparent');
   botonPin3.size(40, 60);
   botonPin3.hide();
 
   //Evento
   botonPin3.mousePressed(() => {
     estado = 29;
     botonPin3.hide();
   });
 



  // Crear el botón de volver en el estado 7
  botonVolver = createButton('');
  botonVolver.id('mi-botonBack');
  botonVolver.position(190, height - 70);  // Ajustar la posición (esto es relativo al canvas)
  botonVolver.hide();  // Esconder el botón inicialmente


  // Evento para el botón
  botonVolver.mousePressed(() => {
    estado = 3;  // Cambiar a la escena del núcleo 2
    botonVolver.hide();  // Esconder el botón después del clic
  });

  // Crear el botón de Archivero en el estado 8
  botonArchivero = createButton('');
  botonArchivero.id('boton-archivero');
  botonArchivero.position(820, height -98);  // Ajustar la posición (esto es relativo al canvas)
  botonArchivero.hide();  // Esconder el botón inicialmente

  // Evento para el botón Archivero
  botonArchivero.mousePressed(() => {
    estado = 3;  // Cambiar a la escena del núcleo 2
    botonArchivero.hide();  // Esconder el botón después del clic
  });


    // Crear el botón en el estado 11
    botonVolverN3 = createButton('');
    botonVolverN3.id('boton-volverN3') 
    botonVolverN3.position(200, height -100);  // Ajustar según sea necesario
    botonVolverN3.hide();  // Esconder el botón inicialmente
  


    // Evento para el botón de la interfaz lavender:

    botonVolverN3.mousePressed(() => {
      estado = 9;  // Cambiar al estado 3
      botonVolverN3.hide();//esconder al volver
  });

    // Crear el botón en el estado 11
    botonLavender = createButton('');
    botonLavender.id('boton-lavender');
    botonLavender.position(675, height -110);  // Ajustar según sea necesario
    botonLavender.hide();  // Esconder el botón inicialmente
  


    // Evento para el botón de la interfaz lavender:

    botonLavender.mousePressed(() => {
      estado = 12;  // Cambiar al estado 12
      botonLavender.hide();//esconder ene estado12
  });

  
  // Crear el botón en el estado 13
  botonReseteo = createButton('');
  botonReseteo.id('boton-reseteo');
  botonReseteo.position(810,230);  // Ajustar según sea necesario
  botonReseteo.hide();  // Esconder el botón inicialmente



  // Evento para el botón de la interfaz lavender:

  botonReseteo.mousePressed(() => {
    estado = 26;  // Cambiar al estado 12
      botonReseteo.hide();//esconder ene estado12
   
    
   
});


// Crear el botón en el estado 13
botonRegresar_n3 = createButton('');
botonRegresar_n3.id('vuelvoAlNucleo3');
botonRegresar_n3.position(89,490);  // Ajustar según sea necesario
botonRegresar_n3.hide();  // Esconder el botón inicialmente



// Evento para el botón de la interfaz lavender:

botonRegresar_n3.mousePressed(() => {
  estado = 9;  // Cambiar al estado 12

 
    botonRegresar_n3.hide();//esconder ene estado12
  
 
});
/*
  // Crear el botón en el estado 13
  botonReseteoFinal = createButton('');
  botonReseteoFinal.id('boton-reseteo');
  botonReseteoFinal.position(780,250);  // Ajustar según sea necesario
  botonReseteoFinal.hide();  // Esconder el botón inicialmente



  // Evento para el botón de la interfaz lavender:

  /*botonReseteoFinal.mousePressed(() => {
    estado = 14;  // Cambiar al estado 12

    if(estado===14){
      botonReseteo.hide();//esconder ene estado12
    }
   
});
*/
  

}




function draw() {
  if (estado === 0) {
    background(escena1);  // Mostrar la primera escena
  } else if (estado === 1) {
    background(escena2);  // Mostrar la segunda escena (Introducción)
    if (!boton2) {
      crearBoton();
    }
  } else  if (estado === 2) {
    background(escenaNUCLEO1);  // Mostrar la escena núcleo
    mostrarObjeto();
    botonPuertaN2.show();
  } else if (estado === 3) { 
    background(escenaNUCLEO2);
    mostrarObjeto2();
    botonPuertaN3.show();
  } else if (estado === 7) {
    background(mapaClic);
    botonPin1.show();
    botonPin2.show();
    botonPin3.show();
    botonVolver.show();
    botonPuertaN3.hide();
  } else if (estado === 8) {
    background(ArchiveroPantalla);
    botonArchivo.show();
    botonArchivero.show();
    botonPuertaN3.hide();
} else if (estado === 9) {  // Aquí mueves esta verificación
    background(escenaNUCLEO3);
    botonReseteo.hide();
    mostrarObjetos3();
 } else if(estado===10){
  background(SoldadoIsrael);
  botonVolverN3.show();
  
  } else if(estado===11){
    background(LavandaDijoKris);
    botonLavender.show();  // Mostrar el botón en el estado 10
}else if (estado===12) {
      // Mostrar la nueva interfaz aquí
     background(MasDeLavender);
     image(volverBoton,15,673, 58,37);
     textSize(30);
     fill(255);
     mostrarObjetosN3_est12();

  
  } else if ( estado == 13){
    background(escenaTest);
    botonSusy.show();
    botonMarco.show();
    botonPuertaN2.hide();
  } else if (estado == 14){
    background(escenaAlan1);
    botonContinuar.show();
    botonPuertaN2.hide();
  } else if (estado == 15){
    background(escenaAlan2);
    botonVolverN1T.show();
    botonPuertaN2.hide();
  } else if ( estado == 16){
    background(escenaTipos);
    botonFuerte.show();
    botonDebil.show();
    botonPuertaN2.hide();
    botonVolverN1IA.show();
  } else if (estado == 17){
    image(escenaExito, 180, 90, 700,500);
    botonVolverN1.show();
    botonPuertaN2.hide();
  }else if (estado == 18){
    image(escenaError, 180, 90, 700,500);
    botonVolverN1.show();
    botonPuertaN2.hide();
  } else if (estado == 19){
    image(escenaFuerte, 420, 58, 579,537);
    botonVolverN1IA.show();
    botonPuertaN2.hide();
  }else if (estado == 20){
    image(escenaDebil, 420, 58, 579,537);
    botonVolverN1IA.show();
    botonPuertaN2.hide();
  }
  else if (estado === 23) {
    background(ArchiveroPantalla);
    image(Notas, 180, 20, 671, 640);
    botonNota1.show();
    botonNota2.show();
} else if (estado == 24){
  image(Nota1, 250, 165, 316, 340);
  image(Nota2, 600, 200, 300, 280);
  botonPuertaN3.hide();
  botonNota1.hide();
    botonNota2.hide();

  }else if (estado===25) {
    background(fuego2);
    botonReseteo.show();
    image(volverBoton,15,673, 58,37);
    
  
  }else if (estado===26) {
    background(fondoFinal);
    botonRegresar_n3.show();
  }

  else if (estado == 28){
    image(Pin1, 0, 80, 600, 520);
    botonPin1.hide();
    botonPin2.hide();
    botonPin3.hide();
    botonVolver.show();
  } else if (estado == 29){
    image(Pin3, 300, 165, 600, 500);
    botonPin1.hide();
    botonPin2.hide();
    botonPin3.hide();
    botonVolver.show();
  } else if (estado == 30){
    image(Pin2, 450, 165, 600, 500);
    botonPin1.hide();
    botonPin2.hide();
    botonPin3.hide();
    botonVolver.show();
  }
}

function cambiarEscena() {
  if (estado === 0) {
    estado = 1;  // Cambiar a la segunda escena
    boton.remove();  // Eliminar el botón después de usarlo en la primera escena
  } else if (estado === 1) {
    // Aquí puedes añadir más lógica si hay una tercera escena o alguna acción final
    console.log('El botón ha sido eliminado y la escena ha cambiado.');
  }
}

function crearBoton() {
  boton2 = createButton('');
  boton2.id('mi-boton2');
  boton2.position(640, 560);  // Posicionar el botón en la pantalla
  boton2.mousePressed(cambiarEscenaNucleo);
}

function cambiarEscenaNucleo() {
  if (estado === 1) {
    estado = 2;  // Cambiar a la siguiente escena del núcleo (escena 2)
    boton2.remove();  // Eliminar el botón después de usarlo en la segunda escena
  }

}


function mostrarObjeto() {
  // Verificar si el cursor está sobre el objeto
  for (let i = 0; i < objetos.length; i++) {
    let objeto = objetos[i];
    // Verifica si el mouse está sobre el objeto
    if (mouseX > objeto.x && mouseX < objeto.x + objeto.w && mouseY > objeto.y && mouseY < objeto.y + objeto.h) {
      image(objeto.hoverImage, objeto.x-2, objeto.y-12, objeto.hoverW+195, objeto.hoverH-8); // Mostrar imagen hover
    } else {
      image(objeto.normalImage, objeto.x-2, objeto.y-12, objeto.w+2, objeto.h+4);  // Mostrar imagen normal
    }
  }
}

function mostrarObjeto2() {
  // Verificar si el cursor está sobre el objeto
  for (let i = 0; i < objetos2.length; i++) {
    let objeto = objetos2[i];
    // Verifica si el mouse está sobre el objeto
    if (mouseX > objeto.x && mouseX < objeto.x + objeto.w && mouseY > objeto.y && mouseY < objeto.y + objeto.h) {
      image(objeto.hoverImage, objeto.x-2, objeto.y-12, objeto.hoverW+195, objeto.hoverH-8); // Mostrar imagen hover
    } else {
      image(objeto.normalImage, objeto.x-2, objeto.y-12, objeto.w+2, objeto.h+4);  // Mostrar imagen normal
    }
  }
}

function mostrarObjetos3() {
  // Verificar si el cursor está sobre el objeto
  for (let i = 0; i < objetos3.length; i++) {
    let objeto = objetos3[i];

    /*noFill();
    stroke(255, 0, 0); // Dibujar rectángulo rojo
    rect(objeto.x, objeto.y, objeto.w, objeto.h); */// Rectángulo alrededor del objeto

    // Verifica si el mouse está sobre el objeto:
    if (mouseX > objeto.x && mouseX < objeto.x + objeto.w && mouseY > objeto.y && mouseY < objeto.y + objeto.h) {
      image(objeto.hoverImage, objeto.x-2, objeto.y-12, objeto.hoverW+2, objeto.hoverH+2); // Mostrar imagen hover
    } else {
      image(objeto.normalImage, objeto.x-2, objeto.y-12, objeto.w+2, objeto.h+4);  // Mostrar imagen normal
    }
  }
}

function mostrarObjetosN3_est12() {
  for (let i = 0; i < objetosN3.length; i++) {
    let objeto = objetosN3[i];
   // Dibuja un rectángulo alrededor del objeto para depuración
  
    // Verificar si el cursor está sobre el objeto
    if (mouseX > objeto.x && mouseX < objeto.x + objeto.w && mouseY > objeto.y && mouseY < objeto.y + objeto.h) {
      image(objeto.hoverImage, objeto.x, objeto.y, objeto.hoverW, objeto.hoverH);  // Mostrar imagen hover
    } else {
      image(objeto.normalImage, objeto.x, objeto.y, objeto.w, objeto.h);  // Mostrar imagen normal
    }
  }
}



// Detectar clic sobre los objetos para cambiar la escena
function mousePressed() {
  if (estado === 2) {
    for (let i = 0; i < objetos.length; i++) {
      let objeto = objetos[i];
      if (mouseX > objeto.x && mouseX < objeto.x + objeto.w && mouseY > objeto.y && mouseY < objeto.y + objeto.h) {
        console.log('Objeto clickeado en estado 2:', objeto);  // Depuración
        estado = objeto.estadoDestino;  // Cambiar a la escena correspondiente
      }
    }
  } else if (estado === 3) {
    for (let i = 0; i < objetos2.length; i++) {
      let objeto = objetos2[i];
      if (mouseX > objeto.x && mouseX < objeto.x + objeto.w && mouseY > objeto.y && mouseY < objeto.y + objeto.h) {
        console.log('Objeto clickeado en estado 3:', objeto);  // Depuración
        estado = objeto.estadoDestino;  // Cambiar el estado al hacer clic en el objeto
        console.log('Nuevo estado:', estado);  // Verificar si cambia correctamente
      }
    }
  }
  if (estado === 9) {
  for (let i = 0; i < objetos3.length; i++) {
    let objeto = objetos3[i];
    if (mouseX > objeto.x && mouseX < objeto.x + objeto.w && mouseY > objeto.y && mouseY < objeto.y + objeto.h) {
      console.log('Objeto clickeado en estado 9:', objeto);  // Depuración
      estado = objeto.estadoDestino;  // Cambiar el estado al hacer clic en el objeto
      console.log('Nuevo estado:', estado); } 
  }
  }else if (estado===12) {
    for (let i = 0; i < objetosN3.length; i++) {
      let objeto = objetosN3[i];
      if (mouseX > objeto.x && mouseX < objeto.x + objeto.w && mouseY > objeto.y && mouseY < objeto.y + objeto.h) {
        console.log('Objeto clickeado en estado 9:', objeto);  // Depuración
        estado = objeto.estadoDestino;  // Cambiar el estado al hacer clic en el objeto
        console.log('Nuevo estado:', estado); } 
    }
    
  }

  }


  function mouseClicked() {

    if (estado===12) {
      
    
        // Coordenadas y dimensiones del área del botón (ajusta según tu caso)
        let botonX = 15; // Coordenada X del botón
        let botonY = 672; // Coordenada Y del botón
        let botonAncho = 58; // Ancho del botón
        let botonAlto = 37; // Alto del botón
      
        // Verifica si el clic está dentro del área del botón
        if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
          // Aquí colocas el código que quieres ejecutar al hacer clic en el área del botón
          console.log("Botón clickeado");
          estado = 9;
          // Cambia al estado deseado
        }
        } else if(estado===25){
  // Coordenadas y dimensiones del área del botón (ajusta según tu caso)
        let botonX = 15; // Coordenada X del botón
        let botonY = 672; // Coordenada Y del botón
        let botonAncho = 58; // Ancho del botón
        let botonAlto = 37; // Alto del botón
      
        // Verifica si el clic está dentro del área del botón
        if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
          // Aquí colocas el código que quieres ejecutar al hacer clic en el área del botón
          console.log("Botón clickeado");
          estado = 9; // Cambia al estado deseado
      }
      }
  
  
  }


