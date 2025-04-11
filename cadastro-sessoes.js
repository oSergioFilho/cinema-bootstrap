// Seleciona o formulário de cadastro de sessões pelo ID
const formSessao = document.getElementById('formSessao');

// Adiciona um listener para o evento de submissão do formulário
formSessao.addEventListener('submit', function(event) {
  // Impede que o formulário recarregue a página ao ser enviado
  event.preventDefault();

  // Recupera os valores inseridos nos campos do formulário
  const filme = document.getElementById('filme').value;       // Selecionado pelo <select> de filmes
  const sala = document.getElementById('sala').value;         // Selecionado pelo <select> de salas
  const dataHora = document.getElementById('dataHora').value; // Input do tipo datetime-local para data e hora
  const preco = document.getElementById('preco').value;       // Input do tipo number para o preço
  const idioma = document.getElementById('idioma').value;     // Seleção entre "Dublado" e "Legendado"
  const formato = document.getElementById('formato').value;   // Seleção entre "2D" e "3D"

  // Cria um objeto que representa a sessão com os dados capturados
  const sessao = {
    filme: filme,
    sala: sala,
    dataHora: dataHora,
    preco: preco,
    idioma: idioma,
    formato: formato
  };

  // Recupera o array de sessões armazenado no localStorage, ou inicia um array vazio se não existir
  const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];

  // Adiciona a nova sessão ao array de sessões
  sessoes.push(sessao);

  // Atualiza o localStorage com o array atualizado, convertendo-o para JSON
  localStorage.setItem('sessoes', JSON.stringify(sessoes));

  // Informa o usuário sobre o salvamento bem-sucedido e limpa o formulário
  alert('Sessão salva com sucesso!');
  formSessao.reset();
});
