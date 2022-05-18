function gerarPedido (){
    let preco = 0
    let total = 0
    let hamburguer = ''
    let salgado = ''
    let batata = ''
    let bebida = ''
    let tipo = document.getElementById('hamburguer').value
    switch(tipo){
        case 'cheddarbacon':
            hamburguer = 'CHEDDAR BACON'
            preco = 16.00
            console.log(preco)
            break
        case 'xbig':
            hamburguer = 'CHEDDAR BIG FRANGO'
            preco = 20.00
            console.log(preco)
            break
        case 'xcalabresa':
            hamburguer = 'CHEESE CALABRESA'
            preco = 14.00
            console.log(preco)
            break
        case 'xcarne':
            hamburguer = 'CHEESE CARNE DE SOL'
            preco = 18.00
            console.log(preco)
            break
        case 'xpicanha':
            hamburguer = 'CHEESE PICANHA'
            preco = 25.00
            console.log(preco)
            break
    }
    tipo = document.getElementById('batata').value
    total += preco
    switch(tipo){
        case 'batataf':
            batata = 'PORÇÃO DE BATATA FRITA 300G'
            preco = 10.00
            console.log(preco)
            break
        case 'batatafc':
            batata = 'PORÇÃO DE BATATA FRITA COM CHEEDAR'
            preco = 12.00
            console.log(preco)
            break
        case 'batatafcb':
            batata = 'PORÇÃO DE BATATA FRITA COM CHEEDAR E BACON'
            preco = 15.00
            console.log(preco)
            break
    }
    tipo = document.getElementById('salgado').value
    total += preco
    switch(tipo){
        case 'coxinhaf':
            coxinha ='COXINHA DE FRANGO'
            preco = 5.00
            console.log(preco)
            break
        case 'coxinhacc':
            coxinha = 'COXINHA COM CREAM CHEESE'
            preco = 7.00
            console.log(preco)
            break  
    }
    tipo = document.getElementById('bebida').value
    total += preco
    switch(tipo){
        case 'guarana':
            bebida = 'GUARANÁ ANTARTICA 2L'
            preco = 12.00
            console.log(preco)
            break
        case 'cocacola':
            bebida = 'COCA COLA 2L'
            preco = 8.00
            console.log(preco)
            break  
        case 'sucosl':
            bebida = 'SUCO SEM LEITE 400ML'
            preco = 8.00
            console.log(preco)
            break
        case 'sucocl':
            bebida = 'SUCO COM LEITE 400ML'
            preco = 12.00
            console.log(preco)
            break
    }
    total += preco
    let pagar = document.getElementById('valor')
    pagar.innerHTML ='R$ ' + total
    let pedidos = document.getElementById('pedidos')
    pedidos.innerHTML = hamburguer + ' ' + batata + ' ' + salgado + ' E ' + bebida
}