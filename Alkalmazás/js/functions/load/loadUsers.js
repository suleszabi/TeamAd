const loadUsers = async () => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getUsers'
        }
    );
    const respondArray = JSON.parse(respondText);
    let resultHTML = '';
    for(let userData of respondArray) {
        resultHTML +=
        '<tr>'+
            '<td class="text-end">'+userData.id+'</td>'+
            '<td>'+userData.username+'</td>'+
            '<td>'+userData.email+'</td>'+
            '<td class="text-center"><span class="fw-bold delete-btn" userid="'+userData.id+'" title="Felhasználó törlése"><i class="fas fa-user-minus"></i></span></td>'+
        '</tr>';
    }
    document.getElementById('usersTableBody').innerHTML = resultHTML;
    const deleteBtns = document.getElementsByClassName('delete-btn');
    for(let deleteButton of deleteBtns) {
        deleteButton.onclick = () => {
            const idToDelete = deleteButton.getAttribute('userid');
            deleteUser(idToDelete);
        }
    }
}