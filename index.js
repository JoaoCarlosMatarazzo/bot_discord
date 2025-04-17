const { Client, GatewayIntentBits } = require('discord.js');

// Criação do client com intents necessários
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Quando o bot estiver online
bot.once('ready', () => {
    console.log(`🤖 Bot conectado como ${bot.user.tag}`);
});

// Resposta simples a uma mensagem
bot.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

// Seu token (use variáveis de ambiente em produção)
const token = 'token'; // Substitua pelo novo token
bot.login(token);




