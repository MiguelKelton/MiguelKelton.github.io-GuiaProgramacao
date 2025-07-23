function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/close_white_36dp.svg";
    }
}

document.getElementById("scrollDownBtn").addEventListener("click", function () {
    const article = document.querySelector(".conteudo"); // Seleciona o artigo

    if (article) {
        article.scrollIntoView({ behavior: "smooth" }); // Faz a rolagem suave
        setTimeout(() => {
            document.getElementById("scrollDownBtn").classList.add("hidden"); // Esconde o botão
        }, 500);
    }
});

// Função para copias texto

function copiarTexto(botao) {
    // Acessa o elemento .container_cod mais próximo do botão
    const container = botao.closest(".container_cod");

    // Procura pelo <code> dentro desse container
    const texto = container.querySelector("code").innerText;

    // Copia para a área de transferência
    navigator.clipboard.writeText(texto)
}

function abrirZoom(wrapper) {
      const imagem = wrapper.querySelector('img');
      const imagemZoom = document.getElementById('imagemZoom');
      imagemZoom.src = imagem.src;
      document.getElementById('zoomContainer').style.display = 'flex';
    }

    function fecharZoom() {
      document.getElementById('zoomContainer').style.display = 'none';
    }