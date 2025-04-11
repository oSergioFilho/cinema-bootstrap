// Seleciona o formulário de cadastro de salas pelo seu ID
const formSala = document.getElementById('formSala');

// Adiciona um listener para tratar a submissão do formulário
formSala.addEventListener('submit', function(event) {
  // Previne que o formulário recarregue a página ao ser enviado
  event.preventDefault();

  // Recupera os valores inseridos nos campos do formulário
  const nomeSala = document.getElementById('nomeSala').value;
  const capacidade = document.getElementById('capacidade').value;
  const tipo = document.getElementById('tipo').value;

  // Cria um objeto que representa a sala com os dados coletados
  const sala = {
    nome: nomeSala,
    capacidade: capacidade,
    tipo: tipo
  };

  // Recupera o array de salas do localStorage (se existir) ou inicializa um array vazio
  const salas = JSON.parse(localStorage.getItem('salas')) || [];

  // Adiciona o novo objeto sala ao array de salas
  salas.push(sala);

  // Atualiza o localStorage com o array atualizado, convertendo-o para uma string JSON
  localStorage.setItem('salas', JSON.stringify(salas));

  // Informa ao usuário que a sala foi salva e limpa o formulário para um novo cadastro
  alert('Sala salva com sucesso!');
  formSala.reset();
});
