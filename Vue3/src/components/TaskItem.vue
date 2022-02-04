<template lang="">
  <b>{{ task.title }}</b>
  <br />
  <p class="main-li-text1">{{ task.text }}</p>
  <br />
  <span class="main-time-tasks">{{ task.time }}</span>
  <!-- <button @click="tasks.splice(index, 1)">Удалить</button> -->
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'TaskItem',
  props: {
    task: {
      required: true,
      type: Object,
    },
  },
});
</script>
<style lang=""></style>
