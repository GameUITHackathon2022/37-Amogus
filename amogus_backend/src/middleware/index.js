import admin from '../config/firebase-config'
export const decodeToken = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
        const decodeValue = await admin.auth().verifyIdToken(token);
        if (decodeValue) {
            req.user = decodeValue;
            return decodeValue;
        }
        return res.status(401).send({ error: 'Unauthorize' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal error' })
    }
}