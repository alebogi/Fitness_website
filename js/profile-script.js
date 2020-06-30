var user = {
  username:"",
  ime:"",
  prezime:"",
  mail:"",

}

var rez = {
  tip_tr:"",
  tr:"",
  dan:"",
  vreme_pocetak:"",
  vreme_kraj: ""
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
    var idBtn = rezervacija.tr_id + "+" + rezervacija.dan + "+" + rezervacija.vreme_pocetak; //npr yoga-hatha+Pon+09:30 kako bismo znali sta zelimo da rez
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


// function getDates(day, time){
//   var tr_day = day;
//   var tr_startTime = time;

//   var todaysDate = new Date(); //danasnji datum npr 30.06.2020
//   var todaysDay = todaysDate.getDay(); //danasnji dan npr utorak
//   var dayOfTr; //kog dana u nedelji je trening
//   switch(tr_day){
//     case "Pon" || "Mon": dayOfTr = 1; break;
//     case "Uto" || "Tue": dayOfTr = 2; break;
//     case "Sre" || "Wen": dayOfTr = 3; break;
//     case "Čet" || "Thr": dayOfTr = 4; break;
//     case "Pet" || "Fri": dayOfTr = 5; break;
//     case "Sub" || "Sat": dayOfTr = 6; break;
//     case "Ned" || "Sun": dayOfTr = 0; break;
//   }
 
//   //koji datum pada taj dan
//   var dateOfTr;
  
//   if(todaysDay == dayOfTr){
//     //ako je dan isti kao danasnji, treba pogledati sate
//     var now_hrs = todaysDate.getHours();
//     var now_min = todaysDate.getMinutes();

//     var tr_hrs = tr_startTime.split(":")[0];
//     var tr_min = tr_startTime.split(":")[1];

//     if((now_hrs + 1) >= tr_hrs){
//       dateOfTr = getNextDayOfWeek(todaysDate, dayOfTr);
//     }else if ((now_hrs + 1) < tr_hrs){
//       dateOfTr = todaysDate;
//     }
//   }else{
//     //ako dan nije isti kao danasnji, dohvatamo najblizi naredni dan u nedelji
//     dateOfTr = getNextDayOfWeek(todaysDate, dayOfTr);
//   }
  
  
  
//   return dateOfTr;
// }

// //dajemo danasnji datum i koji sledeci dan u nedelji nam treba
// //dobijamo kog datuma je taj dan  koji nam treba
// function getNextDayOfWeek(todaysDate, dayOfWeek) {
//   var resultDate = new Date(todaysDate.getTime());
//   resultDate.setDate(todaysDate.getDate() + (7 + dayOfWeek - todaysDate.getDay() - 1) % 7 +1);  

//   return resultDate;
// }

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

    alert("slucaj: "+ rezervacija.datum + " " + rezervacija.vreme_pocetak);

    var trDateStr = rezervacija.datum;
    var trDay = rezervacija.dan;
    var trdd = (rezervacija.datum).split('/')[0];
    var trmm = (rezervacija.datum).split('/')[1];
    var tryyyy = (rezervacija.datum).split('/')[2];
    var tr_hrs = rezervacija.vreme_pocetak.split(':')[0];
    var tr_min = rezervacija.vreme_pocetak.split(':')[1];

    if (yyyy > tryyyy){
      alert(true);
      deleteQueue.push(pozicija);
      yes=1;
    }else if(yyyy < tryyyy){
      alert(false);
    }else if (yyyy == tryyyy){
      if(mm > trmm){
        alert(true);
        deleteQueue.push(pozicija);
        yes=1;
      }else if(mm < trmm){
        alert(false);
      }else if( mm == trmm){
        if(now_hrs > tr_hrs) {
          alert(true);
          deleteQueue.push(pozicija);
          yes=1;
        }else if(now_hrs < tr_hrs){
          alert(false);
        }else if(now_hrs == tr_hrs){
          if(now_min > tr_min){
            if (tr_min != "00"){
              alert(true);
              deleteQueue.push(pozicija);
              yes=1;
            }else{
              alert(false);
            }
          }else if(now_min < tr_min){
            alert(false);
          }else if(now_min == tr_min){
            alert(false);
          }
        }
      }
    }
    

    pozicija++;
  });

  if(yes==1){
    for(var i=0; i < deleteQueue.length; i++){
      rezArr.splice(deleteQueue[i], 1);
    }
  }

  localStorage.setItem("reservations", JSON.stringify(rezArr));
}

function cancelReservation(){
  var idBtn = this.id; alert(idBtn);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var day = today.getDay(); 
  //alert(today.addDays(5)); 
  //showDates(idBtn);
  today = dd + '/' + mm + '/' + yyyy + " " + day;
  //alert(today); 
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

    //Swal.fire('Ne možete se zaista izlogovati, ali potvrdom uspevate da osvežite sesiju i da poništite prethodno sačuvane informacije.');
}