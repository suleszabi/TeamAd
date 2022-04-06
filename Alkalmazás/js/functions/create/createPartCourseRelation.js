const createPartCourseRelation = async (courseId, participantId) => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'createPartCourseRelation',
            'courseId':courseId,
            'participantId':participantId
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj.createPartCourseRelation) {
        document.getElementById('coursesForParticipantModal').style.display = 'none';
        document.getElementById('participantNameToCourse').innerHTML = '';
        document.getElementById('coursesForParticipantTableBody').innerHTML = '';
        document.getElementById('coursesForParticipantModalMsg').innerHTML = '';
    } else {
        document.getElementById('coursesForParticipantModalMsg').innerHTML =
        '<div class="alert alert-red mt-3 text-center"><p class="fw-bold mb-0">A résztvevőt nem sikerült besorolni a kurzusra!</p></div>';
    }
    setTimeout(() => {document.getElementById('coursesForParticipantModalMsg').innerHTML = ''}, 2500);
}