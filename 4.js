let templateLetter = `<label>\n
    <input id="letter__choose" class="letter__choose" type="checkbox">\n
    <div class="letter__mail-opened mail-opened">\n
    <div class="mail-opened__close2">×</div>\n
    <div class="mail-opened__text">Хоба!</div>\n
    </div>\n
    <input type="checkbox" class="letter__checkbox">\n
    <img class="letter__pic" alt="logo" src="https://yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg">\n
    <span class="letter__sender letter__unread">Команда Яндекс.Почты</span>\n
    <div class="letter__msg-mark letter__mark-unread"></div>\n
    <span class="letter__message letter__unread">Just a simple test`;
let time = `</span>\n <time class="letter__date-msg" datetime="2019-03-16">16 мар</time></label>\n`;

let testLetter = `<input type="checkbox" class="letter__checkbox">
    <img class="letter__pic" alt="logo"
    src="https://yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg">
    <span class="letter__sender letter__unread">Команда Яндекс.Почты</span>
    <div class="letter__msg-mark letter__mark-unread"></div>
    <span class="letter__message letter__unread">Как читать почту с
    мобильногоiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</span>
    <time class="letter__date-msg" datetime="2018-07-06">6 июл</time>`;

let months = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек"
];

let womenSenders = [
  "Астахова",
  "Ассоль",
  "Железнова",
  "Душечка",
  "Каренина",
  "Измайлова",
  "Иванова",
  "Мармеладова",
  "Эсмиральда",
  "Кармен",
  "Бовари"
];

let menSenders = [
  "Незнайка",
  "Иван",
  "Тёркин",
  "Швейк",
  "Тимур",
  "Шариков",
  "Мелехов",
  "Бендер",
  "Епанчин",
  "Левша",
  "Мышкин",
  "Раскольников",
  "Опискин",
  "Головлев",
  "Печорин",
  "Чичиков",
  "Ревизор",
  "Хлестаков",
  "Бульба",
  "Онегин",
  "Чацкий",
  "Митрофанушка",
  "Мегрэ",
  "Брюньон",
  "Готье",
  "Квазимодо",
  "Паганель",
  "Тартарен",
  "Монте-Кристо",
  "Фигаро",
  "Базаров",
  "Обломов",
  "Прутков"
];

let womenMails = [
  "«Любить Вас сильнее» мне трудно – но я нежно обнимаю Вас. Письмо Ваше, полученное нынче утром, наполнено такой печалью, что тронуло меня до ГЛУБИНЫ души. Мы расстались в тот момент, когда многие вещи готовы уже были сорваться с наших губ. Все двери между нами еще не открыты. Вы внушаете мне великое уважение, и я не осмеливаюсь задать Вам главный вопрос.",
  "Вы так красивы, что Вам необходимо делать паспортные фотографии в полный рост",
  "Я чувствую, что ты настоящий друг моей души и дороже для меня, чем сама жизнь; я то же самое для тебя. Никто не сможет сравниться с тобой.",
  "Ничто не может доставить мне большего удовольствия, чем весточка от Вас. Перспектива жить два месяца, ничего о Вас не зная, для меня совершенно невыносима. Я хочу сказать, Ваша маленькая записка была более чем желанна.",
  "Надеюсь, Вы надышитесь свежим воздухом и вернетесь к нам в октябре. Что до меня, то я никуда не поеду. Останусь в деревне, здесь я провожу целый день перед открытым окном или в саду.",
  "Мы обещали друг другу – не так ли? – быть, по крайней мере, близкими друзьями. Только бы Вы не передумали! Ведь нет таких обещаний, которые связывают навеки; наши чувства не подчиняются усилию воли. Как было бы прекрасно (об этом я не смею даже думать) вместе пройти по жизни, мечтая: Ваша патриотическая мечта, наша гуманитарная мечта и наша научная мечта.",
  "Разговор с твоим отцом был ужасен… Такая холодность, такая неискренность, такая изощренная хитрость, такое упрямство – у него новая манера уничтожения, он наносит тебе удар в сердце, вонзая нож в грудь по самую рукоятку…",
  "Пока я не чувствую, что ты «к чему – то идешь», мне тяжело с тобой, потому что невыносимо видеть, как глупо и пошло ты тратишь время",
  "Не беспокойся о потерях. Если это правильно, это происходит. Главное, не спешить. Ничто хорошее не исчезает.",
  "Мы будем рады встретиться со Сьюзен, мы с удовольствием примем ее. Элейн обо всем позаботится, это ее вотчина. Она тоже знает многое о любви и, может быть, она поможет тебе лучше, чем я.",
  "Если любишь кого-то — нет ничего страшного в том, чтобы сказать об этом. Но только ты должен помнить, что некоторые люди очень стеснительны, и иногда нужно с этим считаться.",
  "Память подобна мускулам твоих ног. Если ты ее перестанешь упражнять, то она станет дряблой, и ты превратишься в идиота. Кроме того, все мы в старости рискуем заболеть болезнью Альцгеймера, и один из способов избежать этой неприятности заключается в постоянном упражнении нашей памяти.",
  "Но почему так важно знать о событиях далекого прошлого? Потому что часто подобные знания помогают понять ход сегодняшних событий и в любом случае, как знание состава футбольных команд, помогают обогатить нашу память.",
  "Пока я не чувствую, что ты «к чему – то идешь», мне тяжело с тобой, потому что невыносимо видеть, как глупо и пошло ты тратишь время"
];

