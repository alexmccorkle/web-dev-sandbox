<script lang="ts" setup>
import { FetchError } from 'ofetch';

const route = useRoute();
const {
	data: task,
	error,
	status,
} = await useFetch(`/api/tasks/${route.params.id}`, {
	lazy: true,
});

const title = ref('');
const loading = ref(false);
const errorMessage = ref('');

// Set initial value when task loads
watch(
	task,
	(newTask) => {
		if (newTask) {
			title.value = newTask.title;
		}
	},
	{ immediate: true },
);

async function onSubmit() {
	if (title.value.trim() === '') {
		errorMessage.value = 'Task title cannot be empty.';
		return;
	}

	try {
		loading.value = true;
		errorMessage.value = '';

		await $fetch(`/api/tasks/${route.params.id}`, {
			method: 'patch',
			body: {
				title: title.value,
			},
		});

		// Navigate back to the task detail page
		navigateTo({
			name: 'tasks-update-id',
			params: { id: route.params.id },
		});
	} catch (e) {
		const error = e as FetchError;
		errorMessage.value =
			error.statusMessage || 'An error occurred while updating the task.';
	}
	loading.value = false;
}
</script>

<template>
	<div>
		<h1>Update Task</h1>

		<article v-if="status === 'pending'" aria-busy="true" />
		<article v-else-if="error" class="error">{{ error.statusMessage }}</article>
		<div v-else-if="task">
			<article v-if="loading" aria-busy="true">
				<p>Updating task...</p>
			</article>
			<article v-else-if="errorMessage" class="error">
				{{ errorMessage }}
			</article>

			<form @submit.prevent="onSubmit">
				<div>
					<p><strong>Current Title:</strong> {{ task.title }}</p>
				</div>
				<label for="title">Update title of task</label>
				<input id="title" type="text" v-model="title" :disabled="loading" />
				<div class="button-container">
					<button type="submit" :disabled="loading">Update</button>
					<button type="reset">
						<NuxtLink :to="{ name: 'tasks-id', params: { id: task.id } }">
							Cancel
						</NuxtLink>
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
