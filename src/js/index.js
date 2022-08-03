/* window.alert ('hello word')

window.alert ('hello word') 

objetvo : quando clicar em avançar mudar para o prox e voltar ao anterior.

1 passo aparecer o pikachu
2 passo desaparecer pikachu
3 passo aparecer charizzard
...


console.log('batata'); */

/*passo 1 pegar o id do elemento 
console.log(document.getElementById('btn-avancar'))seleciona btn pelo id*/
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
const btnVoltar = document.getElementById("btn-voltar");

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

/* passo 2 identifica o click*/

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  //passo 3 prox cartão da lista*/
  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});
//buscar catão selecionado e esconder o ultimo
//*************************voltar********************* */

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;
  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
