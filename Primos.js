//Criar Função para exibir números primos até 1500

exibirPrimos(1500);

function exibirPrimos(limite){
  let primos = 0;
  for (let numero=1; numero<=limite; numero++){
    for(let fator=1; fator<=numero; fator++){
      if(numero % fator === 0){
        primos++;        
      }      
    }    
    if (primos===2){
      console.log(numero);          
    } 
    fator = 1;
    primos = 0;
  }  
}
