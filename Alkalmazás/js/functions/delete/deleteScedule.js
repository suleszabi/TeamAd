const deleteSchedule = async (scheduleId, courseId) => {
    if(confirm('Biztosan törölni szeretnéd a beosztást?\r\n\r\nA törlés végleges és nem visszavonható!')) {
        let respondText = await makeRequest(
            'post',
            './php/requestReceiver.php',
            {
                'requestCause':'deleteSchedule',
                'scheduleId':scheduleId
            }
        );
        respondObj = JSON.parse(respondText);
        if(respondObj.deleteSchedule) {
            loadSchedules(courseId);
        }
    }
}