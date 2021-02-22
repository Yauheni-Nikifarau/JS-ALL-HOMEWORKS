////////////////////////////////////////////////////////////////////////////////////////////
// Задание 1 - Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

document.write('<div class="task"> <h2 class="task-title">Задание 1</h2> <p class="task-description">Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.</p> <p>');

let task_1_Array = [1,2,3,4,5];

document.write('Ответ:')

for (let i = 0; i < task_1_Array.length; i++) {
    document.write(' '+task_1_Array[i]);
}

document.write('</p></div>');


////////////////////////////////////////////////////////////////////////////////////////////
// Задание 2 - Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

document.write('<div class="task"> <h2 class="task-title">Задание 2</h2> <p class="task-description">Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.</p> <p>');

let task_2_Array = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

document.write('Ответ:')

for (let i = 0; i < task_2_Array.length; i++) {
    if (task_2_Array[i] > -10 && task_2_Array[i] < -3) document.write(' '+task_2_Array[i]);
}

document.write('</p></div>');


////////////////////////////////////////////////////////////////////////////////////////////
// Задание 3 - Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.

document.write('<div class="task"> <h2 class="task-title">Задание 3</h2> <p class="task-description">Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.</p> <p>');

let task_3_Array_while = [],
    task_3_Array_for = [],
    task_3_Array_sum = 0,
    task_3_Array_start = 23;

while (task_3_Array_start <= 57) {
    task_3_Array_while.push(task_3_Array_start);
    task_3_Array_start += 1;
}

for (let i = 23; i <= 57; i++) task_3_Array_for[task_3_Array_for.length] = i;

for (let i = 0; i < task_3_Array_for.length; i++) task_3_Array_sum += task_3_Array_for[i];

document.write(`Массив через While: ${task_3_Array_while}.<br />`);
document.write(`Массив через for: ${task_3_Array_for}.<br />`);
document.write(`Сумма элементов массива: ${task_3_Array_sum}.`);

document.write('</p></div>');


////////////////////////////////////////////////////////////////////////////////////////////
// Задание 4 - Дан массив c числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

document.write('<div class="task"> <h2 class="task-title">Задание 4</h2> <p class="task-description">Дан массив c числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.</p> <p>');

let task_4_Array = ['10', '20', '30', '50', '235', '3000'];

document.write('Ответ:')

for (let i = 0; i < task_4_Array.length; i++) {
    if (task_4_Array[i][0] == '1' || task_4_Array[i][0] == '2' || task_4_Array[i][0] == '5') {
        document.write(' '+task_4_Array[i]);
    }   
}

document.write('</p></div>');


////////////////////////////////////////////////////////////////////////////////////////////
// Задание 5 - Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

document.write('<div class="task"> <h2 class="task-title">Задание 5</h2> <p class="task-description">Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.</p> <p>');

let task_5_Array = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

document.write('Ответ:')

for (let i = 0; i < task_5_Array.length; i++) {
    if (task_5_Array[i] == 'СБ' || task_5_Array[i] == 'ВС') {
        document.write(` <span class="bold">${task_5_Array[i]}</span>`);
    }
    else {
        document.write(' '+task_5_Array[i]);
    }
}

document.write('</p></div>');

////////////////////////////////////////////////////////////////////////////////////////////
// Задание 6 - Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

document.write('<div class="task"> <h2 class="task-title">Задание 6</h2> <p class="task-description">Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length.</p> <p>');

let task_6_Array = [1,5,3,7,8,9,8,4,6,4,6,5,8,2,8];

document.write('Созданный массив: ' + task_6_Array + '.<br />');

task_6_Array[task_6_Array.length] = 'New Element';

document.write('Обновленный массив: ' + task_6_Array + '.<br />');

document.write('Последний элемент массива: ' + task_6_Array[task_6_Array.length - 1] + '.');


document.write('</p></div>');


////////////////////////////////////////////////////////////////////////////////////////////
// Задание 7 - Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

document.write('<div class="task"> <h2 class="task-title">Задание 7</h2> <p class="task-description">Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тех пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.</p> <p>');

let task_7_Array = [];

while (true) {
    let newNumber = prompt('Введите числовое значение для добавления в массив для последующей сортировки массива. (Чтобы закончить введите пустое значение)');
    if (newNumber == '') break;
    newNumber = newNumber.trim();
    if (isNaN(Number(newNumber)) || newNumber == '') {
        alert('Ввод некорректен');
    }
    else {
        task_7_Array.push(Number(newNumber));
    }
}

