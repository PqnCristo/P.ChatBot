// Leitor de QR Code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js');
const client = new Client();

// Serviço de leitura do QR Code
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Confirmação de conexão
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

// Inicializa tudo
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms));

// Funil de atendimento
client.on('message', async msg => {
    const chat = await msg.getChat();
    const contact = await msg.getContact();
    const name = contact.pushname.split(" ")[0];

    if (msg.body.match(/(menu|dia|tarde|noite|oi|ol[aá]|bom dia|boa tarde|boa noite)/i) && msg.from.endsWith('@c.us')) {
        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(msg.from, `Oi, ${name}! 😊 Sou o assistente virtual da nossa empresa. Como posso te ajudar hoje? Escolha uma das opções abaixo:
\n1 - Como funciona
2 - Valores dos planos
3 - Benefícios
4 - Como aderir
5 - Outras perguntas`);
    }

    if (msg.body === '1' && msg.from.endsWith('@c.us')) {
        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(msg.from, `Nosso serviço oferece consultas médicas 24 horas por dia, 7 dias por semana, diretamente pelo WhatsApp. 😃\n\nNão há carência, você pode começar a usar imediatamente! Oferecemos atendimento médico ilimitado e muito mais.`);
        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(msg.from, `Como funciona? É super simples:\n1️⃣ Faça seu cadastro e escolha um plano.\n2️⃣ Após o pagamento, você já pode usar nossos serviços.\n3️⃣ Sempre que precisar, estamos aqui para te ajudar!`);
        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(msg.from, '🔗 Link para cadastro: https://pay.hotmart.com/A97201955I?checkoutMode=10&bid=1736944710103');
    }

    if (msg.body === '2' && msg.from.endsWith('@c.us')) {
        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(msg.from, `Temos planos para todos os perfis: \n💳 *Plano Individual:* R$22,50/mês\n👨‍👩‍👧‍👦 *Plano Família:* R$39,90/mês (até 3 dependentes)\n🏅 *Plano TOP Individual:* R$42,50/mês (benefícios extras)\n🏅 *Plano TOP Família:* R$79,90/mês (até 3 dependentes)`);
        await delay(2000);
        await client.sendMessage(msg.from, '🔗 Link para cadastro: https://pay.hotmart.com/A97201955I?checkoutMode=10&bid=1736944710103');
    }

    if (msg.body === '3' && msg.from.endsWith('@c.us')) {
        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(msg.from, `Nossos benefícios incluem: \n🎁 Sorteios anuais\n🏥 Atendimento médico ilimitado 24h\n📜 Receitas médicas exclusivas`);
        await delay(2000);
        await client.sendMessage(msg.from, '🔗 Link para cadastro: https://pay.hotmart.com/A97201955I?checkoutMode=10&bid=1736944710103');
    }

    if (msg.body === '4' && msg.from.endsWith('@c.us')) {
        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(msg.from, `Você pode aderir aos nossos planos facilmente pelo nosso site ou aqui pelo WhatsApp mesmo! Após a adesão, você terá acesso imediato aos serviços. 😍`);
        await delay(2000);
        await client.sendMessage(msg.from, '🔗 Link para cadastro: https://pay.hotmart.com/A97201955I?checkoutMode=10&bid=1736944710103');
    }

    if (msg.body === '5' && msg.from.endsWith('@c.us')) {
        await delay(2000);
        await chat.sendStateTyping();
        await delay(2000);
        await client.sendMessage(msg.from, `Se tiver mais dúvidas, estou por aqui! Ou acesse nosso site para mais informações. 😉\n🔗 https://pay.hotmart.com/A97201955I?checkoutMode=10&bid=1736944710103`);
    }
});