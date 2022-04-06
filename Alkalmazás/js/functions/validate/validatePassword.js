const validatePassword = (password) => {
    const numbers = /[0-9]/;
    const upperCases = /[A-Z]/;
    const lowerCases = /[a-z]/;
    let result = '';
    if(!lowerCases.test(password)) {
        result = 'noLowerCases';
    } else if(!upperCases.test(password)) {
        result = 'noUpperCases';
    } else if(!numbers.test(password)) {
        result = 'noNumbers';
    } else {
        result = 'ok';
    }
    return result;
}