// Seleciona os elementos do formulário que precisamos manipular
const formFilme = document.getElementById('formFilme');
const inputImagem = document.getElementById('imagem');
const preview = document.getElementById('preview');

// Variável para armazenar a imagem convertida para Base64
let imagemBase64 = "";

// Evento que trata a seleção do arquivo de imagem
inputImagem.addEventListener('change', function(event) {
  const arquivo = event.target.files[0]; // Seleciona o primeiro arquivo, se existir
  if (arquivo) {
    const leitor = new FileReader();
    leitor.onload = function(e) {
      imagemBase64 = e.target.result; // Converte a imagem para Base64
      preview.src = imagemBase64;       // Atualiza a pré-visualização
      preview.style.display = 'block';  // Exibe a imagem de pré-visualização
    };
    // Inicia a leitura do arquivo como uma URL de dados (Base64)
    leitor.readAsDataURL(arquivo);
  }
});

// Evento que trata a submissão do formulário
formFilme.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede que o formulário recarregue a página ao ser enviado

  // Cria um objeto com os dados do filme, incluindo a imagem convertida para Base64
  const filme = {
    titulo: document.getElementById('titulo').value,
    descricao: document.getElementById('descricao').value,
    genero: document.getElementById('genero').value,
    classificacao: document.getElementById('classificacao').value,
    duracao: document.getElementById('duracao').value,
    dataEstreia: document.getElementById('dataEstreia').value,
    imagem: imagemBase64  // Pode ser uma string vazia se nenhum arquivo for selecionado
  };

  // Recupera os filmes já salvos no localStorage ou inicia um array vazio
  const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
  filmes.push(filme);  // Adiciona o novo filme ao array

  // Atualiza o localStorage com o novo array de filmes
  localStorage.setItem('filmes', JSON.stringify(filmes));

  // Informa o usuário e limpa o formulário
  alert('Filme salvo com sucesso!');
  formFilme.reset();
  preview.style.display = 'none';
  imagemBase64 = "";
});
