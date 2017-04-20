/*
* @Author: ml
* @Date:   2017-04-19 20:06:06
* @Last Modified by:   ml
* @Last Modified time: 2017-04-19 22:39:40
*/
window.onload=function(){
	var font = document.getElementById('font'),
		img = document.getElementById('img'),
		left = document.getElementById('left'),
		right = document.getElementById('right'),
		times = document.getElementById('times'),
		tupian1 = document.getElementById('tupian1'),
		tupian2 = document.getElementById('tupian2'),
		tupian3 = document.getElementById('tupian3');
		btn = document.getElementById('btn');

	function count(){
		times.innerHTML=parseInt(times.innerHTML)+1;
	}
	function cai(){
		tupian1.onclick=function(){
			tupian1.innerHTML="";
			tupian2.innerHTML="";
			tupian3.innerHTML="<img src='images/jiandao.png' alt='jiandao'>";
			var val = showPC();
			if(val == 1){var result="try";}else if(val == 2){var result="lost";}else{var result="win";}
			showResult(result);
			tupian1.onclick="";
			tupian2.onclick="";
			tupian3.onclick="";

		}
		tupian2.onclick=function(){
			tupian1.innerHTML="";
			tupian2.innerHTML="";
			tupian3.innerHTML="<img src='images/shitou.png' alt='shitou'>";
			var val = showPC();
			if(val == 2){var result="try";}else if(val == 3){var result="lost";}else{var result="win";}
			showResult(result);
			tupian1.onclick="";
			tupian2.onclick="";
			tupian3.onclick="";
		}
		tupian3.onclick=function(){
			tupian1.innerHTML="";
			tupian2.innerHTML="";
			tupian3.innerHTML="<img src='images/bu.png' alt='bu'>";
			var val = showPC();
			if(val == 3){var result="try";}else if(val == 1){var result="lost";}else{var result="win";}
			showResult(result);
			tupian1.onclick="";
			tupian2.onclick="";
			tupian3.onclick="";
		}
	}
	function showPC(){
		var count = Math.ceil(3*Math.random())
		switch (count) {
			case 1:
				tupian1.innerHTML="<img src='images/jiandao.png' alt='jiandao'>";
				var val = 1;
				break;
			case 2:
				tupian1.innerHTML="<img src='images/shitou.png' alt='shitou'>";
				var val = 2;
				break;
			case 3:
				tupian1.innerHTML="<img src='images/bu.png' alt='bu'>";
				var val = 3;
				break;
			default:
				alert("wrong!");
				break;
		}
		return val;
	}

	function showResult(result){
		if(result == "try"){
			tupian2.innerHTML="<p><strong>TRY AGIN</strong></p>";
			tupian2.style.display = 'flex';
			tupian2.style.justifyContent = 'center';
			tupian2.style.alignItems = 'center';
			tupian2.style.fontSize = '35px';
		}else if(result == "win"){
			tupian2.innerHTML="<p><strong>YOU WIN</strong></p>";
			tupian2.style.display = 'flex';
			tupian2.style.justifyContent = 'center';
			tupian2.style.alignItems = 'center';
			tupian2.style.fontSize = '35px';
			count();
		}else{
			tupian2.innerHTML="<p><strong>YOU LOST</strong></p>";
			tupian2.style.display = 'flex';
			tupian2.style.justifyContent = 'center';
			tupian2.style.alignItems = 'center';
			tupian2.style.fontSize = '35px';
		}
	}

	function reset(){
		tupian1.innerHTML='<img src="images/jiandao.png" alt="jiandao" id="jiandao">';
		tupian2.innerHTML='<img src="images/shitou.png" alt="shitou" id="shitou">';
		tupian3.innerHTML='<img src="images/bu.png" alt="bu" id="bu">';
	}
	cai();
	btn.onmousedown=(function(){
		reset();
		cai();
	});

}