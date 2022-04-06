const logout = async () => {
    let respondText = await makeRequest('post', './php/requestReceiver.php', {'requestCause':'logout'});
    const respondObj = JSON.parse(respondText);
    if(respondObj.logout) {
        location.href = './login.html';
    }
}