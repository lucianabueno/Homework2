function countdown(element, minutes, seconds) {
    var el = document.getElementById(element);

    var interval = setInterval(function() {
        if(seconds == 0) {
            if(minutes == 0) {
                (el.innerHTML = "STOP!");     

                clearInterval(interval);
                return;
            } else {
                minutes--;
                seconds = 60;
            }
        }

        if(minutes > 0) {
            var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
        } else {
            var minute_text = '';
        }

        var second_text = seconds > 1 ? '' : '';
        el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
        seconds--;
    }, 1000);
}


var start1 = document.getElementById('timer1');
var start2 = document.getElementById('timer2');
var start3 = document.getElementById('timer3');
var start4 = document.getElementById('timer4');



start1.onclick = function() {
    countdown('countdown1', 6, 0);
}

start2.onclick = function() {
    countdown('countdown2', 7, 0);
}

start3.onclick = function() {
    countdown('countdown3', 9, 0);
}

start4.onclick = function() {
    countdown('countdown4', 12, 0);
}