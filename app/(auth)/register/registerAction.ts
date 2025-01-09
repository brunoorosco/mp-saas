'use server'

import db from '@/infra/db'

export default async function registerAction(formData: FormData) {
	const entry = Array.from(formData.entries())
	const data = Object.fromEntries(entry)

	console.log(data)
	if (!data.email || !data.password || !data.name) {
		throw new Error('Você precisa insirer todos os campos')
	}
	//
	await db.user.create({
		email: data.email,
		password: data.password,
		name: data.name,
	})
}
