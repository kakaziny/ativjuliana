//it("Fizz buzz", function (){
//   expect(inteiro(1)).toBe(1);
//   expect(inteiro(2)).toBe(2);
//  expect(inteiro(3)).toBe("Fizz");
//   expect(inteiro(4)).toBe(4);
//  expect(inteiro(5)).toBe("buzz");
//  expect(inteiro(6)).toBe("Fizz");
//  expect(inteiro(7)).toBe(7);
//  expect(inteiro(8)).toBe(8);
//  expect(inteiro(9)).toBe("Fizz");
//  expect(inteiro(10)).toBe("buzz");  
//});


// ex 1
/* 
describe('Função multiplicarTresNumeros', function () {
   it('deve retornar 24 ao multiplicar 2, 3 e 4', function () {
       expect(multiplicarTresNumeros(2, 3, 4)).toBe(24);
   });

   it('deve retornar 10 ao multiplicar 1, 5 e 2', function () {
       expect(multiplicarTresNumeros(1, 5, 2)).toBe(10);
   });

   it('deve retornar 0 ao multiplicar 1, 0 e 3', function () {
       expect(multiplicarTresNumeros(1, 0, 3)).toBe(0);
   });

   it('deve lançar um erro se algum argumento não for número', function () {
       expect(function () {
           multiplicarTresNumeros(2, '3', 4);
       }).toThrowError('Todos os argumentos devem ser números.');
   });
}); 
*/


// ex 2
/* 
describe('Função dividir', function () {
   it('deve retornar 5 ao dividir 10 por 2', function () {
       expect(dividir(10, 2)).toBe(5);
   });

   it('deve retornar "Não é possível dividir por 0" ao tentar dividir 7 por 0', function () {
       expect(dividir(7, 0)).toBe("Não é possível dividir por 0");
   });

   it('deve retornar -5 ao dividir -10 por 2', function () {
       expect(dividir(-10, 2)).toBe(-5);
   });

   it('deve retornar 0 ao dividir 0 por 10', function () {
       expect(dividir(0, 10)).toBe(0);
   });

   it('deve retornar um número decimal ao dividir 7 por 3', function () {
       expect(dividir(7, 3)).toBeCloseTo(2.333, 3); // Verifica até 3 casas decimais
   });
}); 
*/


//ex 3
/*
describe('Funções de conversão de temperatura', function () {
   describe('Função celsiusFahrenheit', function () {
       it('deve converter 0°C para 32°F', function () {
           expect(celsiusFahrenheit(0)).toBe(32);
       });

       it('deve converter 100°C para 212°F', function () {
           expect(celsiusFahrenheit(100)).toBe(212);
       });

       it('deve converter -40°C para -40°F (ponto de equivalência)', function () {
           expect(celsiusFahrenheit(-40)).toBe(-40);
       });
   });

   describe('Função fahrenheitCelsius', function () {
       it('deve converter 32°F para 0°C', function () {
           expect(fahrenheitCelsius(32)).toBe(0);
       });

       it('deve converter 212°F para 100°C', function () {
           expect(fahrenheitCelsius(212)).toBe(100);
       });

       it('deve converter -40°F para -40°C (ponto de equivalência)', function () {
           expect(fahrenheitCelsius(-40)).toBe(-40);
       });
   });
}); 
*/


//ex 4
/*
describe('Função calcularMedia', function () {
   it('deve retornar 4 para os números 3, 4 e 5', function () {
       expect(calcularMedia(3, 4, 5)).toBe(4);
   });

   it('deve retornar 20 para os números 10, 20 e 30', function () {
       expect(calcularMedia(10, 20, 30)).toBe(20);
   });

   it('deve retornar 0 para os números -1, 1 e 0', function () {
       expect(calcularMedia(-1, 1, 0)).toBe(0);
   });

   it('deve lançar um erro se algum argumento não for número', function () {
       expect(function () {
           calcularMedia(3, '4', 5);
       }).toThrowError('Todos os argumentos devem ser números.');
   });
});
*/


//ex 5
/*
describe('Função contarCaracteres', function () {
   it('deve retornar 5 para a string "hello"', function () {
       expect(contarCaracteres("hello")).toBe(5);
   });

   it('deve retornar 5 para a string "12345"', function () {
       expect(contarCaracteres("12345")).toBe(5);
   });

   it('deve retornar 0 para uma string vazia', function () {
       expect(contarCaracteres("")).toBe(0);
   });

   it('deve lançar um erro se o argumento não for uma string', function () {
       expect(function () {
           contarCaracteres(12345);
       }).toThrowError('O argumento deve ser uma string.');
   });
});
*/


//ex 6
// testeSpec.js
describe('Função calculadora', function () {
   it('deve retornar 6 para 4 + 2', function () {
       expect(calculadora(4, 2, '+')).toBe(6);
   });

   it('deve retornar 2 para 4 - 2', function () {
       expect(calculadora(4, 2, '-')).toBe(2);
   });

   it('deve retornar 8 para 4 * 2', function () {
       expect(calculadora(4, 2, '*')).toBe(8);
   });

   it('deve retornar 2 para 4 / 2', function () {
       expect(calculadora(4, 2, '/')).toBe(2);
   });

   it('deve lançar um erro para divisão por 0', function () {
       expect(function () {
           calculadora(4, 0, '/');
       }).toThrowError('Não é possível dividir por 0.');
   });

   it('deve lançar um erro para operador inválido', function () {
       expect(function () {
           calculadora(4, 2, '%');
       }).toThrowError('O operador deve ser "+", "-", "*" ou "/".');
   });

   it('deve lançar um erro se os números não forem válidos', function () {
       expect(function () {
           calculadora('4', 2, '+');
       }).toThrowError('Os dois primeiros argumentos devem ser números.');
   });
});



