var user = {
  username:"",
  ime:"",
  prezime:"",
  mail:"",

}

//objekat koji sluzi za pravljenje rezervacije
var rez = {
  tip_tr:"",
  tr_id:"",
  tr_ime:"",
  dan:"",
  vreme_pocetak:"",
  vreme_kraj: "",
  datum:""
}

/**
 * rezArr = [
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

]
 */

//---------------------------------- FUNKCIJE -------------------------------

function showBooked(){
  //brisanje isteklih treninga
  refreshStorage();

  //prikaz usera
  user =  JSON.parse(localStorage.getItem("user")) ;
  document.getElementById("ime").innerText = user.ime;
  document.getElementById("prezime").innerText = user.prezime;
  document.getElementById("username").innerText = user.username;
  document.getElementById("mail").innerText = user.mail;

  //prikaz rezervisanih treninga
  var rezArr = JSON.parse(localStorage.getItem("reservations"));
  if((rezArr == null) || (rezArr.length == 0)) {
    $("#tableBooked").children("tr").remove();
    $("#table-empty").show();
    return;
  }
  
  //reset
  $("#table-empty").hide();
  $("#tableBooked").children("tr").remove();
  var tabela = $("#tableBooked");
  var tr = $("<tr></tr>");
  var td = $("<td></td>");
  var time_str = "";

  rezArr.forEach(rezervacija => {
    tr = $("<tr></tr>");
    
    td = $("<td></td>");
    td.append(rezervacija.tr_ime);
    tr.append(td);

    td = $("<td></td>");
    //treba sracunati datum
    // var dateOfTr = getDates(rezervacija.dan, rezervacija.vreme_pocetak);
    // var dd = String(dateOfTr.getDate()).padStart(2, '0');
    // var mm = String(dateOfTr.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = dateOfTr.getFullYear();
    // var day = dateOfTr.getDay();
    // dateOfTrStr = rezervacija.dan + " " + dd + '/' + mm + '/' + yyyy;
    dateOfTrStr = rezervacija.dan + " " + rezervacija.datum;
    td.append(dateOfTrStr);
    tr.append(td);

    td = $("<td></td>");
    time_str = rezervacija.vreme_pocetak + "h - " + rezervacija.vreme_kraj + "h";
    td.append(time_str);
    tr.append(td);

    
    //dugme za otkazivanje
    //dugme svakako postavljamo, ali zavisi sta ce dugme odraditi
    td = $("<td></td>");
    var idBtn = rezervacija.tr_id + "+" + rezervacija.dan + "+" + rezervacija.vreme_pocetak + "+" + rezervacija.datum; //npr yoga-hatha+Pon+09:30+02/07/2020 kako bismo znali sta zelimo da rez
    var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.type = "button";
    btn.className = "btn cancelBtn";
    btn.innerHTML = "Otkaži";                   // Insert text
    btn.id = idBtn;
    
    td.append(btn);
    
    td.append("");
    tr.append(td);

    tabela.append(tr);
    var btns_arr = document.getElementsByClassName("cancelBtn");
    for( var i = 0; i < btns_arr.length; i++){
        btns_arr[i].onclick = cancelReservation;
    }

  });
  
}



