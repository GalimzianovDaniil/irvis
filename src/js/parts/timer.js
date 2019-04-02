export function timer() {
    let deadline = new Date(2019, 3, 5, 0, 0, 0, 0),
        dates    = new Array();
    const timerAreas = document.querySelectorAll('.timer__value');
    setInterval(function(){
        let nowTime  = new Date();
        let seconds = '00',
            minutes = '00',
            hours   = '00',
            days    = '00';
        if ((deadline - nowTime) > 0) {
            seconds  = 
                `${Math.floor(Math.floor((deadline - nowTime) / 1000 % 60) / 10)}${Math.floor((deadline - nowTime) / 1000 % 60) % 10}`;
            minutes  = 
                `${Math.floor(Math.floor((deadline - nowTime) / 1000 / 60 % 60) / 10)}${Math.floor((deadline - nowTime) / 1000 / 60 % 60) % 10}`;
            hours    =
                `${Math.floor(Math.floor((deadline - nowTime) / 1000 / 60 / 60 % 24) / 10)}${Math.floor((deadline - nowTime) / 1000 / 60 / 60 % 24) % 10}`;
            days     = 
                `${Math.floor(Math.floor((deadline - nowTime) / 1000 / 60 / 60 / 24) / 10)}${Math.floor((deadline - nowTime) / 1000 / 60 / 60 / 24) % 10}`;
        } 
        dates = [days, hours, minutes, seconds];
        
        dates.forEach(function(item, i){
            timerAreas[i].innerHTML = item;
        });
    }, 100);
}