let menMails = [
  "Вы грустны, бедный мой друг и дорогой мэтр. Я подумал о Вас, узнав о смерти Дюверье. Вы любили его, поэтому я соболезную Вам. Эта потеря добавляется к остальным. Как нам удержать умершие души в наших сердцах? Каждый из нас носит внутри свой некрополь.",
  "После Вашего отъезда я совершенно РАЗБИТ. Мне кажется, я не видел Вас десять лет. Вы – единственный предмет моих разговоров с матерью, все здесь Вас любят. Под какой звездой, скажите, Вы родились, если соединили в себе столь несовместимые качества, так много и такие редкие?",
  "Не знаю, что именно я испытываю по отношению к Вам. Но питаю к Вам особенную нежность. Никто до сегодняшнего дня не вызывал у меня подобных чувств. Мы поняли друг друга, правда. И это благо.",
  "Особенно я переживал Ваше отсутствие вчера вечером, в десять часов. Неподалеку что-то горело. Небо светилось розоватым светом, Сена была цвета крыжовенного сиропа. Я работал три часа и вернулся домой измученный, как турок, объезжавший жирафа.",
  "Руанская газета, Nouvelliste, написала о Вашем приезде в Руан, и в субботу после расставания с Вами я встретил нескольких обывателей, возмущенных тем, что я не представил их Вам. Лучше всего выразился бывший зампрефекта: «Ах! Если бы мы знали, что она была здесь… мы бы… мы бы… – он пять минут пытался подобрать нужное слово, – мы бы улыбнулись ей». Но этого было бы недостаточно, не так ли?",
  "Наверно, можно сказать, что мы с тобой достигли всего, чего не достигли другие люди. И что? И ничего, одно дерьмо. Я тебя люблю, как любил всегда. Папа",
  "Я не могу выразить словами то, что каждый раз, когда я обнимал Вас, я чувствовал, что был дома",
  "Марлен, я люблю Вас настолько страстно, что эта любовь навсегда будет моим проклятием",
  "Моя дорогая Эмма, все твои письма, дорогие мне письма, так занимательны и так полно открывают твою сущность, что, прочитав их, я испытываю либо величайшее удовольствие, либо величайшую боль. Это еще одна лучшая вещь бытия с тобой",
  "Я только желаю, моя дражайшая Эмма, чтоб ты всегда верила, что Нельсон – твой; альфа и омега Нельсона – это Эмма. Я не могу измениться – моя привязанность и любовь к тебе лежит за пределами этого мира! Ничто не в силах разбить ее, только ты одна. Но об этом я не позволяю себе задуматься ни на мгновение.",
  "Я рад, что ты совершила столь приятное путешествие в Норфолк. Надеюсь однажды поймать тебя там и связать узами закона, более крепкими, чем узы любви и привязанности, которые соединяют нас сейчас…",
  "Я очень хочу знать, приходил ли навестить нас шурин Хофер на следующий день после моего отъезда? Часто ли он приходит, как обещал мне? Заходят ли Лангесы иногда? Как движется работа над портретом? Как ты живешь? Все это, естественно, меня чрезвычайно интересует.",
  "Я умоляю тебя вести себя так, чтобы не пострадало ни твое, ни мое доброе имя, также следи за своей внешностью. Не сердись на меня за такую просьбу. Ты должна любить меня еще сильнее за то, что я забочусь о нашей с тобой чести.",
  "Я хотел просить разрешения случайно встретиться с Вами во Фрайбурге. Но Вы остаетесь там, если я не ошибаюсь, только на один день, и в этот день, конечно, будете принадлежать нашим друзьям Ковальски.",
  "Я был бы счастлив, если бы Вы ответили мне и уверили меня в том, что собираетесь вернуться в октябре. Если Вы напишете прямо в Со, письмо дойдет быстрее.",
  "Сегодня я настолько бессилен, настолько унижен, что едва ли смогу найти достойный выход. Настолько бессердечным, чтобы бросить тебя, я еще не стал; но ожесточенным, оскорбленным в лучших чувствах, стиснутым в рамках самых общих мест – да.",
  "Если бы я получил хоть словечко от тебя! Ты должна сказать мне, что делать. В противном случае мое существование сведется к насмешке и глупой шутке, и я уйду прочь.",
  "Бог знает, никогда до этой минуты я не думал, что Вы, моя любовь, мой дорогой друг, можете быть такой неистовой. Я не могу выразить все, сейчас не время для слов. Но я буду испытывать чувство гордости и получать печальное удовольствие от страданий, которые Вы испытали. И от того, что Вы совсем не знаете меня.",
  "Меня не заботит, кто знает об этом и как это может быть использовано – это для тебя, только для тебя. Я был твоим и сейчас я твой, целиком и полностью, чтобы повиноваться, почитать, любить тебя и летать с тобой, когда, где и как тебе будет угодно.",
  "Я оттого и пишу эти письма, чтобы исправить что-то неправильное, и выгляжу, наверное, смешным и нелепым, как некоторые мои персонажи. Но ведь это я! В сущности, дружочек, ничего нет проще живой тревоги отцовского сердца.",
  "Дорогая Скотти, те моменты, когда тебя душит отчаяние, когда тебе кажется, что у тебя ничего не получается и что невозможно ничего сделать, вот знай, дорогая Скотти: только в такие моменты ты по-настоящему идёшь вперёд.",
  "Если ты влюбился, это хорошо, это самое лучшее, что может случиться с каждым. Не позволяй никому сделать это чувство мелким или незначимым.",
  "Я был таким, как они, Джеральдина. В те ночи, в те волшебные ночи, когда ты засыпала, убаюканная моими сказками, я бодрствовал."
];

