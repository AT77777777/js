//Arrays and objects
//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let myArray = [1, "hello", true, null, undefined, {name: "Object"}, [1, 2, 3], 42.42, "world", false];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log(myArray[6]);
console.log(myArray[7]);
console.log(myArray[8]);
console.log(myArray[9]);


//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "To Kill a Mockingbird",
    pageCount: 281,
    genre: "Fiction"
};

let book2 = {
    title: "1984",
    pageCount: 328,
    genre: "Dystopian"
};

let book3 = {
    title: "The Great Gatsby",
    pageCount: 180,
    genre: "Classic"
};

console.log(book1, book2, book3)


//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: "The Road",
    pageCount: 287,
    genre: "Post-apocalyptic",
    authors: [
        { name: "Cormac McCarthy", age: 89 }
    ]
};

let book5 = {
    title: "Good Omens",
    pageCount: 432,
    genre: "Fantasy",
    authors: [
        { name: "Neil Gaiman", age: 63 },
        { name: "Terry Pratchett", age: 66 } // Terry Pratchett помер у 2015 році
    ]
};

let book6 = {
    title: "Sapiens: A Brief History of Humankind",
    pageCount: 498,
    genre: "Non-fiction",
    authors: [
        { name: "Yuval Noah Harari", age: 48 }
    ]
};

console.log(book4, book5, book6);


//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    { name: "John Doe", username: "johndoe", password: "pass1234" },
    { name: "Jane Smith", username: "janesmith", password: "securePass" },
    { name: "Alice Johnson", username: "alicej", password: "alicePwd" },
    { name: "Bob Brown", username: "bobbrown", password: "bobSecret" },
    { name: "Charlie White", username: "charliew", password: "charlie123" },
    { name: "Diana Green", username: "dianag", password: "dianaPass" },
    { name: "Evan Black", username: "evanb", password: "evanPwd321" },
    { name: "Fiona Blue", username: "fionab", password: "fionaSecret" },
    { name: "George Gray", username: "georgeg", password: "george123" },
    { name: "Hannah Red", username: "hannah", password: "hannahPass" }
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


//описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temperatures = [
    {
        day: "Monday",
        morning: 15,
        afternoon: 22,
        evening: 18
    },
    {
        day: "Tuesday",
        morning: 16,
        afternoon: 24,
        evening: 20
    },
    {
        day: "Wednesday",
        morning: 14,
        afternoon: 21,
        evening: 17
    },
    {
        day: "Thursday",
        morning: 17,
        afternoon: 25,
        evening: 19
    },
    {
        day: "Friday",
        morning: 13,
        afternoon: 20,
        evening: 16
    },
    {
        day: "Saturday",
        morning: 18,
        afternoon: 26,
        evening: 22
    },
    {
        day: "Sunday",
        morning: 15,
        afternoon: 23,
        evening: 19
    }
];

console.log(temperatures[0]);
console.log(temperatures[1]);
console.log(temperatures[2]);
console.log(temperatures[3]);
console.log(temperatures[4]);
console.log(temperatures[5]);
console.log(temperatures[6]);


//logical branching
//Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x;

x = 1; // Перевірка при x = 1
if (x !== 0) {
    console.log('True');
} else {
    console.log('False');
}

x = 0; // Перевірка при x = 0
if (x !== 0) {
    console.log('True');
} else {
    console.log('False');
}

x = -3; // Перевірка при x = -3
if (x !== 0) {
    console.log('True');
} else {
    console.log('False');
}


//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 45; // Задаємо значення від 0 до 59

if (time >= 0 && time < 15) {
    console.log('First quarter of an hour');
} else if (time >= 15 && time < 30) {
    console.log('Second quarter of an hour');
} else if (time >= 30 && time < 45) {
    console.log('Third quarter of an hour');
} else if (time >= 45 && time < 60) {
    console.log('Fourth quarter of an hour');
} else {
    console.log('Incorrect time value');
}


//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 18; // Задаємо значення від 1 до 31

if (day >= 1 && day <= 10) {
    console.log('The first decade');
} else if (day >= 11 && day <= 20) {
    console.log('The second decade');
} else if (day >= 21 && day <= 31) {
    console.log('The third decade');
} else {
    console.log('Incorrect day value');
}


//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber = +prompt('Enter Day Number'); // Задайте порядковий номер дня тижня (від 1 до 7)

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Incorrect Day Number");
}


//Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let num1 = 10; // Задаємо перше число
let num2 = 10; // Задаємо друге число

if (num1 > num2) {
    console.log("Max Number: " + num1);
} else if (num2 > num1) {
    console.log("Max Number: " + num2);
} else {
    console.log("Numbers are equal");
}
//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x1 = null;
x1 = x1 || "default";
console.log(x1);

//з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Перевірка кожного елемента окремо
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Super");
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Super");
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Super");
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Super");
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Super");
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Super");
}

