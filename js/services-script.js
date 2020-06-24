// $(document).ready(function(){

//     $(".mytoggle").click(function(){
//        var id = $(this).attr("id");
//        var name = id + "-contents";
//        $("#name").hide();
//     });

// });

function myToggle(id){
    var name = id + "-contents";
   var obj = document.getElementById(name);
   obj.hidden = (!obj.hidden);
}