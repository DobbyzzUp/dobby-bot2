let handler  = async (m, { conn }) => {
  let txt = Object.keys(conn.chats.dict).filter(v=>/g\.us/.test(v)).map(v=>`${conn.getName(v)}\n${v}`).join`\n\n`
  conn.reply(m.chat, '𝐷𝑂𝐵𝐵𝑌♱᭄, essa é a lista de grupos onde seu bot está:\n' + txt, m)
}
handler.command = /^(group(s|list))$/i
handler.owner = false
handler.mods = true
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler








