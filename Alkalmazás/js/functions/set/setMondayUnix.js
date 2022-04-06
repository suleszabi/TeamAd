const setMondayUnix = () => {
    const oneDayUnix = Date.parse('1970-01-02') - Date.parse('1970-01-01');
    const today = new Date();
    const todayUnix = Date.parse(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' 04:00:00');
    
    const todayWeekDay = today.getDay();
    let mondayUnix = 0;
    if(todayWeekDay == 1) {
        mondayUnix = todayUnix;
    } else if(todayWeekDay == 0) {
        mondayUnix = todayUnix - (oneDayUnix * 6);
    } else {
        mondayUnix = todayUnix - (oneDayUnix * (todayWeekDay - 1));
    }
    return mondayUnix;
}