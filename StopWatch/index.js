console.log("hi");
let timer = document.getElementById('time');
let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');
let startButton= document.getElementById('startButton');
let stopButton= document.getElementById('stopButton');
let resetButton= document.getElementById('resetButton');

let time ="00:00:00";
let hour=0;
let min=0;
let sec=0
timer.textContent=time;
let timerStart = ()=>{
    sec++;
    if(sec >= 60){
        sec=0;
        min++;
        if(min >=60){
            min=0;
            sec=0;
            hour++;
            min.innerHTML= '0'+min;
            if(hour >=12){
                hour=0;
                min=0;
                sec=0;
                hour.innerHTML= '0'+hour;
            }
            console.log(sec,'sec');
            console.log(min,'min');
        }
            sec.innerHTML= '0'+sec;
            console.log(sec,"sec");
    }
timer.textContent =(hour <10? '0'+ hour.toString() :hour)+":"+ (min <10? '0'+ min.toString() :min)+ ":"+ (sec <10? '0'+ sec.toString() :sec);
};
let interval;
startButton.onclick = function(){
    console.log("from start");

    clearInterval(interval);
     interval = setInterval(timerStart,1000);
}

stopButton.onclick = function(){
    console.log("from stop");
    clearInterval(interval);
}


resetButton.onclick = function(){
    console.log("from stop");
    clearInterval(interval);
    timer.textContent=time;
    hour=0;
    min=0;
    sec=0;
}

