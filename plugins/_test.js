import fetch from 'node-fetch';

let MF = async(m, { conn, args }) => {

if (args[0]) return conn.reply(m.chat, '🌙 INGRESE UN TEXTO PARA BUSCAR EN YAHOO', m);

let api = await (await fetch(`https://archive-ui.tanakadomp.biz.id/search/yahoosearch?q=${args[0]}`).json();

let moon = `\`𝚈𝙰𝙷𝙾𝙾 𝑋 𝚂𝙴𝙰𝚁𝙲𝙷\`.\n\n`
if (let i = 0, i == api.result.lenght) {
let force = api.result[i];

moon += `☪︎ *Título:* ${force.title}\n`
moon += `☪︎ *Enlace:* ${force.link}\n\n`
moon += `☪︎ *Descripción:* ${force.snippet}\n`
moon += `──── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ────`

conn.sendMessage(m.chat, { text: moon }, { quoted: m });

MF.command = ['yahoosearch', 'yahoos'];

export default MF;
