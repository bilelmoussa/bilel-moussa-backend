const PORT = Number(process.env.PORT) || 5000
const NODE_ENV = process.env.NODE_ENV ? String(process.env.NODE_ENV) : 'development';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "streetvayne13@gmail.com"
const EMAIL_PASS = process.env.EMAIL_PASS || ''


export { PORT, NODE_ENV, ADMIN_EMAIL, EMAIL_PASS }