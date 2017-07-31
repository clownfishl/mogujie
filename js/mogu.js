
function test(){
	    var s=document.getElementById('s');
        var o=document.getElementById('o');
        var n=document.getElementById('n');
		var myDate = new Date();
		var aim = new Date("07/31/2017");

		var myDatems = myDate.getTime();
		var aimms = aim.getTime();

	    var del =aim-myDate;

		var secondsnum=1000;
		var minnum=60*secondsnum;
		var hournum = 60*minnum;
		var daynum = hournum*24; 

		// var day = Math.floor(del/daynum);
		var hour = Math.floor(del%daynum/hournum);
	    var min = Math.floor(del%daynum%hournum/minnum);
	    var seconds = Math.floor(del%minnum/1000);

	    var str =add(hour);
	     var str1 =add( min);
	      var str2 =add(seconds);
	    s.innerHTML = str;
	     o.innerHTML = str1;
	      n.innerHTML = str2;
	}
	setInterval('test()',1000)
function add(n){
      if(n<=9&&n>=0){
      	return '0'+ n
      }else{
      	return n
      }
   }