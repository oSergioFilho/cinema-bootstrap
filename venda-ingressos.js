// Aguarda até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento <select> que exibirá as sessões
    const sessaoSelect = document.getElementById('sessao');
    // Seleciona o formulário de venda de ingressos
    const formIngresso = document.getElementById('formIngresso');
  
    // Recupera o array de sessões armazenado no localStorage (se não houver, utiliza um array vazio)
    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];
  
    // Preenche o <select> com as sessões recuperadas
    sessoes.forEach((sessao, index) => {
      // Cria um elemento <option> para cada sessão
      const option = document.createElement('option');
      option.value = index; // Pode ser o índice que identifica a sessão
      // Exibe informações relevantes da sessão (por exemplo, Filme, Sala e Data/Hora)
      option.textContent = `${sessao.filme} - ${sessao.sala} - ${sessao.dataHora}`;
      // Adiciona o elemento <option> ao <select>
      sessaoSelect.appendChild(option);
    });
  
    // Verifica se a URL contém um parâmetro "sessao" para pré-selecionar uma opção
    const urlParams = new URLSearchParams(window.location.search);
    const sessaoParam = urlParams.get('sessao');
    if (sessaoParam !== null) {
      sessaoSelect.value = sessaoParam;
    }
  
    // Adiciona um listener para tratar o evento de submissão do formulário
    formIngresso.addEventListener('submit', function(event) {
      // Impede o comportamento padrão de recarregar a página
      event.preventDefault();
  
      // Coleta os valores dos campos do formulário
      const selectedSessao = document.getElementById('sessao').value;
      const nomeCliente = document.getElementById('nomeCliente').value;
      const cpf = document.getElementById('cpf').value;
      const assento = document.getElementById('assento').value;
      const tipoPagamento = document.getElementById('tipoPagamento').value;
  
      // Cria um objeto ingresso com os dados coletados
      const ingresso = {
        sessao: selectedSessao, // Aqui você pode salvar o índice ou outros dados de referência da sessão
        nomeCliente: nomeCliente,
        cpf: cpf,
        assento: assento,
        tipoPagamento: tipoPagamento
      };
  
      // Recupera os ingressos já salvos no localStorage (ou cria um array vazio se não houver)
      const ingressos = JSON.parse(localStorage.getItem('ingressos')) || [];
  
      // Adiciona o novo ingresso ao array
      ingressos.push(ingresso);
  
      // Atualiza o localStorage com o array de ingressos convertido para JSON
      localStorage.setItem('ingressos', JSON.stringify(ingressos));
  
      // Informa o usuário sobre o sucesso na venda do ingresso
      alert('Ingresso vendido com sucesso!');
  
      // Limpa o formulário para nova entrada de dados
      formIngresso.reset();
    });
  });
  