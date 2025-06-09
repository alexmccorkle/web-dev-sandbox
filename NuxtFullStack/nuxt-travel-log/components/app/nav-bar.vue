<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <a class="btn btn-secondary">
        Sign in with GitHub! <Icon
          name="tabler:brand-github" size="16"
        />
      </a>
    </div>
  </div>
</template>
