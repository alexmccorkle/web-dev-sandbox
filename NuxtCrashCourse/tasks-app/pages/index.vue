<script lang="ts" setup>
const {
	data: tasks,
	error,
	status,
} = await useFetch('/api/tasks', {
	// can also use 'useLazyFetch' I think?
	lazy: true,
});
</script>

<template>
	<div>
		<article v-if="status === 'pending'" aria-busy="true" />
		<article v-else-if="error" class="error">{{ error.statusMessage }}</article>
		<div v-else>
			<article v-for="task in tasks" :key="task.id">
				<h2>{{ task.title }}</h2>
				<p>{{ task.createdAt }}</p>
				<p>Status: {{ task.done }}</p>
				<div class="button-container">
					<NuxtLink
						role="button"
						:to="{ name: 'tasks-id', params: { id: task.id } }"
						>View</NuxtLink
					>
				</div>
			</article>
		</div>
	</div>
</template>
