process.env.PORT = process.env.PORT || 3000


// ==================================
// Entorno
// ==================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


// ==================================
// Vencimiento de token
// ==================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30


// ==================================
// SEED de autenticación
// ==================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

let urlDB

// ==================================
// Base de datos
// ==================================
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI
}

process.env.URLDB = urlDB

// ==================================
// Google client ID
// ==================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '440046911604-tr7ni6pspprtinhudb35htnj4rekcs9j.apps.googleusercontent.com'