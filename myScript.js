window.onload = function (){

    var canvas = document.getElementById("myCanvas"),
       context = canvas.getContext("2d"),
       height = canvas.height = window.innerHeight,
       width = canvas.width = window.innerWidth,
       t=0;

   

       	
       function rand(a){
       	var a = Math.random()*a;
       	a = a.toFixed(0);
       	return a;
       }
       var color = [];

       
       color.push("rgb(" + rand(255)  + "," + rand(255)  + "," + rand(255)  + ")");
       color.push("rgb(" + rand(255)  + "," + rand(255)  + "," + rand(255)  + ")");
       color.push("rgb(" + rand(255)  + "," + rand(255)  + "," + rand(255)  + ")");
       color.push("rgb(" + rand(255)  + "," + rand(255)  + "," + rand(255)  + ")");
       function update(){
    
    	   	color[0] = "rgb(" + rand(255)  + "," + rand(255)  + "," + rand(255)  + ")";
   	    	color[1] = "rgb(" + rand(255)  + "," + rand(255)  + "," + rand(255)  + ")";
            color[2] = "rgb(" + rand(255)  + "," + rand(255)  + "," + rand(255)  + ")";
            color[3] = "rgb(" + rand(255)  + "," + rand(255)  + "," + rand(255)  + ")";
       }

       update();

       function fractal(a,b,c,d,e,time){
       	if(d>0){

       		context.lineWidth = (Math.sin(time) + 1)/2;
       		
       		
       		context.beginPath();
       		context.strokeStyle = e;
       		context.moveTo(a+c,b+c);
       		context.lineTo(a-c,b+c);
       		context.moveTo(a-c,b+c);
       		context.lineTo(a-c,b-c);
       		context.moveTo(a-c,b-c);
       		context.lineTo(a+c,b-c);
       		context.moveTo(a+c,b-c);
       		context.lineTo(a+c,b+c);
       		context.stroke();
       		fractal(a+c,b+c,c/2,d-1,color[0],t+.35);
       		fractal(a-c,b+c,c/2,d-1,color[1],t+1.05);
       		fractal(a,b+c,c/2,d-1,color[2],t+1.35);
       		fractal(a,b-c,c/2,d-1,color[3],t+1.75);
       	}
       }

       function render(){
       context.clearRect(0,0,width,height);
       fractal(width/2,height/2,140,5,color[0],t);
         t += .035;
        
       if(0.000 == context.lineWidth.toFixed(3))
       	update();

        requestAnimationFrame(render);
       }
       render();

}