const axios = require('axios').default

async function login() {
    const response = await axios.post('https://discord.com/api/v9/auth/login', {
        login: "email", password: "*******"
    })

    return response.data.token;

}

module.exports = login;