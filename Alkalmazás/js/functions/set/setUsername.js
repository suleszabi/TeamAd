const setUsername = async () => {
    let respondText = await makeRequest('post', './php/requestReceiver.php', {'requestCause':'getUsername'});
    const respondObj = JSON.parse(respondText);
    document.getElementById('navbarDropdown').innerHTML = '<i class="fas fa-user"></i> '+respondObj.username;
}