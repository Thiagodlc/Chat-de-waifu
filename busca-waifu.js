const login = require('./login')
const sendChatMessage = require('./sendMessage')
const waifus = require("./waifus")

async function start() {


    const token = await login()


    waifus.map((waifu, index) => {

        setTimeout(async () => {
            await sendChatMessage(`$divorce ${waifu}`, token)
            await sendChatMessage(`y`, token)
        }, index * 2500);

    })

}


start()
