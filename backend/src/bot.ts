import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN || '');
const WEBAPP_URL = process.env.WEBAPP_URL || 'https://example.com';

bot.start(async (ctx) => {
  await ctx.reply(
    '🛍 Добро пожаловать в магазин мерча!\n\n' +
    'Нажмите кнопку ниже, чтобы открыть каталог:',
    Markup.inlineKeyboard([
      [Markup.button.webApp('🛍 Открыть магазин', WEBAPP_URL)],
      [Markup.button.callback('ℹ️ О нас', 'about')]
    ])
  );
});

bot.action('about', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply('Мы продаем качественный мерч с доставкой по всей России!');
});

bot.on('web_app_data', async (ctx) => {
  try {
    const data = JSON.parse(ctx.webAppData.data);
    console.log('Получены данные из WebApp:', data);
    
    if (data.type === 'order') {
      await ctx.reply(
        `✅ Заказ оформлен!\n\n` +
        `Номер заказа: ${Date.now()}\n` +
        `Сумма: ${data.order.total} ₽\n` +
        `Статус: Ожидает оплаты`
      );
    }
  } catch (error) {
    console.error('Ошибка обработки данных:', error);
  }
});

bot.launch().then(() => {
  console.log('🤖 Бот запущен!');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
