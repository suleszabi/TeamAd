const userLogin = async () => {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'login',
            'username':usernameInput.value,
            'password':passwordInput.value
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj.login) {
        location.href = './';
    } else {
        document.getElementById('messageBox').innerHTML =
        '<div class="alert alert-red p-2"><p class="mb-0 fw-bold text-center">Hibás belépési adatok!</p></div>';
        usernameInput.value = '';
        passwordInput.value = '';
    }
    setTimeout(() => {document.getElementById('messageBox').innerHTML = ''}, 2500);
}