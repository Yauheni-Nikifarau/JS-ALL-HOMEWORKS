//////////////////////////////////////////////////////////////////////////////////
//Задание 1 - Запросить переменные и вывести фразу
let user_name = prompt('Ваше имя?'),
    age = Number(prompt('Ваш возраст?(число)')),
    city = prompt('Ваш город?'),
    phone = Number(prompt('Ваш телефон?(без "+")')),
    email = prompt('Ваш адрес электронной почты?'),
    company = prompt('Ваша компания?'),
    phrase,
    ageWord;

//Если age или phone не равны сами себе, значит они равны NaN
if (user_name != '' && age != '' && city != '' && phone != '' && email != '' && company != '' && age == age && phone == phone) {

    //Проверка на "год", "года" или "лет"
    if (age > 4 && age < 21) {
        ageWord = 'лет';
    }
    else {
        switch (age % 10) {
            case 1:
                ageWord = 'год';
                break;
            case 2:
            case 3:
            case 4:
                ageWord = 'года';
                break;
            default:
                ageWord = 'лет';
        }
    }

    phrase = `Меня зовут ${user_name}. Мне ${age} ${ageWord}. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`;
}
else  {
    phrase = 'Вы некорректно ввели информацию, пожалуйста, перезагрузите страницу и повторите.'
}

alert(phrase);

console.log('\nЗадание 1 \n ');

console.log(phrase);


//////////////////////////////////////////////////////////////////////////
//Задание 2 - определить возраст пользователя
let birthday = confirm('У вас уже было ДР в этом году'),
    yearOfBirth;

//Если в этом году еще не было ДР, то помимо возраста нужно отнять еще и единицу
if (birthday == true) {
    yearOfBirth = 2021 - age;
}
else {
    yearOfBirth = 2021 - age - 1;
}

console.log('\nЗадание 2 \n ');

console.log(`Вы родились в ${yearOfBirth} году.`)

///////////////////////////////////////////////////////////////////////////
//Задание 3 - у шестизначного числа провести проверку на равенство сумм первых и последних трёх цифр

let num = prompt('Введите шестизначное число'),
    numeral1,
    numeral2,
    numeral3,
    numeral4,
    numeral5,
    numeral6;

num = Number(num);

if (num != num) {
    num = 123456;
}



//Разбивка по цифрам

numeral6 = num%10;
numeral5 = (num%100 - num%10) / 10;
numeral4 = (num%1000 - num%100) / 100;
numeral3 = (num%10000 - num%1000) / 1000;
numeral2 = (num%100000 - num%10000) / 10000;
numeral1 = (num%1000000 - num%100000) / 100000;

console.log('\nЗадание 3 \n ');
console.log(`Вы ввели число ${num}`);

if (numeral1 + numeral2 + numeral3 == numeral4 + numeral5 + numeral6) {
    console.log('Да');
}
else {
    console.log('Нет');
}

//////////////////////////////////////////////////////////////////////////////////////////
//Задание 4 - Сравнение переменной с нулём

let variable_a = Number(prompt("Введите значение переменной а? (целое число, отрицательное или положительное)"));

console.log('\nЗадание 4 \n ');
console.log(`Вы ввели число ${variable_a}`);

    //Проверка на NaN и выведение ответа
