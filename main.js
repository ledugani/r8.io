// update time in real time
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const timeString = new Date().toLocaleTimeString([], {
        hourCycle: 'h23',
        hour: '2-digit', 
        minute:'2-digit'
    });
    timeDisplay.textContent = timeString;
}
setInterval(refreshTime, 1000);

// update date
function refreshDate() {
    const dateDisplay = document.getElementById("date");
    const dateString = new Date().toLocaleDateString('en-GB', {
        day: 'numeric', 
        month: 'numeric'
    });
    dateDisplay.textContent = dateString;
}
setInterval(refreshDate, 1000);

// city toggle
function toggleCity2(e) {
    if(e.target.classList.contains('active')) {
        return;
    } else {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    }
}

function toggleCity1(e) {
    if(e.target.classList.contains('active')) {
        return;
    } else {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    }
}

// follow mouse on hover
function changeDef(e) {
    const figContainer = document.getElementById(e.target.id);
    const figCaption = document.getElementById(e.target.parentNode.children[1].children[1].id);
    figCaption.style.display = "block";

    function move(e) {
        var x = e.pageX;
        var y = e.pageY;
        figCaption.style.left =  x + 25 + "px";
        figCaption.style.top = y + 25 + "px";
    }

    figContainer.addEventListener("mousemove", (e) => {
        move(e);
    });

    figContainer.addEventListener("mouseout", () => {
        figCaption.style.display = "none";
        figContainer.removeEventListener("mousemove", (e) => {
            move(e);
        });
    });
}
