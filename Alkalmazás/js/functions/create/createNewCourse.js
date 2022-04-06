const createNewCourse = async () => {
    const courseNameInput = document.getElementById('courseNameInput');
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'createNewCourse',
            'courseName':courseNameInput.value
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj.createNewCourse) {
        const inputElements = document.getElementsByTagName('input');
        for(let input of inputElements) {
            input.value = '';
        }
        validateNewCourseForm();
        document.getElementById('messageBox').innerHTML =
        '<div class="alert alert-green p-2 mb-0 mt-3 text-center"><p class="mb-0 fw-bold">Az új kurzus létre lett hozva.</p></div>';
        loadCourses();
    } else {
        document.getElementById('messageBox').innerHTML =
        '<div class="alert alert-red p-2 mb-0 mt-3 text-center"><p class="fw-bold mb-0">A kurzust nem sikerült létrehozni!</p></div>';
    }
    setTimeout(() => {document.getElementById('messageBox').innerHTML = ''}, 2500);
}