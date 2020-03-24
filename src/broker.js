// var mosca = require('mosca')
// var settings = {port:1234}
// var broker = new mosca.Server(settings)

// broker.on('ready', ()=>{
//     console.log('Broker is ready!')
// })

// broker.on('published', (packet)=>{
//     console.log(packet.payload.toString())
// })



//nova função


const published = (mosca, settings) => {
    const broker = new mosca.Server(settings)

    broker.on('ready', () => {
        console.log('Broker is ready!')
    })
    broker.on('published', (packet) => {
        console.log(packet.payload.toString())
    })
}

module.exports = published;