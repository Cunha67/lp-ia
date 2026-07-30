
// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const btnTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }

});

btnTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revelarElementos() {

    const alturaJanela = window.innerHeight;

    reveals.forEach(elemento => {

        const topoElemento = elemento.getBoundingClientRect().top;

        if (topoElemento < alturaJanela - 100) {
            elemento.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revelarElementos);
window.addEventListener("load", revelarElementos);

// ===============================
// MENU ATIVO CONFORME A SEÇÃO
// ===============================

const secoes = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let atual = "";

    secoes.forEach(secao => {

        const topo = secao.offsetTop - 120;
        const altura = secao.clientHeight;

        if (scrollY >= topo && scrollY < topo + altura) {
            atual = secao.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + atual) {
            link.classList.add("ativo");
        }

    });

});

// ===============================
// EFEITO SUAVE NOS CARDS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});

// ===============================
// MENSAGEM DO FORMULÁRIO
// ===============================

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

    formulario.reset();

});