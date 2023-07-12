let OriginalText = document.getElementById("original_text");
let ModificatedText = document.getElementById("modificated_text");
const Submit = document.getElementById("submit_button");

const ErrorMessage = ModificatedText.textContent.slice(0,3) === "Con" ? "Max characters are 140" : "El máximo aceptado es de 140 caractéres";

function Algorithm(text) {
    let ModificatedText = text;
    const ParsedText = text.trim().split(/\s+/);
    ModificatedText = '';
    ParsedText.forEach(element => {
        if (element.length > 3) {
            const FirstLetter = element[0];
            let AuxiliarWord = element.slice(1,-1);
            AuxiliarWord = AuxiliarWord.split('').sort(function() { return 0.5 - Math.random() }).join('');
            const LastLetter = element.slice(-1);

        ModificatedText += FirstLetter + AuxiliarWord + LastLetter;
        } else {
            ModificatedText += element;
        }
        ModificatedText += ' ';
    });
    ModificatedText = ModificatedText.slice(0,-1);
    
    return ModificatedText
}

Submit.addEventListener('click', function (){
if (OriginalText.value.length < 2) {
    ModificatedText.textContent = Algorithm(OriginalText.value);
} else {
    ModificatedText.textContent = ErrorMessage;
}
})