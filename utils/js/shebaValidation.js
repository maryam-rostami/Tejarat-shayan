
// "برای چک کردن کد شبا بانکی از تابع validateSheba استفاده می شود. که در صورت درست بودن true  و در صورت اشتباه false برگردانده می شود."

function iso7064Mod97_10(iban) {
    var remainder = iban,
        block;

    while (remainder.length > 2) {
        block = remainder.slice(0, 9);
        remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
    }

    return parseInt(remainder, 10) % 97;
}

export function validateSheba(str) {
    var pattern = /IR[0-9]{24}/;


//me
    if(str){
        if (str.length !== 26) {
            return false;
        }
    }
    

    if (!pattern.test(str)) {
        return false;
    }

    var newStr = str.substr(4);
    var d1 = str.charCodeAt(0) - 65 + 10;
    var d2 = str.charCodeAt(1) - 65 + 10;
    newStr += d1.toString() + d2.toString() + str.substr(2, 2);

    var remainder = iso7064Mod97_10(newStr);

    if (remainder !== 1) {
        return false;
    }

    return true;
}

