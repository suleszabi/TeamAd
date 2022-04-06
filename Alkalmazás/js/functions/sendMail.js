const sendMail = async (requestCause, id) => {
    const subjectInput = document.getElementById('subjectInput');
    const bodyInput = document.getElementById('bodyInput');
    subjectInput.disabled = true;
    bodyInput.disabled = true;
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':requestCause,
            'id':id,
            'subject':subjectInput.value,
            'body':bodyInput.value
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj.sendMail) {
        subjectInput.value = '';
        bodyInput.value = '';
        subjectInput.disabled = false;
        bodyInput.disabled = false;
        document.getElementById('messageBox').innerHTML = '<div class="alert alert-green mb-0 mt-3 p-2"><h4 class="text-center mb-0">Levél elküldve!</h4></div>';
    } else {
        document.getElementById('messageBox').innerHTML = '<div class="alert alert-red mb-0 mt-3 p-2"><h4 class="text-center mb-0">A levél küldése során hiba lépett fel!</h4></div>';
    }
    setTimeout(() => {document.getElementById('messageBox').innerHTML = ''}, 2500);
}