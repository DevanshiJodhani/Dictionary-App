const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.querySelector('.result');
const sound = document.getElementById('sound');
const btn = document.querySelector('.search-btn');

btn.addEventListener('click',() => {
    let inputWord = document.querySelector('.input-word').value;

    fetch(`${url}${inputWord}`).then((response) => response.json()).then((data) => {
        console.log(data);

        result.innerHTML = `

        <div class="word">
                <h2>${inputWord}</h2>
                <button onclick="playSound()">
                    <i><ion-icon name="volume-high"></ion-icon></i>
                </button>
            </div>

            <div class="word-details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
            </div>

            <div class="word-meaning">
                <p>${data[0].meanings[0].definitions[0].definition}</p>
            </div>
            <div class="word-example">
                <p>${data[0].meanings[0].definitions[0].example || ""}</p>
            </div>
        `;
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        console.log(sound);

    })
    .catch(() => {
        result.innerHTML = `<h4>Couldn't Find the word</h3>`;
    });
});

function playSound() {
    sound.play();
}