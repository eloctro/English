const dictionary = "./dictionary.json";

async function getDictEnRu() {
  const res = await fetch(dictionary);
  const data = await res.json();
  showTranlate(data);
}

function showTranlate(data) {
  console.log(data);
  data.forEach((element) => {
    console.log(
      `${element.word} [${element.transcription}] ${element.translate}`
    );
    createRow(element.word, element.transcription, element.translate);
  });
}

function createRow(word, transcription, translate) {
  const line = document.createElement("div");
  const w = document.createElement("span");
  const tScr = document.createElement("span");
  const tlat = document.createElement("span");
  document.body.append(line);
  line.append(w);
  line.append(tScr);
  line.append(tlat);
  w.textContent = word;
  tScr.textContent = `[${transcription}]`;
  tlat.textContent = translate;
  w.classList.add('word')
  tScr.classList.add('transcription')
  tlat.classList.add('translate')
}

getDictEnRu();
