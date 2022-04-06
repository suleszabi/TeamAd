const loadSchedules = async (courseId) => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getSchedules',
            'courseId':courseId
        }
    );
    const respondArray = JSON.parse(respondText);
    let resultHTML = '';
    if(respondArray.length == 0) {
        document.getElementById('startDateInput').disabled = true;
        document.getElementById('occasionCountInput').disabled = true;
        document.getElementById('occasionGeneratorFormSubmit').disabled = true;
    } else {
        document.getElementById('startDateInput').disabled = false;
        document.getElementById('occasionCountInput').disabled = false;
        document.getElementById('occasionGeneratorFormSubmit').disabled = false;
    }
    for(let scheduleData of respondArray) {
        resultHTML +=
        '<tr>'+
            '<td class="text-end">'+dayNumToDayName(scheduleData.start_day)+'</td>'+
            '<td>'+scheduleData.start_time+'</td>'+
            '<td class="text-end">'+dayNumToDayName(scheduleData.end_day)+'</td>'+
            '<td>'+scheduleData.end_time+'</td>'+
            '<td class="text-center"><span class="fw-bold delete-btn" scheduleid="'+scheduleData.id+'" title="Beosztás törlése"><i class="fas fa-calendar-times"></i></span></td>'+
        '</tr>';
    }
    document.getElementById('scheduleTableBody').innerHTML = resultHTML;
    const deleteBtns = document.getElementsByClassName('delete-btn');
    for(let deleteButton of deleteBtns) {
        deleteButton.onclick = () => {
            const idToDelete = deleteButton.getAttribute('scheduleid');
            deleteSchedule(idToDelete, courseId);
        }
    }
}