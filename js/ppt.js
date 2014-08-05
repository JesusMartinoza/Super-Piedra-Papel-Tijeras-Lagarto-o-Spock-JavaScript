var vpiedra
var vpapel 
var vtijera
var vlagarto 
var vspock 

 function aleatorio(minimo, maximo)
  {
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
    return numero;
  }
  
var opcionMaquina = aleatorio(0,4);

  function PiedraFunction() {
       document.getElementById("usuario").innerHTML = "<img src='img/piedra.png'/>";
       document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
       function aleatorio(minimo, maximo){
            var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
            return numero;
       }
      var opcionMaquina = aleatorio(0,4);
       if (opcionMaquina == 0) {
        document.getElementById("maquina").innerHTML = "<img  src='img/piedra.png'/>";
        var vpiedra=0;
       }else if (opcionMaquina == 1) {
        document.getElementById("maquina").innerHTML = "<img  src='img/papel.png'/>";
        var vpapel=1;
       }else if (opcionMaquina == 2) {
        document.getElementById("maquina").innerHTML = "<img  src='img/tijera.png'/>";
        var vtijera=2;
       }else if (opcionMaquina == 3) {
        document.getElementById("maquina").innerHTML = "<img src='img/lagarto.png'/>";
        var vlagarto = 3;
       }else if (opcionMaquina == 4) {
        document.getElementById("maquina").innerHTML = "<img src='img/spock.png'/>";
        var vspock = 4;
        }

        if (vpiedra == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>";
        } else if (vpapel == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
        } else if (vtijera == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
        } else if (vlagarto == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
        } else if (vspock == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; 
        }     
    }

  function PapelFunction() {
       document.getElementById("usuario").innerHTML = "<img src='img/papel.png'/>";
       document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
       function aleatorio(minimo, maximo){
            var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
            return numero;
       }
       var opcionMaquina = aleatorio(0,4);
       if (opcionMaquina == 0) {
        document.getElementById("maquina").innerHTML = "<img src='img/piedra.png'/>";
        var vpiedra=0;
       }else if (opcionMaquina == 1) {
        document.getElementById("maquina").innerHTML = "<img src='img/papel.png'/>";
        var vpapel=1;
       }else if (opcionMaquina == 2) {
        document.getElementById("maquina").innerHTML = "<img src='img/tijera.png'/>";
        var vtijera=2;
       }else if (opcionMaquina == 3) {
        document.getElementById("maquina").innerHTML = "<img src='img/lagarto.png'/>";
        var vlagarto = 3;
       }else if (opcionMaquina == 4) {
        document.getElementById("maquina").innerHTML = "<img src='img/spock.png'/>";
        var vspock = 4;
        }

        if (vpiedra == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
        } else if (vpapel == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>";
        } else if (vtijera == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
        } else if (vlagarto == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
        } else if (vspock == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
        }     
       
  }
    
  function TijeraFunction() {
       document.getElementById("usuario").innerHTML = "<img src='img/tijera.png'/>";
       document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
       function aleatorio(minimo, maximo){
            var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
            return numero;
       }
       var opcionMaquina = aleatorio(0,4);
       if (opcionMaquina == 0) {
        document.getElementById("maquina").innerHTML = "<img src='img/piedra.png'/>";
        var vpiedra=0;
       }else if (opcionMaquina == 1) {
        document.getElementById("maquina").innerHTML = "<img src='img/papel.png'/>";
        var vpapel=1;
       }else if (opcionMaquina == 2) {
        document.getElementById("maquina").innerHTML = "<img src='img/tijera.png'/>";
        var vtijera=2;
       }else if (opcionMaquina == 3) {
        document.getElementById("maquina").innerHTML = "<img src='img/lagarto.png'/>";
        var vlagarto = 3;
       }else if (opcionMaquina == 4) {
        document.getElementById("maquina").innerHTML = "<img src='img/spock.png'/>";
        var vspock = 4;
        }

        if (vpiedra == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
        } else if (vpapel == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
        } else if (vtijera == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>";
        } else if (vlagarto == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
        } else if (vspock == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; 
        }     

  }
  function LagartoFunction() {
       document.getElementById("usuario").innerHTML = "<img src='img/lagarto.png'/>";
       document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
       function aleatorio(minimo, maximo){
            var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
            return numero;
       }
       var opcionMaquina = aleatorio(0,4);
       if (opcionMaquina == 0) {
        document.getElementById("maquina").innerHTML = "<img src='img/piedra.png'/>";
        var vpiedra=0;
       }else if (opcionMaquina == 1) {
        document.getElementById("maquina").innerHTML = "<img src='img/papel.png'/>";
        var vpapel=1;
       }else if (opcionMaquina == 2) {
        document.getElementById("maquina").innerHTML = "<img src='img/tijera.png'/>";
        var vtijera=2;
       }else if (opcionMaquina == 3) {
        document.getElementById("maquina").innerHTML = "<img src='img/lagarto.png'/>";
        var vlagarto = 3;
       }else if (opcionMaquina == 4) {
        document.getElementById("maquina").innerHTML = "<img src='img/spock.png'/>";
        var vspock = 4;
        }

        if (vpiedra == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
        } else if (vpapel == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
        } else if (vtijera == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
        } else if (vlagarto == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>";
        } else if (vspock == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; 
        }     
  }
  function SpockFunction() {
       document.getElementById("usuario").innerHTML = "<img src='img/spock.png'/>";
       document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
       function aleatorio(minimo, maximo){
            var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
            return numero;
       }
       var opcionMaquina = aleatorio(0,4);
       if (opcionMaquina == 0) {
        document.getElementById("maquina").innerHTML = "<img src='img/piedra.png'/>";
        var vpiedra=0;
       }else if (opcionMaquina == 1) {
        document.getElementById("maquina").innerHTML = "<img src='img/papel.png'/>";
        var vpapel=1;
       }else if (opcionMaquina == 2) {
        document.getElementById("maquina").innerHTML = "<img src='img/tijera.png'/>";
        var vtijera=2;
       }else if (opcionMaquina == 3) {
        document.getElementById("maquina").innerHTML = "<img src='img/lagarto.png'/>";
        var vlagarto = 3;
       }else if (opcionMaquina == 4) {
        document.getElementById("maquina").innerHTML = "<img src='img/spock.png'/>";
        var vspock = 4;
        }

        if (vpiedra == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
        } else if (vpapel == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
        } else if (vtijera == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>";
        } else if (vlagarto == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>";
        } else if (vspock == opcionMaquina) {
          document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>"; 
        }         
  }

 

