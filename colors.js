/*
var Links = {
    setColor : function(color){
        var alist = document.querySelectorAll('a')
        var i = 0;
        while(i<alist.length){
            alist[i].style.color = color;
            i+=1;
        }
    }
}
var Body = {
    setColor : function(color){
        document.querySelector('body').style.color = color;
    },
    setBackGroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body')
    if (self.value === 'night'){
        Body.setBackGroundColor('RGB(48,52,63)');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('RGB(255,211,26)');
    }else{
        Body.setBackGroundColor('white');
        Body.setColor('RGB(48,52,63)');
        self.value = 'night';
        Links.setColor('#35619D');
    }
}
*/

// jQuery
var Links = {
    setColor : function(color){
        $("a").css("color", color);
    }
}
var Body = {
    setColor : function(color){
        $("body").css("color", color)
    },
    setBackGroundColor : function(color){
        $("body").css("backgroundColor", color)
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body')
    if (self.value === 'night'){
        Body.setBackGroundColor('RGB(48,52,63)');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('RGB(255,211,26)');
    }else{
        Body.setBackGroundColor('white');
        Body.setColor('RGB(48,52,63)');
        self.value = 'night';
        Links.setColor('#35619D');
    }
}