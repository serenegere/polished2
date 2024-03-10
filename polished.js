

// mapping for Cashmere keyboard
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

     // Function to handle key presses
     function handleKeyPress(event) {
         const key = shiftPressed ? event.key.toUpperCase() : event.key.toLowerCase();
         const cashmereChar = keyMapping[key];
         if (cashmereChar !== undefined) {
             event.preventDefault(); // Prevent default action (e.g., typing 'a' in the input field)
             const textDisplay = document.getElementById('text-display');
             document.execCommand('insertText', false, cashmereChar); // Insert text at cursor position
         }
     }

// Function to handle shift key press
function handleShiftPress(event) {
         if (event.key === 'Shift') {
             shiftPressed = true;
         }
     }

     // Function to handle shift key release
     function handleShiftRelease(event) {
         if (event.key === 'Shift') {
             shiftPressed = false;
         }
     }

     
     // Attach key press event listener to the document
     document.addEventListener('keypress', handleKeyPress);
     document.addEventListener('keydown', handleShiftPress);
     document.addEventListener('keyup', handleShiftRelease);

     function appendToDisplay(character) {
       document.execCommand('insertText', false, character);
     }

     function erase(){
       document.execCommand('delete', false);
     }

     function PrintText() {
       window.print();
     }

     function toggleDarkMode() {
  document.querySelectorAll(". keyboard-btn").classList.toggle("dark-mode");
     }
 

 