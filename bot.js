const Discord = require('discord.js');
const client = new Discord.Client();

// playing
client.on('ready', () => {                           
client.user.setGame(`★General Creative★`,'https://www.twitch.tv/Generals♥');
  });
  
  client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('554424659303727134').roles.find("name", "Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 2000);
});

client.login(process.env.BOT_TOKEN);
