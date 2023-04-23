const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const axios = require('axios');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.on(message('Hi'), (ctx) => ctx.reply('Hi I am a Bot Made By Aarin'));
bot.command('segmenttree', async (ctx) => { 
    const response = await axios.get('https://raw.githubusercontent.com/aarindey/Custom_DataStructures_In_CPP/main/SegmentTree.cpp');
    ctx.reply(response.data);
})
const Resume = `
    My Resume needs an Update.So, Later. :)
`;
bot.start((ctx) => ctx.reply('Welcome To Aarin\'s  Chat Bot...')); // start
bot.on('text', (ctx) => { 
    if (ctx.update.message.text == 'Take Care') { 
        ctx.reply("You too. Take Care");
    }
    else { ctx.reply("I Don't Understand You"); }
})
try {
    bot.command('Resume', (ctx) => ctx.reply(Resume));  // Resume
    bot.on(message('sticker'), (ctx) => ctx.reply('❤️'));
    bot.command('oldschool', (ctx) => ctx.reply('Romance'));
    bot.command('hipster', Telegraf.reply('Giga Chad'));
    
    bot.command('quit', async (ctx) => {
    // Explicit usage
    await ctx.telegram.leaveChat(ctx.message.chat.id);
  
    // Using context shortcut
    await ctx.leaveChat();
  });
  
//   bot.on(message('text'), async (ctx) => {
//     // Explicit usage
//     await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
  
//     // Using context shortcut
//     await ctx.reply(`Hello ${ctx.state.role}`);
//   });
  
  bot.on('callback_query', async (ctx) => {
    // Explicit usage
    await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);
  
    // Using context shortcut
    await ctx.answerCbQuery();
  });
  
  bot.on('inline_query', async (ctx) => {
    const result = [];
    // Explicit usage
    await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);
  
    // Using context shortcut
    await ctx.answerInlineQuery(result);
  });
  
  bot.launch();
  
  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}
catch {
    console.log("An Unexpected Error Occured");
}