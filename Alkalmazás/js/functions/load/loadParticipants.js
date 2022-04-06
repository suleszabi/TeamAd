const loadParticipants = async () => {
    const IdSearchInput = document.getElementById('IdSearchInput');
    const NameSearchInput = document.getElementById('NameSearchInput');
    const emailSearchInput = document.getElementById('emailSearchInput');
    const birthplaceSearchInput = document.getElementById('birthplaceSearchInput');
    const birthdateSearchInput = document.getElementById('birthdateSearchInput');
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getParticipants',
            'idSearch':IdSearchInput.value,
            'nameSearch':NameSearchInput.value,
            'emailSearch':emailSearchInput.value,
            'birthplaceSearch':birthplaceSearchInput.value,
            'birthdateSearch':birthdateSearchInput.value,
        }
    );
    const respondArray = JSON.parse(respondText);
    let resultHTML = '';
    for(let participantData of respondArray) {
        resultHTML +=
        '<tr>'+
            '<td class="text-end align-middle">'+participantData.id+'</td>'+
            '<td class=" align-middle">'+participantData.full_name+'</td>'+
            '<td class=" align-middle"><span class="mail-btn" participantid="'+participantData.id+'" title="Levélküldés a résztvevőnek"><i class="fas fa-envelope"></i></span> '+participantData.email+'</td>'+
            '<td class=" align-middle">'+participantData.birthplace+'</td>'+
            '<td class="text-end align-middle">'+participantData.birthdate+'</td>'+
            '<td class="text-center align-middle"><span class="fw-bold delete-btn" participantid="'+participantData.id+'" title="Résztvevő törlése"><i class="fas fa-user-times"></i></span></td>'+
            '<td class="text-center align-middle"><span class="fw-bold details-btn" participantid="'+participantData.id+'" title="Szerkesztés"><i class="fas fa-file-alt"></i></span></td>'+
            '<td class="text-center align-middle"><span class="fw-bold green-btn" participantid="'+participantData.id+'" participantname="'+participantData.full_name+'" title="Csoportba sorolás"><i class="fas fa-user-graduate"></i><i class="fas fa-arrow-right"></i></span></td>'+
        '</tr>';
    }
    document.getElementById('participantsTableBody').innerHTML = resultHTML;
    const mailBtns = document.getElementsByClassName('mail-btn');
    for(let mailButton of mailBtns) {
        mailButton.onclick = () => {
            const idForMail = mailButton.getAttribute('participantid');
            location.href = './sendmail.html?to=participant&id='+idForMail;
        }
    }
    const deleteBtns = document.getElementsByClassName('delete-btn');
    for(let deleteButton of deleteBtns) {
        deleteButton.onclick = () => {
            const idToDelete = deleteButton.getAttribute('participantid');
            deleteParticipant(idToDelete);
        }
    }
    const detailsBtns = document.getElementsByClassName('details-btn');
    for(let detailsButton of detailsBtns) {
        detailsButton.onclick = () => {
            const idForDetails = detailsButton.getAttribute('participantid');
            location.href = './participant-edit.html?participantId='+idForDetails;
        }
    }
    const greenBtns = document.getElementsByClassName('green-btn');
    for(let greenButton of greenBtns) {
        greenButton.onclick = () => {
            const participantId = greenButton.getAttribute('participantid');
            const participantName = greenButton.getAttribute('participantname');
            document.getElementById('participantNameToCourse').innerHTML = participantName;
            loadCoursesForParticipant(participantId);
            document.getElementById('coursesForParticipantModal').style.display = 'block';
        }
    }
}