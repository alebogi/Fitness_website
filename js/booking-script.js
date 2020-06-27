
$(document).ready(function(){

    // var selectedTip = $("input[type='radio'][name='tip']:checked");
    // if(selectedTip != null){
    //     showPodtip(selectedTip);
    // }

    $(".tip").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            var val = $(this).val(); // retrieve the value
            showPodtip(val);
        }
    });

    $(".podtip").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            var val = $(this).val(); // retrieve the value
            showTable(val);
        }
    });

});

function showPodtip(className){
    var el = new Array(3);
    var obj1 = new Object(); var obj2 = new Object(); var obj3 = new Object();

    switch(className){
        case "yoga": 
        el[0] = obj1.innerHTML = '<input type="radio" name="podtip" value="yoga-hatha" id="podtip1" class="podtip yoga"> Hatha joga <br/>';
        el[1] = obj2.innerHTML = '<input type="radio" name="podtip" value="yoga-ashtanga" id="podtip2" class="podtip yoga"> Aštanga joga <br/>';
        el[2] = obj3.innerHTML = '<input type="radio" name="podtip" value="yoga-raja" id="podtip3" class="podtip yoga"> Radža joga <br/>';
        break;
        case "pilates":
            el[0] = obj1.innerHTML = '<input type="radio" name="podtip" value="pilates-classic" id="podtip4" class="podtip pilates"> Klasični pilates <br/>';
            el[1] = obj2.innerHTML = '<input type="radio" name="podtip" value="pilates-stot" id="podtip5" class="podtip pilates"> Stot pilates <br/>';
            el[2] = obj3.innerHTML = '<input type="radio" name="podtip" value="pilates-reformer" id="podtip6" class="podtip pilates"> Reformer pilates <br/>';
            break;
        case "cardio":
            el[0] = obj1.innerHTML = '<input type="radio" name="podtip" value="cardio-hiit" id="podtip7" class="podtip cardio"> HIIT-cardio <br/>';
            el[1] = obj2.innerHTML = '<input type="radio" name="podtip" value="cardio-cardiobox" id="podtip8" class="podtip cardio"> Cardio box <br/>';
            el[2] = obj3.innerHTML = '<input type="radio" name="podtip" value="cardio-crossfit" id="podtip9" class="podtip cardio"> Crossfit-cardio <br/>';
            break;
        case "core":
            el[0] = obj1.innerHTML = '<input type="radio" name="podtip" value="core-plyometrics" id="podtip10" class="podtip core"> Plyometrics-core <br/>';
            el[1] = obj2.innerHTML = '<input type="radio" name="podtip" value="core-sixpack" id="podtip11" class="podtip core"> Six pack-core <br/>';
            el[2] = obj3.innerHTML = '<input type="radio" name="podtip" value="core-circuit" id="podtip12" class="podtip core"> Circuit-core <br/>';
            break;
    }

    
    
    var field = document.getElementById("tr-dynamic");
    field.innerHTML="";
    var i;
    for(i=0; i<el.length;i++){
        field.innerHTML += el[i];
    }
}