if (variable_a == variable_a) {
    if (variable_a > 0) {
        console.log("Верно.");
    }
    else {
        console.log("Неверно.");
    }
}
else {
    console.log('Вы ввели не число. прекратите это баловство!');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 5 - Различные операции с переменными а и б

let a = 10,
    b = 2;

console.log('\nЗадание 5 \n ');
console.log(`Сумма переменных a и b равно: ${a + b}`);
console.log(`Разность переменных a и b равно: ${a - b}`);
console.log(`Произведение переменных a и b равно: ${a * b}`);
console.log(`Частное переменных a и b равно: ${a / b}`);

if ( a + b > 1 ) {
    console.log(`Так как сумма переменных больше 1, то квадрат суммы переменных a и b равен: ${ (a + b) ** 2 }`);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 6 - Сравнение значения переменных a и b из задания 5

console.log('\nЗадание 6 \n ');

if ( a > 2 && a < 11 && b >= 6 && b < 14 ) {
    console.log('Верно.');
}
else {
    console.log('Неверно.');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 7 - В какую четверть часа попадает число

let task_7_Variable = Number(prompt('Введите число от 0 до 59.'));

console.log('\nЗадание 7 \n ');
console.log(`Вы ввели число ${task_7_Variable}`);

//Проверка на NaN

if ( task_7_Variable == task_7_Variable) {

    if (task_7_Variable >= 0 && task_7_Variable < 15) {
        console.log('Первая четверть часа');
    }
    else if (task_7_Variable >= 15 && task_7_Variable < 30) {
        console.log('Вторая четверть часа');
    }
    else if (task_7_Variable >= 30 && task_7_Variable < 45) {
        console.log('Третья четверть часа');
    }
    else if (task_7_Variable >= 45 && task_7_Variable <= 59) {
        console.log('Четвертая четверть часа');
    }
    else {
        console.log('Ваше значение не попадает в указанный интервал');
    }
}
else {
    console.log('Вы ввели не число. прекратите это баловство!');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 8 - определение декады месяца

let task_8_Variable = Number(prompt('Введите число от 1 до 31.'));

console.log('\nЗадание 8 \n ');
console.log(`Вы ввели число ${task_8_Variable}`);

//Проверка на NaN

if ( task_8_Variable == task_8_Variable) {

    if (task_8_Variable >= 1 && task_8_Variable < 11) {
        console.log('Первая декада месяца');
    }
    else if (task_8_Variable >= 11 && task_8_Variable < 21) {
        console.log('Вторая декада месяца');
    }
    else if (task_8_Variable >= 21 && task_8_Variable <= 31) {
        console.log('Третья декада месяца');
    }
    else {
        console.log('Ваше значение не попадает в указанный интервал');
    }
}
else {
    console.log('Вы ввели не число. прекратите это баловство!');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Задание 9 - Скрипт перевода дней в года, месяцы и дни

let task_9_days = Number(prompt('Введите любое неотрицательное число')),
    task_9_years, task_9_months, task_9_weeks, task_9_hours, task_9_minutes, task_9_seconds,
    task_9_10_condition = true;

console.log('\nЗадание 9 \n ');
console.log(`Вы ввели число ${task_9_days}`);

if (task_9_days == task_9_days && task_9_days >= 0) {

    //Расчёт переменных
    task_9_weeks = task_9_days / 7;
    task_9_months = task_9_weeks / 4.43;
    task_9_years = task_9_months / 12;
    task_9_hours = task_9_days * 24;
    task_9_minutes = task_9_hours * 60;
    task_9_seconds = task_9_minutes * 60;

    //Вывод результатов с проверкой на меньше единицы
    if (task_9_years < 1) {
        console.log(`Меньше года`);
    }
    else {
        console.log(`Лет: ${task_9_years}`);
    }

    if (task_9_months < 1) {
        console.log(`Меньше месяца`);
    }
    else {
        console.log(`Месяцев: ${task_9_months}`);
    }

    if (task_9_weeks < 1) {
        console.log(`Меньше недели`);
    }
    else {
        console.log(`Недель: ${task_9_weeks}`);
    }

    if (task_9_days < 1) {
        console.log(`Меньше дня`);
    }
    else {
        console.log(`Дней: ${task_9_days}`);
    }

    if (task_9_hours < 1) {
        console.log(`Меньше часа`);
    }
    else {
        console.log(`Часов: ${task_9_hours}`);
    }

    if (task_9_minutes < 1) {
        console.log(`Меньше минуты`);
    }
    else {
        console.log(`Минут: ${task_9_minutes}`);
    }

    if (task_9_seconds < 1) {
        console.log(`Меньше секунды`);
    }
    else {
        console.log(`Секунд: ${task_9_seconds}`);
    }
}
else {
    task_9_10_condition = false;
    console.log('Ввод некорректен.');
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 10 - Определение месяца и поры года

let task_10_variable = task_9_days % 365,
    task_10_month, task_10_season;

console.log('\nЗадание 10 \n ');

if (task_9_10_condition) {

    // Определение месяца
    if (task_10_variable < 31) {
        task_10_month = 1;
    }
    else if (task_10_variable < 59) {
        task_10_month = 2;
    }
    else if (task_10_variable < 90) {
        task_10_month = 3;
    }
    else if (task_10_variable < 120) {
        task_10_month = 4;
    }
    else if (task_10_variable < 151) {
        task_10_month = 5;
    }
    else if (task_10_variable < 181) {
        task_10_month = 6;
    }
    else if (task_10_variable < 212) {
        task_10_month = 7;
    }
    else if (task_10_variable < 243) {
        task_10_month = 8;
    }
    else if (task_10_variable < 273) {
        task_10_month = 9;
    }
    else if (task_10_variable < 304) {
        task_10_month = 10;
    }
    else if (task_10_variable < 334) {
        task_10_month = 11;
    }
    else {
        task_10_month = 12;
    }

    //Определение поры года
    switch (task_10_month) {
        case 1:
        case 2:
        case 12:
            task_10_season = 'Зима';
            break;
        case 3:
        case 4:
        case 5:
            task_10_season = 'Весна';
            break;
        case 6:
        case 7:
        case 8:
            task_10_season = 'Лето';
            break;
        default:
            task_10_season = 'Осень';
    }

    console.log(`Месяц: ${task_10_month}`);
    console.log(`Пора года: ${task_10_season}`);

}
else {
    console.log('Ввод некорректен.');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

