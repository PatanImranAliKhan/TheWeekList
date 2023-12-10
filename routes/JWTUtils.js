const jwt = require('jsonwebtoken')

const validatetoken = async (token) => {
    try {
        var decodedData = await jwt.verify(token, process.env.JWT_SECRET)
        return decodedData
    } catch {
        return false
    }
}

const singIn = (payload) => {
    jwt.sign(payload, process.env.JWT_SECRE, { expiresIn: '2d' }, (err, token) => {
        if (err) {
            return "Error";
        }
        console.log(token)
        return token;
    })
}

module.exports = {singIn, validatetoken}