loginCheck();

const to = getValueFromUrl('to');
const id = parseInt(getValueFromUrl('id'));
if(!(to == 'participant' || to == 'course') || isNaN(id)) {
    location.href = './';
}

document.addEventListener('DOMContentLoaded', () => {
    setNavbar();
    setUsername();
    if(to == 'participant') {
        loadParticipantName(id);
    } else if(to == 'course') {
        loadCourseName(id);
    }
    document.getElementById('sendmailForm').onsubmit = (e) => {
        e.preventDefault();
        if(to == 'participant') {
            sendMail('sendMailToParticipant', id);
        } else if(to == 'course') {
            sendMail('sendMailToCourse', id);
        }
    }
});