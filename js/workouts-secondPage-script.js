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
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("cardio"));
    var provera2 = provera[2]; //crossfit je poslednji u nizu 
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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
    }  else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareCrossfit(){
    if(localStorage.getItem("komentariCrossfit")==null)
    localStorage.setItem("komentariCrossfit", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariCrossfit"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuCrossfit();
    upisiTreningCrossfit();
}

function upisiTreningCrossfit(){
    localStorage.setItem("trenutniTrening","cardio-crossfit"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuCrossfit(){

    var grupaTr = JSON.parse(localStorage.getItem("cardio"));
    var trening = grupaTr[2];
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;

}

function ocena(val){

    var stringTrening = localStorage.getItem("trenutniTrening");
    var provera = localStorage.getItem("trenutniTrening");
    if(localStorage.getItem(provera+"ocenjen")==null){
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
        
        var test = trening.bili_na_tr; 
        var bio = false;
        if(test==1)
            bio = true;

        if(bio){
            var ocena = trening.ocena;
            ocena = trening.ocenilo_ljudi*ocena; 
            trening.ocenilo_ljudi+=1;
            ocena+=val;
            ocena = ocena / trening.ocenilo_ljudi;
            ocena = ocena.toFixed(1);
            trening.ocena = ocena;
            document.getElementById("ocena").innerHTML = ocena;
            localStorage.setItem(stringTrening[0], JSON.stringify(grupaTr));
            localStorage.setItem(provera+"ocenjen", "1");
        } else { 
            alert("Niste bili na treningu, nema ocenjivanja!");
        }
    } else {
        alert("Ocenili ste trening, molimo Vas ne smarajte vise");
    }

}



//=================================================CARDIOBOX===========================================



function komentarisiCardiobox(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("cardio"));
    var provera2 = provera[1]; //cardiobox je srednji u nizu 
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariCardiobox"));
            nizComms.push(upis);
            localStorage.setItem("komentariCardiobox", JSON.stringify(nizComms));
        }
    }  else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareCardiobox(){
    if(localStorage.getItem("komentariCardiobox")==null)
    localStorage.setItem("komentariCardiobox", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariCardiobox"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuCardiobox();
    upisiTreningCardiobox();
}

function upisiTreningCardiobox(){
    localStorage.setItem("trenutniTrening","cardio-cardiobox"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuCardiobox(){

    var grupaTr = JSON.parse(localStorage.getItem("cardio"));
    var trening = grupaTr[1];
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;

}


//=================================================HIIT===========================================

function komentarisiHiit(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("cardio"));
    var provera2 = provera[0]; //hiit je prvi u nizu
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariHiit"));
            nizComms.push(upis);
            localStorage.setItem("komentariHiit", JSON.stringify(nizComms));
        }
    } else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareHiit(){
    if(localStorage.getItem("komentariHiit")==null)
    localStorage.setItem("komentariHiit", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariHiit"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuHiit();
    upisiTreningHiit();
}

function upisiTreningHiit(){
    localStorage.setItem("trenutniTrening","cardio-hiit"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuHiit(){

    var grupaTr = JSON.parse(localStorage.getItem("cardio"));
    var trening = grupaTr[0];
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;

}


//========================================CIRCUIT====================================================

function komentarisiCircuit(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("core"));
    var provera2 = provera[2]; //circuit je last
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariCircuit"));
            nizComms.push(upis);
            localStorage.setItem("komentariCircuit", JSON.stringify(nizComms));
        }
    } else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareCircuit(){
    if(localStorage.getItem("komentariCircuit")==null)
    localStorage.setItem("komentariCircuit", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariCircuit"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuCircuit();
    upisiTreningCircuit();
}

function upisiTreningCircuit(){
    localStorage.setItem("trenutniTrening","core-circuit"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuCircuit(){

    var grupaTr = JSON.parse(localStorage.getItem("core"));
    var trening = grupaTr[2];
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;

}

//========================================SIXPACK====================================================

function komentarisiSixpack(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("core"));
    var provera2 = provera[1]; //sixpack je middle
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariSixpack"));
            nizComms.push(upis);
            localStorage.setItem("komentariSixpack", JSON.stringify(nizComms));
        }
    } else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareSixpack(){
    if(localStorage.getItem("komentariSixpack")==null)
    localStorage.setItem("komentariSixpack", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariSixpack"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuSixpack();
    upisiTreningSixpack();
}

function upisiTreningSixpack(){
    localStorage.setItem("trenutniTrening","core-sixpack"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuSixpack(){

    var grupaTr = JSON.parse(localStorage.getItem("core"));
    var trening = grupaTr[1]; //middle
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;

}

//========================================PLYOMETRICS====================================================

function komentarisiPlyometrics(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("core"));
    var provera2 = provera[0]; //sixpack je middle
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariPlyometrics"));
            nizComms.push(upis);
            localStorage.setItem("komentariPlyometrics", JSON.stringify(nizComms));
        }
    } else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentarePlyometrics(){
    if(localStorage.getItem("komentariPlyometrics")==null)
    localStorage.setItem("komentariPlyometrics", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariPlyometrics"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuPlyometrics();
    upisiTreningPlyometrics();
}

function upisiTreningPlyometrics(){
    localStorage.setItem("trenutniTrening","core-plyometrics"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuPlyometrics(){

    var grupaTr = JSON.parse(localStorage.getItem("core"));
    var trening = grupaTr[0]; //middle
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;

}


//================================================CLASSIC============================================

function komentarisiClassic(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("pilates"));
    var provera2 = provera[0]; //classic je first
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariClassic"));
            nizComms.push(upis);
            localStorage.setItem("komentariClassic", JSON.stringify(nizComms));
        }
    } else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareClassic(){
    if(localStorage.getItem("komentariClassic")==null)
    localStorage.setItem("komentariClassic", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariClassic"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuClassic();
    upisiTreningClassic();
}

function upisiTreningClassic(){
    localStorage.setItem("trenutniTrening","pilates-classic"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuClassic(){

    var grupaTr = JSON.parse(localStorage.getItem("pilates"));
    var trening = grupaTr[0]; //first
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;
}


//================================================STOT============================================

function komentarisiStot(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("pilates"));
    var provera2 = provera[1]; //stot je middle
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariStot"));
            nizComms.push(upis);
            localStorage.setItem("komentariStot", JSON.stringify(nizComms));
        }
    } else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareStot(){
    if(localStorage.getItem("komentariStot")==null)
    localStorage.setItem("komentariStot", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariStot"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuStot();
    upisiTreningStot();
}

function upisiTreningStot(){
    localStorage.setItem("trenutniTrening","pilates-stot"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuStot(){

    var grupaTr = JSON.parse(localStorage.getItem("pilates"));
    var trening = grupaTr[1]; //middle
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;
}

//================================================REFORMER============================================

function komentarisiReformer(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("pilates"));
    var provera2 = provera[2]; //stot je middle
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariReformer"));
            nizComms.push(upis);
            localStorage.setItem("komentariReformer", JSON.stringify(nizComms));
        }
    } else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareReformer(){
    if(localStorage.getItem("komentariReformer")==null)
    localStorage.setItem("komentariReformer", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariReformer"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuReformer();
    upisiTreningReformer();
}

function upisiTreningReformer(){
    localStorage.setItem("trenutniTrening","pilates-reformer"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuReformer(){

    var grupaTr = JSON.parse(localStorage.getItem("pilates"));
    var trening = grupaTr[2]; //last
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;
}

//================================================ASHTANGA============================================

function komentarisiAshtanga(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("yoga"));
    var provera2 = provera[1]; //ashtanga je middle
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariAshtanga"));
            nizComms.push(upis);
            localStorage.setItem("komentariAshtanga", JSON.stringify(nizComms));
        }
    } else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareAshtanga(){
    if(localStorage.getItem("komentariAshtanga")==null)
    localStorage.setItem("komentariAshtanga", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariAshtanga"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuAshtanga();
    upisiTreningAshtanga();
}

function upisiTreningAshtanga(){
    localStorage.setItem("trenutniTrening","yoga-ashtanga"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuAshtanga(){

    var grupaTr = JSON.parse(localStorage.getItem("yoga"));
    var trening = grupaTr[1]; //middle
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;
}

//================================================HATHA===========================================


function komentarisiHatha(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("yoga"));
    var provera2 = provera[0]; //hatha if first
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariHatha"));
            nizComms.push(upis);
            localStorage.setItem("komentariHatha", JSON.stringify(nizComms));
        }
    } else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareHatha(){
    if(localStorage.getItem("komentariHatha")==null)
    localStorage.setItem("komentariHatha", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariHatha"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuHatha();
    upisiTreningHatha();
}

function upisiTreningHatha(){
    localStorage.setItem("trenutniTrening","yoga-hatha"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuHatha(){

    var grupaTr = JSON.parse(localStorage.getItem("yoga"));
    var trening = grupaTr[0]; //first
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;
}

//================================================RAJA===========================================

function komentarisiRaja(){
    

    //provera jel bio
    var provera = JSON.parse(localStorage.getItem("yoga"));
    var provera2 = provera[2]; //raja is last
    var provera3 = provera2.bili_na_tr; // niz ljudi koji su bili na tr
    var bio = false;
    var user = JSON.parse(localStorage.getItem("user"));
    //alert(provera3 + " JE ILI NE");
        if(provera3==1)
            bio = true;

    if(bio){
        var korisnik = JSON.parse(localStorage.getItem("user"));
        var comment = document.getElementById("komentar").value;
        if(comment!=""){
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

            nizComms = JSON.parse(localStorage.getItem("komentariRaja"));
            nizComms.push(upis);
            localStorage.setItem("komentariRaja", JSON.stringify(nizComms));
        }
    } else {
        alert("Niste bili na treningu, nema komentarisanja!");
        document.getElementById("komentar").value="";
    }
}


function ispisiKomentareRaja(){
    if(localStorage.getItem("komentariRaja")==null)
    localStorage.setItem("komentariRaja", JSON.stringify(nizKomentara)); // kad iskomentarisem prvi put da ubacim tAJ NIZ, posle dodaj u njega
    var i;
    nizK = JSON.parse(localStorage.getItem("komentariRaja"));
    var komentari = document.getElementById("komentari");
    for(i = 0; i<nizK.length; i++){
        komentari.innerHTML += nizK[i];
    }

    ispisiOcenuRaja();
    upisiTreningRaja();
}

function upisiTreningRaja(){
    localStorage.setItem("trenutniTrening","yoga-raja"); // da znas da proveris dal je koristik bio pa da moze komentarise
}

function ispisiOcenuRaja(){

    var grupaTr = JSON.parse(localStorage.getItem("yoga"));
    var trening = grupaTr[2]; //last
    var ocena = trening.ocena;
    document.getElementById("ocena").innerHTML = ocena;
}

//--end--