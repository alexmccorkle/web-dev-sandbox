<script lang="ts" setup>
import { FetchError } from 'ofetch';

const errorMessage = ref('');
const loading = ref(false);

const taskName = ref('');

async function onSubmit() {
	if (taskName.value.trim() === '') {
		errorMessage.value = 'Task name cannot be empty.';
		return;
	}
	try {
		loading.value = true;
		errorMessage.value = '';
		const result = await $fetch('/api/tasks', {
			method: 'POST',
			body: {
				title: taskName.value,
			},
		});
		navigateTo({
			name: 'tasks-id',
			params: { id: result.id },
		});
	} catch (e) {
		const error = e as FetchError;
		errorMessage.value =
			error.statusMessage || 'An error occurred while creating the task.';
	}
	loading.value = false;
}
</script>

<template>
	<div>
		<article v-if="loading" aria-busy>
			<p>Loading...</p>
		</article>
		<article v-else-if="errorMessage" class="error">
			{{ errorMessage }}
		</article>
		<form @submit.prevent="onSubmit">
			<label>
				Task
				<input type="text" name="task" v-model="taskName" />
			</label>
			<div class="button-container">
				<button>Create</button>
			</div>
		</form>
	</div>
</template>
