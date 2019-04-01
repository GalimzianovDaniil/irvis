export function timer() {
    let deadline = new Date(2019, 3, 5, 0, 0, 0, 0),
        timer = document.querySelector('.timer');

    setInterval(function(){
        let nowTime  = new Date(),
            seconds  = 
                `${Math.floor(Math.floor((deadline - nowTime) / 1000 % 60) / 10)}${Math.floor((deadline - nowTime) / 1000 % 60) % 10}`,
            minutes  = 
                `${Math.floor(Math.floor((deadline - nowTime) / 1000 / 60 % 60) / 10)}${Math.floor((deadline - nowTime) / 1000 / 60 % 60) % 10}`,
            hours    =
                `${Math.floor(Math.floor((deadline - nowTime) / 1000 / 60 / 60 % 24) / 10)}${Math.floor((deadline - nowTime) / 1000 / 60 / 60 % 24) % 10}`,
            days     = 
                `${Math.floor(Math.floor((deadline - nowTime) / 1000 / 60 / 60 / 24) / 10)}${Math.floor((deadline - nowTime) / 1000 / 60 / 60 / 24) % 10}`;
        timer.textContent = `${days}:${hours}:${minutes}:${seconds}`;
    }, 100);
}