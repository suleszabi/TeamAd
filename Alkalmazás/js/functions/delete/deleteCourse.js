const deleteCourse = async (idToDelete) => {
    if(confirm('Biztosan törölni szeretnéd a kurzust?\r\n\r\nA törlés végleges és nem visszavonható!')) {
        let respondText = await makeRequest(
            'post',
            './php/requestReceiver.php',
            {
                'requestCause':'deleteCourse',
                'courseId':idToDelete
            }
        );
        respondObj = JSON.parse(respondText);
        if(respondObj.deleteCourse) {
            loadCourses();
        }
    }
}