//
const produtos = [
  { nome: "Camisa", preco: 50.00 },
  { nome: "Calça", preco: 100.00 },
  { nome: "Sapato", preco: 150.00 },
  { nome: "Boné", preco: 25.00 }
];

// Carrinho de compras
let carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarProdutoAoCarrinho() {
  // Exibe as opções de produtos disponíveis
  let listaProdutos = "Escolha um produto:\n";
  produtos.forEach((produto, index) => {
    listaProdutos += `${index + 1}. ${produto.nome} - R$ ${produto.preco}\n`;
  });
  
  // Captura a escolha do cliente
  const escolha = parseInt(prompt(listaProdutos)) - 1;
  if (escolha >= 0 && escolha < produtos.length) {
    const produtoSelecionado = produtos[escolha];
    
    // Confirmação de adição ao carrinho
    const confirmar = confirm(`Você escolheu ${produtoSelecionado.nome} no valor de R$ ${produtoSelecionado.preco}. Deseja adicionar ao carrinho?`);
    
    if (confirmar) {
      // Captura a quantidade
      const quantidade = parseInt(prompt(`Quantas unidades de ${produtoSelecionado.nome} você deseja adicionar?`));
      if (quantidade > 0) {
        // Calcula o subtotal e adiciona o produto ao carrinho
        const subtotal = produtoSelecionado.preco * quantidade;
        carrinho.push({
          nome: produtoSelecionado.nome,
          preco: produtoSelecionado.preco,
          quantidade: quantidade,
          subtotal: subtotal
        });
        alert(`${produtoSelecionado.nome} foi adicionado ao carrinho.`);
      } else {
        alert("Quantidade inválida.");
      }
    }
  } else {
    alert("Opção inválida. Tente novamente.");
  }
}

// Função para visualizar o carrinho
function visualizarCarrinho() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
  } else {
    let detalhesCarrinho = "Seu carrinho:\n";
    let totalCompra = 0;
    
    // Exibe detalhes de cada item no carrinho
    carrinho.forEach((item, index) => {
      detalhesCarrinho += `${index + 1}. ${item.nome} - R$ ${item.preco} (x${item.quantidade}) - Subtotal: R$ ${item.subtotal}\n`;
      totalCompra += item.subtotal;
    });
    
    // Exibe o total da compra
    detalhesCarrinho += `\nTotal da compra: R$ ${totalCompra}`;
    alert(detalhesCarrinho);
  }
}

// Função principal que controla o fluxo do sistema
function sistemaEcommerce() {
  let continuar = true;
  
  while (continuar) {
    const acao = prompt("Digite 1 para adicionar produto ao carrinho, 2 para visualizar carrinho ou 3 para sair:");
    
    switch (acao) {
      case "1":
        adicionarProdutoAoCarrinho();
        break;
      case "2":
        visualizarCarrinho();
        break;
      case "3":
        continuar = false;
        alert("Obrigado por usar nosso sistema!");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  }
}

// Inicia o sistema de e-commerce
sistemaEcommerce();
