const loadParticipantsForCourse = async (courseId) => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getParticipantsForCourse',
            'courseId':courseId
        }
    );
    const respondArray = JSON.parse(respondText);
    document.getElementById('courseParticipantCount').innerHTML = respondArray.length+' fő';
    let resultHTML = '';
    for(let participantData of respondArray) {
        resultHTML +=
        '<tr>'+
            '<td class="text-end">'+participantData.id+'</td>'+
            '<td>'+participantData.full_name+'</td>'+
            '<td>'+participantData.email+'</td>'+
            '<td>'+participantData.birthplace+'</td>'+
            '<td class="text-end">'+participantData.birthdate+'</td>'+
            '<td class="text-center"><span class="fw-bold delete-part-course" courseid="'+courseId+'" participantid="'+participantData.id+'" title="Résztvevő kisorolása"><i class="fas fa-user-times"></i></span></td>'+
        '</tr>';
    }
    document.getElementById('courseParticipantTableBody').innerHTML = resultHTML;
    const deleteBtns = document.getElementsByClassName('delete-part-course');
    for(let deleteButton of deleteBtns) {
        deleteButton.onclick = () => {
            const courseId = deleteButton.getAttribute('courseid');
            const participantid = deleteButton.getAttribute('participantid');
            deletePartCourse(courseId, participantid);
        }
    }
}