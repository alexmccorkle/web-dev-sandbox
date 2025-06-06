import db from '~/lib/db';
import { tasks } from '~/lib/db/schema';
import { z } from 'zod';
import { eq } from 'drizzle-orm';

const idParams = z.object({
	id: z.coerce.number(),
});

export default defineEventHandler(async (event) => {
	await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay for demonstration purposes
	const result = await getValidatedRouterParams(event, idParams.safeParse);

	if (!result.success) {
		return sendError(
			event,
			createError({
				statusCode: 422,
				statusMessage: 'invalid task id',
			}),
		);
	}
	const task = await db.query.tasks.findFirst({
		where: eq(tasks.id, result.data.id),
	});

	if (!task) {
		return sendError(
			event,
			createError({
				statusCode: 404,
				statusMessage: 'task not found',
			}),
		);
	}
	return task;
});
