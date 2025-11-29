
let language = 'it';
switch(language) {
  case 'ru':
    console.log('Привет');
    break;
  case 'en':
    console.log('hello');
    break;
  case 'de':
    console.log('Gutten tag');
    break;
    default:
      console.log('Здарова');
      
        
    
}



































// const width = 10;
// const height = 5;
// const space = width * height;
// console.log(space);
// const newWidth = width - 4;
// console.log(newWidth);
// const newWidth2 = width + 4;
// console.log(newWidth2);
// const newWidth3 = width / 2;
// console.log(newWidth3);

// const city = 'Moskov';
// const street = 'Lenina';
// console.log(city + ', ' + street + ' ' + 5);

// // Операторы присваивания

// let age = 18 + 5;
// age += 2; // age = age + 2
// age -= 3;
// age *= 2;
// age++;
// age--;

// console.log(age);

// // Операторы сравнения

// const Vasya = 20;
// console.log(age > Vasya);
// console.log(age >= Vasya);
// console.log(age < Vasya);
// console.log(age <= Vasya);
// console.log(age == Vasya);
// console.log(age === Vasya);

// const isSuited = 100 - 10 > 90 - 5;
// console.log(isSuited);

// let b;
// let c;
// c = b = 100 + 50;
// console.log(c);
// console.log(b);

// // Типы данных

// let d = 5;
// let g = 5.6;
// console.log(typeof d);
// console.log(typeof g);

// d = 'string';
// console.log(typeof d);
// let isAdmin = d > 10;
// console.log(typeof isAdmin);

// let n;
// n = 5;
// console.log(typeof n);

// let m = null;
// console.log(typeof m);

// // Задача

// // ДАнные
// const payHour = 80;
// const hourDay = 5;
// const dayWeek = 5;
// const workingDay = 9;
// const workingHours = 40;

// console.log(
//   'Смогу ли я выполнить работу?' + ' ' + (workingHours < workingDay * hourDay)
// );
// console.log('Я смогу заработать' + ' ' + (workingHours * payHour + '$'));

// // Шаблонные строки

// const projectName = 'Сайт магазина';
// const price = 2000;
// const author = 'Вася Пупкин';
// // Конкатенация
// const template =
//   author +
//   ' ' +
//   'заказал' +
//   ' ' +
//   projectName +
//   ' ' +
//   'по цене' +
//   ' ' +
//   price +
//   ' ' +
//   'руб.';
// console.log(template);
// // Шаблонная строка
// const template2 = `${author} заказал ${projectName} по цене ${price}$`;
// console.log(template2);
// // Конкатенация
// const templated3 = 'Проект \n' + 'Цена' + price + '$';
// console.log(templated3);

// // Шаблонная строка

// const templated4 = `Проект
// Цена: ${price}$`;
// console.log(templated4);

// // ПРЕОБРАЗОВАНИЕ ТИПОВ

// let age1 = '5';
// console.log(Number(age1) + 10); //явное преобразование
// console.log(age1 - 2); // преобразование делает javascript
// console.log(age1 * 2); // преобразование делает javascript
// console.log(age1 / 2);

// const userName = 'Вася';
// console.log(Number(userName)); // будет NaN потому что  userName - это строка а не число
// console.log(typeof NaN);
// console.log(String(4) + 7); //будет ответ 47, как конкатенация
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(-1)); // true
// //Все числа которые не являются 0 будет true
// console.log(Boolean('hghgh')); // true
// console.log(Boolean('')); // false
// // console.log(Boolean('') + 10);// пустую строку преобразовали в булевый тип, булевый тип пустой строки - это false, а false - это ноль. В итоге 0 + 10 = 10
// console.log(true + 2); // Ответ: 3, потому что true - это 1

// const a = 2 + '10';
// console.log(a - 10); // 200
// // 2 - это число, '10' - строка 10. При знаке плюс происдит кокатенация соответственно получится строка '210'.
// //  Далее при знаке минус, происходит преобразование строки в число, поэтому получится ответ 200

// console.log(Boolean(0)); //false
// console.log(Boolean('')); //false
// console.log(Boolean(null)); //false
// console.log(Boolean(NaN)); //false

// console.log(Number('10-1'));



// let str1 = '25';
// let str2 = '15';

// let str3 = Number(str1) + Number(str2);
// console.log(str3);



// let r = 5;
// let p = 3.14159;
// let area = p*(r * r);
// console.log(area);


// let price1 = 100;
// let quantity = 3;
// let discount = 10;

// let total = price1 * quantity;
// let total2 = discount / 100;
// let final = total - total2 * total
// console.log(final);



// //////// УПРАВЛЕНИЕ ПОТОКОМ   IF ELSE

