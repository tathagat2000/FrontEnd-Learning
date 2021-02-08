let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let div = document.querySelector(".time");
let current=0;
let interval=undefined
function update(currenttime)
{
    let hours = Math.floor(currenttime/3600);
    currenttime%=3600;
    let minutes = Math.floor(currenttime/60);
    currenttime%=60;
    let seconds = currenttime;
    if(hours<=9) hours = "0"+hours;

    if(minutes<=9) minutes = "0"+minutes;
    console.log(seconds);
    if(seconds<=9) seconds = "0" + seconds;
    console.log(seconds);
    
    let final = hours + ":" + minutes + ":" + seconds;
    div.textContent = final;
}
function startwatch()
{
    interval = setInterval(()=>{
        current++;
        update(current);
    } , 1000);

    start.disabled=true;

}

function stopwatch()
{
    clearInterval(interval);
    start.disabled=false;
}

function resetwatch()
{
    clearInterval(interval);
    start.disabled=false;
    current=0;
    update(current);
}

start.addEventListener("click" , startwatch);
stop.addEventListener("click" , stopwatch);
reset.addEventListener("click" , resetwatch);