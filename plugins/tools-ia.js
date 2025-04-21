/* Chatgpt Prompt By WillZek 
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, usedPrefix, command, text }) => {

if (!text) return m.reply('🍭 Ingresa Un Texto');

try {
const username = `${conn.getName(m.sender)}`

const basePrompt = `Tu nombre es MOON y parece haber sido creado por Alberto. Tú usas el idioma Español. Llamarás a las personas por su nombre ${username}, te gusta ser divertido, te encanta aprender y sobre todo las explociones. Lo más importante es que debes ser amigable con la persona con la que estás hablando. ${username}`

const api = await (await fetch(`https://delirius-apiofc.vercel.app/ia/gptprompt?text=${text}&prompt=${basePrompt}`)).json();

let respuesta = api.data;

await conn.sendMessage(m.chat, { text: respuesta }, { quoted: m });
} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
}}

handler.command = ['ia', 'chatgpt'];

export default handler