// const money = 10;


// if (money > 50) {
//   console.log('Может купить наш продукт');
  
// }else if(money > 5 ) {
//   console.log('Куплен мини продукт');

// } else {
// console.log('Не хвататет баланса');
// }
//  console.log('Итог');


 


//  const deposit = 15000;
//  const rate = 0.07;
//  const depositLength = 24;
//  const houseCost = 13500;

//  const res = deposit * (1 + rate / 12) ** 24;

//  if (res > houseCost) {
//   console.log(`Мы накопили: ${res}.  Можем купить. Остаток ${res - houseCost}`);
  
//  }else {
//   console.log(`Мы накопили: ${res} КУпить не сможем`);
  
//  }

 
// const secretNumber = '7';

// if (Number(secretNumber) === 7) {
//   console.log('Угадал  строго');
  
// }

// const q = prompt('Введите число');
// if (q === 7 ) {
//   console.log('!');
  
// }





// let productName = 'Книга';
// let producPrice = 100;
// let productQuantity = 3;
// let resultCost = producPrice * productQuantity;
// console.log(`Я купил ${productName} ${productQuantity} шт. по ${producPrice} рублей. Всего было потрачено ${resultCost} рублей. `);



// console.log(typeof'Hello');    // Строка
// console.log(typeof 10);        // число 
// console.log(typeof {});        // обьект
// console.log(typeof null);      // обьект
// console.log(typeof undefined); // undefined
// console.log(typeof true);      // булевый тип
// console.log(typeof []);        // обьект
// console.log(typeof (() => {})); // функция


// console.log( 10 == 10 );           // true
// console.log( 10 != 10 );           // false
// console.log( 12 == 'привет' );     // false
// console.log( 10 < 11 );            // true
// console.log( 12 > 20 );            // false
// console.log( true && true );       // true
// console.log( true && false );      // false
// console.log( false && true);       // false
// console.log( false || true );      // true
// console.log( true || false );      // true
// console.log( true || true );       // true
// console.log( 10 <= 10);            // true
// console.log( 18 <= 20);            // true
// console.log( 50 >= 50);            // true
// console.log( 51 >= 50);            // true
// console.log( {} === {});           // false
// console.log( {} == {});            // false



// const role = 'ceo';

// switch (role) {
//   case 'manager':           // role === manager строгое равенство
//     console.log('Менеджер');
//     break;
//   case 'admin':             // role === admin   строгое равенство
//     console.log('Админ');
//     break;
//   case 'ceo':               // role === seo строгое равенство
//     console.log('CEO');
//     break;
//   default:
//     console.log('Мы тебя не знаем');

// }

//  switch(role) {
//       case 'manager':
//       case 'admin':
//         console.log('Не руководитель');
//         break;
//       case 'ceo':
//         console.log('Руководитель');
//         break;
//       default:
//         console.log('Мы тебя не знаем');
          
          
          
    // }


// const num = 1;

// switch(true) {
//   case num > 0:     // true === num > 0
//     console.log('Положительный');
//     break;
//   case num < 0:
//     console.log('Отрицательный');
//     break;
//   default: console.log('Ноль');
    
      
// }



// const bmwX3Price = 10000;
// const budget = 20000;

// let message;
// if(budget > bmwX3Price) {
//   message = 'BMW';
// }else{
//   message = 'велосипед';
// }

// console.log(`Я хочу купть ${budget > bmwX3Price ? 'BMW' : 'Ведлосипед'}`);




// const res = prompt('Сколько будет 7+ или - 15');
// switch(true) {
//   case res === 'Я не робот':
//   case Number(res) === 22:
//   case Number(res) === -8:
//     console.log('Успех');
//     break;
//   default:
//     console.log('Вы робот');
      
    
// }

// if (res === 'Я не робот') {
//   console.log('Успех');
  
// }else {
//   const resNum = Number(res);
//   switch(resNum) {
//     case 22:
//     case -8:
//       console.log('Успех');
//     break;
//     default:
//       console.log('Вы робот!');
        
        
//   }
// }


// const res = prompt('Сколько будет 7 + 15 или 7 - 15');
// const num1 = Number(res);

// switch (true) {
//   case res === 'Я не робот':
//   case num === 22:
//   case num === -8:
//     console.log('Успех');
//     break;
//   default:
//     console.log('Вы робот');
      
    
        
// }
            //ЗАДАЧИ НА СРАВНЕНИЯ LET И VAR 

//    console.log(a);
//    var a = 10;// UNDEFINED
   
    
    
// console.log(b); // ОШИБКА
// let b = 10; 

// if(true) {
//   var y = 7;
// }

// console.log(y);



      


