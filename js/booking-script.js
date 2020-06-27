

//------------------------------------------------- OBJEKTI -----------------------------------------------

var yoga = [
    {
        id_tr: "yoga-hatha",
        trening:"Hatha yoga",
        
        termini : 
        [
            {
                dan:"Pon",
                vreme_pocetak:"08:00",
                vreme_kraj: "09:30"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"08:00",
                vreme_kraj: "09:30"
            }
        ]
    }, 
    {
        id_tr: "yoga-ashtanga",
        trening:"Aštanga yoga",
        
        termini : 
        [
            {
                dan:"Uto",
                vreme_pocetak:"12:00",
                vreme_kraj: "13:30"
            }, 

            {
                dan:"Sub",
                vreme_pocetak:"12:00",
                vreme_kraj: "13:30"
            }
        ]
    }, 
    {
        id_tr: "yoga-raja",
        trening:"Radža yoga",
        
        termini : 
        [
            {
                dan:"Sre",
                vreme_pocetak:"08:00",
                vreme_kraj: "09:30"
            }, 

            {
                dan:"Ned",
                vreme_pocetak:"08:00",
                vreme_kraj: "09:30"
            }
        ]
    }
]

var pilates = [
    {
        id_tr: "pilates-classic",
        trening:"Klasični pilates",
        
        termini : 
        [
            {
                dan:"Uto",
                vreme_pocetak:"10:00",
                vreme_kraj: "11:30"
            }, 

            {
                dan:"Čet",
                vreme_pocetak:"10:00",
                vreme_kraj: "11:30"
            }
        ]
    }, 
    {
        id_tr: "pilates-stot",
        trening:"Stot pilates",
        
        termini : 
        [
            {
                dan:"Čet",
                vreme_pocetak:"12:00",
                vreme_kraj: "13:30"
            }, 

            {
                dan:"Ned",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30"
            }
        ]
    }, 
    {
        id_tr: "pilates-reformer",
        trening:"Reformer pilates",
        
        termini : 
        [
            {
                dan:"Pon",
                vreme_pocetak:"12:00",
                vreme_kraj: "13:30"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"12:00",
                vreme_kraj: "13:30"
            }
        ]
    }
]

var cardio = [
    {
        id_tr: "cardio-hiit",
        trening:"HIIT-cardio",
        
        termini : 
        [
            {
                dan:"Pon",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30"
            }, 

            {
                dan:"Sre",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30"
            }
        ]
    }, 
    {
        id_tr: "cardio-cardiobox",
        trening:"Cardio box",
        
        termini : 
        [
            {
                dan:"Pon",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30"
            }, 

            {
                dan:"Sre",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30"
            }
        ]
    }, 
    {
        id_tr: "cardio-crossfit",
        trening:"Crossfit-cardio",
        
        termini : 
        [
            {
                dan:"Uto",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30"
            }, 

            {
                dan:"Čet",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30"
            }, 

            {
                dan:"Sub",
                vreme_pocetak:"16:00",
                vreme_kraj: "17:30"
            }
        ]
    }
]

var core = [
    {
        id_tr: "core-plyometrics",
        trening:"Plyometrics-core",
        
        termini : 
        [
            {
                dan:"Pon",
                vreme_pocetak:"20:00",
                vreme_kraj: "21:30"
            }, 

            {
                dan:"Sre",
                vreme_pocetak:"20:00",
                vreme_kraj: "21:30"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"20:00",
                vreme_kraj: "21:30"
            }
        ]
    }, 
    {
        id_tr: "core-sixpack",
        trening:"Six pack-core",
        
        termini : 
        [
            {
                dan:"Uto",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30"
            }, 

            {
                dan:"Čet",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30"
            }, 

            {
                dan:"Sub",
                vreme_pocetak:"18:00",
                vreme_kraj: "19:30"
            }
        ]
    }, 
    {
        id_tr: "core-circuit",
        trening:"Circuit-core",
        
        termini : 
        [
            {
                dan:"Sre",
                vreme_pocetak:"14:00",
                vreme_kraj: "15:30"
            }, 

            {
                dan:"Pet",
                vreme_pocetak:"14:00",
                vreme_kraj: "15:30"
            }, 

            {
                dan:"Ned",
                vreme_pocetak:"14:00",
                vreme_kraj: "15:30"
            }
        ]
    }
]

//-------------------------------------------------------------------------------------------------

function initLocalStorage(){
    localStorage.setItem("yoga", JSON.stringify(yoga));
    localStorage.setItem("pilates", JSON.stringify(pilates));
    localStorage.setItem("cardio", JSON.stringify(cardio));
    localStorage.setItem("core", JSON.stringify(core));
}

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

    // var btn1 = document.createElement("input");
    // btn1.type = "radio";
    // btn1.className = "podtip yoga"; // set the CSS class
    // btn1.value = "yoga-hatha";
    // btn1.name = "podtip";
    // btn1.id = "hatha"
    // field.appendChild(btn1); // put it into the DOM

    // var label1 = document.createElement("label");
    // label1.htmlFor = "hatha";
    // label1.innerText = "Hatha joga";
    // field.appendChild(label1);

    // var btn2 = document.createElement("input");
    // btn2.type = "radio";
    // btn2.className = "podtip yoga"; // set the CSS class
    // btn2.value = "yoga-ashtanga";
    // btn2.name = "podtip";
    // btn2.id = "ashtanga";
    // field.appendChild(btn2); // put it into the DOM

    // var label2 = document.createElement("label");
    // label2.htmlFor = "ashtanga";
    // label2.innerText = "Ashtanga joga";
    // field.appendChild(label2);

    // var btn3 = document.createElement("input");
    // btn3.type = "radio";
    // btn3.className = "podtip yoga"; // set the CSS class
    // btn3.value = "yoga-raja";
    // btn3.name = "podtip";
    // btn3.id = "raja";
    // field.appendChild(btn3); // put it into the DOM

    // var label3 = document.createElement("label");
    // label3.htmlFor = "raja";
    // label3.innerText = "Radza joga";
    // field.appendChild(label3);

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
                td.append("8");
                tr.append(td);

                //dugme za rezervaciju
                td = $("<td></td>");
                td.append("<button type='button'>dugme</button>");
                tr.append(td);

                tabela.append(tr);
            });
        }

        //tabela.append(tr);
    }


}