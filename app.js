const cardArray = [
    { name: 'pizza', img: 'https://i.pinimg.com/736x/7d/74/16/7d7416b4820df975d753ff31da0b9909.jpg' },
    { name: 'burger', img: 'https://i.pinimg.com/1200x/5f/38/88/5f3888be3295aff073e3ec227163d6b7.jpg' },
    { name: 'hotdog', img: 'https://i.pinimg.com/1200x/d6/f7/1c/d6f71c12ee89e4db02fa9b649b878f9d.jpg' },
    { name: 'icecream', img: 'https://i.pinimg.com/736x/60/46/1f/60461f63e4a8960d53c17b40d8dfb41e.jpg' },
    { name: 'milkshake', img: 'https://i.pinimg.com/1200x/51/46/7d/51467dde8b2ef37029f69d411cb7699b.jpg' },
    { name: 'fries', img: 'https://i.pinimg.com/736x/70/49/61/704961d2f6aff08cddc62f937000f0cc.jpg' },

    { name: 'pizza', img: 'https://i.pinimg.com/736x/7d/74/16/7d7416b4820df975d753ff31da0b9909.jpg' },
    { name: 'burger', img: 'https://i.pinimg.com/1200x/5f/38/88/5f3888be3295aff073e3ec227163d6b7.jpg' },
    { name: 'hotdog', img: 'https://i.pinimg.com/1200x/d6/f7/1c/d6f71c12ee89e4db02fa9b649b878f9d.jpg' },
    { name: 'icecream', img: 'https://i.pinimg.com/736x/60/46/1f/60461f63e4a8960d53c17b40d8dfb41e.jpg' },
    { name: 'milkshake', img: 'https://i.pinimg.com/1200x/51/46/7d/51467dde8b2ef37029f69d411cb7699b.jpg' },
    { name: 'fries', img: 'https://i.pinimg.com/736x/70/49/61/704961d2f6aff08cddc62f937000f0cc.jpg' }
];

const grid = document.getElementById('game-grid');
const resultDisplay = document.getElementById('result');

let cardsChosen = []; 
let cardsChosenIds = []; 
let cardsWon = []; 
let score = 0;


cardArray.sort(() => 0.5 - Math.random());


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {

        const card = document.createElement('div');
        card.classList.add('card');
        

        const cardImage = document.createElement('img');
        cardImage.setAttribute('src', cardArray[i].img);
        
        
        card.setAttribute('data-id', i); 
        

        card.addEventListener('click', flipCard);
        

        card.appendChild(cardImage);
        grid.appendChild(card);
    }
}
function flipCard() {
    const cardId = this.getAttribute('data-id');


    if (this.classList.contains('match') || cardsChosenIds.includes(cardId)) {
        return;
    }

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);

    this.classList.add('flipped');

    if (cardsChosen.length === 2) {

        setTimeout(checkForMatch, 500); 
    }
}
function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('Chúc mừng! Bạn đã tìm thấy một cặp!');
                cards[optionOneId].classList.add('match');
        cards[optionTwoId].classList.add('match');
        
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        
        cardsWon.push(cardsChosen);
        score++;
    } else {
        cards[optionOneId].classList.remove('flipped');
        cards[optionTwoId].classList.remove('flipped');
        
        alert('Rất tiếc, hãy thử lại!');
    }

    resultDisplay.textContent = score;
    cardsChosen = [];
    cardsChosenIds = [];
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = ' Bạn đã thắng! Chơi lại?';
    }
}


createBoard();