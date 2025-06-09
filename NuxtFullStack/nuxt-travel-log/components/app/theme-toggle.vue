<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "night";
  },
  set(value) {
    colorMode.preference = value ? "night" : "fantasy";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <input v-model="isDark" type="checkbox">
    <Icon
      class="swap-off"
      name="tabler:sun-high-filled"
      size="24"
    />
    <Icon
      class="swap-on"
      name="tabler:moon-stars"
      size="24"
    />
  </label>
</template>
