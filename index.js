let saldovitorias = calcular("total de vitorias, total de derrotas")


function calcular(vitorias,derrotas){
	let saldovitorias = vitorias - derrotas
    return saldovitorias
    let nivel
    
    if(vitorias < 10){
    nivel = "ferro"}
    else if(vitorias >=10 && vitorias <=20){
    nivel = "bronze"}
    else if(vitorias >=21 && vitorias <=50){
    nivel = "prata"}
    else if(vitorias >=51 && vitorias <=80){
    nivel = "ouro"}
    else if(vitorias >=81 && vitorias <=90){
    nivel = "diamante"}
    else if(vitorias >=91 && vitorias <=100){
    nivel = "lendario"}
    else if(vitorias >=101){
    nivel = "imortal"}
    
    Console.log("O Herói tem de" + saldovitorias + "está no nível de" + nivel)
   
    
}

