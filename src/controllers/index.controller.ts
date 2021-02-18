import { RequestHandler } from 'express'
import { pool } from '../database'

export const getUser: RequestHandler = async (req, res): Promise<void> => {
	res.send('users')
}
