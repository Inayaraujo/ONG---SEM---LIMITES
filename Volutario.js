// voluntario.js

// Espera o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("volunteerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // impede o envio real do formulário

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const area = document.getElementById("area").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação básica
    if (!nome || !email || !area) {
      alert("Por favor, preencha todos os campos obrigatórios antes de enviar.");
      return;
    }

    // Simula o envio dos dados (poderia ser via fetch)
    console.log("Dados enviados:", { nome, email, area, mensagem });

    // Feedback visual
    alert(`Obrigado, ${nome}! Sua inscrição para a área de "${area}" foi enviada com sucesso.`);

    // Limpa o formulário
    form.reset();
  });
});
