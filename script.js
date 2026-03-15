let text = "Full Stack Developer";
let i = 0;

function typing(){

if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,100);
}

}

typing();
<li><a href="#contact">Contact</a></li>