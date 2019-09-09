// basic functionalities
var client;
var btnConnect = document.getElementById('btn-connect');
var btnDisconnect = document.getElementById('btn-disconnect');
var btnPublish = document.getElementById('btn-publish');
var btnSubscribe = document.getElementById('btn-subscribe');

//connect button
btnConnect.addEventListener('click', function (e) {
  e.preventDefault;
  console.log("connected ")
  var address = document.getElementById('address').value;
  client = mqtt.connect(address);
  client.on("connect", function () {
    alert("Successfully connected");
  })
});

//disconnect button
btnDisconnect.addEventListener('click', function (e) {
  e.preventDefault;
  client.end("connect", function () {
    alert("you disconnected");
  })
})

//publish button
btnPublish.addEventListener('click', function (c) {
  c.preventDefault;
  var Stopic = document.getElementById('pubInput').value;
  var Spayload = document.getElementById('pubPayload').value;
  var data = '<tr>' + '<td>' + Stopic + '</td>' + '<td>' + Spayload + '</td>' + '<td>' + moment().format('MMMM Do YYYY, h:mm:ss a') + '</td>' + '</tr>';
  $('#messageArea').prepend(data);

  client.on("message", function (topic, payload) {
    console.log("Received { topic: " + topic + "; payload: " + payload + "}");
  });
  client.publish(topic, payload);


})

//subscribe button
btnSubscribe.addEventListener('click', function (d) {
  d.preventDefault;
  var topic = document.getElementById('pubInput').value;
  client.subscribe(topic, function () {
    console.log("Subscribe { topic: " + document.getElementById('subInput').value + " }");
  })
})


// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
