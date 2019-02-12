var timer = undefined;
var arroundTimes = [];
var helper = [0];
var indexHelper = 0;
var index = 0;
var stringIteration = '';
document.getElementById('start').addEventListener('click', function(){
    if(timer==0){
        arroundTimes = [];
        helper = [0];
        indexHelper = 0;
        index = 0;
    }
    timer = new Date().getTime()
    if(arroundTimes.length!=0){
        arroundTimes.length = 0;
        

    }
})
document.getElementById('stop').addEventListener('click', function(){
    timer = 0
})
document.getElementById('iteration').addEventListener('click', function(){
    if(timer!=0){
        indexHelper++
        helper[indexHelper] = ((new Date().getTime()-timer)/1000);
        arroundTimes[index] = helper[indexHelper] - helper[indexHelper - 1];
        console.log(arroundTimes.map(format));
        stringIteration +=  arroundTimes[index].toFixed(2) + " | ";
        index++;
        
    }
})
format = (num) => ((Math.round(num*10)/10).toFixed(1));

var interval = setInterval(() => {
    if (!timer) return ;
    document.getElementById('timer').innerHTML = (new Date().getTime()-timer)/1000;
    document.getElementById("arround").innerHTML = stringIteration;
},
16.666);
