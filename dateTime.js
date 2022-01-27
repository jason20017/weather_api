
function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}

function updateClock(){
    var now = new Date();
    var dayname = now.getDay(),
        mon = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hr = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        per = "AM";

        if (hr == 0){
            hr = 12;
        }
        if (hr >= 12){
            hr = hr - 12;
            per="PM"
        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n=0+n);
            return n;
        }
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July","Aug","Sep", "Oct", "Nov", "Dec"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        var ids = ["day", "month", "daynum","year", "hour", "minutes", "second", "period" ];

        var values =[week[dayname], months[mon], dnum.pad(2), yr, hr.pad(2), min.pad(2), sec.pad(2), per];

        for(var i=0 ; i<ids.length ; i++)document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

