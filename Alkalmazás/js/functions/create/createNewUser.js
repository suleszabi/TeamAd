const createNewUser = async () => {
    const usernameInput = document.getElementById('usernameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'createNewUser',
            'username':usernameInput.value,
            'email':emailInput.value,
            'password':passwordInput.value
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj.createNewUser) {
        const inputElements = document.getElementsByTagName('input');
        for(let input of inputElements) {
            input.value = '';
        }
        validateNewUserForm();
        document.getElementById('messageBox').innerHTML =
        '<div class="alert alert-green p-2 mb-0 mt-3 text-center"><p class="mb-0 fw-bold">Az új felhasználó létre lett hozva.</p></div>';
        loadUsers();
    } else {
        document.getElementById('messageBox').innerHTML =
        '<div class="alert alert-red p-2 mb-0 mt-3 text-center"><p class="fw-bold">A felhasználót nem sikerült létrehozni!</p><p class="mb-0">Kérlek ellenőrizd, hogy a megadott felhasználónév és e-mail cím szabad-e!</p></div>';
    }
    setTimeout(() => {document.getElementById('messageBox').innerHTML = ''}, 2500);
}