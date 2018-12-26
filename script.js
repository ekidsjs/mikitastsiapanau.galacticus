function run() {
  const rightAnswers = ['2', '1', '3', '1', '3'];
  const userAnswers = [];
  let raiting = 0;
  let status = '';

  const name = prompt("введите своё имя:", "пользователь");
  const years = prompt("сколько вам лет:", '100');

  userAnswers[0] = prompt("луна это планета?\n1. да\n2. нет", '1');
  userAnswers[1] = prompt("из чего сотаит солнце? \n1. Из глаза\n2.Изо льда \n3. из ваты", '1');
  userAnswers[2] = prompt("какой по счёту марс от солнца?\n1. 1-й\n2. 3-й\n3. 4-й ", '1');
  userAnswers[3] = prompt("есть ли у урана кольца? \n1. да \n2. нет ", '1');
  userAnswers[4] = prompt("какая самая большая планета солнечнай системы? \n1. Земля \n2. луна \n3. юпитер", '1');

  if (rightAnswers[0] === userAnswers[0]) {
    raiting += 1;
  }
  if (rightAnswers[1] === userAnswers[1]) {
    raiting += 1;
  }
  if (rightAnswers[2] === userAnswers[2]) {
    raiting += 1;
  }
  if (rightAnswers[3] === userAnswers[3]) {
    raiting += 1;
  }
  if (rightAnswers[4] === userAnswers[4]) {
    raiting += 1;
  }
  if (raiting <= 2) {
    status = 'ты очень мало знаеш о космосе,тебе стоит читать больше книг.'
  } else if (raiting < 5) {
    status = 'ты довольно хорошо знаеш космос,прадолжай в токомже духе и ты станеш космическим рейнджером.'
  } else {
    status = 'ты знаеш о космосе практически всё,продолжай в том же духе,ты молодец!'
  }
  alert(`привет, ${name}! Тебе уже ${years} лет и ${status}`);
}