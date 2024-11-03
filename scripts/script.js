
//draggable windows javascript via W3Schools --> https://www.w3schools.com/howto/howto_js_draggable.asp //

function makeElementDraggable(elmnt, headerId, closeBtnId) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = document.getElementById(headerId);
    const closeBtn = document.getElementById(closeBtnId);

    if (header) {
    header.onmousedown = dragMouseDown;
    }

    if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        elmnt.style.display = 'none';
    });
    }

    function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let newLeft = elmnt.offsetLeft - pos1;
    let newTop = elmnt.offsetTop - pos2;

    // Ensure the div stays within the viewport
    newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - elmnt.offsetWidth));
    newTop = Math.max(0, Math.min(newTop, window.innerHeight - elmnt.offsetHeight - document.querySelector('.taskbar').offsetHeight));

    elmnt.style.top = newTop + "px";
    elmnt.style.left = newLeft + "px";
    }

    function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    }
}

  // apply to each window
const windows = [
    { id: 'windowInfo', headerId: 'windowHeaderInfo', closeBtnId: 'closeBtnInfo' },
    { id: 'windowContact', headerId: 'windowHeaderContact', closeBtnId: 'closeBtnContact' }
];

windows.forEach(win => {
    makeElementDraggable(document.getElementById(win.id), win.headerId, win.closeBtnId);
});

  // close windows
    document.getElementById('infoIcon').addEventListener('click', function() {
    document.getElementById('windowInfo').style.display = 'block';
});


    document.getElementById('phoneIcon').addEventListener('click', function() {
    document.getElementById('windowContact').style.display = 'block';
});
;

 // close windows
document.getElementById('closeBtnInfo').addEventListener('click', function() {
    document.getElementById('windowInfo').style.display = 'none';
});

document.getElementById('closeBtnContact').addEventListener('click', function() {
    document.getElementById('windowContact').style.display = 'none';
});

//clock javascript via W3Schools --> https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock //

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
