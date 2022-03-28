/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
  let sumNumbers = 0;
  for (i = start; i <= end; i++){
    if (i % 2 == 0){
      sumNumbers += i;
    }
  }
  return sumNumbers;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
  let numberOperation = 0;
  while (a > 0.1){
    console.log(a);
    a /= 2;
    numberOperation++;
  }
  return numberOperation;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
  let newMessage = "";
  do {
    if ((newMessage.length + 1) % 3 == 0){
      newMessage += '_';
      continue;
    }
    newMessage += message[newMessage.length];
  } while (message.length != newMessage.length);
  return newMessage
}
