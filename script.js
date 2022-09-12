// getting element by their ID
const hourEl = document.getElementById("hour")
const minEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

// custom function to update the hour minute and seconds
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "Am"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    if (h < 10) {
        h = "0"+h
    } 

    if (m < 10) {
        m = "0"+m
    }
    
    if (s < 10) {
        s = "0"+s
    }
    
    hourEl.innerText = h;
    minEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm)
    
    // keep running infinite time
    setTimeout(() => {
        updateClock();
    },1000)

}

//   calling first time when starting 
updateClock()