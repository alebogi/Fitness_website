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
  //prikaz usera
  user =  JSON.parse(localStorage.getItem("user")) ;
  document.getElementById("ime").innerText = user.ime;
  document.getElementById("prezime").innerText = user.prezime;
  document.getElementById("username").innerText = user.username;
  document.getElementById("mail").innerText = user.mail;

  //prikaz rezervisanih treninga
  var rezArr = JSON.parse(localStorage.getItem("reservations"));
  if(rezArr == null) return;
  
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
    td.append(rezervacija.dan);
    //treba sracunati datum
    tr.append(td);

    td = $("<td></td>");
    time_str = rezervacija.vreme_pocetak + "h - " + rezervacija.vreme_kraj + "h";
    td.append(time_str);
    tr.append(td);

    //dugme za otkazivanje
    td = $("<td></td>");
    // if (0 > 0){
    //     var idBtn = id_tr + "+" + termin.dan; //npr yoga-hatha+Pon kako bismo znali sta zelimo da rez
    //     var btn = document.createElement("BUTTON");   // Create a <button> element
    //     btn.type = "button";
    //     btn.className = "btn resBtn";
    //     btn.innerHTML = "Otkaži";                   // Insert text
    //     btn.id = idBtn;
        
    //     td.append(btn);
        
    // }else{
    //     td.append("");
    // }
    td.append("");
    tr.append(td);

    tabela.append(tr);
    var btns_arr = document.getElementsByClassName("resBtn");
    for( var i = 0; i < btns_arr.length; i++){
        btns_arr[i].onclick = cancelReservation;
    }

  });
}

function cancelReservation(){

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