<template>
	<nav class="container">
		<ul>
			<li>
				<NuxtLink :to="{ name: 'index' }">
					<strong> Tasks App </strong>
				</NuxtLink>
			</li>
		</ul>
		<ul>
			<li><NuxtLink :to="{ name: 'create' }">Create Task</NuxtLink></li>
			<li><a href="#">My Tasks</a></li>
			<li><a href="#">About</a></li>
		</ul>
	</nav>
</template>
