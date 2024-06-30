export function formatThreeDigits( integerStr ){
    var len = integerStr.length;
    var formatted = "";
    
    var breakpoint = (len - 1) % 3; // after which index to place the dot
    
    for(let i = 0; i < len; i++) {
        formatted += integerStr.charAt(i);
        if(i % 3 === breakpoint){
        if(i < len - 1) // don't add dot for last digit
            formatted += ".";
        }
    }

    return formatted;
}