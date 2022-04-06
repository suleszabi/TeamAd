const createOccasions = async (courseId) => {
    const startDateInput = document.getElementById('startDateInput');
    const occasionCountInput = document.getElementById('occasionCountInput');
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'createOccasions',
            'courseId':courseId,
            'startDate':startDateInput.value,
            'newOccasionCount':occasionCountInput.value
        }
    );
    loadCourseData(courseId);
    loadCourseOccasions(courseId);
    const respondObj = JSON.parse(respondText);
    if(respondObj.createOccasions) {
        startDateInput.value = '';
        occasionCountInput.value = '';
        document.getElementById('occasionGeneratorMessageBox').innerHTML = '';
    } else {
        document.getElementById('occasionGeneratorMessageBox').innerHTML =
        '<div class="mt-3 mb-0 alert alert-red text-center"><p><strong>A kurzus ütemezése sikertelen volt!</strong></p><p class="mb-0">Kérlek, ellenőrizd, hogy a tervezett beosztás nem ütközik-e egy másik kurzussal!</p></div>';
    }
    setTimeout(() => {document.getElementById('occasionGeneratorMessageBox').innerHTML = ''}, 2500);
}