var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1234')
var topic = 'casa/L1'

//MQTT Publishe
const published = (message) => {
    //client.on('connect', () => {
       
            client.publish(topic, message)
            console.log('Message sent!', message, topic)
       
   // })

}

module.exports = published;