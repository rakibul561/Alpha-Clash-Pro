
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function ShoeElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

   function setBackgrounColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400'); 
   }

   function removeBackgrounColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400'); 
   }


   
   function getArandomAlphaet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet
   }

// function getArandomAlphaet() {
//     /* get or crate an alphabet*/
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     /* get a random index betwen 0 -25 */
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
    

//     const alphabet = alphabets[index];
//     // console.log(index,alphabet);
//     return alphabet
// }