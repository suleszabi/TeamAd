const setWeekDays = (mondayUnix) => {
    const oneDayUnix = Date.parse('1970-01-02') - Date.parse('1970-01-01');
    for(let i=0; i<7; i++) {
        let plusUnix = oneDayUnix * i;
        let date = new Date(mondayUnix + plusUnix);
        document.getElementById('date'+i).innerHTML = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    }
}