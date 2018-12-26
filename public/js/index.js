var socket = io();
socket.on('connect',function(){
    console.log('connected to server');
});
socket.on('disconnect',function(){
    console.log('disconnected from server');
});
socket.on('newEmail',function(email){
    console.log(email);
});
socket.emit('createEmail',{
    to:"utkarsh2311.singh@gmail.com",
    form:"Utkarsh Singh",
    data:"Hey there I am sending you the email"
});