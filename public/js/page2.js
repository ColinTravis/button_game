socket = io.connect();



socket.on('sendResponse', function(data) {
  console.log(data);
  console.log("Message received!");
})
