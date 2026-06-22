const projetos = [
    { 
        nome: "KartIa", 
        imagens: [
            "./assets/login-kartIa.jpeg", 
            "./assets/campeonatos-kartIa.jpeg", 
            "./assets/perfil-kartIa.jpeg", 
            "./assets/anotações-kartIa.jpeg", 
            "./assets/equipes-kartIa.jpeg"
        ], 
        link: "https://github.com/RuanGCD/KartIA" 
    },
    { 
        nome: "Projeto B", 
        imagens: ["img4.jpg", "img5.jpg"], 
        link: "#" 
    }
];
let indiceProjeto = 0;
let indiceFoto = 0;

function renderizar() {
    const projeto = projetos[indiceProjeto];
    
    // Atualiza nome e link
    document.querySelector('.projeto-titulo').textContent = projeto.nome;
    document.querySelector('.projeto-botao').href = projeto.link;
    
    // Atualiza a foto ativa
    const fotoAtiva = document.querySelector('.projeto-foto-ativa');
    fotoAtiva.src = projeto.imagens[indiceFoto];
}

// Navegação de Projetos (o carrossel principal)
document.getElementById('nextBtn').addEventListener('click', () => {
    indiceProjeto = (indiceProjeto + 1) % projetos.length;
    indiceFoto = 0; // Reseta a foto ao mudar de projeto
    renderizar();
});

// Navegação de Projetos - ANTERIOR
document.getElementById('prevBtn').addEventListener('click', () => {
    indiceProjeto = (indiceProjeto - 1 + projetos.length) % projetos.length;
    indiceFoto = 0; 
    renderizar();
});

// Navegação de Fotos (o carrossel interno)
document.getElementById('nextFoto').addEventListener('click', () => {
    const projeto = projetos[indiceProjeto];
    indiceFoto = (indiceFoto + 1) % projeto.imagens.length;
    renderizar();
});

document.getElementById('prevFoto').addEventListener('click', () => {
    const projeto = projetos[indiceProjeto];
    indiceFoto = (indiceFoto - 1 + projeto.imagens.length) % projeto.imagens.length;
    renderizar();
});

renderizar();
