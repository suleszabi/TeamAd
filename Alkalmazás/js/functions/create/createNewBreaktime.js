const createNewBreaktime = async () => {
    const breaktimeNameInput = document.getElementById('breaktimeNameInput');
    const startDateInput = document.getElementById('startDateInput');
    const startTimeInput = document.getElementById('startTimeInput');
    const endDateInput = document.getElementById('endDateInput');
    const endTimeInput = document.getElementById('endTimeInput');
    let respondText = await makeRequest(
        'post',
        './php/requestReceiver.php',
        {
            'requestCause':'createNewBreaktime',
            'breaktimeName':breaktimeNameInput.value,
            'start':startDateInput.value+' '+startTimeInput.value+':00',
            'end':endDateInput.value+' '+endTimeInput.value+':59',
        }
    );
    const respondObj = JSON.parse(respondText);
    if(respondObj.createNewBreaktime) {
        loadBreaktimes();
    } else {
        document.getElementById('messageBox').innerHTML = 
        '<div class="mt-3 mb-0 alert alert-red text-center"><p class="fw-bold">Az új szünet rögzítése sikertelen!</p><p class="mb-0">A szünet kezdetének korábbinak kell lennie a végénél.</p></div>';
    }
    setTimeout(() => {document.getElementById('messageBox').innerHTML = ''}, 2500);
}