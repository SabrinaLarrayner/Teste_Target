/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function generateFibonacciSequence(limit) {
  const sequence = [0, 1];
  while (true) {
    const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextValue > limit) break;
    sequence.push(nextValue);
  }
  return sequence;
}


function isFibonacciNumber(num) {
    if (num < 0) return false;
  
    const fibonacciSequence = generateFibonacciSequence(num);
  
    const isInSequence = fibonacciSequence.includes(num);
  
    if (isInSequence)  console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    else console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    
  
    return isInSequence;
  }
  
  isFibonacciNumber(8); 
  isFibonacciNumber(10); 
  isFibonacciNumber(13); 
  