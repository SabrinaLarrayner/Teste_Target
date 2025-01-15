/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverterString(input) {
	let resultado = "";
	for (let i = input.length - 1; i >= 0; i--) {
	  resultado += input[i];
	}
	return resultado;
  }
  
  const stringOriginal = "Target Teste Sabrina";
  const stringInvertida = inverterString(stringOriginal);
  
  console.log(`String original: ${stringOriginal}`);
  console.log(`String invertida: ${stringInvertida}`);
  