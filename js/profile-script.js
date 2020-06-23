function showBooked(){
    
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