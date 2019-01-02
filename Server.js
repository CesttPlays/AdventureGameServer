const io = require('socket.io')(3000);
const _ = require('lodash')

var people = new Array();
let jsonObject;
io.on('connection', function(socket) {
    console.log(socket.id);
    socket.emit('Connected', socket.id);
    socket.on('Hello',function(data){
        try{
            jsonObject  =JSON.parse(data);
            console.log(jsonObject.name + " conected");  
        }catch(err){
            console.log(err);
        }
        socket.broadcast.emit('New Player', JSON.stringify(data));
        var sString =JSON.stringify(people);
        socket.emit('Players Connected', sString,function (err, responseData) {
            if (err) {
                console.log(err);
            } else {
               //emit corecto
            }
        }); 
        people.push(jsonObject);
        
    });
    socket.on('Movement',function(data){
        try{
            var jsonObject =JSON.parse(data);
        }catch(err){
            console.log(err);
        }
        var sString = JSON.stringify(jsonObject);
        socket.broadcast.emit('Movement',sString);
    });
    
    socket.on('error', function (err) {
    console.log(err);
});
});