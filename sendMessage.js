const axios = require('axios').default

async function sendChatMessage(message, token) {
    const response = await axios.post('https://discord.com/api/v9/channels/822468744830910554/messages', {
        content: message,
    }, {
        headers: {
            authorization: token, contentType: 'application / json'

        }

    })

    return response.data
}

module.exports = sendChatMessage;