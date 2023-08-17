const HourEl = document.getElementById("Hours");
const MinutesEl = document.getElementById("Minutes");
const SecondsEl = document.getElementById("Seconds");
const AMPMEl = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h :h;
    m = m < 10 ? "0" + m :m;
    s = s < 10 ? "0" + s :s

    HourEl.innerText = h;
    MinutesEl.innerText = m;
    SecondsEl.innerText = s;
    AMPMEl,(innerText = ampm);
    setTimeout(()=>{
        updateclock();

  }, 1000);
}

updateclock();

