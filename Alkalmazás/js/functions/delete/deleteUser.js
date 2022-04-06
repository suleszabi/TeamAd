const deleteUser = async (idToDelete) => {
    if(confirm('Biztosan törölni szeretnéd a felhasználót?\r\n\r\nA törlés végleges és nem visszavonható!')) {
        let respondText = await makeRequest(
            'post',
            './php/requestReceiver.php',
            {
                'requestCause':'deleteUser',
                'userId':idToDelete
            }
        );
        respondObj = JSON.parse(respondText);
        if(respondObj.deleteUser) {
            loadUsers();
        }
    }
}