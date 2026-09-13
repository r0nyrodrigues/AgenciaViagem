const form = document.getElementById('login');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Exemplo básico de validação simulada
    if (usuario === 'admin' && senha === '12345') {
        mensagem.style.color = 'green';
        mensagem.textContent = 'Login realizado com sucesso!';
    } else {
        mensagem.style.color = 'red';
        mensagem.textContent = 'Usuário ou senha incorretos.';
    }
});