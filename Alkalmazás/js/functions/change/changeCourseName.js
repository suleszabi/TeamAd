const changeCourseName = async (courseId) => {
    const newCourseNameInput = document.getElementById('newCourseNameInput');
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'changeCourseName',
            'courseId':courseId,
            'newCourseName':newCourseNameInput.value
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj.changeCourseName) {
        newCourseNameInput.value = '';
        validateCourseNameChangeForm();
        loadCourseData(courseId);
    } else {
        document.getElementById('messageBox').innerHTML =
        '<div class="alert alert-red p-2 mb-0 mt-3 text-center"><p class="fw-bold mb-0">A kurzus nevét nem sikerült módosítani!</p></div>';
    }
    setTimeout(() => {document.getElementById('messageBox').innerHTML = ''}, 2500);
}