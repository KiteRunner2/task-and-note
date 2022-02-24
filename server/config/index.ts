require('dotenv').config()

export const { PORT } = process.env
export const { BUILD_PATH } = process.env
export const { DB_NAME } = process.env
export const { DB_PASSWORD } = process.env
export const { DB_URI_PROD } = process.env
export const { DB_URI_DEV } = process.env
export const { ENV } = process.env

export const DB_URI = ENV === 'development' ? DB_URI_DEV : DB_URI_PROD
