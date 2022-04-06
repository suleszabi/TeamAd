const loadCourseData = async (courseId) => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getCourseData',
            'courseId':courseId
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj != false) {
        document.getElementById('courseNameCell').innerHTML = respondObj.name;
        document.getElementById('occasionCountCell').innerHTML = respondObj.occasion_count+' alk.';
    } else {
        location.href = './courses.html';
    }
}