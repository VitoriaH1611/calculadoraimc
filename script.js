const botao = document.querySelector("#calcular");

function imc() {
  const nome = document.querySelector("#nome").value;
  const altura = document.querySelector("#altura").value;
  const resultado = document.querySelector("#resultado");
  const peso = document.querySelector("#peso").value;
  //   resultado.innerHTML = "oi " + nome + " sua altura é " + altura;

  if (nome != "" && altura != "" && peso != "") {
    const resultadoImc = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";
    if (resultadoImc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (resultadoImc < 25) {
      classificacao = "no peso ideal";
    } else if (resultadoImc < 30) {
      classificacao = "levemente acima do peso";
    } else if (resultadoImc < 35) {
      classificacao = "com Obesidade grau 1";
    } else if (resultadoImc < 40) {
      classificacao = "com Obesidade grau 2";
    } else {
      classificacao = " com Obesidade grau 3 (morbida)";
    }

    //   resultado.innerHTML = `oi ${nome} sua altura é ${altura}`;
    resultado.innerHTML = `olá ${nome} seu imc é ${resultadoImc} e voce está ${classificacao}`;
  } else {
    resultado.innerHTML = "Preencha todos os campos";
  }

  console.log(nome);
}

botao.addEventListener("click", imc);
