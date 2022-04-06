const loadCourses = async () => {
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getCourses'
        }
    );
    const respondArray = JSON.parse(respondText);
    let resultHTML = '';
    for(let courseData of respondArray) {
        resultHTML +=
        '<tr>'+
            '<td class="text-end">'+courseData.id+'</td>'+
            '<td>'+courseData.name+'</td>'+
            '<td class="text-end">'+courseData.occasion_count+' alk.</td>'+
            '<td class="text-end">'+courseData.start_date+'</td>'+
            '<td class="text-start">'+courseData.start_time+'</td>'+
            '<td class="text-start">'+dayNumToDayName(courseData.start_day)+'</td>'+
            '<td class="text-end">'+courseData.end_date+'</td>'+
            '<td class="text-start">'+courseData.end_time+'</td>'+
            '<td class="text-start">'+dayNumToDayName(courseData.end_day)+'</td>'+
            '<td class="text-center"><span class="fw-bold delete-btn" courseid="'+courseData.id+'" title="Kurzus törlése"><i class="fas fa-users-slash"></i></span></td>'+
            '<td class="text-center"><span class="mail-btn" courseid="'+courseData.id+'" title="Levélküldés a kurzus résztvevőinek"><i class="fas fa-envelope"></i></span></td>'+
            '<td class="text-center"><span class="fw-bold details-btn" courseid="'+courseData.id+'" title="Részletek"><i class="fas fa-file-alt"></i></span></td>'+
        '</tr>';
    }
    document.getElementById('coursesTableBody').innerHTML = resultHTML;
    const deleteBtns = document.getElementsByClassName('delete-btn');
    for(let deleteButton of deleteBtns) {
        deleteButton.onclick = () => {
            const idToDelete = deleteButton.getAttribute('courseid');
            deleteCourse(idToDelete);
        }
    }
    const mailBtns = document.getElementsByClassName('mail-btn');
    for(let mailButton of mailBtns) {
        mailButton.onclick = () => {
            const idForMail = mailButton.getAttribute('courseid');
            location.href = './sendmail.html?to=course&id='+idForMail;
        }
    }
    const detailsBtns = document.getElementsByClassName('details-btn');
    for(let detailsButton of detailsBtns) {
        detailsButton.onclick = () => {
            const idForDetails = detailsButton.getAttribute('courseid');
            location.href = './course-details.html?courseId='+idForDetails;
        }
    }
}