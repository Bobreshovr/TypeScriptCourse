var index = 0;
var listTime = [0];
var timer = 0;
var circleTime = [];
var indexListTime = 0;
var indexCircleTime = 0;
var stringCircleTime = "";
document.getElementById("start").addEventListener('click', function () {
    if (timer == 0) {
        listTime = [0];
        circleTime = [];
        indexListTime = 0;
        indexCircleTime = 0;
        stringCircleTime = "";
        timer = new Date().getTime();
    }
});
document.getElementById("stop").addEventListener('click', function () {
    timer = 0;
});
document.getElementById("circle").addEventListener('click', function () {
    if (timer != 0) {
        indexListTime++;
        listTime[indexListTime] = (new Date().getTime() - timer) / 1000;
        circleTime[indexCircleTime] = listTime[indexListTime] - listTime[indexListTime - 1];
        stringCircleTime += circleTime[indexCircleTime].toFixed(2) + "\r\n";
        indexCircleTime++;
    }
});
var intevalTime = setInterval(function () {
    if (!timer)
        return;
    document.getElementById("timer").innerHTML = (new Date().getTime() - timer) / 1000;
    document.getElementById("listTimer").innerHTML = stringCircleTime;
}, 16.666);
