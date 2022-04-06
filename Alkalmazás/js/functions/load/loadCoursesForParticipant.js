const loadCoursesForParticipant = async (participantId) => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getCoursesForParticipant',
            'participantId':participantId
        }
    );
    const respondArray = JSON.parse(respondText);
    let resultHTML = '';
    for(let courseData of respondArray) {
        resultHTML +=
        '<tr>'+
            '<td class="text-end">'+courseData.id+'</td>'+
            '<td>'+courseData.name+'</td>'+
            '<td class="text-end">'+courseData.start_date+'</td>'+
            '<td class="text-end">'+courseData.end_date+'</td>'+
            '<td class="text-center"><span class="fw-bold green-btn to-course-btn" courseid="'+courseData.id+'" participantId="'+participantId+'" title="Résztvevő besorolása"><i class="fas fa-user-graduate"></i><i class="fas fa-arrow-right"></i></span></td>'+
        '</tr>';
    }
    document.getElementById('coursesForParticipantTableBody').innerHTML = resultHTML;
    const toCourseBtns = document.getElementsByClassName('to-course-btn');
    for(let toCourseButton of toCourseBtns) {
        toCourseButton.onclick = () => {
            const courseId = toCourseButton.getAttribute('courseid');
            const partId = toCourseButton.getAttribute('participantId');
            createPartCourseRelation(courseId, partId);
        }
    }
}