function refreshStorage(){
  var rezArr = JSON.parse(localStorage.getItem("reservations"));
  if(rezArr == null) return;

  var deleteQueue = new Array();  var yes=0;

  var todaysDate = new Date(); //danasnji datum npr 30.06.2020
  var todaysDay = todaysDate.getDay(); //danasnji dan npr utorak
  var dd = String(todaysDate.getDate()).padStart(2, '0');
  var mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = todaysDate.getFullYear();
  var now_hrs = todaysDate.getHours();
  var now_min = todaysDate.getMinutes();

  
  var pozicija = 0;
  rezArr.forEach(rezervacija => {

    //alert("slucaj: "+ rezervacija.datum + " " + rezervacija.vreme_pocetak);

    var trDateStr = rezervacija.datum;
    var trDay = rezervacija.dan;
    var trdd = (rezervacija.datum).split('/')[0];
    var trmm = (rezervacija.datum).split('/')[1];
    var tryyyy = (rezervacija.datum).split('/')[2];
    var tr_hrs = rezervacija.vreme_pocetak.split(':')[0];
    var tr_min = rezervacija.vreme_pocetak.split(':')[1];

    if (yyyy > tryyyy){
      //alert(true);
      deleteQueue.push(pozicija);
      yes=1;
    }else if(yyyy < tryyyy){
     // alert(false);
    }else if (yyyy == tryyyy){
      if(mm > trmm){
       // alert(true);
        deleteQueue.push(pozicija);
        yes=1;
      }else if(mm < trmm){
        //alert(false);
      }else if( mm == trmm){
        if(dd > trdd){
          //alert(true);
          deleteQueue.push(pozicija);
          yes=1;
        }else if(dd<trdd){
         // alert(false);
        }else if(dd == trdd){
          if(now_hrs > tr_hrs) {
            //alert(true);
            deleteQueue.push(pozicija);
            yes=1;
          }else if(now_hrs < tr_hrs){
            //alert(false);
          }else if(now_hrs == tr_hrs){
            if(now_min > tr_min){
              if (tr_min != "00"){
                //alert(true);
                deleteQueue.push(pozicija);
                yes=1;
              }else{
                //alert(false);
              }
            }else if(now_min < tr_min){
              //alert(false);
            }else if(now_min == tr_min){
              //alert(false);
            }
          }
        }
        
      }
    }
    

    pozicija++;
  });

  //moramo da vidimo koje smo treninge obirsali da bismo idBtn tog treninga obrisali iz nisa lastReservations i da bi se dugme enable
  var tmp_rez; var idBtn; var arrIdBtns = new Array();
  for(var i=0; i < deleteQueue.length; i++){
    tmp_rez = rezArr[deleteQueue[i]];
    idBtn = tmp_rez.tr_id + "+" + tmp_rez.dan;
    arrIdBtns.push(idBtn);
    //treba resetovati br slobodnih mesta na tom treningu
    var x_tip = JSON.parse(localStorage.getItem(tmp_rez.tip_tr));
    x_tip.forEach(trening => {
      if (trening.id_tr == tmp_rez.tr_id){
        if(otkazano==1){
          otkazano=0;
        }else
          trening.bili_na_tr=1; //markiramo da je osoba bila na tr
        for(kljuc in trening) {
          if(kljuc == "termini"){
              //prolazimo kroz sve termine i trazimo nas termin
              trening[kljuc].forEach(termin => {
                  if(termin.dan == tmp_rez.dan){
                      termin.slobodno = termin.max_slobodno;
                  }
              });
          }
  
      }
      }
    });
    localStorage.setItem(tmp_rez.tip_tr, JSON.stringify(x_tip));
  }
 // alert(JSON.stringify(arrIdBtns));

  var lastRez = JSON.parse(localStorage.getItem("lastReservations"));
  for(var i = 0; i< lastRez.length; i++){
    for(var j = 0; j < arrIdBtns.length; j++){
      if(lastRez[i] == arrIdBtns[j]){
        lastRez.splice(i, 1);
      }
    }
  }
  //alert(JSON.stringify(lastRez));
  localStorage.setItem("lastReservations", JSON.stringify(lastRez)); 

  if(yes==1){
    for(var i=0; i < deleteQueue.length; i++){
      delete rezArr[deleteQueue[i]];
    }
    for(var i=0; i < rezArr.length; i++){
      if(typeof rezArr[i] == "undefined"){
        rezArr.splice(i, 1);
      }
      
    }
  }

  localStorage.setItem("reservations", JSON.stringify(rezArr));

  
}
var otkazano = 0;
function cancelReservation(){
  //detalji treninga
  var idBtn = this.id;  //yoga-hatha+Pon+09:30+01/07/2020
  var id_tr = idBtn.split("+")[0]; //yoga-hatha
  var dan_tr = idBtn.split("+")[1]; //Pon
  var vreme_tr = idBtn.split("+")[2]; //09:30
  var hrs_tr = vreme_tr.split(":")[0]; //09
  var min_tr = vreme_tr.split(":")[1]; //30
  var datum_tr = idBtn.split("+")[3]; // 01/07/2020 
  var trdd = (datum_tr).split('/')[0];// 01
  var trmm = (datum_tr).split('/')[1];// 07
  var tryyyy = (datum_tr).split('/')[2]; //2020


  //detalji danasnjeg dana
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var day = today.getDay(); 
  var now_hrs = today.getHours();
  var now_min = today.getMinutes();

  //ako je ostalo vise od 30min mozemo da otkazemo
  var ok_to_cancel = 0;
  if (yyyy<tryyyy){
    ok_to_cancel = 1;
  }else if (mm < trmm){
    ok_to_cancel = 1;
  }else if(dd < trdd){
    ok_to_cancel = 1;
  }else if(dd == trdd){
    if((now_hrs+1)<hrs_tr){
      ok_to_cancel=1;
    }else if(now_hrs<hrs_tr){
      if((now_min+30)>=60){
        var c=now_min+30-60;
        if(c<min_tr){
          ok_to_cancel=1;
        }
      }else{
        ok_to_cancel=1;
      }
    }else if(now_hrs == hrs_tr){
      if((now_min+30)<min_tr){
        ok_to_cancel=1;
      }
    }
  }

  if(ok_to_cancel==1){
    var rezArr = JSON.parse(localStorage.getItem("reservations"));

    rezArr.forEach(rezervacija => {
      if(rezervacija.tr_id == id_tr){
        if(rezervacija.datum == datum_tr){ //ako je to ta rezervacija
          rezervacija.datum = "01/01/1900"; //stavim datum u proslost i onda se obrise
        }
      }  
      
    });

    localStorage.setItem("reservations", JSON.stringify(rezArr));
     //obavesti korisnika
     Swal.fire({
      icon: 'success',
      title: 'Uspešno ste otkazali trening.',
      text: 'Žao nam je što ne dolazite :(',
      confirmButtonColor: 'green'
    })
    otkazano=1;
    showBooked();
  }else{
     //obavesti korisnika
     Swal.fire({
      icon: 'error',
      title: 'Neuspešno!',
      text: 'Trening može da se otkaže najmanje 30 minuta pre početka istog. ',
      confirmButtonColor: 'red'
  })
  }
   
}


function logOut(){

    Swal.fire({
        title: 'Da li ste sigurni?',
        text: "Ne možete se zaista izlogovati, ali potvrdom uspevate da osvežite sesiju i da poništite prethodno sačuvane informacije.",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Odustani',
        confirmButtonColor: 'green',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Da, osveži sesiju!'
      }).then((result) => {
        if (result.value) {
          localStorage.clear();
          Swal.fire(
            'Sesija osvežena',
            'Uspešno ste obrisali prethodne informacije o sačuvanim treninzima',
            'success'
          )
        }
      })

    localStorage.clear();

    
}