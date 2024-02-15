
// function Play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     // show the Playground
//     const PlaygroundSection = document.getElementById('Play-ground');
//     // console.log(PlaygroundSection.classList);
//     PlaygroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
    const PlayerPressed = event.key;
    console.log('player pressed', PlayerPressed);

    // get the expected to press
    const currentAlphabetById = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetById.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(PlayerPressed, currentAlphabet);


    // cheak matched or not
    if (PlayerPressed === expectedAlphabet) {
        console.log('you got a point');
        console.log('you have pressed correctly',expectedAlphabet);
        removeBackgrounColorById(expectedAlphabet);
        continueGame();

    }
    else {
        console.log('you missed.you lost a life');
    }
}



document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    /* genaret a random alphabet */

    const alphabet = getArandomAlphaet();
    // console.log('your random alphabet', alphabet);

    // set randomly genaret alphabet  to the screen (show it)
    const currentAlphabetElemnet = document.getElementById('current-alphabet');
    currentAlphabetElemnet.innerText = alphabet;

    // set backhground color
    setBackgrounColorById(alphabet);

}



function Play() {
    hideElementById('home-screen');
    ShoeElementById('Play-ground');
    continueGame()
}
