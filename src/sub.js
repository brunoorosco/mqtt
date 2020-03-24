//MQTT subcriber
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1234');
var topic = 'casa/L1';
var pub = require('./published')

client.on('message', (topic, message) => {
    message = message.toString()
    console.log(message);
    pub(client,topic,message)
})

client.on('connect', () => {
    client.subscribe(topic)
})