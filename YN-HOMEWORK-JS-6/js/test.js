console.log('%c%s', 'font-weigth: bold; font-size: 25px;','ЗАДАНИЕ 1');
console.log('task1Replace("aaa@bbb@ccc")');
console.log(task1Replace('aaa@bbb@ccc'));


console.log('%c%s', 'font-weigth: bold; font-size: 25px;','ЗАДАНИЕ 2');
console.log(`task2('2025-12-31')`);
console.log(task2('2025-12-31'));


console.log('%c%s', 'font-weigth: bold; font-size: 25px;','ЗАДАНИЕ 3');
console.log('task2substr()');
task2substr();


console.log('%c%s', 'font-weigth: bold; font-size: 25px;','ЗАДАНИЕ 4');
console.log('task4Sqrt([4, 2, 5, 19, 13, 0, 10])');
console.log(task4Sqrt([4, 2, 5, 19, 13, 0, 10]));


console.log('%c%s', 'font-weigth: bold; font-size: 25px;','ЗАДАНИЕ 5');
let c = task5(3, 5);
console.log(`a = 3; b = 5; c = ${c}`);
c = task5(6, 1);
console.log(`a = 6; b = 1; c = ${c}`);


console.log('%c%s', 'font-weigth: bold; font-size: 25px;','ЗАДАНИЕ 6');
console.log(task6DateFormat());


console.log('%c%s', 'font-weigth: bold; font-size: 25px;','ЗАДАНИЕ 7');
console.log(task7());


console.log('%c%s', 'font-weigth: bold; font-size: 25px;','ЗАДАНИЕ 8');
console.log(`task8CheckPhone('+375333467556')`);
console.log(task8CheckPhone('+375333467556'));
console.log(`task8CheckPhone('80174567531')`);
console.log(task8CheckPhone('80174567531'));
console.log(`task8CheckPhone('80242456789')`);
console.log(task8CheckPhone('80242456789'));
console.log(`task8CheckPhone('+7456789')`);
console.log(task8CheckPhone('+7456789'));
console.log("task8CheckPhone('8-(0212)-45-23-65')");
console.log(task8CheckPhone('8-(0212)-45-23-65'));



console.log('%c%s', 'font-weigth: bold; font-size: 25px;','ЗАДАНИЕ 9');
for (let i = 0; i < 5; i++) {
    console.log(task9CheckEmail(getString('Введите e-mail для проверки','nikeugene@mail.ru')));
}


console.log('%c%s', 'font-weigth: bold; font-size: 25px;','ЗАДАНИЕ 10');
console.log(task10CheckURL('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));



function getString(question, defaultString) {
    string = prompt(question, defaultString);
    if ((string = string.trim()) == '') getString(question, defaultString);
    return string;
}