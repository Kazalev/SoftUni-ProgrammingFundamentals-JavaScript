function solve(password){

    let isDigit = (asciiCode) => 48 && asciiCode <= 57;

    let validLength = hasValidLength();
    let validContent = hasValidContent();
    let valitDigits = hasAtLeastTwoDigits();

    if(!validLength){
        console.log(`Password must be between 6 and 10 characters`);
    }

    if(!validContent){
        console.log(`Password must consist only of letters and digits`);
    }

    if(!valitDigits){
        console.log('Password must have at least 2 digits');
    }

    if(validLength && validContent && valitDigits){
        console.log(`Password is valid`);
    }

    function hasValidLength() {
        return password.length >= 6 && password.length <= 10;
    }

    function hasValidContent() {
        let lowercasePass = password.toLowerCase();
        let isLetter = (asciiCode) => 97 && asciiCode <= 122;
        let isValid = true;

        for(let i = 0; i < lowercasePass.length; i++){
            let ascii = lowercasePass.charCodeAt(i);

            if(isLetter(ascii) || isDigit(ascii)) {
                continue;
            }
            return false;
        }

        return true;
    }

    function hasAtLeastTwoDigits() {

        let digitsCount = 0;

        for(let i = 0; i < password.length; i++){
            let ascii = password.charCodeAt(i);

            let asciiIsDigit = isDigit(ascii);

            if(asciiIsDigit){
                digitsCount++;
            }
        }

        return digitsCount >= 2;
    }
}

solve('Pa$s$s');