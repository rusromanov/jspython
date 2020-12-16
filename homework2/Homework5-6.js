// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.


function summ(a, b) {
  return (a + b);
}


function diff(a, b) {
  return (a - b);
}


function mult(a, b) {
  return (a * b);
}


function divi(a, b) {
  return (a / b);
}


//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).


function mathOperation(arg1, arg2, operation) {
  switch(operation) {
    case 'сложение':
      return 'Сумма: ' + summ(arg1, arg2);
    case 'разность':
      return 'Разность: ' + diff(arg1, arg2);
    case 'деление':
      return 'Произведение: ' + mult(arg1, arg2);
    case 'умножение':
      return 'Деление: ' + divi(arg1, arg2);
  }
}