 
   window.onscroll = function(){
    var a = document.body.scrollTop;
    var s = document.getElementById("s");
    if(a>=1300){
      s.style.display = "block"; 
    } else {
      s.style.display = "none";
    }
  }
 
 