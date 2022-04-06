loginCheck();

document.addEventListener('DOMContentLoaded', () => {
    setNavbar();
    setUsername();

    let mondayUnix = setMondayUnix();
    setWeekDays(mondayUnix);

    loadWeekContent();

    //const oneDayUnix = Date.parse('1970-01-02') - Date.parse('1970-01-01');
    const oneWeekUnix = 604800000;
    document.getElementById('prevWeekBtn').onclick = () => {
        mondayUnix -= oneWeekUnix;
        setWeekDays(mondayUnix);
        loadWeekContent()
    }
    document.getElementById('nextWeekBtn').onclick = () => {
        mondayUnix += oneWeekUnix;
        setWeekDays(mondayUnix);
        loadWeekContent()
    }
    window.onresize = () => {
        loadWeekContent();
    }
});