let hours = 0;
let minute  = 0;
let second = 0;
let counter = 0;
let timer = false;

const start = () =>{
   timer = true;
   stopWatch();
}

const stop = () =>{
 timer = false;
}

const reset = () =>{
    timer = false;
    hours = 0;
    minute  = 0;
    second = 0;
    counter = 0;
    document.getElementById('counter').innerHTML = '00';
    document.getElementById('second').innerHTML = '00';
    document.getElementById('minite').innerHTML = '00';
    document.getElementById('hour').innerHTML = '00';
}

const stopWatch = () =>{
    if(timer == true){
        counter ++;
        if(counter == 100){
            second += 1;
            counter = 0;
        }

        if(second == 60){
            minute += 1;
            second = 0;
        }

        if(minute == 60){
            hours += 1;
            minute = 0;
            second = 0;
        }

        document.getElementById('counter').innerHTML = counter;
        document.getElementById('second').innerHTML = second;
        document.getElementById('minite').innerHTML = minute;
        document.getElementById('hour').innerHTML = hours;
        setTimeout("stopWatch()", 10);
    } 
}