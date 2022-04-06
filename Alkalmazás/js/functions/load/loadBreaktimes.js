const loadBreaktimes = async () => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getBreaktimes'
        }
    );
    const respondArray = JSON.parse(respondText);
    let resultHTML = '';
    for(let breaktimeData of respondArray) {
        resultHTML +=
        '<tr>'+
            '<td class="align-middle">'+breaktimeData.name+'</td>'+
            '<td class="text-center align-middle">'+breaktimeData.start+'</td>'+
            '<td class="text-center align-middle">'+breaktimeData.end+'</td>'+
            '<td class="text-center align-middle"><span class="fw-bold delete-btn" breaktimeid="'+breaktimeData.id+'" title="Szünet törlése"><i class="fas fa-calendar-times"></i></span></td>'+
        '</tr>';
    }
    document.getElementById('breaktimesTableBody').innerHTML = resultHTML;
    const deleteBtns = document.getElementsByClassName('delete-btn');
    for(let deleteButton of deleteBtns) {
        deleteButton.onclick = () => {
            const idToDelete = deleteButton.getAttribute('breaktimeid');
            deleteBreaktime(idToDelete);
        }
    }

}