function selectAll() {
  let checkboxes = document.querySelectorAll(".letter__checkbox");
  let selector = document.getElementById("can-do__highlight");
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = selector.checked;
  }
}

let count = 0;
let numOfLetters = 4;
var last = 1;

function addLetter() {
  let test = document.querySelector(".block-inner__letters");
  let letters = test.childNodes;
  var letterWithLabel = document.createElement("label");
  var newLetter = document.createElement("div");
  newLetter.classList.add("letters__letter");
  newLetter.classList.add("letter");
  newLetter.classList.add("msg-adding-start");
  let checkboxes = document.querySelectorAll(".letter__checkbox");
  if (numOfLetters >= 30) {
    checkboxes[checkboxes.length - last].parentElement.classList.add("hidden");
    last++;
  }
  numOfLetters++;
  var sender, mail;
  var day = Math.floor(Math.random() * 27) + 1;
  var month = months[Math.floor(Math.random() * months.length)];
  if (Math.random() > 0.5) {
    sender = menSenders[Math.floor(Math.random() * menSenders.length)];
    mail = menMails[Math.floor(Math.random() * menMails.length)];
  } else {
    sender = womenSenders[Math.floor(Math.random() * womenSenders.length)];
    mail = womenMails[Math.floor(Math.random() * womenMails.length)];
  }

  let chooseCheckbox = document.createElement("input");
  chooseCheckbox.type = "checkbox";
  chooseCheckbox.classList.add("letter__choose");
  newLetter.appendChild(chooseCheckbox);
  newLetter.innerHTML += "\n";

  let topic = document.createElement("div");
  topic.classList.add("letter__mail-opened");
  topic.classList.add("mail-opened");
  let label = document.createElement("label");
  let close = document.createElement("div");
  close.classList.add("mail-opened__close2");
  close.textContent = "×";
  close.addEventListener("click", closeMsg);
  label.appendChild(close);
  let text = document.createElement("div");
  text.classList.add("mail-opened__text");
  text.textContent = mail;
  topic.appendChild(label);
  topic.appendChild(text);
  newLetter.appendChild(topic);
  newLetter.innerHTML += "\n";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("letter__checkbox");
  newLetter.appendChild(checkbox);
  newLetter.innerHTML += "\n";

  let letterPic = document.createElement("div");
  letterPic.classList.add("letter__pic");
  letterPic.textContent = sender[0];
  newLetter.appendChild(letterPic);
  newLetter.innerHTML += "\n";

  var letterSender = document.createElement("span");
  letterSender.classList.add("letter__sender");
  letterSender.classList.add("letter__unread");
  letterSender.textContent = sender;
  newLetter.appendChild(letterSender);
  newLetter.innerHTML += "\n";

  var mark = document.createElement("div");
  mark.classList.add("letter__msg-mark");
  mark.classList.add("letter__mark-unread");
  newLetter.appendChild(mark);
  newLetter.innerHTML += "\n";

  var letter = document.createElement("span");
  letter.classList.add("letter__message");
  letter.classList.add("letter__unread");
  letter.textContent = mail;
  newLetter.appendChild(letter);
  newLetter.innerHTML += "\n";

  var date = document.createElement("time");
  date.classList.add("letter__date-msg");
  date.dateTime =
    `2019-` +
    months.findIndex(curMonth => {
      return curMonth == month;
    }) +
    `-` +
    day;
  date.textContent = day + ` ` + month;
  newLetter.appendChild(date);
  newLetter.innerHTML += "\n";

  letterWithLabel.appendChild(newLetter);
  test.insertBefore(letterWithLabel, letters[0]);
  setTimeout(() => {
    newLetter.classList.add("msg-adding-finish");
  }, 70);

  let newChooseCheckbox = document.querySelector(".letter__choose");
  newChooseCheckbox.addEventListener("click", open);

  let newClose = document.querySelector(".mail-opened__close2");
  newClose.addEventListener("click", closeMsg);
}

