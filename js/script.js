//Teste LABVIS

/*    

*/

//Função para exibir textos
function mostra (texto){
	document.write(texto + "<br>");
}

//Função para gerar dados aleatórios do consumo dos carros
function sorteia1 (n){
	var sorteia = Math.round(Math.random() * n) + 7;
	return sorteia;
}

function sorteia2 (n){
	var sorteia = Math.round(Math.random() * n) + 1;
	return sorteia;
}

//Função para gerar dados aleatórios da potência do motor dos carros
/*function sorteiaPot(maximo) {
  var numeros = [1.0, 1.4, 1.8, 2.0];
  var potencias = [];

  // Preenche um array com os números de 1 ao maximo
  var i = 1;
  while (i <= maximo) {
  	for (var j = 0; j < numeros.length; j++){
    	potencias.push(numeros[j]);
  	}
  	i++;
  }
  
  potencias.sort(function randomizar(a, b) {
    return Math.random() * 2 - 1; // Ordena randomicamente
  });
  
  return potencias.splice(0, maximo);
}*/

//Função para gerar dados aleatórios do consumo dos carros
function sorteiaConsumo(quant_carros){
	var consumo = [];
	for(var i = 0; i < quant_carros; i++){
		var sorteado = sorteia1(11);
		consumo.push(sorteado);
	}
	return consumo;
}

//Função para gerar dados aleatórios do consumo dos carros
function sorteiaPotencia(quant_carros){
	var potencia = [];
	for(var i = 0; i < quant_carros; i++){
		var sorteado = sorteia2(99);
		potencia.push(sorteado);
	}
	return potencia;
}

function mudaCor(cor){
	var elemento = document.getElementById("grafico");
	elemento.style.color = cor;
}

var maximo = 100;

var consumoAsia = [];
consumoAsia = sorteiaConsumo(maximo)
//mostra(consumoAsia);

var potenciaAsia = [];
potenciaAsia = sorteiaPotencia(maximo);
//mostra(potenciaAsia);

var consumoEuropa = [];
consumoEuropa = sorteiaConsumo(maximo)
//mostra(consumoEuropa);

var potenciaEuropa = [];
potenciaEuropa = sorteiaPotencia(maximo);
//mostra(potenciaEuropa);

var consumoEua = [];
consumoEua = sorteiaConsumo(maximo)
//mostra(consumoEua);

var potenciaEua = [];
potenciaEua = sorteiaPotencia(maximo);
//mostra(potenciaEua);



var tela = document.getElementById("tela");
    if (tela) {
    	//altura da canvas
		var altura = 300;
		//largura da canvas
		var largura = 600;
		//posição horizontal inicial do gráfico
		var x = 0;
		//valor dos pontos do gráfico, que será alterado aleatoriamente
		var y = 0;
 
        var c = tela.getContext("2d");
        c.fillStyle = "#CCFFCC";
		c.fillRect(0, 0, largura, altura);
		//c.font = "70px Courier";

        function desenharGrafico(arrayConsumo, arrayPotencia) {
		    //define os avanços horizontal e vertical
		    for(var i = 0; i < arrayConsumo.length; i++){
		    	x = arrayConsumo[i];
		    	y = arrayPotencia[i];
			   			    
				c.beginPath();
				c.arc(x*20, altura-y*2, 4, 0, 2*Math.PI);
				c.stroke();
				c.fill();
			    //desenha o texto indicando o valor do gráfico, na posição x atual
			    //c.fillStyle = "red";
			    //c.fillText(y, x, 100);	
				if(arrayConsumo == consumoAsia){
					c.fillStyle = "red";
				}
				else if(arrayConsumo == consumoEuropa){
					c.fillStyle = "green";
				}
				else if(arrayConsumo == consumoEua){
					c.fillStyle = "blue";
				}
				else{
					c.fillStyle = "black";
				}
			}
		}
		function limparGrafico(arrayConsumo, arrayPotencia) {
			//define os avanços horizontal e vertical
		    for(var i = 0; i < arrayConsumo.length; i++){
		    	x = arrayConsumo[i];
		    	y = arrayPotencia[i];
		    	c.fillStyle = "#CCFFCC";
		    	c.strokeStyle = "#CCFFCC";    	
		    	c.beginPath();
		    	c.arc(x*20, altura-y*2, 4, 0, 2*Math.PI);
		    	c.stroke();
		    	c.fill();	    	
			}
		}

		function getChecked1(){
		  var asiaCheck = document.getElementById("defaultCheck1");		    
		        if (asiaCheck.checked) {
		                desenharGrafico(consumoAsia, potenciaAsia);
		                console.log(consumoAsia);
		                console.log(potenciaAsia);
		        }
		        else if (asiaCheck.checked == false) {
		                limparGrafico(consumoAsia, potenciaAsia);
		                console.log("Limpou Ásia");
		            
		        }	 
		}

		function getChecked2(){
		  var europaCheck = document.getElementById("defaultCheck2");		    
		        if (europaCheck.checked) {
		                desenharGrafico(consumoEuropa, potenciaEuropa);
		                console.log(consumoEuropa);
		                console.log(potenciaEuropa);
		        }
		        else if (europaCheck.checked == false) {
		                limparGrafico(consumoEuropa, potenciaEuropa);
		                console.log("Limpou Europa");
		            
		        }	 
		}

		function getChecked3(){
		  var euaCheck = document.getElementById("defaultCheck3");		    
		        if (euaCheck.checked) {
		                desenharGrafico(consumoEua, potenciaEua);
		                console.log(consumoEua);
		                console.log(potenciaEua);
		        }
		        else if (euaCheck.checked == false) {
		                limparGrafico(consumoEua, potenciaEua);
		                console.log("Limpou Eua");
		            
		        }	 
		}

		/*function getChecked(){
		  var pacote = document.getElementsByName('pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if (pacote[i].checked) {
		            if(pacote[i].value == "Asia"){
		                desenharGrafico(consumoAsia, potenciaAsia);
		                console.log(consumoAsia);
		                console.log(potenciaAsia);
		            }else if (pacote[i].value == "Europa") {
		                desenharGrafico(consumoEuropa, potenciaEuropa);
		                console.log(consumoEuropa);
		            }else if (pacote[i].value == "EUA") {
		                desenharGrafico(consumoEua, potenciaEua);
		                console.log(consumoEua);
		            }
		        }
		        else if (pacote[i].checked == false) {
		        	if(pacote[i].value == "Asia"){
		                limparGrafico(consumoAsia, potenciaAsia);
		                console.log("Limpou Ásia");
		            }else if (pacote[i].value == "Europa") {
		                limparGrafico(consumoEuropa, potenciaEuropa);
		                console.log("Limpou Europa");
		            }else if (pacote[i].value == "EUA") {
		                limparGrafico(consumoEua, potenciaEua);
		                console.log("Limpou Eua");
		            }
		        }
		    }		  
		}*/
	}