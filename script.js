// Função para revelar as seções conforme o scroll
function revealOnScroll() {
    const sections = document.querySelectorAll('.features, .about, .media, .testimonials, .faq, .download');
    const windowHeight = window.innerHeight;
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 100) {
        section.classList.add('show');
      }
    });
  }
  
  // Função para alternar a exibição de respostas no FAQ
  function toggleFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      const question = item.querySelector('h3');
  
      question.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.querySelector('.faq-answer'); // Seleciona a resposta
        answer.style.display = item.classList.contains('active') ? 'block' : 'none'; // Mostra ou esconde a resposta
      });
    });
  }
  
  // Chama a função para ativar o FAQ e a revelação de seções ao scroll
  toggleFAQ();
  window.addEventListener('scroll', revealOnScroll);
  
  // Chama a função imediatamente para as seções já visíveis ao carregar a página
  revealOnScroll();

  // Mostrar o botão quando o usuário rolar a página
window.addEventListener('scroll', function() {
  const backToTop = document.getElementById('back-to-top');
  if (window.pageYOffset > 200) {
    backToTop.classList.add('show-back-to-top');
  } else {
    backToTop.classList.remove('show-back-to-top');
  }
});

  