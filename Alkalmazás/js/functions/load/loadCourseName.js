const loadCourseName = async (courseId) => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getCourseName',
            'courseId':courseId
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj != false) {
        document.getElementById('toInput').value = respondObj.name+' résztvevői';
    } else {
        location.href = './courses.html';
    }
}