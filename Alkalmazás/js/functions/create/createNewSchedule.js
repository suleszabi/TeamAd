const createNewSchedule = async (courseId) => {
    const startDayInput = document.getElementById('startDayInput');
    const startTimeInput = document.getElementById('startTimeInput');
    const endDayInput = document.getElementById('endDayInput');
    const endTimeInput = document.getElementById('endTimeInput');
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'createNewSchedule',
            'courseId':courseId,
            'start_day':startDayInput.value,
            'start_time':startTimeInput.value,
            'end_day':endDayInput.value,
            'end_time':endTimeInput.value,
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj.createNewSchedule) {
        startDayInput.selectedIndex = 0;
        endDayInput.selectedIndex = 0;
        startTimeInput.value = '';
        endTimeInput.value = '';
        loadSchedules(courseId);
    } else {
        document.getElementById('messageTableRow').style.display = 'table-row';
    }
    setTimeout(() => {document.getElementById('messageTableRow').style.display = 'none'}, 2500);
}