import axios from 'axios';

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;  // Store your bot token in environment variables
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;      // Store your chat_id in environment variables

export const sendTelegramNotification = async (message: string) => {

    try {
        const url = `${TELEGRAM_API_URL}${BOT_TOKEN}/sendMessage`;
        await axios.post(url, {
            chat_id: CHAT_ID,
            text: message,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Notification sent to Telegram');
    } catch (error) {
        console.error('Error sending Telegram message:', error);
    }
};
