// "use strict";

let money, 
    time;

// money = +prompt("Ваш бюджет на месяц?", '');
// console.log(money);
// time = prompt('Введите дату в формате YYYY-MM-DD', ''); 
// console.log(time);
// let question1 = prompt('Введите обязательную статью расходов в этом месяце', ''); 
// let question2 = prompt('Во сколько обойдется?', ''); 

let obj = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false
};

for(let i = 0; i < 2;){
    let question1 = prompt('Введите обязательную статью расходов в этом месяце', ''); 
    let question2 = prompt('Во сколько обойдется?', '');
    
    if( (typeof(question1)) ==='string' 
        && (typeof(question1)) != null 
        && (typeof(question2)) != null 
        && question1 != '' 
        && question2 != '' 
        && question1.length < 50 ){
            obj.expenses[question1] = question2;
            i++;
        }
}
// let i = 0;
// do {
//     let question1 = prompt('Введите обязательную статью расходов в этом месяце', ''); 
//     let question2 = prompt('Во сколько обойдется?', '');
    
//     if( (typeof(question1)) ==='string' 
//         && (typeof(question1)) != null 
//         && (typeof(question2)) != null 
//         && question1 != '' 
//         && question2 != '' 
//         && question1.length < 50 ){
//             obj.expenses[question1] = question2;
//             i++;
//         }
// }
// while(i < 2);

// let i = 0;

// while(i < 2) {
//     let question1 = prompt('Введите обязательную статью расходов в этом месяце', ''); 
//     let question2 = prompt('Во сколько обойдется?', '');
    
//     if( (typeof(question1)) ==='string' 
//         && (typeof(question1)) != null 
//         && (typeof(question2)) != null 
//         && question1 != '' 
//         && question2 != '' 
//         && question1.length < 50 ){
//             obj.expenses[question1] = question2;
//             i++;
//         }
// }
alert("пользователя бюджет на 1 день = " + money/30);