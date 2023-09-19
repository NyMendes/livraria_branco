const produtos = [
  {
    id: '1',
    nome: 'Imperfeitos',
    preco: 30.8,
    imagem:
      'https://lojasaraivanew.vtexassets.com/arquivos/ids/368115-200-200?v=1781537363&width=200&height=200&aspect=true'
  },
  {
    id: '2',
    nome: 'Alice no país das maravilhas',
    preco: 47.99,
    imagem:
      'https://lojasaraivanew.vtexassets.com/arquivos/ids/299953-200-200?v=1779894137&width=200&height=200&aspect=true'
  },
  {
    id: '3',
    nome: 'Harry Potter',
    preco: 53.87,
    imagem:
      'https://lojasaraivanew.vtexassets.com/arquivos/ids/159012-200-200?v=1781304336&width=200&height=200&aspect=true'
  },
  {
    id: '4',
    nome: 'Vermelho, branco e sangue azul',
    preco: 32.89,
    imagem:
      'https://lojasaraivanew.vtexassets.com/arquivos/ids/198635-200-200?v=1781485524&width=200&height=200&aspect=true'
  },
  {
    id: '5',
    nome: 'Os sete maridos de Evelyn Hugo',
    preco: 47.99,
    imagem:
      'https://lojasaraivanew.vtexassets.com/arquivos/ids/198374-200-200?v=1780569103&width=200&height=200&aspect=true'
  },
  {
    id: '6',
    nome: 'O príncipe cruel',
    preco: 53.87,
    imagem:
      'https://lojasaraivanew.vtexassets.com/arquivos/ids/198423-200-200?v=1781552085&width=200&height=200&aspect=true'
  }
]

const carrinhoItens = {}

function renderizaProduto(produto, index) {
  return `
    <div class="col-sm-4 mb-3 conteudo">
      <div class="card loja__item caixa">
        <img
          src="${produto.imagem}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${produto.nome}</h5>
          <h6>R$${produto.preco}</h6>
          <br>
          <button data-index="${index}" class="btn btn-primary btn-add">Adicionar</button>
        </div>
      </div>
  </div>
  `
}
function renderizaProdutos() {
  let html = ''
  for (let i = 0; i < produtos.length; i++) {
    html = html + renderizaProduto(produtos[i], i)
  }
  return html
}

function renderizaItemCarrinho(produto) {
  return `
    <div class="card carrinho__item mb-2">
      <div class="card-body ">
        <h5 class="card-title">${produto.nome}</h5>
        <p class="card-text">
          Preço unidade: R$${produto.preco} | Quantidade: ${produto.quantidade}
        </p>
        <p class="card-text">Valor: R$${produto.preco * produto.quantidade}</p>
        <button data-produto-id="${
          produto.id
        }" class="btn btn-danger btn-sm btn-remove">Remover</button>
      </div>
    </div>
  `
}
function renderizaCarrinho() {
  let html = ''
  for (let produtoId in carrinhoItens) {
    html = html + renderizaItemCarrinho(carrinhoItens[produtoId])
  }
  document.querySelector('.carrinho__itens').innerHTML = html
}

function renderCarrinhoTotal() {
  let total = 0
  for (let produtoId in carrinhoItens) {
    total =
      total +
      carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade
  }

  document.querySelector(
    '.carrinho__total'
  ).innerHTML = `<h6>Total: <strong> R$${total}</strong></h6>`
}

function adicionaItemNoCarrinho(produto) {
  if (!carrinhoItens[produto.id]) {
    carrinhoItens[produto.id] = produto
    carrinhoItens[produto.id].quantidade = 0
  }
  ++carrinhoItens[produto.id].quantidade
  renderizaCarrinho()
  renderCarrinhoTotal()
}

document.body.addEventListener('click', function (event) {
  const elemento = event.target

  if (elemento.classList.contains('btn-add')) {
    const index = parseInt(elemento.getAttribute('data-index'), 10)
    const produto = produtos[index]

    adicionaItemNoCarrinho(produto)
  }

  if (elemento.classList.contains('btn-remove')) {
    const produtoId = elemento.getAttribute('data-produto-id')
    if (carrinhoItens[produtoId].quantidade <= 1) {
      delete carrinhoItens[produtoId]
    } else {
      --carrinhoItens[produtoId].quantidade
    }
    renderizaCarrinho()
    renderCarrinhoTotal()
  }
})

document.querySelector('.loja').innerHTML = renderizaProdutos()

const navLinks = document.querySelector('.nav-links')

let htmlcssArrow = document.querySelector('.htmlcss-arrow')
htmlcssArrow.addEventListener('click', () => {
  navLinks.classList.toggle('show1')
})
let jsArrow = document.querySelector('.js-arrow')
jsArrow.addEventListener('click', () => {
  navLinks.classList.toggle('show2')
})

const body = document.querySelector('body'),
  nav = document.querySelector('nav'),
  modeToggle = document.querySelector('.dark-light')

modeToggle.addEventListener('click', () => {
  modeToggle.classList.toggle('active')
  body.classList.toggle('dark')
})
