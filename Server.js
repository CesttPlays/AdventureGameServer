var io = require('socket.io')(3000);

var GOArray = new Array();

io.on('connection', function(socket) {
    socket.on('Hello',function(data){
        var stringArray = data.split(",");
        GOArray.push(stringArray);
        socket.broadcast.emit('New Player', data);
        socket.emit('Players Connected', GOArray);
    });
    socket.on('Movement',function(data){
      
        socket.broadcast.emit('Movement',data);
    });
});