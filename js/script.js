function setLanguage(){
    
}

function ugliraj(){
    tags = document.getElementsByClassName("ugl");
    pL = 10;
    
    for(var i = 0; i<tags.length; i++){
        pL+=15;
        tags[i].style.paddingLeft = pL+"px";
    }

    tags = document.getElementsByClassName("ugl1");
    pL = 0;
    
    for(var i = 0; i<tags.length; i++){
        pL+=30;
        tags[i].style.paddingLeft = pL+"px";
    }

    tags = document.getElementsByClassName("ugl2");
    pL = 0;
    
    for(var i = 0; i<tags.length; i++){
        pL+=20;
        tags[i].style.paddingLeft = pL+"px";
    }
}


