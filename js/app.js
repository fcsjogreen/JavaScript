/*TODO quirar estilo active y agregarlo a código  estudiar y modificar =>
$(".btn-group > .btn").click(function(){
    $(".btn-group > .btn").removeClass("active");
    $(this).addClass("active");
});
*/

var Calculadora = {


  //unir los numeros que aparecen en patanlla en un string

 //funcion para registrar la tecla que presiona y guardarla en string "parcial"
  escucharTeclado: function(){

    //mostrar maximo 8 caracteres
    function mostrarValor(valor){

      if(valor.lenght <= 8){
        document.getElementById("display").innerHTML = valor
      }else{
        valor = valor.slice(0,8)
        document.getElementById("display").innerHTML = valor
      }
    }

    var parcial = ""
    var punto = false
    var positivo= true
    var resultado = 0
    var operacion = "sumar"
    if(parcial.length<=8){
      document.getElementById("1").onclick = function(){
        parcial =parcial.concat("1")
        mostrarValor(parcial)
      }

      document.getElementById("2").onclick= function(){
        parcial = parcial.concat("2")
        mostrarValor(parcial)
      }
      document.getElementById("3").onclick = function(){
        parcial =parcial.concat("3")
        mostrarValor(parcial)
      }
      document.getElementById("4").onclick = function(){
        parcial =parcial.concat("4")
        mostrarValor(parcial)
      }
      document.getElementById("5").onclick = function(){
        parcial =parcial.concat("5")
        mostrarValor(parcial)
      }
      document.getElementById("6").onclick = function(){
        parcial =parcial.concat("6")
        mostrarValor(parcial)
      }
      document.getElementById("7").onclick = function(){
        parcial =parcial.concat("7")
        mostrarValor(parcial)
      }
      document.getElementById("8").onclick = function(){
        parcial =parcial.concat("8")
        mostrarValor(parcial)
      }
      document.getElementById("9").onclick = function(){
        parcial =parcial.concat("9")
        mostrarValor(parcial)
      }
      document.getElementById("0").onclick = function(){
        if(document.getElementById("display").innerHTML !=0){
          parcial =parcial.concat("0")
          mostrarValor(parcial)
        }
      }
      document.getElementById("punto").onclick = function(){
        if(parcial==""){
          parcial = "0."
        }else{
          parcial = parcial.concat(".")
        }
        punto = true
        mostrarValor(parcial)
      }

      document.getElementById("on").onclick = function(){
        punto = false
        parcial = ""
        resultado = 0
        mostrarValor("0")
      }

      document.getElementById("sign").onclick = function(){
        if(document.getElementById("display").innerHTML!=0){
          if(positivo){
            parcial = "-" + parcial
            resultado = Number(parcial)
            mostrarValor(resultado.toString())
            positivo = false
          }else{
            parcial = parcial.replace("-","")
            resultado = Number(parcial)
            mostrarValor(resultado.toString())
            positivo = true
          }
        }
      }

    }

    document.getElementById("dividido").onclick = function(){
      if(resultado == 0){resultado = Number(parcial)}
      mostrarValor("")
      resultado = Number(parcial)
      parcial = ""
      operacion ="dividir"
    }
    document.getElementById("por").onclick = function(){
      if(resultado == 0){resultado = Number(parcial)}
      mostrarValor("")
      parcial = ""
      operacion ="multiplicar"
    }
    document.getElementById("mas").onclick = function(){
      if(resultado == 0){resultado = Number(parcial)}
      mostrarValor("")
      parcial = ""
      operacion ="sumar"
    }
    document.getElementById("menos").onclick = function(){
      if(resultado == 0){resultado = Number(parcial)}
      mostrarValor("")
      parcial = ""
      operacion ="restar"
    }

    //TODO Raiz
    



    document.getElementById("igual").onclick = function(){

      switch (operacion) {
        case "sumar":
          resultado = resultado + Number(parcial)
          mostrarValor(resultado.toString())
          break;
        case "multiplicar":
          resultado = resultado * Number(parcial)
          mostrarValor(resultado.toString())
          break;
        case "restar":
          resultado = resultado - Number(parcial)
          mostrarValor(resultado.toString())
          break;
        case "dividir":
          if(parcial == "0"){
            mostrarValor(resultado.toString())
            alert("Operacion no valida")
          }else{
            resultado = resultado / Number(parcial)
            mostrarValor(resultado.toString())
          }
          break;
        //TODO raiz
        case "raiz":
          if(Number(parcial)<0){
            mostrarValor(resultado.toString())
            alert("Operacion no valida")
          }else{
            resultado = Math.sqrt(Number(parcial))
            mostrarValor(resultado.toString())
          }
          break;

      }


    }
    return resultado
  }

}
//Calculadora.init()
Calculadora.escucharTeclado();
