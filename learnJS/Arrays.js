/*Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл*/

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";

alert( styles.shift() );
styles.unshift("Рэп", "Регги");


/*Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

let arr = [];

function sumInput() {
  let value = 0;
  
  while (isFinite(value) && value !== '' && value !== null)
  {value = prompt('Введите число', 0);
  
  if (isFinite(value) && value !== '' && value !== null)
  {arr.push(+value);} 
  }
  
  let sum = 0;
  for (value of arr) {
    sum = sum + (+value);
  }
  
  console.log(sum);
}
sumInput();