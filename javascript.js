let message = document.querySelector('.UserMessage');
let email = document.getElementById('email');
let nome = document.getElementById('nome');
let button = document.getElementById('button1')

button.addEventListener('click', () => {
        if(nome.value.length !== 0 && email.value.includes('@')) {
        message.classList.remove('UserMessage');
        message.innerHTML = 'Cadastro efetuado com sucesso!'
    }else{
        message.classList.remove('UserMessage');
        message.innerHTML = 'Não foi possível efetuar seu cadastro'
        }
    }
)
