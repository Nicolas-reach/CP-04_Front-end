function enviarMensagem() {
  // Pega os valores dos campos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const assunto = document.getElementById('assunto').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Valida se todos os campos estão preenchidos
  if (!nome || !email || !assunto || !mensagem) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  // Esconde o formulário e mostra a mensagem de sucesso
  document.getElementById('form-contato').style.display = 'none';
  document.getElementById('mensagem-sucesso').style.display = 'block';
}

function voltarFormulario() {
  // Limpa os campos
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('assunto').value = '';
  document.getElementById('mensagem').value = '';

  // Esconde o sucesso e mostra o formulário novamente
  document.getElementById('mensagem-sucesso').style.display = 'none';
  document.getElementById('form-contato').style.display = 'block';
}