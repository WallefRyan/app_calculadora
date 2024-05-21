
//Na Logica da Aplicação nos temos duas funções (Tipos - sao as operações e os Valores - São o numerario)
function calcular (tipo , valor){
    console.log(tipo, valor)

    if(tipo === 'acao'){

        if(valor === "c"){
            //Limpar o visor (id Resultado)
            document.getElementById('resultado').value = ""
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/'){
            //Concatena o valor do campo com o valor atribuido
            document.getElementById('resultado').value += valor
        }

        if(valor === '='){
            var valor_campo = eval( document.getElementById('resultado').value)

            document.getElementById('resultado').value = valor_campo
            
            //eval - submete uma strig fora do js a essa funçao e é interpretado como uma operaçao nativa do js
            console.log(eval(valor_campo))
        }
    

    }else if(tipo === "valor"){
        //Atribue os valores concatenados ao campo input
        document.getElementById('resultado').value += valor
    }
}
