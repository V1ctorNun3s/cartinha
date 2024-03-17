function heart() {
    
    var aperte_aqui = document.getElementById('aperte_aqui')
    var cartinha = document.getElementById('cartinha_id').style.display


    aperte_aqui.classList.add('block')
    document.getElementById('cartinha_id').style.display = 'flex'
    
}

function fechar() {

    var aperte_aqui = document.getElementById('aperte_aqui')

    aperte_aqui.classList.remove('block')
    document.getElementById('cartinha_id').style.display = 'none'
}