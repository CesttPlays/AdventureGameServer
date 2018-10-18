var io = require('socket.io')(3000);



io.on('connection', function(socket) {
    socket.on('Hello',function(data){
        console.log("Se ha conectado: "+ data);
    });
    socket.on('Movement',function(data){
       console.log("Moving");
        socket.broadcast.emit('Movement',data);
    });
});