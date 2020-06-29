var nizKomentara = [
]



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

//===========================================CROSSFIT=====================================================

function komentarisiCrossfit(){
    
    if(localStorage.getItem("komentariCrossfit")==null)
        localStorage.setItem("komentariCrossfit", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega


    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("cardio"));
    var provera2 = provera[2]; //crossfit je poslednji u nizu 
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(user.username + "");
    for(var i = 0; i<provera3.length; i++){
        if(provera3[i]==user.username)
            bio = true;
    }

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        document.getElementById("komentar").value="";
        var slika = "./img/client.jpg"
        var ime = korisnik.username;

        var komentari = document.getElementById("komentari");
        var htmlStringImg = '<div class="media"><img src="'
        var htmlStringIme = '" style="border-radius: 50%; width:40px; height: 40px; margin-top: 15px;"><div class="media-body"><h4 class="media-heading user_name" style="padding-left:10px; padding-top: 15px;">'
        var htmlStringComm = '</h4><p style="padding-left:10px; padding-top: 15px;">';
        var htmlStringEnd =  '</p></div></div>';
        
        var upis = htmlStringImg+slika+htmlStringIme+ime+htmlStringComm+comment+htmlStringEnd;
        komentari.innerHTML += upis;

        nizComms = JSON.parse(localStorage.getItem("komentariCrossfit"));
        nizComms.push(upis);
        localStorage.setItem("komentariCrossfit", JSON.stringify(nizComms));
    }
}


function ispisiKomentareCrossfit(){
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariCrossfit"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }
}

function upisiTreningCrossfit(){
    localStorage.setItem("trenutniTrening","cardio-crossfit"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenu(){
    alert("ispisao pocetak");
    var stringTrening = localStorage.getItem("trenutniTrening");
    stringTrening = stringTrening.split("-");
    //alert(stringTrening);
    var grupaTr = JSON.parse(localStorage.getItem(stringTrening[0]+""));
    //alert(grupaTr);
    var trening; 
    if(stringTrening[1] == "crossfit" || stringTrening[1] == "circuit" || stringTrening[1] == "reformer" || stringTrening[1] == "raja")
        trening = grupaTr[2];
    if(stringTrening[1] == "ashtanga" || stringTrening[1] == "stot" || stringTrening[1] == "cardiobox" || stringTrening[1] == "sixpack")
        trening = grupaTr[1];
    if(stringTrening[1] == "plyometrics" || stringTrening[1] == "hiit" || stringTrening[1] == "classic" || stringTrening[1] == "hatha")
        trening = grupaTr[0];
    
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;
    alert("ispisao kraj");
}

function o1(){
    var stringTrening = localStorage.getItem("trenutniTrening");
    stringTrening = stringTrening.split("-");
    //alert(stringTrening);
    var grupaTr = JSON.parse(localStorage.getItem(stringTrening[0]+""));
    //alert(grupaTr);
    var trening; 
    if(stringTrening[1] == "crossfit" || stringTrening[1] == "circuit" || stringTrening[1] == "reformer" || stringTrening[1] == "raja")
        trening = grupaTr[2];
    if(stringTrening[1] == "ashtanga" || stringTrening[1] == "stot" || stringTrening[1] == "cardiobox" || stringTrening[1] == "sixpack")
        trening = grupaTr[1];
    if(stringTrening[1] == "plyometrics" || stringTrening[1] == "hiit" || stringTrening[1] == "classic" || stringTrening[1] == "hatha")
        trening = grupaTr[0];
    
    var ocena = trening.ocena;
    trening.ocenilo_ljudi+=1;
    ocena+=1;
    ocena = ocena / trening.ocenilo_ljudi;
    trening.ocena = ocena;
    document.getElementById("ocena").innerHTML = ocena;
    localStorage.setItem(stringTrening[0], JSON.stringify(grupaTr));

}
function o2(){
    
}
function o3(){
    
}
function o4(){
    
}
function o5(){
    
}


//================================================================================================