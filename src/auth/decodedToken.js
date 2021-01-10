const jwt = require('jsonwebtoken');
const { config } = require('../../config');
const { jwtSecret } = config;

const decodedToken = (req, requireAuth = true) => {
    const header = req.headers.authorization;

    if (header) {
        const token = header.replace('Bearer ', '');
        const decoded = jwt.verify(token, jwtSecret);
        return decoded;
    }
    if (requireAuth) {
        throw new Error('Login in to access resource');
    }
    return null
}

module.exports = { decodedToken }