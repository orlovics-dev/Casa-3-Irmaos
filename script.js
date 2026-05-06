const produtos = [
  { id: 1, nome: "Cimento", preco: 35 },
  { id: 2, nome: "Areia", preco: 120 },
  { id: 3, nome: "Tijolo", preco: 1.5 }
];

let carrinho = [];

// CARREGAR PRODUTOS
function carregarProdutos() {
  const lista = document.getElementById("lista-produtos");

  produtos.forEach(prod => {
    const div = document.createElement("div");
    div.className = "produto";

    div.innerHTML = `
      <h3>${prod.nome}</h3>
      <p>R$ ${prod.preco}</p>
      <button onclick="adicionarCarrinho(${prod.id})">Comprar</button>
    `;

    lista.appendChild(div);
  });
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  atualizarCarrinho();
}

// ATUALIZAR CARRINHO
function atualizarCarrinho() {
  const lista = document.getElementById("itens-carrinho");
  lista.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.nome;
    lista.appendChild(li);
  });
}

// FINALIZAR PEDIDO (WHATSAPP)
function finalizarPedido() {
  let mensagem = "Pedido:\n";

  carrinho.forEach(item => {
    mensagem += `- ${item.nome}\n`;
  });

  const url = `https://wa.me/5599999999999?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// BOTÃO DE ORÇAMENTO (LINK GITHUB)
function solicitarOrcamento() {
  const link = "https://SEU-LINK-GITHUB-AQUI"; // 👈 COLE SEU LINK AQUI
  window.open(link, "_blank");
}

// INICIAR
carregarProdutos();