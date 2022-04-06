const dayNumToDayName = (dayNum) => {
    let dayName = '';
    switch(parseInt(dayNum)) {
        case 0:
            dayName = 'Vasárnap';
        break;
        case 1:
            dayName = 'Hétfő';
        break;
        case 2:
            dayName = 'Kedd';
        break;
        case 3:
            dayName = 'Szerda';
        break;
        case 4:
            dayName = 'Csütörtök';
        break;
        case 5:
            dayName = 'Péntek';
        break;
        case 6:
            dayName = 'Szombat';
        break;
    }
    return dayName;
}