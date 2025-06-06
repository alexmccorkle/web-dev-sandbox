import db from '~/lib/db';
import { tasks, PatchTasksSchema } from '~/lib/db/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

const idParams = z.object({
	id: z.coerce.number(),
});

export default defineEventHandler(async (event) => {
	// Validate the ID parameter
	const paramResult = await getValidatedRouterParams(event, idParams.safeParse);
	if (!paramResult.success) {
		return sendError(
			event,
			createError({
				statusCode: 422,
				statusMessage: 'Invalid task ID',
			}),
		);
	}

	// Validate the request body
	const bodyResult = await readValidatedBody(event, PatchTasksSchema.safeParse);
	if (!bodyResult.success) {
		return sendError(
			event,
			createError({
				statusCode: 422,
				statusMessage: 'Invalid task data',
			}),
		);
	}

	// Update the task
	const result = await db
		.update(tasks)
		.set({ ...bodyResult.data, updatedAt: Date.now() })
		.where(eq(tasks.id, paramResult.data.id))
		.returning();

	if (result.length === 0) {
		return sendError(
			event,
			createError({
				statusCode: 404,
				statusMessage: 'Task not found',
			}),
		);
	}

	return result[0];
});
