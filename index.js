const characterAmountRange = document.getElementById('charAmountRange');
const characterAmountNumber  = document.querySelector('#charAmountNumber');
const form = document.getElementById('passwordGeneratorForm');
const includeUppercaseElement = document.querySelector('#includeUppercase');
const includeNumbersElement = document.querySelector('#IncludeNumbers'); 
const includeSymbolsElement = document.querySelector('#includeSymbols');
const passwordDisplay = document.querySelector('#passwordDisplay')



const Uppercase_char_code = arrayFromLowToHigh(65,90);
const Lowercase_char_code = arrayFromLowToHigh(97,122);
const Number_char_code = arrayFromLowToHigh(48,57)
const Symbols_char_code = arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)
    ).concat(arrayFromLowToHigh(91,96)
    ).concat(arrayFromLowToHigh(123, 126)) 

characterAmountNumber.addEventListener('input',synccharacterAmount);
characterAmountRange.addEventListener('input',synccharacterAmount);

function synccharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value= value;
    characterAmountRange.value= value;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(characterAmount , includeUppercase ,includeNumbers, includeSymbols);
    passwordDisplay.innerText= password

  })

  function generatePassword(characterAmount ,includeUppercase ,includeNumbers, includeSymbols ){
           let charCodes =Lowercase_char_code;
           if(includeUppercase) charCodes = charCodes.concat(Uppercase_char_code)
           if(includeNumbers) charCodes = charCodes.concat(Number_char_code)
           if(includeSymbols) charCodes = charCodes.concat(Symbols_char_code)
            let  passwordcharacters =[];
           for (let i = 0; i < characterAmount; i++) {
               const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)]
               passwordcharacters.push(String.fromCharCode(characterCode));   
           }
           return passwordcharacters.join('');
  }

  function arrayFromLowToHigh(low,high) {
    const array =[];
   for (let i = low; i <= high; i++) {
        array.push(i); 
   }
   return array;
 }
