const loadCourseOccasions = async (courseId) => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getCourseOccasions',
            'courseId':courseId
        }
    );
    const respondArray = JSON.parse(respondText);
    let resultHTML = '';
    if(respondArray.length > 0) {
        document.getElementById('startDateInput').value = respondArray[0].start_date;
        document.getElementById('occasionCountInput').value = respondArray.length;
        document.getElementById('occasionGeneratorFormSubmit').innerHTML = '<i class="fas fa-play"></i> Újraütemezés';
    }
    for(let scheduleData of respondArray) {
        resultHTML +=
        '<tr>'+
            '<td class="text-end">'+scheduleData.start_date+'</td>'+
            '<td class="text-center">'+scheduleData.start_day+'</td>'+
            '<td class="text-start">'+scheduleData.start_time+'</td>'+
            '<td class="text-end">'+scheduleData.end_date+'</td>'+
            '<td class="text-center">'+scheduleData.end_day+'</td>'+
            '<td class="text-start">'+scheduleData.end_time+'</td>'+
        '</tr>';
    }
    document.getElementById('occasionTableBody').innerHTML = resultHTML;
    /*const deleteBtns = document.getElementsByClassName('delete-btn');
    for(let deleteButton of deleteBtns) {
        deleteButton.onclick = () => {
            const idToDelete = deleteButton.getAttribute('scheduleid');
            deleteSchedule(idToDelete, courseId);
        }
    }*/
}