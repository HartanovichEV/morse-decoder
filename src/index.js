const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let lettersArr=[];
    for(let start=0, end=10; end<=expr.length; start+=10, end+=10){
        lettersArr=lettersArr.concat(expr.slice(start, end));
    }
    let withoutZeros=lettersArr.map(item => parseInt(item, 10));
    let morseKey=withoutZeros.map(item => String(item).replace(/10/g, ".").replace(/11/g, "-"));
    return morseKey.map(function(item, index){
      return item == 'NaN'? item = ' ': MORSE_TABLE[morseKey[index]];}).join('')
    
}

module.exports = {
    decode
}