document.write('Ваш массив: ' + task_7_Array + '.<br />');

task_7_Array.sort(function(a,b) {
    return a - b;
})

document.write('Ваш отсортированный массив: ' + task_7_Array + '.');

document.write('</p></div>');


////////////////////////////////////////////////////////////////////////////////////////////
// Задание 8 - Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

document.write('<div class="task"> <h2 class="task-title">Задание 8</h2> <p class="task-description">Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.</p> <p>');

let task_8_Array = [12, false, 'Текст', 4, 2, -5, 0];

let task_8_iteration = 1;

document.write('Обратная запись через While:');

while (task_8_Array.length - task_8_iteration >= 0) {
    document.write(' ' + task_8_Array[task_8_Array.length - task_8_iteration] + ',');
    task_8_iteration += 1;
}

document.write('<br />Обратная запись через reverse: ' + task_8_Array.reverse());


document.write('</p></div>');

////////////////////////////////////////////////////////////////////////////////////////////
// Задание 9 - Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

document.write('<div class="task"> <h2 class="task-title">Задание 9</h2> <p class="task-description">Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].</p> <p>');

let task_9_Array = [5, 9, 21, , , 9, 78, , , , 6],
    task_9_num = 0;

for (let i = 0; i < task_9_Array.length; i++) {
    if (task_9_Array[i] == undefined) task_9_num += 1; 
}

document.write('Количество пустых значений в массиве: ' + task_9_num);

document.write('</p></div>');


////////////////////////////////////////////////////////////////////////////////////////////
// Задание 10 - Найдите сумму элементов массива между двумя нулями (первым и последним нулями
// в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
// более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
// [1,8,0,13,76,8,7,0,22,0,2,3,2].

document.write('<div class="task"> <h2 class="task-title">Задание 10</h2> <p class="task-description">Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].</p> <p>');

let task_10_Array_1 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
    task_10_Array_2 = [1,8,0,13,76,8,7,0,22,0,2,3,2],
    task_10_start,
    task_10_end,
    task_10_sum = 0;


    document.write('Сумма элементов между двумя нулями в массиве 1: ')

    task_10_start = task_10_Array_1.indexOf(0);
    task_10_end = task_10_Array_1.lastIndexOf(0);

    if (task_10_start == task_10_end) {
        document.write('0.<br />')
    }
    else {
        for(let i = task_10_start + 1; i < task_10_end; i++) task_10_sum += task_10_Array_1[i];
    }

    document.write(task_10_sum + '.<br />');

    task_10_sum = 0

    document.write('Сумма элементов между двумя нулями в массиве 2: ')

    task_10_start = task_10_Array_2.indexOf(0);
    task_10_end = task_10_Array_2.lastIndexOf(0);

    if (task_10_start == task_10_end) {
        document.write('0.<br />')
    }
    else {
        for(let i = task_10_start + 1; i < task_10_end; i++) task_10_sum += task_10_Array_2[i];
    }

    document.write(task_10_sum + '.<br />');
    

document.write('</p></div>');


////////////////////////////////////////////////////////////////////////////////////////////
// Задание 11 - Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь.

document.write('<div class="task"> <h2 class="task-title">Задание 11</h2> <p class="task-description">Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь.</p> <p class="center">');

let heigth,
    basisLength;


while (true) {
    heigth = prompt('Введите высоту треугольника.(Больше нуля)', 15);
    heigth = heigth.trim();
    if (heigth == '') continue;
    heigth = Number(heigth);
    if (heigth > 0 && Number.isInteger(heigth)) break;                                                  
}

basisLength = 2 * heigth - 1;

for(let level = 1; level <= heigth; level += 1) {

    let num_of_chars = 2 * level - 1,
        num_of_spaces = (basisLength - num_of_chars) / 2,
        spacesArray = new Array(num_of_spaces),
        charsArray = new Array(num_of_chars),
        levelArray;

    for (let i = 0; i < num_of_spaces; i++) spacesArray[i] = ' ';

    for (let i = 0; i < num_of_chars; i++) charsArray[i] = '^';

    levelArray = spacesArray.concat(charsArray,spacesArray);
    
    console.log(levelArray.join(''));  
}

document.write('</p></div>');


///////////////////////////////////////////////////////////////////////////////////////////////////////////
