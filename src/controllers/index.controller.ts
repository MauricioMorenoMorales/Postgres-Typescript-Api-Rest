import { RequestHandler, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database'

export const getUser: RequestHandler = async (req, res): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query('SELECT * FROM users')
		return res.status(200).json(response.rows)
	} catch (err) {
		console.log(err)
		return res.status(500).json('Internal server error')
	}
}

export const getUserById: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	const id = Number(req.params.id)
	const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
	return res.json(response.rows)
}

export const createUser: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	const { name, email } = req.body
	const response: QueryResult = await pool.query(
		'INSERT INTO users (name, email) VALUES ($1, $2)',
		[name, email],
	)
	console.log('User created')
	return res.json({
		message: 'User created Successfully',
		body: {
			user: {
				name,
				email,
			},
		},
	})
}

export const updateUser: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	const id = parseInt(req.params.id)
	const { name, email } = req.body
	await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
		name,
		email,
		id,
	])
	return res.json(`User ${id} updated succesfuly`)
}

export const deleteUser: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	const id = parseInt(req.params.id)
	await pool.query('DELETE FROM users WHERE id = $1', [id])
	return res.json(`User ${id} deleted succesfully`)
}
