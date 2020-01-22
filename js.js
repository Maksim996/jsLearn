// "use strict";

let money, 
    time;

money = prompt("Ваш бюджет на месяц?", '');
console.log(money);
time = prompt('Введите дату в формате YYYY-MM-DD', ''); 
console.log(time);
let question1 = prompt('Введите обязательную статью расходов в этом месяце', ''); 
let question2 = prompt('Во сколько обойдется?', ''); 

let obj = {
    money: money,
    timeData: time,
    expenses: {
        question1: question2
    },
    optionalExpenses: {},
    income: {},
    savings: false
};
alert("пользователя бюджет на 1 день = " + money/30);