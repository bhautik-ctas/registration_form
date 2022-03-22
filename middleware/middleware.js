const jwt = require('jsonwebtoken');

const middleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const verify = await jwt.verify(token, process.env.secret_key)
        next();
    } catch (error) {
        res.send({ success: "flase", message: "can not exist middleware" })
    }
}

module.exports = middleware;