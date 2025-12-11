// Captura os elementos do formulário.
const inputNome = document.querySelector("#nome")
const inputIdade = document.querySelector("#idade")
const form = document.querySelector("#meuFormulario")

// Captura outros elementos
const resultado = document.querySelector("#resultado")

// Evento para captar tudo que o usuário digitar no campo de idade.
inputIdade.addEventListener("input", () => {
  // Cria uma variável para captar apenas números, substituindo tudo que NÃO for números por uma string vazia.
  let inputIdadeNumber = inputIdade.value.replace(/\D/g, "")
  // Atualizando o valor do input de idade para receber apenas números.
  inputIdade.value = inputIdadeNumber
})

document.querySelector("#resultado").addEventListener("scroll", (event) => {
  
})

// Evento "submit" que executa após o usuário enviar o formulário.
form.addEventListener("submit", (event) => {
  // Previne o comportamento padrão do formulário, evitando que a página seja recarregada.
  event.preventDefault()

  // Objeto para caputar os dados(valores) dos inputs.
  const obj = {
    nome: inputNome.value,
    idade: inputIdade.value,
  }

  // Pega o elemento "section" e remove a classe que deixa-o oculto.
  resultado.classList.remove("ocult")

  // Cria um elemento "p".
  const p = document.createElement("p")
  // Insere um conteúdo ao parágrafo.
  p.innerHTML = `
  Nome: ${obj.nome} <br>
  Idade: ${obj.idade}`

  // Pega o elemento "section" e adiciona um "p" como filho. 
  resultado.append(p)

  // Reseta os campos, aguardando que o usuário insira novos dados.
  inputNome.value = ""
  inputIdade.value = ""
})