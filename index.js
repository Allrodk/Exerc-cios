//Criar Função para exibir números primos até 1500

exibirPrimos(1500);

function exibirPrimos(limite){   
  
  for (let numero=2; numero<=limite; numero++){
    let primos = true;
    let dez = 10;
    if (numero <= 10){
      dez = numero;
    }    
    for(let fator=2; fator<dez; fator++){  
      if(numero % fator === 0){
        primos = false;  
        break;              
      }      
    }    
    if (primos){
      console.log(numero);       
      }         
  } 
}
