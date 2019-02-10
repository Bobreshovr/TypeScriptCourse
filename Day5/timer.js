var laptime = 0;
document.getElementById('start').onclick = function () { laptime = new Date().getTime(); };
document.getElementById('stop').onclick = function () { laptime = 0; };
var interval = setInterval(function () {
    if (laptime == 0)
        return;
    document.getElementById('laptime').innerHTML = (new Date().getTime() - laptime) / 1000;
}, 100);
