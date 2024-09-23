let escena1, escena2;
let escenaNUCLEO1, escenaNUCLEO2, escenaNUCLEO3;
let escenaTipos, escenaAlan1, escenaAlan2, escenaTest, escenaFuerte, escenaDebil;
let boton,boton2;
let ArchiveroPantalla;
let SoldadoIsrael, LavandaDijoKris;//Soldado y tanque Nucleo3
let MasDeLavender;  // Variable de control para mostrar la imagen
let resetButton;
let letras = ['E', 'U', 'T', 'A', 'N', 'L', 'H', 'T', 'R', 'O', 'M', 'X', 'V', 'R']; // Letras disponibles
let palabra = ['_', '_', '_', '_', '_']; // Para mostrar las letras adivinadas
let palabraObjetivo = ['H', 'U', 'M', 'A', 'N']; // La palabra correcta
let letrasInteractuables = [];
let aciertos = 0;
let miFuente
  // Variable para cargar la imagen
;  // Controla la visibilidad de la nueva interfaz lavender

let estado = 0;  // Variable que controla la escena actual(en mi caso el nucleo2 pq empecé el código desde ahí)
let botonVolverN1, botonVolverN1T, botonVolverN1IA, botonSusy, botonMarco, botonContinuar, botonDebil, botonFuerte;
let botonVolverNucleo1, botonVolverNucleo2;
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
  miFuente = loadFont('imagenes/PressStart2P-Regular.ttf'); // Cargar la fuente en preload
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
  mapaVerde=loadImage('imagenes/nucleo2/mapaVerde.png');
  mapaRojo=loadImage('imagenes/nucleo2/mapaRojo.png');
mapaAmarillo=loadImage('imagenes/nucleo2/mapaAmarillo.png');
mapaNaranja=loadImage('imagenes/nucleo2/mapaNaranja.png');

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
  textFont(miFuente); // Aplicar la fuente

   // Crear boton de comenzar
   boton = createButton('');
   boton.id('mi-boton');
   boton.position(590, 475);  // Posicionar el botón en la pantalla
    // Asignar una función al clic del botón: cambio de escena
   boton.mousePressed(cambiarEscena);

/////////////////////// INTERACCIONES PARA VOLVER A CADA NUCLEO //////////////////////////////
//DEL NUCLEO 2 AL 1
botonVolverNucleo1 = createButton('');
botonVolverNucleo1.id('PuertaN1');
botonVolverNucleo1.position(715,30);
botonVolverNucleo1.hide();

//Evento
botonVolverNucleo1.mousePressed(() => {
  estado = 2;
  botonVolverNucleo1.hide();
  botonVolverNucleo2.hide();
});

//DEL NUCLEO 3 AL 2
botonVolverNucleo2 = createButton('');
botonVolverNucleo2.id('PuertaAlN2');
botonVolverNucleo2.position(705,10);
botonVolverNucleo2.hide();

