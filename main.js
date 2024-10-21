const form = document.getElementById("formulario");
let linhas = " ";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarNumero();
  atualizarTabela();
});

function adicionarNumero() {
  let nomeInput = document.getElementById("nome-form");
  let numeroInput = document.getElementById("numero-form");
  let dddInput = document.getElementById("ddd-form");

  let linha = "<tr>";
  linha += `<td>${nomeInput.value}</td>`;
  linha += `<td>${dddInput.value}</td>`;
  linha += `<td>${numeroInput.value} </td>`;
  linha += "</tr>";

  linhas += linha;

  nomeInput.value = "";
  dddInput.value = "";
  numeroInput.value = "";
}

function atualizarTabela() {
  let corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