function deleteMsgs(toDelete) {
  for (var i = 0; i < toDelete.length; i++) {
    toDelete[i].remove();
    numOfLetters--;
    if (numOfLetters >= 30) {
      last--;
      let checkboxes = document.querySelectorAll(".letter__checkbox");
      checkboxes[checkboxes.length - last].parentElement.classList.remove(
        "hidden"
      );
    }
  }
}

function deleteLetter() {
  let checkboxes = document.querySelectorAll(".letter__checkbox");
  var toDelete = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var parent = checkboxes[i].parentElement;
      if (parent.classList.contains("hidden")) {
        checkboxes[i].checked = false;
        continue;
      }
      toDelete.push(parent);
      if (Math.random() > 0.5) {
        parent.classList.add("msg-deleting-right");
      } else {
        parent.classList.add("msg-deleting-left");
      }
    }
  }
  setTimeout(deleteMsgs, 1000, toDelete);
}

function newMail() {
  let rand = Math.floor(Math.random() * (600000 - 10)) + 10;
  setTimeout(addLetter, rand);
  setInterval(function() {
    rand = Math.floor(Math.random() * (600000 - 10)) + 10;
    setTimeout(addLetter, rand);
  }, 300000);
}

let opened = false;

function open() {
  if (opened) return;
  var chooseCheckboxes = document.querySelectorAll(".letter__choose");
  for (var i = 0; i < chooseCheckboxes.length; i++) {
    if (chooseCheckboxes[i].checked) {
      opened = true;
      chooseCheckboxes[i].nextElementSibling.id = "letter__choose";
      return;
    }
  }
}

function closeMsg() {
  opened = false;
  const curr = document.getElementById("letter__choose");
  curr.previousElementSibling.checked = false;
  curr.removeAttribute("id");
}

const allChooseCheckboxes = document.querySelectorAll(".letter__choose");
for (let i = 0; i < allChooseCheckboxes.length; i++) {
  allChooseCheckboxes[i].addEventListener("click", open);
}

const allClosingsMsgs = document.querySelectorAll(".mail-opened__close2");
for (let i = 0; i < allClosingsMsgs.length; i++) {
  allClosingsMsgs[i].addEventListener("click", closeMsg);
}

window.onload = newMail;
document
  .getElementById("actions__button-write")
  .addEventListener("click", addLetter);
document
  .getElementById("can-do__delete")
  .addEventListener("click", deleteLetter);
document
  .getElementById("can-do__highlight")
  .addEventListener("click", selectAll);
