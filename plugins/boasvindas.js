case 'admins':
					
 reply(mess.only.group)
					teks = `🔰𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐀𝐃𝐌𝐈𝐍𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎🔰 *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break

handler.command = /^(admins\^)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler
