

//------------------------------------------------- OBJEKTI -----------------------------------------------

var yoga = [
    {
        id_tr: "yoga-hatha",
        trening:"Hatha yoga",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Pon",
                vreme_pocetak:"08:00",
                vreme_kraj: "09:30",
                slobodno: "20"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"08:00",
                vreme_kraj: "09:30",
                slobodno: "20"
            }
        ]
    }, 
    {
        id_tr: "yoga-ashtanga",
        trening:"Aštanga yoga",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Uto",
                vreme_pocetak:"12:00",
                vreme_kraj: "13:30",
                slobodno: "15"
            }, 

            {
                dan:"Sub",
                vreme_pocetak:"12:00",
                vreme_kraj: "13:30",
                slobodno: "15"
            }
        ]
    }, 
    {
        id_tr: "yoga-raja",
        trening:"Radža yoga",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Sre",
                vreme_pocetak:"08:00",
                vreme_kraj: "09:30",
                slobodno: "20"
            }, 

            {
                dan:"Ned",
                vreme_pocetak:"08:00",
                vreme_kraj: "09:30",
                slobodno: "20"
            }
        ]
    }
]

var pilates = [
    {
        id_tr: "pilates-classic",
        trening:"Klasični pilates",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Uto",
                vreme_pocetak:"10:00",
                vreme_kraj: "11:30",
                slobodno: "25"
            }, 

            {
                dan:"Čet",
                vreme_pocetak:"10:00",
                vreme_kraj: "11:30",
                slobodno: "25"
            }
        ]
    }, 
    {
        id_tr: "pilates-stot",
        trening:"Stot pilates",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Čet",
                vreme_pocetak:"12:00",
                vreme_kraj: "13:30",
                slobodno: "18"
            }, 

            {
                dan:"Ned",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30",
                slobodno: "18"
            }
        ]
    }, 
    {
        id_tr: "pilates-reformer",
        trening:"Reformer pilates",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Pon",
                vreme_pocetak:"12:00",
                vreme_kraj: "13:30",
                slobodno: "20"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"12:00",
                vreme_kraj: "13:30",
                slobodno: "20"
            }
        ]
    }
]

var cardio = [
    {
        id_tr: "cardio-hiit",
        trening:"HIIT-cardio",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Pon",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30",
                slobodno: "23"
            }, 

            {
                dan:"Sre",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30",
                slobodno: "23"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30",
                slobodno: "23"
            }
        ]
    }, 
    {
        id_tr: "cardio-cardiobox",
        trening:"Cardio box",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Pon",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30",
                slobodno: "15"
            }, 

            {
                dan:"Sre",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30",
                slobodno: "15"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30",
                slobodno: "15"
            }
        ]
    }, 
    {
        id_tr: "cardio-crossfit",
        trening:"Crossfit-cardio",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Uto",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30",
                slobodno: "10"
            }, 

            {
                dan:"Čet",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30",
                slobodno: "10"
            }, 

            {
                dan:"Sub",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30",
                slobodno: "10"
            }
        ]
    }
]

var core = [
    {
        id_tr: "core-plyometrics",
        trening:"Plyometrics-core",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Pon",
                vreme_pocetak:"20:00",
                vreme_kraj: "21:30",
                slobodno: "20"
            }, 

            {
                dan:"Sre",
                vreme_pocetak:"20:00",
                vreme_kraj: "21:30",
                slobodno: "20"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"20:00",
                vreme_kraj: "21:30",
                slobodno: "20"
            }
        ]
    }, 
    {
        id_tr: "core-sixpack",
        trening:"Six pack-core",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Uto",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30",
                slobodno: "15"
            }, 

            {
                dan:"Čet",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30",
                slobodno: "15"
            }, 

            {
                dan:"Sub",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30",
                slobodno: "15"
            }
        ]
    }, 
    {
        id_tr: "core-circuit",
        trening:"Circuit-core",
        ocena: "0",
        ocenilo_ljudi: "",
        
        termini : 
        [
            {
                dan:"Sre",
                vreme_pocetak:"14:00",
                vreme_kraj: "15:30",
                slobodno: "5"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"14:00",
                vreme_kraj: "15:30",
                slobodno: "5"
            }, 

            {
                dan:"Ned",
                vreme_pocetak:"14:00",
                vreme_kraj: "15:30",
                slobodno: "5"
            }
        ]
    }
]


//objekat koji sluzi za pravljenje rezervacije
var rez = {
    tip_tr:"",
    tr_id:"",
    tr_ime:"",
    dan:"",
    vreme_pocetak:"",
    vreme_kraj: ""
}

var reservations = [
    {
        tip_tr:"",
        tr:"",
        dan:"",
        vreme_pocetak:"",
        vreme_kraj: ""
    },
    {
        tip_tr:"",
        tr:"",
        dan:"",
        vreme_pocetak:"",
        vreme_kraj: ""
    },
    {
        tip_tr:"",
        tr:"",
        dan:"",
        vreme_pocetak:"",
        vreme_kraj: ""
    }
 ];
//-------------------------------------------------------------------------------------------------

// function initLocalStorage(){ 
//     //ako prvi put ulazimo na sajt
//     if (localStorage.getItem("firstVisit") == null){
//         localStorage.setItem("firstVisit", 1);

//         localStorage.setItem("yoga", JSON.stringify(yoga));
//         localStorage.setItem("pilates", JSON.stringify(pilates));
//         localStorage.setItem("cardio", JSON.stringify(cardio));
//         localStorage.setItem("core", JSON.stringify(core));
//     }

// }


//-------------------------------------- jQUERY ---------------------------------------------------

$(document).ready(function(){

    $(".tip").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            var val = $(this).val(); // retrieve the value
            showPodtip(val);
        }
    });

    

});

//--------------------------------------- FUNKCIJE ------------------------------------------------
function showPodtip(className){
    //reset table
    $("#table-empty").show();
    $("#reserveTable").children("tr").remove();

    var el = new Array(3);
    var obj1 = new Object(); var obj2 = new Object(); var obj3 = new Object();

    var field = document.getElementById("tr-dynamic");

    switch(className){
        case "yoga": 
            el[0] = obj1.innerHTML = '<input type="radio" name="podtip" value="yoga-hatha" id="podtip1" class="podtip yoga" onclick="showTable(this.value)"> Hatha joga <br/>';
            el[1] = obj2.innerHTML = '<input type="radio" name="podtip" value="yoga-ashtanga" id="podtip2" class="podtip yoga" onclick="showTable(this.value)"> Aštanga joga <br/>';
            el[2] = obj3.innerHTML = '<input type="radio" name="podtip" value="yoga-raja" id="podtip3" class="podtip yoga" onclick="showTable(this.value)"> Radža joga <br/>';
        break;
        case "pilates":
            el[0] = obj1.innerHTML = '<input type="radio" name="podtip" value="pilates-classic" id="podtip4" class="podtip pilates" onclick="showTable(this.value)"> Klasični pilates <br/>';
            el[1] = obj2.innerHTML = '<input type="radio" name="podtip" value="pilates-stot" id="podtip5" class="podtip pilates" onclick="showTable(this.value)"> Stot pilates <br/>';
            el[2] = obj3.innerHTML = '<input type="radio" name="podtip" value="pilates-reformer" id="podtip6" class="podtip pilates" onclick="showTable(this.value)"> Reformer pilates <br/>';
        break;
        case "cardio":
            el[0] = obj1.innerHTML = '<input type="radio" name="podtip" value="cardio-hiit" id="podtip7" class="podtip cardio" onclick="showTable(this.value)"> HIIT-cardio <br/>';
            el[1] = obj2.innerHTML = '<input type="radio" name="podtip" value="cardio-cardiobox" id="podtip8" class="podtip cardio" onclick="showTable(this.value)"> Cardio box <br/>';
            el[2] = obj3.innerHTML = '<input type="radio" name="podtip" value="cardio-crossfit" id="podtip9" class="podtip cardio" onclick="showTable(this.value)"> Crossfit-cardio <br/>';
        break;
        case "core":
            el[0] = obj1.innerHTML = '<input type="radio" name="podtip" value="core-plyometrics" id="podtip10" class="podtip core" onclick="showTable(this.value)"> Plyometrics-core <br/>';
            el[1] = obj2.innerHTML = '<input type="radio" name="podtip" value="core-sixpack" id="podtip11" class="podtip core" onclick="showTable(this.value)"> Six pack-core <br/>';
            el[2] = obj3.innerHTML = '<input type="radio" name="podtip" value="core-circuit" id="podtip12" class="podtip core" onclick="showTable(this.value)"> Circuit-core <br/>';
        break;
    }
    
    
    field.innerHTML="";
    var i;
    
    for(i=0; i<el.length;i++){
        field.innerHTML += el[i];
    }

   
    
}

function showTable(id_tr){
    
    var tr_tip = id_tr.substr(0, id_tr.indexOf('-'));  

    //uzimam odgovarajuci tip treninga
    var tr_obj_niz = JSON.parse(localStorage.getItem(tr_tip));
    var tr_obj;


    //trazim odgovarajuci trening unutar tipa treninga
    tr_obj_niz.forEach(trening => {
        if (trening.id_tr == id_tr){
            tr_obj = trening;
        }
    });

    
    //reset
    $("#table-empty").hide();
    $("#reserveTable").children("tr").remove();
    var tabela = $("#reserveTable");
    var tr = $("<tr></tr>");
    var td = $("<td></td>");
    var time_str = "";

    //trazim termine unutar odgovarajuceg treninga
    for(kljuc in tr_obj) {
        tr = $("<tr></tr>");
        
        if(kljuc == "termini"){
            
            tr_obj[kljuc].forEach(termin => {
                //reset
                tr = $("<tr></tr>");

                //dan
                td = $("<td></td>");
                td.append(termin.dan);
                tr.append(td);

                //vreme
                td = $("<td></td>");
                time_str = termin.vreme_pocetak + "h - " + termin.vreme_kraj + "h";
                td.append(time_str);
                tr.append(td);

                //slobodna mesta
                td = $("<td></td>");
                td.append(termin.slobodno);
                tr.append(td);

                //dugme za rezervaciju
                td = $("<td></td>");
                if (termin.slobodno > 0){
                    var idBtn = id_tr + "+" + termin.dan; //npr yoga-hatha+Pon kako bismo znali sta zelimo da rez
                    var btn = document.createElement("BUTTON");   // Create a <button> element
                    btn.type = "button";
                    btn.className = "btn resBtn";
                    btn.innerHTML = "Rezerviši";                   // Insert text
                    btn.id = idBtn;
                                        
                    td.append(btn);
                    
                }else{
                    td.append("");
                }
                tr.append(td);

                tabela.append(tr);
                var btns_arr = document.getElementsByClassName("resBtn");
                for( var i = 0; i < btns_arr.length; i++){
                    btns_arr[i].onclick = reserve;
                }

                //da se onemoguci kliktanje dva puta na istu rezervaciju
                // if(idBtn == localStorage.getItem("lastRes")){
                //     document.getElementById(idBtn).disabled = true;
                // }
                var arr = JSON.parse(localStorage.getItem("lastReservations"));
                if(arr != null){
                    if(arr.length > 0){
                        for(var i = 0; i < arr.length; i++){
                            if (idBtn == arr[i]){
                                document.getElementById(idBtn).disabled = true;
                            }
                        }
                    }
                }
            });
        }

        
    }


}

function reserve(){
    var idBtn = this.id;
    var tip_tr = idBtn.substr(0, idBtn.indexOf('-'));
    var tr = idBtn.substr(0, idBtn.indexOf('+'));
    var termin_dan = idBtn.substring(idBtn.indexOf('+') + 1, idBtn.length);

    //uzimam odgovarajuci tip treninga
    var tr_obj_niz = JSON.parse(localStorage.getItem(tip_tr));
    var tr_obj;
    var resTermin;


    //trazim odgovarajuci trening unutar tipa treninga
    tr_obj_niz.forEach(trening => {
        if (trening.id_tr == tr){
            tr_obj = trening;
        }
    });

    //trazim odgovarajuci termin unutar odgovarajuceg treninga
    for(kljuc in tr_obj) {
        if(kljuc == "termini"){
            //prolazimo kroz sve termine i trazimo nas termin
            tr_obj[kljuc].forEach(termin => {
                if(termin.dan == termin_dan){
                    resTermin = termin;
                }
            });
        }

    }

    //smanjiti broj slobodnih mesta
    resTermin["slobodno"]--;

    //update local storage-a
    localStorage.setItem(tip_tr, JSON.stringify(tr_obj_niz)); 
    
    //zelimo da izmenimo dugme tako da ne moze isti trening da se rezervise vise puta
    var arr = JSON.parse(localStorage.getItem("lastReservations"));
    if(arr != null){
        arr.push(this.id);
    }
    localStorage.setItem("lastReservations", JSON.stringify(arr));

    //osvezi tabelu
    showTable(tr);

    //obavesti korisnika
    Swal.fire({
        icon: 'success',
        title: 'Vidimo se!',
        text: 'Uspesno ste zakazali trening.',
        confirmButtonColor: 'green'
    })

    rez.tip_tr = tip_tr;
    rez.tr_id = tr;
    rez.tr_ime = tr_obj.trening;
    rez.dan = resTermin.dan;
    rez.vreme_pocetak = resTermin.vreme_pocetak;
    rez.vreme_kraj = resTermin.vreme_kraj;

    //sacuvamo u localstorage
    var rezArr;
    //ako ne postoji u local storage moramo da inicijalizujemo niz
    if(localStorage.getItem("reservations") == null){
        rezArr = new Array();
    }else{
        rezArr = JSON.parse(localStorage.getItem("reservations"));
    }
    rezArr.push(rez);

    localStorage.setItem("reservations",JSON.stringify(rezArr));
}

