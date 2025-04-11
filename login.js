// Aguarda o carregamento completo do DOM para garantir que os elementos estejam disponíveis
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o formulário de login pelo ID
    const formLogin = document.getElementById('formLogin');
  
    // Adiciona um listener para o evento de submissão do formulário
    formLogin.addEventListener('submit', function(event) {
      // Impede que o formulário recarregue a página ao ser enviado
      event.preventDefault();
  
      // Recupera o valor inserido no campo de email
      const email = document.getElementById('email').value;
      // Recupera o valor inserido no campo de senha
      const senha = document.getElementById('senha').value;
  
      // Validação simples: credenciais fixas para efeito de demonstração
      // Em um cenário real, essa validação seria feita pelo backend
      if (email === "admin@cinema.com" && senha === "123456") {
        // Se as credenciais estiverem corretas, informa o sucesso e redireciona para a página inicial
        alert("Login realizado com sucesso!");
        window.location.href = "./index.html";
      } else {
        // Caso as credenciais estejam incorretas, exibe uma mensagem de erro
        alert("Email ou senha inválidos. Tente novamente.");
      }
    });
  });
  