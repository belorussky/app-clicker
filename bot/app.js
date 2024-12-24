import { Telegraf, Markup } from 'telegraf'
import 'dotenv/config'

const webAppUrl = process.env.WEB_APP_URL
const token = process.env.BOT_TOKEN

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello! Press to start the app',
        Markup.inlineKeyboard([
            Markup.button.webApp('Open mini app', `${webAppUrl}?ref=ctx.payload`),
        ])
    )
})

bot.launch()