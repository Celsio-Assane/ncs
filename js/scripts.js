// === MENU HAMBÚRGUER ===
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('#nav-menu ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// === PLAYER DE PODCAST ===
// Lista de episódios
const episodios = [
  { titulo: "Episódio 4 - Novos Caminhos", src: "../audios/episodio4.mp3" },
  { titulo: "Episódio 3 - Sustentabilidade", src: "audios/episodio3.mp3" },
  { titulo: "Episódio 2 - Bolsas de Estudo", src: "audios/episodio2.mp3" },
  { titulo: "Episódio 1 - Estudar no Brasil", src: "audios/episodio1.mp3" }
];

// Elementos do player
const player = document.getElementById("main-audio");
const source = document.getElementById("audio-source");
const title = document.getElementById("audio-title");
const lista = document.getElementById("lista-episodios");

// Carrega o episódio mais recente
if (episodios.length > 0) {
  source.src = episodios[0].src;
  title.textContent = episodios[0].titulo;
  player.load();
}

// Cria lista de episódios anteriores
for (let i = 1; i < episodios.length; i++) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = episodios[i].titulo;
  link.addEventListener("click", function (e) {
    e.preventDefault();
    source.src = episodios[i].src;
    title.textContent = episodios[i].titulo;
    player.load();
    player.play();
  });
  li.appendChild(link);
  lista.appendChild(li);
}

// === NOTÍCIAS COM FILTRO ===
const container = document.getElementById("postsContainer");
const inputBusca = document.getElementById("busca");
const filtroCategoria = document.getElementById("categoriaFiltro");

function renderizarPosts(filtrados) {
  container.innerHTML = "";
  if (filtrados.length === 0) {
    container.innerHTML = "<p>Nenhuma notícia encontrada.</p>";
    return;
  }

  filtrados.forEach(post => {
    const artigo = document.createElement("article");
    artigo.classList.add("post");
    artigo.innerHTML = `
      <h2>${post.titulo}</h2>
      <img src="${post.imagem}" alt="Imagem do post">
      <p>${post.resumo}</p>
      <a href="${post.link}">Leia mais</a>
    `;
    container.appendChild(artigo);
  });
}

function filtrar() {
  const termo = inputBusca.value.toLowerCase();
  const categoria = filtroCategoria.value;

  const filtrados = posts.filter(post => {
    const tituloInclui = post.titulo.toLowerCase().includes(termo);
    const resumoInclui = post.resumo.toLowerCase().includes(termo);
    const categoriaCorresponde = categoria === "todas" || post.categoria === categoria;
    return (tituloInclui || resumoInclui) && categoriaCorresponde;
  });

  renderizarPosts(filtrados);
}

inputBusca.addEventListener("input", filtrar);
filtroCategoria.addEventListener("change", filtrar);

// Inicializa com todos os posts
renderizarPosts(posts);

