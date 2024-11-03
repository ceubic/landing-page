
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

  // Apply to each window
const windows = [
    { id: 'windowInfo', headerId: 'windowHeaderInfo', closeBtnId: 'closeBtnInfo' },
    { id: 'windowMusic', headerId: 'windowHeaderMusic', closeBtnId: 'closeBtnMusic' },
    { id: 'windowGallery', headerId: 'windowHeaderGallery', closeBtnId: 'closeBtnGallery' },
    { id: 'windowContact', headerId: 'windowHeaderContact', closeBtnId: 'closeBtnContact' }
];

windows.forEach(win => {
    makeElementDraggable(document.getElementById(win.id), win.headerId, win.closeBtnId);
});

  // close windows
    document.getElementById('infoIcon').addEventListener('click', function() {
    document.getElementById('windowInfo').style.display = 'block';
});

    document.getElementById('musicPlayerIcon').addEventListener('click', function() {
    document.getElementById('windowMusic').style.display = 'block';
});

    document.getElementById('phoneIcon').addEventListener('click', function() {
    document.getElementById('windowContact').style.display = 'block';
});

    document.getElementById('imageFolderIcon').addEventListener('click', function() {
    document.getElementById('windowGallery').style.display = 'block';
});


 // close windows
document.getElementById('closeBtnInfo').addEventListener('click', function() {
    document.getElementById('windowInfo').style.display = 'none';
});

document.getElementById('closeBtnMusic').addEventListener('click', function() {
    document.getElementById('windowMusic').style.display = 'none';
});

document.getElementById('closeBtnContact').addEventListener('click', function() {
    document.getElementById('windowContact').style.display = 'none';
});

document.getElementById('closeBtnGallery').addEventListener('click', function() {
    document.getElementById('windowGallery').style.display = 'none';
});

//




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

//music player via GeeksforGeeks --> https://www.geeksforgeeks.org/create-a-music-player-using-javascript/ 

const audioPlayer = document.getElementById('audioPlayer');
const playPauseIcon = document.getElementById('playPauseIcon');
const songTitle = document.getElementById('songTitle');
const tracks = [
    { title: "Jim Andron - Another Day", src: "https://files.catbox.moe/smmedu.mp3" },
    { title: "Jim Andron - Soaring", src: "https://files.catbox.moe/dncvoi.mp3" },
    { title: "Jim Andron - Fondly Sarah", src: "https://files.catbox.moe/t2oke0.mp3" },
    { title: "Jim Andron - Foster's Freeze", src: "https://files.catbox.moe/2pcx79.mp3" },
    { title: "Jim Andron - Only You", src: "https://files.catbox.moe/sulf7n.mp3" },
    { title: "Jim Andron - The Goodnight Wish", src: "https://files.catbox.moe/mv6wm4.mp3" }
];
let trackIndex = 0;

function loadTrack(index) {
    audioPlayer.src = tracks[index].src;
    songTitle.textContent = tracks[index].title;
    playPauseIcon.className = "fas fa-play";
}

function playpauseTrack() {
    if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseIcon.className = "fas fa-pause";
    } else {
    audioPlayer.pause();
    playPauseIcon.className = "fas fa-play";
    }
}

function nextTrack() {
    trackIndex = (trackIndex + 1) % tracks.length;
    loadTrack(trackIndex);
    audioPlayer.play();
    playPauseIcon.className = "fas fa-pause";
}

function prevTrack() {
    trackIndex = (trackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(trackIndex);
    audioPlayer.play();
    playPauseIcon.className = "fas fa-pause";
}

function seekTo() {
    const seekSlider = document.querySelector('.seek_slider');
    const seekTo = audioPlayer.duration * (seekSlider.value / 100);
    audioPlayer.currentTime = seekTo;
}

audioPlayer.addEventListener('timeupdate', function() {
    const seekSlider = document.querySelector('.seek_slider');
    const currentTime = document.querySelector('.current-time');
    const totalDuration = document.querySelector('.total-duration');
    
    const seekPosition = 100 * (audioPlayer.currentTime / audioPlayer.duration);
    seekSlider.value = seekPosition;

    const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
    const currentSeconds = Math.floor(audioPlayer.currentTime - currentMinutes * 60);
    const durationMinutes = Math.floor(audioPlayer.duration / 60);
    const durationSeconds = Math.floor(audioPlayer.duration - durationMinutes * 60);

    currentTime.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
    totalDuration.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
});

audioPlayer.addEventListener('loadedmetadata', updateDuration);
audioPlayer.addEventListener('ended', nextTrack);

function updateDuration() {
    const totalDuration = document.querySelector('.total-duration');
    const durationMinutes = Math.floor(audioPlayer.duration / 60);
    const durationSeconds = Math.floor(audioPlayer.duration - durationMinutes * 60);
    totalDuration.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
}

loadTrack(trackIndex);