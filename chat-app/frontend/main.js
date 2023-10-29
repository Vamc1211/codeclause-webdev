const socket = io();

var form =document.getElementById("form");
var input = document.getElementById("input");


const handleSubmit=form.addEventListener("submit",async function(e){
    e.preventDefault();
    if(input.value){
    try{
    await socket.emit("chat message",input.value)
    console.log(input.value)}
    
    catch(e){
        console.log(e);
    }
    input.value ="";}
    
})

socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });