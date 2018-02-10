//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var pos = 1; 
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10, "right");
    
    function move(direction) {
         
		if(pos >= 150){
            switch(direction){
                case "right":
					pos = 1;
                    clearInterval(t);
					t = setInterval(move, 10 , "down");
                    break;
                case "down":
					pos = 149;
                    clearInterval(t);
					t = setInterval(move, 10 , "left");
                    break;
			}
		}
		else if(pos <= 0){
				switch(direction){
                case "left":
					pos = 149;
                    clearInterval(t);
					t = setInterval(move, 10 , "up");
                    break;
                case "up":
					pos = 1;
                    clearInterval(t);
					t = setInterval(move, 10 , "right");
                    break;
				}
		}
        
        else {
            switch(direction){
                case "right":
					pos += 1;
					box.style.background="red";
                    box.style.left = pos+'px';
                    break;
                case "down":
					pos += 1;
					box.style.background="blue";
                    box.style.top = pos+'px';
                    break;
                case "left":
					pos -= 1;
					box.style.background="yellow";
                    box.style.left = pos+'px';
                    break;
                case "up":
					pos -=1;
					box.style.background="orange";
                    box.style.top = pos+'px';
                    break;
            }
            
        }
    }
};

function someFunc(){
	alert("times");
}