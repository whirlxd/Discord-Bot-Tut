const Discord = require('discord.js');
const config = require('config.json');
const client = new Discord.Client();
client.on('ready' , () => {
console.log('me is ready');
})
client.on('message' , message = >{
if(message.content == !ping){
message.channel.send("Pong!")}})
client.login(process.env.token)
