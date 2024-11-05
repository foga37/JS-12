// Даний масив: [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20 11, [11, [true]]. Застосувати наступні методи:
// reverse, flat, includes, join, map, reduce
console.log(' Даний масив: [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20 11, [11, [true]]. Застосувати наступні методи: reverse, flat, includes, join, map, reduce');
const arr = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 11, 20, [11, true]];
console.log(arr);
//reverst
let a1 = arr.reverse();
console.log('reverse,', a1);                          // перевертає масив (ліво-право)
//flat
let a2 = arr.flat(Infinity);
console.log('flat, infinity,', a2);                   // вирівнює масив (змінює багаторівневий масив на однорівневий)
//incudes
let a3 = arr.includes(55);
console.log('includes, 55,', a3);                     // перевіряє чи є елемент в масиві
//join
let a4 = arr.join(', ')
console.log('join');                                  // повертає з масива в стрічку 
console.log(arr, a4);
//map
let a5 = arr.map(el => {                              // замінює елемент на вказаний в return
    if(el > 10) {
        return 10;
    } else {
        return el;
    }
} )
console.log('map, el > 10,', a5);
//reduse
let sum = arr.flat(Infinity).reduce((prev, curr) => {     // на прикладі суми чисел масиву     (обчислює масив)
    return prev + curr
}, 0)
console.log('reduce сума масиву,', sum);
//Даний рядок: 'Hello world and my dear friend ...' Застосувати наступні методи:
// split, trim, toLocaleUpperCase, toLocaleLowerCase, charAt, charCodeAt, includes,
// concat, search, startsWith, endsWith, indexOf, lastIndexOf, replace
console.log('Даний рядок: Hello world and my dear friend ... Застосувати наступні методи: split, trim, toLocaleUpperCase, toLocaleLowerCase, charAt, charCodeAt, includes, concat, search, startsWith, endsWith, indexOf, lastIndexOf, replace');
//split
let a6 = 'Hello world and my dear friend ...';
const arr2 = a6.split();                                         // робить з стрічки(рядок) в масив
console.log('split, вивод з рядка в масив,', a6, arr2);
//trim
console.log('trim,', a6.trim());                                // обрізання пробілів по боках (ліво,право)
//toLocaleUpperCase
console.log('toLocaleUpperCase,', a6.toLocaleUpperCase());      // маленькі літери зводить до великих
//toLocaleLowerCase
console.log('toLocaleLowerCase,', a6.toLocaleLowerCase());      // великі літери зводить до маленьких 
//charAt
let c4 = a6.charAt(4);
console.log('carAt,(4)', c4);                                   // показує літеру на якому вона індексі
//charCodeaAt
let c5 = a6.charCodeAt(4);
console.log('charCodeAt(4),', c5);                              // показує літеру на якому вона стоіть в таблиці символів
//includes
let c = a6.includes('ll');
console.log('includes, (ll)', c);                               //  перевіряє чи є елемент в масиві
//concat
let a9 = a6.concat('add concat text');
console.log('concat,', a9);                                     // обьєднує масиви (або додає тексту до масиву)
//search
let c6 = a6.search('my');
console.log('search, (my)', c6);                                // шукає елемент як назвали (пошук)
//startsWith
let c2 = a6.startsWith('hi');                                   // перевірка починається рядок з заданого елемента
console.log('startWith, (hi)', c2);
//endsWith
let c3 = a6.endsWith('friend ...');                            // перевірка закінчення рядка 
console.log('endsWith, (friend ...)', c3);
//indexOf
let a7 = a6.indexOf('o');                                      // ззнаходить перший індекс по значеню першого елементу
console.log('indexOf, (o),', a7);
//lastIndexOf
let a8 = a6.lastIndexOf('o');                                  // знаходить останній індекс по значенню останнього елементу
console.log('lasstIndexOf, (o),', a8);                           
//replace
let c1 = a6.replace('Hello', 'hi replace');                    // потворює вказаний текст
console.log('replace,', c1);
//Застосувати інші методи які були використані в лекції (методи стрічок та методи об'єктів)
console.log('Застосувати інші методи які були використані в лекції (методи стрічок та методи обєктів)');
//to string
const arr3 = [2, 5, 6, 11, 3, 1, 'hi', 'login', 'red', true, 51, 32];
console.log(arr3);
let b = arr3.toString();
console.log('to string');                                      // приводить масив до стрічки
console.log(arr3, b);
//toExponential
let b1 = 24343.23;
console.log(b1);
console.log('toExponential,', b1.toExponential(2));             // скорочує число (е+)
// valueOf
console.log('valueOf,', b1.valueOf());                          // повертає значення самого себе
// toPrecision
console.log('toPrecision,', b1.toPrecision(4));                 // приведення числа до відсотка (%) (заокругляє)
//toFixed
console.log('toFixed,', b1.toFixed(2));                         // подібний toPrecision приведення до відсотка, від дробової частини (заокруглює)
//padStart
let bb = a6.padStart(2, 'padStart');                               // передає текст скільки разів його прописати (з початку індекса)
console.log('padStart,', bb);
//padEnd
let bb1 = a6.padEnd(40, 'padEnd');                               // передає текст скільки разів його прописати (з кінцевого індекса)
console.log('padEnd,', bb1);
//repeat
console.log('repeat,', a6.repeat(2));                           // повторює стрічку 
const people = {
    name: 'Nname',
    age: 30,
    work: 'IT',
    time: 12,
    technology: true
}
const aa = Object.values(people)                    // значення обьєкту
console.log('values,', aa);
const aa1 = Object.keys(people)                     // ключі обьєкту
console.log('keys,', aa1);
const aa2 = Object.entries(people)                  // значення + ключі обьєкту
console.log('entries,', aa2);
const w = [[21, false], ['hello', 72], ['ai', '+', 'b']]         
const w1 = Object.fromEntries(w)                    // масив до обьекту
console.log('fromEntries,', w1);
console.log(Object.keys(w1));                      // ключ обьєкту тільки рядок
const people2 = Object.freeze(
    {
    name: 'Nname',
    age: 30,
    work: 'IT',
    time: 12,
    technology: true
})
people.age = 25;
delete people.time
people.technology = true
console.log(people);

people2.age = 25;
delete people2.time
people2.technology = true
console.log('freeze,', people2);                 // заморозити обьект, не можна змінювати

const people3 = Object.seal(
    {
        name: 'Nname',
        age: 30,
        work: 'IT',
        time: 12,
        technology: true
    }
)
people3.age = 28;
delete people3.time
people3.technology = false
console.log('seal,', people3);                  // дозволяє редагувати, але не видаляти і добовляти