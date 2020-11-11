var canvas1=document.getElementById("canvas1");

if(canvas1.getContext)
{
    var context=canvas1.getContext('2d');
    context.fillRect(25,25,100,200);
    
}