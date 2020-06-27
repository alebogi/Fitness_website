function setLanguage(){
    
}

function ugliraj(){
    tags = document.getElementsByClassName("ugl");
    pL = 10;
    var incr = window.innerWidth;
    incr = incr/200;
    
    for(var i = 0; i<tags.length; i++){
        pL+=incr+2;
        tags[i].style.paddingLeft = pL+"px";
    }

    tags = document.getElementsByClassName("ugl1");
    pL = 10;
    
    for(var i = 0; i<tags.length; i++){
        pL+=(incr*2 + 5);
        tags[i].style.paddingLeft = pL+"px";
    }

    tags = document.getElementsByClassName("ugl2");
    pL = 10;
    
    for(var i = 0; i<tags.length; i++){
        pL+=(incr*3+ 5);
        tags[i].style.paddingLeft = pL+"px";
    }

    tags = document.getElementsByClassName("naslov");
    var naslov = window.innerWidth;
    naslov = naslov/90;
    
    for(var i = 0; i<tags.length; i++){
        tags[i].style.paddingLeft = naslov+"px";
    }
}


