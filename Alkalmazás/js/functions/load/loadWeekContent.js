const loadWeekContent = async () => {
    const contentElemenets = document.getElementsByClassName('content');
    for(let element of contentElemenets) {
        element.innerHTML = '';
    }

    const oneDayUnix = Date.parse('1970-01-02') - Date.parse('1970-01-01');
    const weekStart = document.getElementById('date'+0).innerHTML;
    const weekEnd = document.getElementById('date'+6).innerHTML;
    const dayContentBoxHeight = document.getElementsByClassName('weekDayCol')[0].offsetHeight - 56;
    const dayContentBoxWidth = document.getElementsByClassName('weekDayCol')[0].offsetWidth - 1;
    
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getBreaktimesForWeek',
            'weekStart':weekStart,
            'weekEnd':weekEnd+' 23:59:59'
        }
    );
    const breaktimeArray = JSON.parse(respondText);

    respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'getOccasionsForWeek',
            'weekStart':weekStart,
            'weekEnd':weekEnd+' 23:59:59'
        }
    );
    const courseArray = JSON.parse(respondText);
    
    for(let data of breaktimeArray) {
        let startUnix = Date.parse(data.start);
        let start = new Date(startUnix);
        let endUnix = Date.parse(data.end);
        let end = new Date(endUnix);

        let startHour = start.getHours();
        startHour = (startHour < 10) ? '0'+startHour : startHour;
        startMin = start.getMinutes();
        startMin = (startMin < 10) ? '0'+startMin : startMin;
        let startTime = startHour+':'+startMin;

        let endHour = end.getHours();
        endHour = (endHour < 10) ? '0'+endHour : endHour;
        endMin = end.getMinutes();
        endMin = (endMin < 10) ? '0'+endMin : endMin;
        let endTime = endHour+':'+endMin;

        for(let i=0; i<7; i++) {
            let dayDate = document.getElementById('date'+i).innerHTML;
            let dayStartUnix = Date.parse(dayDate+' 00:00:00');
            let dayEndUnix = Date.parse(dayDate+' 23:59:59');
            let dayContentBox = document.getElementById('content'+i);
            if(startUnix < dayStartUnix && dayStartUnix < endUnix && endUnix <= dayEndUnix) {
                let marginTop = 0;
                let lengthUnix = Date.parse('1980-01-01 '+end.getHours()+':'+end.getMinutes()+':00') - Date.parse('1980-01-01 00:00:00');
                let lengthPx = dayContentBoxHeight * (lengthUnix/oneDayUnix);
                dayContentBox.innerHTML +=
                '<div class="break-box" style="margin-top: '+marginTop+'px; width: '+dayContentBoxWidth+'px; height: '+(lengthPx-2)+'px"><p>'+data.name+'</p><p>'+endTime+'-ig</p></div>';
            } else if(dayStartUnix <= startUnix && startUnix < dayEndUnix && dayEndUnix < endUnix) {
                let marginTopUnix = Date.parse('1980-01-01 '+start.getHours()+':'+start.getMinutes()+':00') - Date.parse('1980-01-01 00:00:00');
                let marginTop = dayContentBoxHeight * (marginTopUnix/oneDayUnix);
                let lengthUnix = Date.parse('1980-01-01 23:59:59') - Date.parse('1980-01-01 '+start.getHours()+':'+start.getMinutes()+':00');
                let lengthPx = dayContentBoxHeight * (lengthUnix/oneDayUnix);
                dayContentBox.innerHTML +=
                '<div class="break-box" style="margin-top: '+marginTop+'px; width: '+dayContentBoxWidth+'px; height: '+(lengthPx-2)+'px"><p>'+data.name+'</p><p>'+startTime+'-tól</p></div>';
            } else if(startUnix < dayStartUnix && dayStartUnix < dayEndUnix && dayEndUnix < endUnix) {
                let marginTop = 0;
                let lengthPx = dayContentBoxHeight;
                dayContentBox.innerHTML +=
                '<div class="break-box" style="margin-top: '+marginTop+'px; width: '+dayContentBoxWidth+'px; height: '+(lengthPx-2)+'px"><p>'+data.name+'</p></div>';
            } else if(dayStartUnix <= startUnix && startUnix < endUnix && endUnix <= dayEndUnix) {
                let marginTopUnix = Date.parse('1980-01-01 '+start.getHours()+':'+start.getMinutes()+':00') - Date.parse('1980-01-01 00:00:00');
                let marginTop = dayContentBoxHeight * (marginTopUnix/oneDayUnix);
                let lengthUnix = Date.parse('1980-01-01 '+end.getHours()+':'+end.getMinutes()+':00') - Date.parse('1980-01-01 '+start.getHours()+':'+start.getMinutes()+':00');
                let lengthPx = dayContentBoxHeight * (lengthUnix/oneDayUnix);
                dayContentBox.innerHTML +=
                '<div class="break-box" style="margin-top: '+marginTop+'px; width: '+dayContentBoxWidth+'px; height: '+(lengthPx-2)+'px"><p>'+data.name+'</p><p>'+startTime+' - '+endTime+'</p></div>';
            }
        }
    }
    const breakBoxes = document.getElementsByClassName('break-box');
    for(let box of breakBoxes) {
        box.onclick = () =>{
            location.href = './breaktimes.html';
        }
    }

    for(let data of courseArray) {
        let startUnix = Date.parse(data.start);
        let start = new Date(startUnix);
        let endUnix = Date.parse(data.end);
        let end = new Date(endUnix);

        let startHour = start.getHours();
        startHour = (startHour < 10) ? '0'+startHour : startHour;
        startMin = start.getMinutes();
        startMin = (startMin < 10) ? '0'+startMin : startMin;
        let startTime = startHour+':'+startMin;

        let endHour = end.getHours();
        endHour = (endHour < 10) ? '0'+endHour : endHour;
        endMin = end.getMinutes();
        endMin = (endMin < 10) ? '0'+endMin : endMin;
        let endTime = endHour+':'+endMin;

        for(let i=0; i<7; i++) {
            let dayDate = document.getElementById('date'+i).innerHTML;
            let dayStartUnix = Date.parse(dayDate+' 00:00:00');
            let dayEndUnix = Date.parse(dayDate+' 23:59:59');
            let dayContentBox = document.getElementById('content'+i);
            if(startUnix < dayStartUnix && dayStartUnix < endUnix && endUnix <= dayEndUnix) {
                let marginTop = 0;
                let lengthUnix = Date.parse('1980-01-01 '+end.getHours()+':'+end.getMinutes()+':00') - Date.parse('1980-01-01 00:00:00');
                let lengthPx = dayContentBoxHeight * (lengthUnix/oneDayUnix);
                dayContentBox.innerHTML +=
                '<div courseid="'+data.id+'" class="course-box" style="margin-top: '+marginTop+'px; width: '+dayContentBoxWidth+'px; height: '+lengthPx+'px"><p>'+data.name+'</p><p>'+endTime+'-ig</p></div>';
            } else if(dayStartUnix <= startUnix && startUnix < dayEndUnix && dayEndUnix < endUnix) {
                let marginTopUnix = Date.parse('1980-01-01 '+start.getHours()+':'+start.getMinutes()+':00') - Date.parse('1980-01-01 00:00:00');
                let marginTop = dayContentBoxHeight * (marginTopUnix/oneDayUnix);
                let lengthUnix = Date.parse('1980-01-01 23:59:59') - Date.parse('1980-01-01 '+start.getHours()+':'+start.getMinutes()+':00');
                let lengthPx = dayContentBoxHeight * (lengthUnix/oneDayUnix);
                dayContentBox.innerHTML +=
                '<div courseid="'+data.id+'" class="course-box" style="margin-top: '+marginTop+'px; width: '+dayContentBoxWidth+'px; height: '+lengthPx+'px"><p>'+data.name+'</p><p>'+startTime+'-tól</p></div>';
            } else if(startUnix < dayStartUnix && dayStartUnix < dayEndUnix && dayEndUnix < endUnix) {
                let marginTop = 0;
                let lengthPx = dayContentBoxHeight;
                dayContentBox.innerHTML +=
                '<div courseid="'+data.id+'" class="course-box" style="margin-top: '+marginTop+'px; width: '+dayContentBoxWidth+'px; height: '+lengthPx+'px"><p>'+data.name+'</p></div>';
            } else if(dayStartUnix <= startUnix && startUnix < endUnix && endUnix <= dayEndUnix) {
                let marginTopUnix = Date.parse('1980-01-01 '+start.getHours()+':'+start.getMinutes()+':00') - Date.parse('1980-01-01 00:00:00');
                let marginTop = dayContentBoxHeight * (marginTopUnix/oneDayUnix);
                let lengthUnix = Date.parse('1980-01-01 '+end.getHours()+':'+end.getMinutes()+':00') - Date.parse('1980-01-01 '+start.getHours()+':'+start.getMinutes()+':00');
                let lengthPx = dayContentBoxHeight * (lengthUnix/oneDayUnix);
                dayContentBox.innerHTML +=
                '<div courseid="'+data.id+'" class="course-box" style="margin-top: '+marginTop+'px; width: '+dayContentBoxWidth+'px; height: '+lengthPx+'px"><p>'+data.name+'</p><p>'+startTime+' - '+endTime+'</p></div>';
            }
        }
    }
    const courseBoxes = document.getElementsByClassName('course-box');
    for(let box of courseBoxes) {
        box.onclick = () =>{
            let courseId = box.getAttribute('courseid');
            location.href = './course-details.html?courseId='+courseId;
        }
    }

}