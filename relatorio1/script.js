// Configurações do Particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff",
      },
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 40,
        size_min: 0.1,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
  },
});

// Função para validar a senha
document.getElementById('passwordForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const senhaInput =
    document.getElementById('input1').value +
    document.getElementById('input2').value +
    document.getElementById('input3').value +
    document.getElementById('input4').value;
  const senhaCorreta = '8456'; // Senha definida
  const erroMensagem = document.getElementById('errorMessage');

  if (senhaInput === senhaCorreta) {
    // Redirecionar para o relatório real
    window.location.href =
      'https://lookerstudio.google.com/reporting/8bc477e4-2e80-4aec-af8c-ee9f981a7109'; // Link correto do relatório
  } else {
    erroMensagem.style.display = 'block';
  }
});