//Evento
botonVolverNucleo2.mousePressed(() => {
  estado = 3;
  botonVolverNucleo1.hide();
  botonVolverNucleo2.hide();
});


  //Interacciones para cada seccion del NUCLEO1
  //TEST DE TURING
  botonSusy = createButton('');
  botonSusy.id('Susy');
  botonSusy.position(330, 460);
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
  botonMarco.position(500, 470);
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

  let xp = 50;
  let yp = 100;

  // Crear las letras como objetos interactuables
  for (let i = 0; i < letras.length; i++) {
    letrasInteractuables.push(new Letra(letras[i], xp, yp));

    // Distribuir 4 letras por fila
    xp += 50; // Espaciado entre letras
    if ((i + 1) % 7 === 0) { // Cuando alcanzamos 4 letras, pasamos a la siguiente fila
      xp = 50; // Reiniciar posición horizontal
      yp += 50; // Bajar la fila
    }
  }

  //TIPOS IA
 //TIPOS IA
  botonDebil = createButton('');
  botonDebil.id('debil');
  botonDebil.position(490, 387);
  botonDebil.hide();

  //Evento
  botonDebil.mousePressed(() => { 
    estado = 20;
    botonFuerte.show();
    botonDebil.hide();    
  });

  botonFuerte = createButton('');
  botonFuerte.id('fuerte');
  botonFuerte.position(332, 387);
  botonFuerte.hide();

  //Evento
  botonFuerte.mousePressed(() => { 
    estado = 19;
    botonDebil.show();
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
  botonVolver.position(280, height - 70);  // Ajustar la posición (esto es relativo al canvas)
  botonVolver.hide();  // Esconder el botón inicialmente


  // Evento para el botón
  botonVolver.mousePressed(() => {
    estado = 3;  // Cambiar a la escena del núcleo 2
    botonVolver.hide(); 

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
    botonVolverN3.position(860, 615);  // Ajustar según sea necesario
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
  botonReseteo.position(920,260);  // Ajustar según sea necesario
  botonReseteo.hide();  // Esconder el botón inicialmente



  // Evento para el botón de la interfaz lavender:

  botonReseteo.mousePressed(() => {
    estado = 26;  // Cambiar al estado 12
      botonReseteo.hide();//esconder ene estado12
   
    
   
});

 /* //Evento
  botonNota1.mousePressed(() => {
    estado = 24;
    botonNota1.hide();
if (estado===3 || estado === 9 || estado === 10 || estado === 11|| estado === 12  ) {
    botonNota1.hide();
}

});
*/

  /*botonNota2 = createButton('');
  botonNota2.id('invisible');
  botonNota2.position(580, 165);
  botonNota2.style('background-color', 'transparent');
  botonNota2.size(200, 200);
  botonNota2.hide();

  //Evento
  botonNota2.mousePressed(() => {
    estado = 24;
    botonNota2.hide();

    if (estado===3 || estado === 9 || estado === 10 || estado === 11|| estado === 12  ) {
      botonNota2.hide();
  }
  
  });
*/
// Crear el botón en el estado 13
botonRegresar_n3 = createButton('');
botonRegresar_n3.id('vuelvoAlNucleo3');
botonRegresar_n3.position(400,500);  // Ajustar según sea necesario
botonRegresar_n3.hide();  // Esconder el botón inicialmente



// Evento para el botón de la interfaz lavender:

botonRegresar_n3.mousePressed(() => {
  estado = 9;  // Cambiar al estado 12

 
    botonRegresar_n3.hide();//esconder ene estado12
  
 
});


//////////////////////////////////////////////////////////BOTON RESETEO ////////////////////////////////////////////////////////////////
  // Crear el botón en el estado 13
  resetButton = createButton('');
  resetButton.id('reset');
  resetButton.position(800,500);  // Ajustar según sea necesario
  resetButton.hide();  // Esconder el botón inicialmente
  resetButton.mousePressed(resetearEstado); // Evento que llama a la función de reseteo  


   // Agrega el listener para el clic
   canvas.addEventListener('click', handleMouseClick);
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
    botonVolverNucleo2.hide();
    botonVolverNucleo1.hide();
    botonPuertaN3.hide();
    botonPuertaN2.show();
  } else if (estado === 3) { 
    background(escenaNUCLEO2);
    mostrarObjeto2();
    botonVolverNucleo1.show();
    botonPuertaN3.show();
    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();
  } else if (estado === 7) {
    background(mapaClic);
    botonVolverNucleo1.hide();
    botonPin1.show();
    botonPin2.show();
    botonPin3.show();
    botonVerde();
    botonRojo();
    botonAmarillo();
    botonNaranja();
    botonVolver.show();
    botonPuertaN3.hide();

  
  
  } else if (estado === 8) {
    background(ArchiveroPantalla);
    botonVolverNucleo1.hide();
    botonArchivo.show();
    botonArchivero.show();
    botonPuertaN3.hide();
} else if (estado === 9) {  // Aquí mueves esta verificación
    background(escenaNUCLEO3);
    botonVolverNucleo2.show();
    botonVolverNucleo1.hide();
    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();
    resetButton.hide();
    botonReseteo.hide();

    mostrarObjetos3();
 } else if(estado===10){
  background(SoldadoIsrael);
  botonVolverNucleo2.hide();
  botonVolverN3.show();
  botonNota1.hide();
  botonNota2.hide();
  botonArchivero.hide();
  botonArchivo.hide();
  resetButton.hide();
  botonReseteo.hide();


  /*
   // Mostrar las coordenadas del mouse en el centro superior
   fill(0); // Color del texto (negro)
   textSize(24); // Tamaño del texto
   textAlign(CENTER); // Alinear texto al centro
   text("X: " + mouseX + " | Y: " + mouseY, width / 2, 20); // Texto en el centro superior
  */
 
  } else if(estado===11){
    background(LavandaDijoKris);
    botonVolverNucleo2.hide();
    resetButton.hide();
    botonLavender.show(); 
    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();
    resetButton.hide();
    botonReseteo.hide(); // Mostrar el botón en el estado 10
}else if (estado===12) {
      // Mostrar la nueva interfaz aquí
     background(MasDeLavender);
     botonVolverNucleo2.hide();
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

    textSize(32);
    fill(102,53,38);
    textAlign(CENTER, CENTER);
    text(palabra.join(' '), 300, 130);
  
  
    // Dibujar letras interactuables
    textAlign(LEFT, BASELINE);
    for (let letra of letrasInteractuables) {
      letra.mostrar();
    }

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
    botonVolverNucleo1.hide();
    botonNota1.show();
    botonNota2.show();
} else if (estado == 24){
  image(Nota1, 250, 165, 316, 340);
  image(Nota2, 600, 200, 300, 280);
  botonVolverNucleo1.hide();
  botonPuertaN3.hide();
  botonNota1.hide();
    botonNota2.hide();

  }else if (estado===25) {
    background(fuego2);
    botonReseteo.show();

    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();
  ;
    image(volverBoton,15,673, 58,37);
    
  
  }else if (estado===26) {
    background(fondoFinal);
    resetButton.show();
    botonRegresar_n3.show();
     botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();

   } else if (estado == 28){

    //botonVolver.hide();//esto hace que el botond e volver sea invisible

    // Dibuja un rectángulo semitransparente sobre el fondo
    fill(0, 1); // Color negro con opacidad 150 (0-255)
    rect(0, 0, width, height); // Cubre todo el canvas
    //background(255); // Cambiar el fondo para cubrir todo el canvas
    image(Pin1,250, 80, 600, 520);
    botonVolverNucleo1.hide();
    botonVolver.hide();
    botonPin1.hide();
    botonPin2.hide();
    botonPin3.hide(); 
    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();


  } else if (estado == 29){
    fill(0, 1); // Color negro con opacidad 150 (0-255)
    rect(0, 0, width, height); 
    image(Pin3, 250, 80, 600, 500);
    botonVolver.hide();
    botonVolverNucleo1.hide();
    botonPin1.hide();
    botonPin2.hide();
    botonPin3.hide();
    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();

  } else if (estado == 30){
    //botonVolver.hide();//esto hace que el botond e volver sea invisible
    fill(0, 1); // Color negro con opacidad 150 (0-255)
    rect(0, 0, width, height); 
    image(Pin2, 250, 80, 600, 500);
    botonVolverNucleo1.hide();
    botonVolver.hide();
    botonPin1.hide();
    botonPin2.hide();
    botonPin3.hide();
    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();
   
  }else if(estado===31){
    
    //botonVolver.hide();//esto hace que el botond e volver sea invisible
    image(mapaVerde,0,0, width, height);
    fill(0, 1); // Color negro con opacidad 150 (0-255)
    rect(0, 0, width, height); 
    botonVolverNucleo1.hide();
    botonPin1.show();
    botonPin2.show();
    botonPin3.show();
    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();
    botonVolver.show();

    botonRojo();
    botonAmarillo();
    botonNaranja();
  
  }else if(estado===32){
  
    image(mapaRojo,0,0, width, height);
    botonVolverNucleo1.hide();
    fill(0, 1); // Color negro con opacidad 150 (0-255)
    rect(0, 0, width, height); 
    botonPin1.show();
    botonPin2.show();
    botonPin3.show();
    botonVolver.show();

    botonVerde();
    botonAmarillo();
    botonNaranja();

    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();
  }else if(estado===33){
    image(mapaAmarillo,0,0, width, height);
    botonVolverNucleo1.hide();
    fill(0, 1); // Color negro con opacidad 150 (0-255)
    rect(0, 0, width, height); 
    botonPin1.show();
    botonPin2.show();
    botonPin3.show();
    botonVolver.show();
    botonVerde();
    botonRojo();
    botonNaranja();

    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();
  }else if(estado===34){

    image(mapaNaranja,0,0, width, height);
    botonVolverNucleo1.hide();
    fill(0, 1); // Color negro con opacidad 150 (0-255)
    rect(0, 0, width, height); 
    botonVolver.show();
    botonPin1.show();
    botonPin2.show();
    botonPin3.show();
    botonVerde();
    botonRojo();
    botonAmarillo();

    botonNota1.hide();
    botonNota2.hide();
    botonArchivero.hide();
    botonArchivo.hide();
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

function resetearEstado() {
  location.reload(); // Cambiar el estado a 0
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

  // Verificar si el jugador hace clic en alguna letra
  for (let letra of letrasInteractuables) {
    if (letra.esClickeado(mouseX, mouseY) && !letra.usada) {
      letra.usada = true; // Desactivar la letra

      // Verificar si la letra está en la palabra objetivo
      if (palabraObjetivo.includes(letra.valor)) {
        letra.color = color(52, 188, 121); // Cambiar a color verde por acierto
        // Colocar la letra en la posición correcta
        for (let i = 0; i < palabraObjetivo.length; i++) {
          if (palabraObjetivo[i] === letra.valor) {
            palabra[i] = letra.valor;
          }
        }
        aciertos++;
      } else {
        letra.color = color(216, 13, 28); // Cambiar a rojo por error
      }
    }
  }

  // Verificar si se completó la palabra
  if (aciertos === palabraObjetivo.length) {
    // Mensaje de victoria o continuar a la siguiente fase
    console.log("¡Palabra completada!");
  }

  }


  function botonVerde() {
     // Coordenadas y dimensiones del área del botón
     let botonX = 724;
     let botonY = 546;
     let botonAncho = 35;
     let botonAlto = 35;
   
   
        // Verifica si el mouse está dentro del área del botón
        if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
          // Cambia el color del rectángulo si el mouse está sobre él
         
    
          // Puedes también imprimir en la consola
          console.log("Mouse sobre el botón");
        }
    
  }

  function botonRojo(){

     // Coordenadas y dimensiones del área del botón
     let botonX = 860;
     let botonY = 612;
     let botonAncho = 35;
     let botonAlto = 35;
   
   
        // Verifica si el mouse está dentro del área del botón
        if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
          // Cambia el color del rectángulo si el mouse está sobre él
         
    
          // Puedes también imprimir en la consola
          estado=32;
          console.log("Mouse sobre el botón");
        }
  }

  
  function botonAmarillo(){

    // Coordenadas y dimensiones del área del botón
    let botonX = 726;
    let botonY = 636;
    let botonAncho = 35;
    let botonAlto = 35;
  
  
       // Verifica si el mouse está dentro del área del botón
       if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
         // Cambia el color del rectángulo si el mouse está sobre él
        
   
         // Puedes también imprimir en la consola
         estado=33;
         console.log("Mouse sobre el botón");
       }
 }

 function botonNaranja(){

  // Coordenadas y dimensiones del área del botón
  let botonX = 848;
  let botonY = 532;
  let botonAncho = 35;
  let botonAlto = 35;

 

     if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
       // Cambia el color del rectángulo si el mouse está sobre él
      
   
       // Puedes también imprimir en la consola
       estado=34;
       console.log("Mouse sobre el botón");
     }
}



  function handleMouseClick()  {

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
  
      if (estado === 28 || estado === 29 || estado === 30) {
        // Si el mouse está dentro del canvas
        if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
            console.log("Clic en pantalla 28");
    
            // Cambiar al estado 7
            estado = 7; // Cambia al estado deseado
        }
  
        // Acción para el estado 28 (clic en cualquier parte)
     
    }

    if (estado === 7 ) {
      // Si el mouse está dentro del canvas
   
      let botonX = 724; // Coordenada X del botón
      let botonY = 543; // Coordenada Y del botón
      let botonAncho = 35; // Ancho del botón
      let botonAlto = 35; // Alto del botón
    
        // Dibuja el rectángulo en las coordenadas indicadas
   
      // Verifica si el clic está dentro del área del botón
      if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
        // Aquí colocas el código que quieres ejecutar al hacer clic en el área del botón
        console.log("Botón clickeado");
        estado = 31; // Cambia al estado deseado
          // Cambiar al estado 7
         
      }

    }

    if (estado === 24) {
      // Si el mouse está dentro del canvas
      if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
          console.log("Clic en pantalla 28");
  
          // Cambiar al estado 7
          estado = 23; // Cambia al estado deseado
      }

      // Acción para el estado 28 (clic en cualquier parte)
   
  }
    
  }

  class Letra {
    constructor(valor, xp, yp) {
      this.valor = valor;
      this.xp = xp+80;
      this.yp = yp+160;
      this.tam = 32;
      this.color = color(102,53,38); // Negro inicialmente
      this.usada = false; // Si ya fue clickeada o no
    }
  
    mostrar() {
      fill(this.color);
      textSize(this.tam);
      text(this.valor, this.xp, this.yp);
    }
  
    esClickeado(px, py) {
      return (px > this.xp - 10 && px < this.xp + 20 && py > this.yp - 30 && py < this.yp + 10);
    }
  }


