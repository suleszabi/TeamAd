const loginCheck = async (onLoginPage = false) => {
    let respondText = await makeRequest('post', './php/requestReceiver.php', {'requestCause':'loginCheck'});
    const respondObj = JSON.parse(respondText);
    if(respondObj.loginState && onLoginPage) {
        location.href = './';
    } else if(!respondObj.loginState && !onLoginPage) {
        location.href = './login.html';
    }
}