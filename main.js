var btn = document.getElementById("btn");
if (btn) { 
    btn.addEventListener("click", function() {
        window.open("msg.html", "_blank", "width=470,height=220,top=42,left=0");
    });
}

    
var msg = document.getElementById("msg");
if (msg) {
    var str = "Your message will Be Displayed Character By Character :) <br> few seconds and this window will terminate ...";
    var arr = str.split('');
    var strOut = '';
    var delay = 0;

    arr.forEach(function(char) {
        setTimeout(function() {
            strOut += char;
            msg.innerHTML = strOut;
        }, delay);
        delay += 100; 
    });

    setTimeout(function() {
        window.close();
    }, (100 * (str.length + 10 )));
    
}


























// document.addEventListener("DOMContentLoaded", function(){
//     var btn = document.getElementById("btn");
//     if (btn) {
//         btn.addEventListener("click", function() {
//             window.open("msg.html", "_blank", "width=470,height=220,top=42,left=0");
//         });
//     }

    
//     var msg = document.getElementById("msg");
//     if (msg) {
//         var str = "Your message will Be Displayed Character By Character :) <br> few seconds and this window will terminate ...";
//         var arr = str.split('');
//         var strOut = '';
//         var delay = 0;

//         arr.forEach(function(char) {
//             setTimeout(function() {
//                 strOut += char;
//                 msg.innerHTML = strOut;
//             }, delay);
//             delay += 100; 
//         });
//     }
// });









