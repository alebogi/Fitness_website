function refreshBestOffers(){
    if(localStorage.getItem("siteOpend1stTime") == null){
        localStorage.setItem("siteOpend1stTime", 1);
        initUser();
        initTr();
    }

    //...
}

function initUser(){
    var user = {
        username:"maja_93",
        ime:"Maja",
        prezime:"Vukasović",
        mail:"maja@etf.bg.ac.rs",
      
    }

    localStorage.setItem("user", JSON.stringify(user));
    var lastRes = new Array();
    localStorage.setItem("lastReservations", JSON.stringify(lastRes));
}

function initTr(){ 
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

    localStorage.setItem("yoga", JSON.stringify(yoga));
    localStorage.setItem("pilates", JSON.stringify(pilates));
    localStorage.setItem("cardio", JSON.stringify(cardio));
    localStorage.setItem("core", JSON.stringify(core));
    

}