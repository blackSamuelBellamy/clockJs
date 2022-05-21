const showingClock = () => {
    const container = document.querySelector('.container');

    const watch = new Date();
    let hours = watch.getHours();
    let minutes = watch.getMinutes();
    let seconds = watch.getSeconds();
    let amOrPm = 'AM';

    if (hours > 12) {
        hours -= 12;
        amOrPm = 'PM';
       
    }


    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    let myWatch = `${hours}: ${minutes}: ${seconds}  ${amOrPm}.`;
    container.textContent = myWatch;
};

setInterval(showingClock, 1000);

