const PORT = Number(process.env.PORT) || 5000
const NODE_ENV = process.env.NODE_ENV ? String(process.env.NODE_ENV) : 'development';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "EMAIL"
const EMAIL_PASS = process.env.EMAIL_PASS || 'PASSWORD'
const MONGO_URL = process.env.MONGO_URL || 'MONGO_URL'

export { PORT, NODE_ENV, ADMIN_EMAIL, EMAIL_PASS, MONGO_URL }