window.onload=function(){
    const canvas=document.querySelector("canvas");
    if(canvas && canvas.getContext){
        let ctx=canvas.getContext("2d");
        if(ctx){
            ctx.lineWidth="25";

            ctx.strokeStyle="green";
            ctx.beginPath();
            ctx.lineCap="round"
            ctx.moveTo(50,0);
            ctx.lineTo(250,0);
            ctx.stroke();

            ctx.strokeStyle="yellow";
            ctx.lineCap="square"
            ctx.beginPath();
            ctx.moveTo(50,50);
            ctx.lineTo(250,50);
            ctx.stroke();

            ctx.strokeStyle="blue";
            ctx.lineCap="butt"
            ctx.beginPath();
            ctx.moveTo(50,100);
            ctx.lineTo(250,100);
            ctx.stroke();

            ctx.strokeStyle="orange";
            ctx.beginPath();
            ctx.lineCap="round"
            ctx.moveTo(50,150);
            ctx.lineTo(250,150);
            ctx.stroke();

            ctx.strokeStyle="yellow";
            ctx.beginPath();
            // ctx.lineCap="butt"
            ctx.lineJoin="round"
            ctx.moveTo(50,300);
            ctx.lineTo(100,200);
            ctx.stroke();

            ctx.beginPath()
            ctx.moveTo(100,200);
            ctx.lineTo(150,300);
            ctx.stroke();

            
            
        }
    }
}