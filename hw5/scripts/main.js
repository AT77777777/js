// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => {
    return a * b;
}

console.log(rectangleArea(5, 10));

console.log('*************************')


// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = r => {
    return Math.PI * r * r;
}

console.log(circleArea(5));

console.log('*************************')


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderSurfaceArea = (r, h) => {
    const baseArea = Math.PI * r * r; // Площа основи
    const sideArea = 2 * Math.PI * r * h; // Площа бокової поверхні
    return 2 * baseArea + sideArea; // Загальна площа поверхні
}

console.log(cylinderSurfaceArea(5, 10));

console.log('*************************')


// - створити функцію яка приймає масив та виводить кожен його елемент
let printArrayElements = array => {
    for (let element of array) {
        console.log(element);
    }
}

printArrayElements([1, 2, 3, 'hello', true, { name: 'Ivan', age: 21 }]);

console.log('*************************')



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraph = text => {
    document.write(`<p>${text}</p>`);
}

createParagraph('This is an example of text in a paragraph.');

document.write('<p>*************************</p>')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createList = text => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

createList('This is a list item.');

document.write('<p>*************************</p>')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createList1 = (text, liCount) => {
    document.write('<ul>');
    for (let i = 0; i < liCount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

createList1('This is a list item.', 5);

document.write('<p>*************************</p>')


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listFromPrimitivesArray = array => {
    document.write('<ul>');
    for (let element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}

let primitivesArray = [42, 'Hello', true, 'JavaScript', false, 3.14];
listFromPrimitivesArray(primitivesArray);

document.write('<p>*************************</p>')


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let displayObjects = objectsArray => {
    document.write('<div class="object-container">');

    for (let obj of objectsArray) {
        document.write('<div class="object-block">');
        document.write(`<p>ID: ${obj.id}</p>`);
        document.write(`<p>Name: ${obj.name}</p>`);
        document.write(`<p>Age: ${obj.age}</p>`);
        document.write('</div>');
    }

    document.write('</div>');
}

let objects = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 22 }
];

displayObjects(objects);



// - створити функцію яка повертає найменьше число з масиву
let findMinValue = array => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log(findMinValue([5, 2, 9, 1, 7]));

console.log('*************************')


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let total = 0;

    for (let number of arr) {
        total += number;
    }

    return total;
}

console.log(sum([1, 2, 10]));

console.log('*************************')


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, i1, i2) => {
    // Перевірка, чи індекси в межах масиву
    if (i1 < 0 || i1 >= arr.length || i2 < 0 || i2 >= arr.length) {
        console.error('Invalid indices');
        return;
    }

    // Міняємо місцями значення на вказаних індексах
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

let array = [11, 22, 33, 44];
swap(array, 0, 1);
console.log(array);

console.log('*************************')


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeRate = null;

    // Проходимо через масив currencyValues для знаходження відповідного курсу
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
        }
    }

    // Перевірка, чи знайдений курс
    if (exchangeRate === null) {
        console.error('Currency not found');
        return;
    }

    return sumUAH / exchangeRate;
}

const sumUAH = 10000;
const currencyValues = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
const exchangeCurrency = 'USD';

const exchangedAmount = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(exchangedAmount);