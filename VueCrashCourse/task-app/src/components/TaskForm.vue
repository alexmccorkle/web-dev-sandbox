<script>
import { ref } from 'vue';

const newTask = ref('');

function formSubmitted() {
  console.log(newTask.value);
  newTask.value = ''; // Clear the input after submission
}
</script>

<template>
  <form @submit.prevent="formSubmitted">
    <label>
      New Task
      <input v-model="newTask" name="newTask" />
    </label>
    <div class="button-container">
      <button>Add</button>
    </div>
  </form>
</template>
