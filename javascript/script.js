let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let assunto = window.document.getElementById('assunto')
let nomeOk = 'false'
let emailOk = 'false'
let assuntoOk = 'false'
let map = document.querySelector('#map')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.lenght < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = 'true'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
     } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = 'true'
     }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.lenght > 100) {
        txtAssunto.innerHTML = ('Texto é muito grande! Digite no máximo 100 caracteres')
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = 'true'
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha corretamente o formulário antes de enviar..')
    }
}

function mapaZoom() {
    map.style.widht = 800
    map.style.height = 600
}

function mapaNormal() {
    map.style.widht = 400
    map.style.height = 250
}