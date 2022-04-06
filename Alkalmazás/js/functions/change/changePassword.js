const changePassword = async () => {
    const oldPasswordInput = document.getElementById('oldPasswordInput');
    const newPasswordInput = document.getElementById('newPasswordInput');
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'changePassword',
            'oldPassword':oldPasswordInput.value,
            'newPassword':newPasswordInput.value
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj.changePassword) {
        const inputElements = document.getElementsByTagName('input');
        for(let input of inputElements) {
            input.value = '';
        }
        validatePasswordChangeForm();
        document.getElementById('messageBox').innerHTML =
        '<div class="alert alert-green p-2 mb-0 mt-3 text-center"><p class="mb-0 fw-bold">A jelszó cseréje sikeres volt!</p></div>';
    } else {
        document.getElementById('messageBox').innerHTML =
        '<div class="alert alert-red p-2 mb-0 mt-3 text-center"><p class="fw-bold">A jelszó cseréje nem sikerült!</p><p class="mb-0">Kérlek, ellenőrizd a régi jelszó helyességét!</p></div>';
    }
    setTimeout(() => {document.getElementById('messageBox').innerHTML = ''}, 2500);
}