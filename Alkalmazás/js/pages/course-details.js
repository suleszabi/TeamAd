loginCheck();
const courseId = parseInt(getValueFromUrl('courseId'));
if(isNaN(courseId)) {
    location.href = './courses.html';
}

document.addEventListener('DOMContentLoaded', () => {
    setNavbar();
    setUsername();
    loadCourseData(courseId);
    loadSchedules(courseId);
    loadCourseOccasions(courseId);
    loadParticipantsForCourse(courseId);
    validateCourseNameChangeForm();
    document.getElementById('courseNameChangeForm').onsubmit = (e) => {
        e.preventDefault();
        changeCourseName(courseId);
    }
    document.getElementById('startDayInput').onchange = (e) => {
        document.getElementById('endDayInput').selectedIndex = e.target.selectedIndex;
    }
    document.getElementById('newScheduleForm').onsubmit = (e) => {
        e.preventDefault();
        createNewSchedule(courseId);
    }
    document.getElementById('occasionGeneratorForm').onsubmit = (e) => {
        e.preventDefault();
        createOccasions(courseId);
    }
    const newCourseNameInput = document.getElementById('newCourseNameInput');
    newCourseNameInput.onkeyup = validateCourseNameChangeForm;
    newCourseNameInput.setAttribute('autocomplete', 'off');
});