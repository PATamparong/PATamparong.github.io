// basic functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo")
var client;
var btnConnect = document.getElementById('btn-connect');
var btnDisconnect = document.getElementById('btn-disconnect');
var btnPublish = document.getElementById('btn-publish');
var btnSubscribe = document.getElementById('btn-subscribe');
var btnunSubscribe = document.getElementById('btn-unSubscribe');
var topic = document.getElementById('subInput');
// var payload = document.getElementById('pubPayload');
var message = document.getElementById('messageArea');
// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!")
btnConnect.addEventListener('click', function(e){
  e.preventDefault;
  console.log("connected ")
  client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
  client.on("connect", function(){
      console.log("Successfully connected");
   })
  
  client.on("message", function (topic, payload) {
  console.log("Received { topic: " + topic + "; payload: "+ payload+"}");
  client.end();
})

})

btnDisconnect.addEventListener('click', function(e){
  e.preventDefault;
  console.log("disconnected ")
  client.end("connect", function(){
      console.log("you disconnected");
   })
})

btnPublish.addEventListener('click',function(c){
  c.preventDefault;
  client.publish(document.getElementById('pubInput').value, document.getElementById('pubPayload').value, function(err){
      if (err){
        console.log(err)
      } else {
        console.log("Published { topic: " + document.getElementById('pubInput').value
        + "; payload: " + document.getElementById('pubPayload').value + " }");
      }
    })

})

btnSubscribe.addEventListener('click',function(d){
  d.preventDefault;
  client.subscribe(document.getElementById('subInput').value , function (err){
    if (err){
      console.log(err);
    } else {
      console.log("Subscribe { topic: " + document.getElementById('subInput').value + " }");
    }
  })
})

btnunSubscribe.addEventListener('click',function(d){
  d.preventdefault;
  client.unsubscribe(document.getElementById('subInput').value , function (err){
    if (err){
      console.log(err);
    } else {
      console.log("unsubscribe to the topic ");
    }
  })
})


message.addEventListener("contextmenu",function(y){
  y.preventDefault;

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
