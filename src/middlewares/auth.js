const authService = require('../services/authService');


module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];

    if (token) {
        try {
            const payload = authService.validateToken(token);

            req.user = {
                email: payload.email,
                _id: payload._id,
                token
            };
        } catch (err) {
            console.error(err);
            return res.status(401).json({ message: 'Invalid access token. Please log in'});
        }
    }

    next();
};