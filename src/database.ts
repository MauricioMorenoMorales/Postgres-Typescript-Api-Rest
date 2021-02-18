import { Pool } from 'pg'

export const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	password: process.env.DBPASSWORD,
	database: 'typescript_api_rest',
	port: 5432,
})
