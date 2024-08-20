// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s = ['hello world', 'lorem ipsum', 'javascript is cool']
for (const item of s) {
    console.log(item.length)
}

console.log('*************************');


// /#8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const item of s1) {
    console.log(item.toUpperCase());
}


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let s2 = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const item of s2) {
    console.log(item.toLowerCase());
}


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let cleanedStr = str.trim();

console.log(cleanedStr);


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
function stringToArray(s) {
    if (!s) {
        return []; // Якщо значення str є falsy (порожній рядок, null, undefined і т.д.), повертаємо порожній масив
    }

    return s.split([' ']);
}

console.log(stringToArray('Ревуть воли як ясла повні'));


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let stringNumbers = numbers.map(number => number.toString());

console.log(stringNumbers);


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
}

let nums = [11, 21, 3];

console.log(sortNums(nums, 'ascending')); // [3, 11, 21]
console.log(sortNums(nums, 'descending')); // [21, 11, 3]



// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let result = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration) // Спочатку сортуємо за спаданням
    .filter(course => course.monthDuration > 5) // Потім фільтруємо курси з тривалістю більше 5 місяців
    .map((course, index) => { // І перетворюємо кожен елемент на потрібний формат
        return {
            id: index + 1,
            title: course.title,
            monthDuration: course.monthDuration
        };
    });

console.log(result);



//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
let deck = [];

// Визначаємо масті, значення і кольори карт
const suits = [
    { cardSuit: 'spade', color: 'black' },
    { cardSuit: 'diamond', color: 'red' },
    { cardSuit: 'heart', color: 'red' },
    { cardSuit: 'clubs', color: 'black' }
];

const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

// Генеруємо колоду карт
for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit.cardSuit,
            value: value,
            color: suit.color
        });
    }
}

// Знаходимо пікового туза
let spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

// Знаходимо всі шістки
let sixes = deck.filter(card => card.value === '6');
console.log(sixes);

// Знаходимо всі червоні карти
let redCards = deck.filter(card => card.color === 'red');
console.log(redCards);

// Знаходимо всі буби
let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);

// Знаходимо всі трефи від 9 і більше
let clubsAboveNine = deck.filter(card => card.cardSuit === 'clubs' && (values.indexOf(card.value) >= values.indexOf('9')));
console.log(clubsAboveNine);




//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker