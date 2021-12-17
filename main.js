
new_name = prompt('Введите ваше имя');
console.log(new_name)
alert(`Your name: ${new_name}` );
let scores = 0;
let q1 = prompt("1.Как называется язык разметки? a) HTML b) CSS c) JavaScript");
if(q1 == 'a'){
    scores = scores + 1
}
let q2 = prompt("2.Как называется язык стилей? a) HTML b) CSS c) JavaScript");
if(q2 == 'b'){
    scores = scores + 1
}
let q3 = prompt("3.Какой из этих тегов используется для текста? a) abbr b) text c) p");
if(q3 == 'c'){
    scores = scores + 1
}
let q4 = prompt("4.Какой из этих тегов используется для вставки фото/картинок? a) img b) h3 c) body");
if(q4 == 'a'){
    scores = scores + 1
}
let q5 = prompt("5.Какой из этих тегов используется для гиперссылок? a) ul b) p c) a");
if(q5 == 'c'){
    scores = scores + 1
}
let q6 = prompt("6.Какой из этих тегов используется для того чтобы сделать жирный шрифт? a) i b) b c) big");
if(q6 == 'b'){
    scores = scores + 1
}
let q7 = prompt("7.Какие из этих тегов используется для списков? a) ol,ul b) b,i c) h1,h2");
if(q7 == 'a'){
    scores = scores + 1
}
let q8 = prompt("8.С помощью какого тега можно подключить стили? a) link b) a c) h1");
if(q8 == 'a'){
    scores = scores + 1
}
let q9 = prompt("9.Куда нужно писать тег для подключения стилей? a) a b) link c) head");
if(q9 == 'c'){
    scores = scores + 1
}
let q10 = prompt("10.Какое свойство CSS позволяет указать толщину рамки? a) border-width b) border-radius c) background-color");
if(q10 == 'a'){
    scores = scores + 1
}
let q11 = prompt("11.Как выбрать элемент с class = ''block''? a) #block b) block c) .block");
if(q11 == 'c'){
    scores = scores + 1
}
let q12 = prompt("12. Какое свойство CSS используется для изменения цвета текста элемента? a) font-weight b) color c) text-decoration");
if(q12 == 'b'){
    scores = scores + 1
}
let q13 = prompt("13. Какое свойство CSS используется для изменения фонового цвета ? a) background-size b) background c) background-color");
if(q13 == 'c'){
    scores = scores + 1
}
let q14 = prompt("14.Какое свойство CSS определяет размер текста? a) font-family b) font-size c) text");
if(q14 == 'b'){
    scores = scores + 1
}
let q15 = prompt("15.Как выбрать элемент с id = ''block'' ? a) #block b) .block c) /block");
if(q15 == 'a'){
    scores = scores + 1
}
alert(`${scores} -  результат`)
