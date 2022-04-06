const deleteBreaktime = async (breaktimeId) => {
    if(confirm('Biztosan törölni szeretnéd a szünetet?\r\n\r\nA törlés végleges és nem visszavonható!')) {
        let respondText = await makeRequest(
            'post',
            './php/requestReceiver.php',
            {
                'requestCause':'deleteBreaktime',
                'breaktimeId':breaktimeId
            }
        );
        respondObj = JSON.parse(respondText);
        if(respondObj.deleteBreaktime) {
            loadBreaktimes();
        }
    }
}