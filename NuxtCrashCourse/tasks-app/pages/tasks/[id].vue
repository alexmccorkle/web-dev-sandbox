<script lang="ts" setup>
const route = useRoute();
const {
	data: tasks,
	error,
	status,
} = await useFetch(`/api/tasks/${route.params.id}`, {
	lazy: true,
});
</script>

<template>
	<div>
		<article v-if="status === 'pending'" aria-busy="true" />
		<article v-else-if="error" class="error">{{ error.statusMessage }}</article>
		<div v-else-if="tasks">
			<article>
				{{ tasks.title }}
			</article>
		</div>
	</div>
</template>
