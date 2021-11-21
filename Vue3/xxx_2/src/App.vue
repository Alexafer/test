<template lang="pug">
div
  Layout
</template>
<script lang="ts">
import Layout from '@/components/Layout.vue';
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Layout,
  },
  created() {
    console.log('test');
  }
});
</script>

<style lang="scss">
@import 'style.scss';
</style>
