var byName = 0;
var byLvl = 0;
var byDuration = 0;

function sortByName(){
    if(byName == 1){
        return;
    }
    //div-ovi
    var tr1 = document.getElementsByClassName("tr1")[0];
    var tr2 = document.getElementsByClassName("tr2")[0];
    var tr3 = document.getElementsByClassName("tr3")[0];

    //imena treninga
    var name1 = tr1.id;
    var name2 = tr2.id;
    var name3 = tr3.id;

    //niz sa imenima koje zelimo da sortiramo
    var arr = new Array();
    arr.push(name1); arr.push(name2); arr.push(name3);

    //sortiramo 
    arr.sort();

    var toBe1st = document.getElementById(arr[0]).innerHTML;
    var toBe2nd = document.getElementById(arr[1]).innerHTML;
    var toBe3rd = document.getElementById(arr[2]).innerHTML;

    //izmenimo div-ove
    tr1.innerHTML = toBe1st; 
    tr2.innerHTML = toBe2nd; 
    tr3.innerHTML = toBe3rd; 

    tr1.id = arr[0];
    tr2.id = arr[1];
    tr3.id = arr[2];

    //obavestimo
    if(localStorage.getItem("language") == "eng"){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfuly sorted by name!',
            showConfirmButton: false,
            timer: 1200
        })
    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Uspešno sortirani treninzi po imenu!',
            showConfirmButton: false,
            timer: 1200
        })
    }
    

    byName = 1; byLvl = 0; byDuration = 0;
}

function sortByLvl(){
    if(byLvl == 1){
        return;
    }
    
    //div-ovi
    var tr1 = document.getElementsByClassName("tr1")[0];
    var tr2 = document.getElementsByClassName("tr2")[0];
    var tr3 = document.getElementsByClassName("tr3")[0];

    //id treninga
    var name1 = tr1.id;
    var name2 = tr2.id;
    var name3 = tr3.id;
    //niz sa id koje zelimo da sortiramo
    var arr = new Array();
    arr.push(name1); arr.push(name2); arr.push(name3);

    //tezine
    var lvl1 = tr1.id.split('-')[2];
    var lvl2 = tr2.id.split('-')[2];
    var lvl3 = tr3.id.split('-')[2];
    //niz tezina
    var arrlvl = new Array();
    arrlvl.push(lvl1); arrlvl.push(lvl2); arrlvl.push(lvl3);

    //sortiramo tezine
    arrlvl.sort(function(a, b){return a - b}); 

    //izmenimo div-ove
    var toBe1st; var id1st; var toBe2nd; var id2nd; var toBe3rd; var id3rd;
    for(var i = 0; i < 3; i++){
        if(arr[i].split('-')[2] == arrlvl[0]){
            toBe1st = document.getElementById(arr[i]).innerHTML;
            id1st = arr[i];
        }
        if(arr[i].split('-')[2] == arrlvl[1]){
            toBe2nd = document.getElementById(arr[i]).innerHTML;
            id2nd = arr[i];
        }
        if(arr[i].split('-')[2] == arrlvl[2]){
            toBe3rd = document.getElementById(arr[i]).innerHTML;
            id3rd = arr[i];
        }
    }
    tr1.innerHTML = toBe1st;
    tr2.innerHTML = toBe2nd;
    tr3.innerHTML = toBe3rd;

    tr1.id = id1st;
    tr2.id = id2nd;
    tr3.id = id3rd;

    //obavestimo
    if(localStorage.getItem("language") == "eng"){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfuly sorted by difficulty!',
            showConfirmButton: false,
            timer: 1200
        })
    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Uspešno sortirani treninzi po težini!',
            showConfirmButton: false,
            timer: 1200
        })
    }
    

    byName = 0; byLvl = 1; byDuration = 0;
}

function sortByDuration(){
    if(byDuration == 1){
        return;
    }
    //div-ovi
    var tr1 = document.getElementsByClassName("tr1")[0];
    var tr2 = document.getElementsByClassName("tr2")[0];
    var tr3 = document.getElementsByClassName("tr3")[0];

    //id treninga
    var name1 = tr1.id;
    var name2 = tr2.id;
    var name3 = tr3.id;
    //niz sa id koje zelimo da sortiramo
    var arr = new Array();
    arr.push(name1); arr.push(name2); arr.push(name3);

    //trajanja
    var dur1 = tr1.id.split('-')[1];
    var dur2 = tr2.id.split('-')[1];
    var dur3 = tr3.id.split('-')[1];
    //niz trajanja
    var arrDur = new Array();
    arrDur.push(dur1); arrDur.push(dur2); arrDur.push(dur3);

    //sortiramo trajanja
    arrDur.sort(function(a, b){return a - b}); 

    //izmenimo div-ove
    var toBe1st; var id1st; var toBe2nd; var id2nd; var toBe3rd; var id3rd;
    for(var i = 0; i < 3; i++){
        if(arr[i].split('-')[1] == arrDur[0]){
            toBe1st = document.getElementById(arr[i]).innerHTML;
            id1st = arr[i];
        }
        if(arr[i].split('-')[1] == arrDur[1]){
            toBe2nd = document.getElementById(arr[i]).innerHTML;
            id2nd = arr[i];
        }
        if(arr[i].split('-')[1] == arrDur[2]){
            toBe3rd = document.getElementById(arr[i]).innerHTML;
            id3rd = arr[i];
        }
    }
    tr1.innerHTML = toBe1st;
    tr2.innerHTML = toBe2nd;
    tr3.innerHTML = toBe3rd;

    tr1.id = id1st;
    tr2.id = id2nd;
    tr3.id = id3rd;

    //obavestimo
    if(localStorage.getItem("language") == "eng"){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfuly sorted by duration!',
            showConfirmButton: false,
            timer: 1200
        })
    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Uspešno sortirani treninzi po trajanju!',
            showConfirmButton: false,
            timer: 1200
        })
    }

    byName = 0; byLvl = 0; byDuration = 1;
}

function link(addr){
    document.location.href=addr;
}
