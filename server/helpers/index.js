import crypto from 'crypto'


const SECRET = 'TOBILOBA-REST-API'
export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt, password) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest("hex")
}