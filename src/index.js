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
    ' ': ' ',
};

function decode(expr) {
    let result='';
    let temp;
    let array=expr.match(/[0-9*]{1,10}/g);
    let newArray=array.map(elem=>elem.match(/[0-9*]{1,2}/g));
    for(let i=0;i<newArray.length;i++){
      for(let j=0;j<5;j++){
          if(newArray[i][j]=='10'){
            newArray[i][j]='.';}
          else if(newArray[i][j]=='11'){
             newArray[i][j]='-';
          }
          else if(newArray[i][j]=='00')
             newArray[i][j]='';
        }
        temp=newArray[i].join("").replace(/[*]{1,10}/,' ');
        console.log(temp);
        result+=MORSE_TABLE[temp];
      }
          
    console.log(newArray);
    console.log(array);
    console.log(result);
    return result;

}
console.log(decode('0011101010***************'));
module.exports = {
    decode
}

console.log(decode('0011101010***************'));