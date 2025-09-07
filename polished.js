document.getElementById('text-display').focus();

     const keyMapping = {
         'a': 'ا',
         'A': 'َ',
         'b': 'ب',
         'B': 'آ',
         'c': 'چ',
         'C': 'ژ',
         'd': 'د',
         'D': 'ڈ',
         'e': 'ٔ',
         'E': 'ٲ',
         'f': 'ٕ',
         'F': 'ٟ',
         'g': 'گ',
         'G': 'غ',
         'h': 'ھ',
         'H': 'ح',
         'i': 'ِ',
         'I': 'یٖ',
         'j': 'ج',
         'J': 'ؠ',
         'k': 'ک',
         'K': 'ق',
         'l': 'ل',
         'L': 'ض',
         'm': 'م',
         'M': 'ث',
         'n': 'ن',
         'N': 'ں',
         'o': 'ہ',
         'O': 'ع',
         'p': 'پ',
         'P': 'ف',
         'q': 'ط',
         'Q': 'ظ',
         'r': 'ر',
         'R': 'ڑ',
         's': 'س',
         'S': 'ص',
         't': 'ت',
         'T': 'ٹ',
         'u': 'ُ',
         'U': 'وٗ',
         'v': 'ٚ',
         'V': 'ٛ',
         'w': 'و',
         'W': 'ۄ',
         'x': 'ش',
         'X': 'خ',
         'y': 'ی',
         'Y': 'ے',
         'z': 'ز',
         'Z': 'ذ',

         '`': '`',
         '~': '~',
         '!': '!',
         '@': '@',
         '#': '#',
         '$': '$',
         '%': '٪',
         '^': '^',
         '&': 'ۖ',
         '*': '٭',
         '(': ')',
         ')': '(',
         '-': '-',
         '_': '_',
         '=': '=',
         '+': '+',
         '[': ']',
         ']': '[',
         '{': '}',
         '}': '{',
         '\\': '\\',
         '|': '|',
         ';': '؛',
         ':': ':',
         '\'': '’',
         '"': '”',
         ',': '،',
         '<': '>',
         '.': '۔',
         '>': '<',
         '/': '/',
         '?': '؟',

         '1': '۱', 
         '2': '۲', 
         '3': '۳', 
         '4': '۴', 
         '5': '۵', 
         '6': '۶', 
         '7': '۷', 
         '8': '۸', 
         '9': '۹', 
         '0': '۰',

         ' ': ' ',
         '\n': '\n',
         '\r': '\r',
         '\t': '\t'
     };

     let shiftPressed = false;

    
     function handleKeyPress(event) {
         const key = shiftPressed ? event.key.toUpperCase() : event.key.toLowerCase();
         const cashmereChar = keyMapping[key];
         if (cashmereChar !== undefined) {
             event.preventDefault(); 
             const textDisplay = document.getElementById('text-display');
             document.execCommand('insertText', false, cashmereChar);
         }
     }

function handleShiftPress(event) {
         if (event.key === 'Shift') {
             shiftPressed = true;
         }
     }

     function handleShiftRelease(event) {
         if (event.key === 'Shift') {
             shiftPressed = false;
         }
     }

     document.addEventListener('keypress', handleKeyPress);
     document.addEventListener('keydown', handleShiftPress);
     document.addEventListener('keyup', handleShiftRelease);


function erase(){
    document.execCommand('delete', false);
    setTimeout(() => {
        document.getElementById('text-display').focus();
    }, 0);
}

document.querySelector('.eks').addEventListener('mousedown', erase);

function appendToDisplay(character) {
  document.execCommand('insertText', false, character);
  setTimeout(() => {
    document.getElementById('text-display').focus();
  }, 0);
}


function saveAsText() {
    const textContent = document.getElementById('text-display').innerText;
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'kashmiri-text.txt';
    link.click();
    URL.revokeObjectURL(link.href);
}

function saveAsRtf() {
    const textContent = document.getElementById('text-display').innerText;
    const rtfContent = `{\\rtf1\\ansi\\ansicpg1252\\deff0 {\\fonttbl {\\f0\\fnil\\fcharset0 Noto Nastaliq Urdu;}}\\viewkind4\\uc1\\pard\\qr\\rtlch\\f0\\fs48 ${textContent.replace(/\n/g, '\\par ').split('').map(char => {
        const code = char.charCodeAt(0);
        return code > 127 ? `\\u${code}?` : char;
    }).join('')}\\par}`;
    
    const blob = new Blob([rtfContent], { type: 'application/rtf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'kashmiri-text.rtf';
    link.click();
    URL.revokeObjectURL(link.href);
}
